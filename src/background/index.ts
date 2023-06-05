import Browser from 'webextension-polyfill'

async function Run() {

    Browser.runtime.onInstalled.addListener(async (details) => {
      if (details.reason === 'install') {
        Browser.runtime.openOptionsPage()
      }
    })
  }

Run()