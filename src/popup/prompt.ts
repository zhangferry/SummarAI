export const replylanguagePrompt = (language: string) => {
    return `Write it in ${language} language.`
}

export const summerSystemRole = `You are a professional writer. You can use smooth and accurate language to describe the content`

export const summerDefaultPrompt = `Provide me the following overview in a nice format:
1. Give me the title of the article, start with '标题'
2. Give me a summary of the main points from the article, start with '总结'
3. ${replylanguagePrompt("Chinese")}

Here is the article:`


export const bulletpointPrompt = `Your output should use the following template:
#### Summary
#### Highlights
- [Emoji] Bulletpoint

Your task is to summarise the text I have given you in up to seven concise bullet points, starting with a short highlight. Choose an appropriate emoji for each bullet point.
${replylanguagePrompt("Chinese")}
`

export const articlePrompt = ({
  content,
  prompt,
}: {
  content: string
  prompt?: string
}) => {
  return `Instructions: ${prompt}
Content:  ${content}
`
}
