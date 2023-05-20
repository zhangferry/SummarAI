import Browser from 'webextension-polyfill'

async function Run() {
  
    Browser.runtime.onMessage.addListener((message, _, sendResponse) => {
      console.log(message.action);
      console.log(message);
      const { type, data } = message
      console.log(`type ${type}, data: ${data}, message: ${message}`)
      switch (message.action) {
        case 'getTextContent': {
            console.log("CHATGPT_TAB_CURRENT")
            const textContent = document.body.innerText;
            const url = window.location.href; // add this line to get the URL
            console.log(`innerText: ${textContent}`);
            console.log(`URL: ${url}`); // log the URL to the console
            sendResponse({textContent: textContent}); // include the URL in the response
          break
        }
        case 'GET_DOM': {
          sendResponse({ html: document.querySelector('html')?.outerHTML })
          break
        }
      }
    })
  }

console.log('内容脚本注入成功!');

Run()