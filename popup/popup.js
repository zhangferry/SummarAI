document.addEventListener('DOMContentLoaded', () => {

 async function fetchData(question) {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';

    try {
      // const contentType = await getContentType(question);
      // console.log(contentType);
      const contentType = "article";
      const finalResponse = await getContentBasedOnType(contentType, question);
      const responseText = await finalResponse;
      displayData(responseText);
    } catch (error) {
      displayError(error.message);
    } finally {
      loadingElement.style.display = 'none';
    }
  }

  async function getContentType(question) {
    const prompt = `What type of content is this - you are only allowed to answer with "article" or "email" or "other": ${question}`
    const data = {
      model: 'gpt-3.5-turbo',
      temperature: 0.1,
      messages: [
        {
          "role": "user",
          "content": prompt
        }
      ]
    };

    const response = await makeAPICall(data);
    return response.toLowerCase();
  }

  async function getContentBasedOnType(contentType, question) {
    const additionalText = getAdditionalText(contentType);

    const combinedQuestion = `${additionalText}
${question}`;

    const data = {
      model: 'gpt-3.5-turbo',
      temperature: 0.1,
      messages: [
        {
          "role": "system",
          "content": "You are a professional writer. You can use smooth and accurate language to describe the content"
        },
        {
          "role": "user",
          "content": combinedQuestion
        }
      ]
    };

    const response = await makeAPICall(data);
    return response;
  }

function getAdditionalText(contentType) {
  // Customize the additional text based on the contentType
  // You can add more cases if necessary
  switch (contentType) {
    case 'article':
      return `Provide me the following overview in a nice format:
      1. Give me the title of the article, start with '标题'
      2. Give me a summary of the main points from the article in Chinese, start with ‘总结’

      here is the article:`;
    default:
      return `Provide me the following overview in a nice format:
      1. Give me a header saying what type website this is and what the type of content is
      2. Give me a summary of the web content

      here is the web content:`;
  }
}

async function makeAPICall(data) {
  const url = "https://api.aios.chat/v1/chat/completions"
  const token = "Bearer ak-CRFGv0NVLGsYQYDSpPnI34j2v8zfyBKonAwHzNYTQ2LkxMPL"
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (response.status >= 200 && response.status < 300) {
      console.log(`response: ${response}`);
      const jsonRes = await response.json();
      return jsonRes.choices[0].message.content;
    } else {
      console.log(response.status);
      throw new Error(`Failed to fetch data from server: ${response.status}, error message: ${await response.text()}`);
    }
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
}

function displayData(data) {
    const responseElement = document.getElementById('response');
    const errorElement = document.getElementById('error');
    const copyButtonElement = document.getElementById('copyButton');

    responseElement.textContent = '';
    errorElement.textContent = '';
    copyButtonElement.disabled = true;

    responseElement.textContent = data;
    copyButtonElement.disabled = false;
  }

  function displayError(errorMessage) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = errorMessage;
  }

  function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  function injectContentScriptAndFetchData() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        files: ['content.js']
      }, () => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          return;
        }

        chrome.tabs.sendMessage(tabs[0].id, {action: 'getTextContent'}, (response) => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
          } else {
            const question = response && response.textContent ? response.textContent : '';
            fetchData(question);
          }
        });
      });
    });
  }

  function setupEventListeners() {
    // copy content
    const copyButton = document.getElementById('copyButton');
    if (copyButton) {
      copyButton.addEventListener('click', () => {
        const response = document.getElementById('response').textContent;
        if (response) {
          copyToClipboard(response);
        } else {
          console.log('No response to copy');
        }
      });
    } else {
      console.error('Copy button not found');
    }
  }

  function init() {
    injectContentScriptAndFetchData();
  }

  init();

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getTextContent') {
      const textContent = document.body.innerText;
      sendResponse({textContent: textContent});
    }
  });

  setupEventListeners();
});

