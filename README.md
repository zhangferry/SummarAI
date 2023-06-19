![Project Logo](src/assets/img/logo.png)

# SummarAI Chrome Extension

This browser extension utilizes AI technology to analyze web pages and extract important information.

There are two ways to summarize:

1. Click the `Analyze` button, use the title and summary to summarize the page content. This is the default method.
   ![](https://cdn.zhangferry.com/Images/202306052334674.png)
2. click the `Zettelkasten` button, use the [zettelkasten/卡片盒笔记](https://zettelkasten.de/introduction/zh/) method to summarize the page content
   ![](https://cdn.zhangferry.com/Images/202306070718893.png)

## Installation

1. Clone the repository to your local machine or download the zip package in [Releases](https://github.com/zhangferry/SummarAI/releases).
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable Developer mode by toggling the switch in the top right corner.
4. Click on "Load unpacked", select the `packages/chromium` folder if you are using clone or the unzip folder if you are using Release package.

## Build from source(Optional)

If you want to change the code logic, you need to recompile the TypeScript file:

1. install dependencies with `yarn install`
2. build source code with `yarn build`

## Usage

### Setting

![](https://cdn.zhangferry.com/Images/202305312325405.png)

There are two AI modes available for you to choose from:

1. Through the ChatGPT web app, which requires you to have successfully logged in to the ChatGPT web version to preserve the session.

2. Through OpenAI's API, which requires you to provide the corresponding API Key.

- The default host is https://api.openai.com.
- API key is required, you can find it in [OpenAI API Key](https://platform.openai.com/account/api-keys)

If you don't have access to OpenAI, you can purchase ApiKeys at [API2D](https://api2d.com/r/187046). Update the host and API Key to use it.

### Summary

1. Pin the SummarAI button to the extension toolbar.
2. Navigate to the web page you want to summarize and click on the SummerAI icon.
3. The extension will analyze the content of the page and display a summary in the popup.

## Support

- For any issues or questions, please contact me.

## QA

1. ErrCode: `CLOUDFLARE`

   The openai server rejected the request, possible reasons:

   - No permission to access the API
   - The authentication credentials provided are invalid or incorrect
   - Requests are too frequent, triggering traffic limiting

2. ErrCode: `UNAUTHORIZED`

   Failed to obtain `chat.openai.com` accesstoken, possible reasons:

   - Your login credentials have expired, so you'll need to log back into `chat.openai.com` and try again
