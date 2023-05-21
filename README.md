![Project Logo](src/assets/img/logo.png)

# SummarAI Chrome Extension

![](https://cdn.zhangferry.com/Images/202305212230312.png)

This browser extension utilizes AI technology to analyze web pages and extract important information.

## Installation

1. Download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable Developer mode by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the `packages/chromium` folder.

## Build from source

1. install dependencies with `yarn` or `npm`
2. build source code with `yarn build` or `npm run build`

## Usage

1. Navigate to the web page you want to summarize.
2. Click on the SummerAI icon in the extension toolbar.
3. The extension will analyze the content of the page and display a summary in the popup.

## Setting

- The default host is https://api.openai.com, you can customize this value.
- API key is required, you can find it in [OpenAI API Key](https://platform.openai.com/account/api-keys)

## Support

- For any issues or questions, please contact me.
