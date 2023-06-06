![Project Logo](src/assets/img/logo.png)

# SummarAI Chrome Extension

This browser extension utilizes AI technology to analyze web pages and extract important information.

There are two ways to summarize:

1. Click the `Analyze` button, use the title and summary to summarize the page content. This is the default method.
   ![](https://cdn.zhangferry.com/Images/202306052334674.png)
2. click the `Zettelkasten` button, use the [zettelkasten/卡片盒笔记](https://zettelkasten.de/introduction/zh/) method to summarize the page content
   ![](https://cdn.zhangferry.com/Images/202306052331039.png)

## Installation

1. Download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable Developer mode by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the `packages/chromium` folder.

## Build from source

1. install dependencies with `yarn install`
2. build source code with `yarn build`

## Usage

1. Navigate to the web page you want to summarize.
2. Click on the SummerAI icon in the extension toolbar.
3. The extension will analyze the content of the page and display a summary in the popup.

## Setting

![](https://cdn.zhangferry.com/Images/202305312325405.png)

There are two AI modes available for you to choose from:

1. Through the ChatGPT web app, which requires you to have successfully logged in to the ChatGPT web version to preserve the session.

2. Through OpenAI's API, which requires you to provide the corresponding API Key.

- The default host is https://api.openai.com, you can customize this value.
- API key is required, you can find it in [OpenAI API Key](https://platform.openai.com/account/api-keys)

## Support

- For any issues or questions, please contact me.
