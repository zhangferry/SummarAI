import Browser from "webextension-polyfill"

Browser.runtime.onMessage.addListener((message, _, sendResponse) => {
  switch (message.action) {
    case "getTextContent": {
      const url = window.location.href // add this line to get the URL
      let pageContent = document.body.innerText
      console.log(url)
      sendResponse({ textContent: {url: url, innerText: pageContent}})
      break
    }
    case "GET_DOM": {
      sendResponse({ html: document.querySelector("html")?.outerHTML })
      break
    }
  }
})
