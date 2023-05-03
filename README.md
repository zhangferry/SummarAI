![Your Project Logo](icons/icon128.png)


# ChatGPT Summarizer Chrome Extension

ChatGPT Summarizer is a Chrome extension that provides a brief summary of the content on a website, specializing in summarizing articles and email threads, but can be used for any web content. This extension is built by fruity-ai.com.

## Installation

1. Download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable Developer mode by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the downloaded folder.

## Usage

1. Navigate to the web page you want to summarize.
2. Click on the ChatGPT Summarizer icon in the extension toolbar.
3. The extension will analyze the content of the page and display a summary in the popup.
4. Click the "Copy to Clipboard" button to copy the summary.

## Files

- `manifest.json`: Contains the configuration and metadata for the extension.
- `popup.html`: Defines the structure and layout of the popup displayed when the extension icon is clicked.
- `popup.js`: Contains the main logic for fetching and displaying summaries.
- `styles.css`: Contains the styling for the popup.

## Permissions

- `activeTab`: Grants the extension temporary access to the currently active tab.
- `scripting`: Allows the extension to execute scripts in the context of a web page.

## API

- The extension communicates with the ChatGPT API provided by fruity-ai.com to generate summaries.
- The API is hosted at https://gpt-summarizer-5oxqvewo.ew.gateway.dev/summary/.

## API Key

- The extension requires an API key to communicate with the ChatGPT API. To obtain an API key, please contact the developers at fruity-ai.com.
- Replace the placeholder `--API-KEY-GOES-HERE--` in `popup.js` with your API key.

## Support
- For any issues or questions, please contact the developers at fruity-ai.com.
