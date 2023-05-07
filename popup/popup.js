import { getStorage } from "../tool.js";

document.addEventListener('DOMContentLoaded', () => {

  const tokenLimit = 4096; // for gpt-3.5-turbo

 async function fetchData(question) {
    console.log(`origin question: `, question);
    question = truncateText(question, tokenLimit);
    console.log("<<<====>>>");
    console.log(`truncateText question: `, question);

    const loadingElement = document.getElementById('loading');
    const triggerButtonElement = document.getElementById('analyze');
    loadingElement.style.display = 'block';
    triggerButtonElement.disabled = true;

    try {
      const contentType = "article";
      const finalResponse = await getContentBasedOnType(contentType, question);
      const responseText = await finalResponse;
      displayData(responseText);
    } catch (error) {
      displayError(error.message);
    } finally {
      loadingElement.style.display = 'none';
      triggerButtonElement.disabled = false;
    }
  }

  function truncateText(text, maxTokens) {
    // 判断text的语言类型，这里以中文和英文为例
    const isChinese = /[\u4e00-\u9fa5]/.test(text);
    const isEnglish = /^[a-zA-Z]/.test(text);
  
    // 根据不同语言的规则计算每个字符的token数
    const getTokenCount = (char) => {
      if (isChinese) {
        // 中文字符算作2个token
        return /\p{Unified_Ideograph}/u.test(char) ? 2 : 1;
      } else if (isEnglish) {
        // 英文字符算作1个token
        return /[a-zA-Z]/.test(char) ? 1 : 0;
      } else {
        // 其他语言按照1个字符算作1个token处理
        return 1;
      }
    };
  
    let tokenCount = 0;
    let truncatedText = '';
  
    // 逐字符遍历原始文本
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charTokenCount = getTokenCount(char);
  
      // 当前字符的token数超出最大限制，直接返回截断的字符串
      if (tokenCount + charTokenCount > maxTokens) {
        break;
      }
  
      // 当前字符的token数未超出最大限制，将其添加到截断的字符串中
      truncatedText += char;
      tokenCount += charTokenCount;
    }
  
    return truncatedText;
  }

  async function getContentBasedOnType(contentType, question) {
    const additionalText = getAdditionalText(contentType);

    const combinedQuestion = `${additionalText}
${question}`;

    const data = {
      model: 'gpt-3.5-turbo',
      stream: true,
      temperature: 0.1, // more focused and deterministic.
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

  var host = "https://api.openai.com";
  const hostRes = await getStorage("openai-host");
  if (hostRes) {
    host = hostRes;
  }
  const url = host + "/v1/chat/completions"

  const apiKey = await getStorage("api-key");
  if (!apiKey) {
    throw new Error(`你应该先配置 Token`);
  }
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': apiKey,
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
          console.log(chrome.runtime.lastError);
          console.error("Error injecting content script");
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

    document.getElementById("settings-btn").addEventListener("click", function() {
      chrome.runtime.openOptionsPage();
    });
  
    document.getElementById("analyze").addEventListener("click", function() {
      console.log("analyze manual");
      injectContentScriptAndFetchData();
    });
  }

  function init() {
    chrome.storage.sync.get(['trigger-way'], function(result) {
      const optionValue = result['trigger-way'];
      if (optionValue == "auto") {
        injectContentScriptAndFetchData();
      } else {
        // manual
        console.log("manual trigger");
      }
    });
  }

  init();

  // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //   if (request.action === 'getTextContent') {
  //     const textContent = document.body.innerText;
  //     sendResponse({textContent: textContent});
  //   }
  // });

  setupEventListeners();
});

