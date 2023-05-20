import Browser from 'webextension-polyfill'

async function Run() {
  
    Browser.runtime.onMessage.addListener((message, _, sendResponse) => {
      const { type, data } = message
      console.log(`type ${type}, data: ${data}`)
      switch (type) {
        case 'CHATGPT_TAB_CURRENT': {
            console.log("CHATGPT_TAB_CURRENT")
          break
        }
        case 'GET_DOM': {
          sendResponse({ html: document.querySelector('html')?.outerHTML })
          break
        }
      }
    })
  }
  
Run()