import Browser from 'webextension-polyfill'
import { GenerateAnswerParams, Provider } from './types'
import { summerSystemRole } from './prompt'

export class OpenAIProvider implements Provider {

    constructor(private token: string, private model: string) {
        this.token = token
        this.model = model
      }

    async generateAnswer(params: GenerateAnswerParams)  {
        console.log(params)
    
        const providerKey = "provider"
        let provider = await Browser.storage.local.get(providerKey)
        provider = provider[providerKey]
        const configKey = `${providerKey}:` + provider
        let providerConfig = await Browser.storage.local.get(configKey)
        providerConfig = providerConfig[configKey]
        console.log(`provider config: ${providerConfig}`)
    
        const data = {
            model: this.model,
            stream: true,
            temperature: 0.1, // more focused and deterministic.
            messages: [
              {
                role: "system",
                content: summerSystemRole
              },
              {
                role: "user",
                content: params.prompt,
              },
            ],
          }
    
        var host = "api.openai.com"
        
        if (providerConfig["apiHost"]) {
          host = providerConfig["apiHost"]
        }
        const url = `https://${host}/v1/chat/completions`
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              Authorization: "Bearer " + this.token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
    
          if (response.status >= 200 && response.status < 300) {
            const reader = response.body.getReader()
    
            let result = ""
            while (true) {
              const { done, value } = await reader.read()
              if (done) break
              // Convert ArrayBuffer to string
              let chunk = new TextDecoder("utf-8").decode(value)
              let res = this.parseChunkContent(chunk)
              if (res === -1) {
                // stop
                params.onEvent({ type: 'done' })
                break
              }
              result += res
              params.onEvent({ 
                type: 'answer', 
                data: {
                    text: result,
                    messageId: "",
                    conversationId: ""
                } })
              // console.log(result)
            }
            return {}
          } else {
            console.log(response.status)
            throw new Error(
              `Failed to fetch data from server: ${
                response.status
              }, error message: ${await response.text()}`
            )
          }
        } catch (error) {
          throw new Error(`Fetch error: ${error}`)
        }
      }
    
     parseChunkContent(decodeText) {
        const array = decodeText.split("\n")
        let res = []
        let stop = false
        array.forEach((element) => {
          if (!element) {
            return
          }
          element = element.replace("data: ", "")
          try {
            const json = JSON.parse(element)
            const choice = json.choices[0]
            const content = choice.delta.content
    
            if (choice.finish_reason === "stop") {
              stop = true
              return
            }
    
            if (!content) {
              return
            }
            res.push(content)
          } catch (error) {
            console.log("not valid JSON")
          }
        })
        if (stop) {
          return -1
        } else {
          return res.join("")
        }
      }
}

