export function getStorage(key) {
  return new Promise((resolve) => {
    chrome.storage.sync.get(key, function(data) {
      resolve(data[key]);
    });
  });
} 