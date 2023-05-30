import ExpiryMap from 'expiry-map'
import { createParser } from 'eventsource-parser'
import { v4 as uuidv4 } from 'uuid'
const KEY_ACCESS_TOKEN = 'accessToken'
import { BASE_URL } from '@/config'
import { streamAsyncIterable } from '@/utils/utils'
import { GenerateAnswerParams, Provider } from './types'

const cache = new ExpiryMap(10 * 1000)

async function request(token: string, method: string, path: string, data?: unknown) {
  return fetch(`${BASE_URL}/backend-api${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data === undefined ? undefined : JSON.stringify(data),
  })
}

export async function getChatGPTAccessToken(): Promise<string> {
    if (cache.get(KEY_ACCESS_TOKEN)) {
      console.log(`use cache token}`)
      return cache.get(KEY_ACCESS_TOKEN)
    }
    const resp = await fetch(`${BASE_URL}/api/auth/session`)
    console.log(`resp.headers: ${resp.headers}, ${resp.body}`)
    if (resp.status === 403) {
      throw new Error('CLOUDFLARE')
    }
    const data = await resp.json().catch(() => ({}))
    if (!data.accessToken) {
      throw new Error('UNAUTHORIZED')
    }
    cache.set(KEY_ACCESS_TOKEN, data.accessToken)
    return data.accessToken
  }

  export class ChatGPTProvider implements Provider {
    constructor(private token: string) {
      this.token = token
    }

    private async fetchModels(): Promise<
    { slug: string; title: string; description: string; max_tokens: number }[]
  > {
    const resp = await request(this.token, 'GET', '/models').then((r) => r.json())
    return resp.models
  }

  private async getModelName(): Promise<string> {
    try {
      const models = await this.fetchModels()
      return models[0].slug
    } catch (err) {
      console.error(err)
      return 'text-davinci-002-render-sha'
    }
  }


  async generateAnswer(params: GenerateAnswerParams) {
    let conversationId: string | undefined

    const cleanup = () => {
      if (conversationId) {
        // setConversationProperty(this.token, conversationId, { is_visible: true })
      }
    }

    const modelName = await this.getModelName()
    console.log(`modelName: ${modelName}`)

    await fetchSSE(`${BASE_URL}/backend-api/conversation`, {
      method: 'POST',
      signal: null,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        action: 'next',
        messages: [
          {
            id: uuidv4(),
            role: 'user',
            content: {
              content_type: 'text',
              parts: [params["prompt"]],
            }
          }
        ],
        model: modelName,
        parent_message_id: uuidv4(),
      }),
      onMessage(message: string) {
        console.debug('sse message', message)
        if (message === '[DONE]') {

          params.onEvent({ type: 'done' })
          cleanup()
          return
        }
        let data
        try {
          data = JSON.parse(message)
        } catch (err) {
          console.error(err)
          return
        }
        const text = data.message?.content?.parts?.[0]
        if (text) {
          conversationId = data.conversation_id
          params.onEvent({
            type: 'answer',
            data: {
              text,
              messageId: data.message.id,
              conversationId: data.conversation_id,
            },
          })
        }
      },
    })
    return { cleanup }
  }
}


export async function fetchSSE(
  resource: string,
  options: RequestInit & { onMessage: (message: string) => void },
) {
  const { onMessage, ...fetchOptions } = options
  const resp = await fetch(resource, fetchOptions)
  if (!resp.ok) {
    const error = await resp.json().catch(() => ({}))
    throw new Error(JSON.stringify(error))
  }
  console.log(`fetchSSE: ${resp.body}`)

  const parser = createParser((event) => {
    if (event.type === 'event') {
      onMessage(event.data)
    }
  })

  for await (const chunk of streamAsyncIterable(resp.body!)) {
    const str = new TextDecoder().decode(chunk)
    parser.feed(str)
  }
}