import Browser from 'webextension-polyfill'
import {ChatGPTProvider, getChatGPTAccessToken} from './ChatGPTProvider'
import { Answer, Provider } from './types'
import { OpenAIProvider } from './OpenAIProvider'
import { articlePrompt, summerDefaultPrompt, zettelkastenPrompt } from './prompt'
import Parser from "@postlight/parser"

enum PromptType {
  Summary,
  Zettelkasten
}

document.addEventListener("DOMContentLoaded", () => {
  const tokenLimit = 4096 // for gpt-3.5-turbo

  async function fetchData(response, promptType: PromptType) {
    
    const loadingElement = document.getElementById("loading")
    loadingElement.style.display = "block"

    const result = await Parser.parse(response.url, { contentType: "text" });
    console.log(`extract content: ${result.content}`)
    const question = truncateText(result.content, tokenLimit)

    try {

      const promptTemplate = promptType === PromptType.Summary ? summerDefaultPrompt : zettelkastenPrompt

      const combinedPrompt = articlePrompt({
        content: question, 
        prompt: promptTemplate})

      await getContentBasedOnType(combinedPrompt, displayAnswer)
    } catch (error) {
      displayError(error.message)
    } finally {
      loadingElement.style.display = "none"
    }
  }

  function truncateText(text, maxTokens) {
    // 判断text的语言类型，这里以中文和英文为例
    const isChinese = /[\u4e00-\u9fa5]/.test(text)
    const isEnglish = /^[a-zA-Z]/.test(text)

    // 根据不同语言的规则计算每个字符的token数
    const getTokenCount = (char) => {
      if (isChinese) {
        // 中文字符算作2个token
        return /\p{Unified_Ideograph}/u.test(char) ? 2 : 1
      } else if (isEnglish) {
        // 英文字符算作1个token
        return /[a-zA-Z]/.test(char) ? 1 : 0
      } else {
        // 其他语言按照1个字符算作1个token处理
        return 1
      }
    }

    let tokenCount = 0
    let truncatedText = ""

    // 逐字符遍历原始文本
    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      const charTokenCount = getTokenCount(char)

      // 当前字符的token数超出最大限制，直接返回截断的字符串
      if (tokenCount + charTokenCount > maxTokens) {
        break
      }

      // 当前字符的token数未超出最大限制，将其添加到截断的字符串中
      truncatedText += char
      tokenCount += charTokenCount
    }

    return truncatedText
  }

  async function getContentBasedOnType(prompt: string, callback) {

    const controller = new AbortController()

    let allValue = await Browser.storage.local.get(null)
    console.log(`allvalue: ${JSON.stringify(allValue)}`)

    const providerKey = "provider"
    let providerValue = await Browser.storage.local.get(providerKey)
    providerValue = providerValue[providerKey]
    const configKey = `${providerKey}:` + providerValue
    let providerConfig = await Browser.storage.local.get(configKey)
    providerConfig = providerConfig[configKey]
    console.log(JSON.stringify(providerConfig))

    let provider: Provider
    if (`${providerValue}` == "gpt") {
      const apiKey = providerConfig["apiKey"]
      if (!apiKey) {
        throw new Error(`You should config API Key first`)
      }
      var model = "gpt-3.5-turbo" // default model
      if (providerConfig["model"]) {
          model = providerConfig["model"]
      }
      provider = new OpenAIProvider(apiKey, model)
    } else {
      const token = await getChatGPTAccessToken()
      provider = new ChatGPTProvider(token)
    }
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

  async function injectContentScriptAndFetchData(type: PromptType) {
    const tabs = await Browser.tabs.query({active: true, currentWindow: true})
    await Browser.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['content.js']})
    const results = await Browser.tabs.sendMessage(tabs[0].id, {action: "getTextContent"})
    const response = results && results.textContent ? results.textContent : ""
    await fetchData(response, type)
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
     injectContentScriptAndFetchData(PromptType.Summary);
    })

    document.getElementsByClassName("zettelkasten-btn")[0].addEventListener("click", function () {
      injectContentScriptAndFetchData(PromptType.Zettelkasten);
     })
  }

  async function init() {
    const triggerKey = "triggerMode"
    const triggerMode = await Browser.storage.local.get(triggerKey)
    const modeValue = triggerMode[triggerKey]
    if (modeValue != "manually") {
      await injectContentScriptAndFetchData(PromptType.Summary)
    }

    console.log(`trigger: ${JSON.stringify(triggerMode)}`)
  }

  init()
  setupEventListeners()
})
