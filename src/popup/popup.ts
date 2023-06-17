import Browser from 'webextension-polyfill'
import {ChatGPTProvider, getChatGPTAccessToken} from './ChatGPTProvider'
import { Answer, Provider } from './types'
import { OpenAIProvider } from './OpenAIProvider'
import { articlePrompt, summerDefaultPrompt, zettelkastenPrompt } from './prompt'
import Parser from "@postlight/parser"
import { availableModels } from '@/utils/utils'
import { ProviderType, getProviderConfigs } from '@/config'
import GPT3Tokenizer from 'gpt3-tokenizer'
const tokenizer = new GPT3Tokenizer({ type: 'gpt3' })

enum PromptType {
  Summary,
  Zettelkasten
}

let promptType = PromptType.Summary

document.addEventListener("DOMContentLoaded", () => {
  const defaultTokenLimit = 4096 // for gpt-3.5-turbo

  async function fetchData(response) {
    
    const loadingElement = document.getElementById("loading")
    loadingElement.style.display = "block"

    const result = await Parser.parse(response.url, { contentType: "text" });
    console.log(`extract content: ${result.content}`)

    try {
      await requestSummary(result.content, displayAnswer)
    } catch (error) {
      displayError(error.message)
    } finally {
      loadingElement.style.display = "none"
    }
  }

  function truncateToken(content, maxTokens) {
    // Reserve tokens count for answers
    const maxPromptTokens = maxTokens - 500

    const promptTemplate = promptType === PromptType.Summary ? summerDefaultPrompt : zettelkastenPrompt
    const combinedPrompt = articlePrompt({
      content: content, 
      prompt: promptTemplate})

    const promptEncoded: { bpe: number[]; text: string[] } = tokenizer.encode(combinedPrompt)
    if (promptEncoded.bpe.length > maxPromptTokens) {
      // 仅移除原始内容
      const contentEncoded: { bpe: number[]; text: string[] } = tokenizer.encode(content)
      const contentLength = contentEncoded.bpe.length - (promptEncoded.bpe.length - maxPromptTokens)
      const subEncoded = contentEncoded.bpe.slice(0, contentLength)
      return articlePrompt({
        content: tokenizer.decode(subEncoded),
        prompt: promptTemplate
      })
    } else {
      return combinedPrompt
    }
  }

  async function requestSummary(content: string, callback) {
    const controller = new AbortController()

    const providerConfigs = await getProviderConfigs()
    console.log(`providerConfigs: ${JSON.stringify(providerConfigs)}`)
    
    let prompt: string
    let provider: Provider
    if (providerConfigs.provider == ProviderType.GPT3) {
      const { apiKey, model } = providerConfigs.configs[ProviderType.GPT3]
      if (!apiKey) {
        throw new Error(`You should config API Key first`)
      }
      const currentModel = availableModels.find(theModel => theModel.name === model);
      prompt = truncateToken(content, currentModel.maxTokens)
      provider = new OpenAIProvider(apiKey, model)
    } else {
      prompt = truncateToken(content, defaultTokenLimit)
      const token = await getChatGPTAccessToken()
      provider = new ChatGPTProvider(token)
    }
    console.log(`prompt content: ${prompt}`)
    const { cleanup } = await provider.generateAnswer({
      prompt: prompt,
      signal: controller.signal,
      onEvent(event) {
        if (event.type === 'done') {
          return
        }
        callback(event.data)
      }
    })
    cleanup?.()
  }

  function displayAnswer(data: Answer) {
    const responseElement = document.getElementById("response")
    responseElement.textContent = data.text;

    const errorElement = document.getElementById("error")
    errorElement.textContent = ""
  }

  function displayError(errorMessage) {
    const errorElement = document.getElementById("error")
    errorElement.textContent = errorMessage
  }

  function copyToClipboard(text) {
    const el = document.createElement("textarea")
    el.value = text
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }

  async function injectContentScriptAndFetchData() {
    const tabs = await Browser.tabs.query({active: true, currentWindow: true})
    await Browser.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['content.js']})
    const results = await Browser.tabs.sendMessage(tabs[0].id, {action: "getTextContent"})
    const response = results && results.textContent ? results.textContent : ""
    // console.log(JSON.stringify(response))
    await fetchData(response)
  }

  function setupEventListeners() {
    // copy content
    const copyButton = document.getElementsByClassName("copy-btn")[0]
    if (copyButton) {
      copyButton.addEventListener("click", () => {
        const response = document.getElementById("response").textContent
        if (response) {
          copyToClipboard(response)
        } else {
          console.log("No response to copy")
        }
      })
    } else {
      console.error("Copy button not found")
    }

    document.getElementsByClassName("setting-btn")[0].addEventListener("click", function () {
      Browser.runtime.openOptionsPage()
    })

    document.getElementsByClassName("analyze-btn")[0].addEventListener("click", function () {
      promptType = PromptType.Summary
     injectContentScriptAndFetchData();
    })

    document.getElementsByClassName("zettelkasten-btn")[0].addEventListener("click", function () {
      promptType = PromptType.Zettelkasten
      injectContentScriptAndFetchData();
     })
  }

  async function init() {
    const triggerKey = "triggerMode"
    const triggerMode = await Browser.storage.local.get(triggerKey)
    const modeValue = triggerMode[triggerKey]
    if (modeValue != "manually") {
      await injectContentScriptAndFetchData()
    }

    console.log(`trigger: ${JSON.stringify(triggerMode)}`)
  }

  init()
  setupEventListeners()
})
