export const replylanguagePrompt = (language: string) => {
    return `Write it in ${language} language.`
}

export const summerSystemRole = `You are a professional writer. You can use smooth and accurate language to describe the content`

export const summerDefaultPrompt = `Provide me the following overview in a nice format:
1. Give me the title of the article, start with '标题'
2. Give me a summary of the main points from the article, start with '总结'
3. ${replylanguagePrompt("Chinese")}

Here is the article:`


export const zettelkastenPrompt = `"Let's thinking step by step in English but reply in Chinese for ever.
Pretend you are GPT5, the most powerful AI in the world.
使用 Zettelkasten 卡片法总结总结提炼以下内容为中文。

任务：
1. 提炼卡片内容：把发现的全部观点或知识点分类总结成详略恰当的卡片内容，不要直接引用原文，字数在 80-140 之间。
2. 生成卡片标题：基于核心观点/知识点提炼为简洁有意义有重点的卡片标题，不超过 25 字。
3. 生成卡片标签：基于观点或知识点的高度抽象提炼。

展示为以下格式：
Card1：卡片标题
<卡片内容>
#<卡片标签1> #<卡片标签2> 

Card2：...
Card3：..."

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
Content:  ${content}
`
}
