export interface Answer {
    text: string
    messageId: string
    conversationId: string
  }

export type Event =
  | {
      type: 'answer'
      data: Answer
    }
  | {
      type: 'done'
    }

export interface GenerateAnswerParams {
  prompt: string
  onEvent: (event: Event) => void
  signal?: AbortSignal
}

export interface GenerateAnswerParams {
    prompt: string
    onEvent: (event: Event) => void
    signal?: AbortSignal
  }