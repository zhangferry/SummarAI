![Project Logo](src/assets/img/logo.png)

# SummarAI Browser Extension

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

## Usage

### Setting

![](https://cdn.zhangferry.com/Images/202305312325405.png)

There are two AI modes available for you to choose from:

1. Through the ChatGPT web app, which requires you to have successfully logged in to the ChatGPT web version to preserve the session.

2. Through OpenAI's API, which requires you to provide the corresponding API Key.

- The default host is https://api.openai.com, you can customize this value.
- API key is required, you can find it in [OpenAI API Key](https://platform.openai.com/account/api-keys)

### Summary

1. Pin the SummarAI button to the extension toolbar.
2. Navigate to the web page you want to summarize and click on the SummerAI icon.
3. The extension will analyze the content of the page and display a summary in the popup.

## Safari

Safari plug-ins are typically used for macOS/iOS systems, you should compile SummarAI.xcodeproj with Xcode.

### macOS

- Check the Allow unsigned extensions option in Safari's developer options.

![](https://cdn.zhangferry.com/Images/202309092301123.png)

### iOS

- Change the developer certificate to yours.

<div style="display: flex;justify-content: space-between;">
<span style="width:40%;display:inline-block">

![长图一 alt](https://cdn.zhangferry.com/Images/WechatIMG553.jpeg)

</span>
<span style="width:40%;display:inline-block">

![图二](https://cdn.zhangferry.com/Images/202309092304234.png)

</span>
</div>

## Build from source(Optional)

If you want to change the code logic, you need to recompile the TypeScript file:

1. install dependencies with `yarn install`
2. build source code with `yarn build`

The development of the web side of safari extension is still carried out through typescript code, and the js code update will be completed in `yarn build`. The native interface development should use Swift in the xcode project.

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
