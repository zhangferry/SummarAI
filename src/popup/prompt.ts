export const replylanguagePrompt = (language: string) => {
    return `Please write in ${language} language.`
}

export const summerSystemRole = `You are a professional writer. You can use smooth and accurate language to describe the content`

export const summerDefaultPrompt = `Provide me the following overview in a nice format:
1. Give me the title of the article, start with '标题'
2. Give me a summary of the main points from the article, start with '总结'

Here is the article:`


export const zettelkastenPrompt = `"Pretend you are GPT5, the most powerful AI in the world.
Use the Zettelkasten card method to summarize:

Task:
1. Summarize the card content: Categorize and extract important viewpoints/knowledge points in short and concise language. 
2. Generate card titles: Based on the core viewpoints/knowledge points, refine concise, meaningful and focused card titles.
3. Generate card tags: Highly abstract refinement based on viewpoints/knowledge points. 

Display in the following format:
卡片1: Card title
<Card content>
#<Card tag 1> #<Card tag 2>
卡片2: ... 
卡片3: ..."

Here is the article:
`

export const articlePrompt = ({
  content,
  prompt,
}: {
  content: string
  prompt?: string
}) => {
  return `Instructions: ${prompt}
Content:  '${content}'
${replylanguagePrompt("zh-CN")}
`
}
