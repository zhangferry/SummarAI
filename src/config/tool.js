export function getStorage(key) {
  return new Promise((resolve) => {
    chrome.storage.local.get(key, function (data) {
      console.log(`getStorage: ${JSON.stringify(data)}`)
      resolve(data[key])
    })
  })
}
