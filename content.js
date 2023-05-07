chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.action);
  console.log(request);
  if (request.action === 'getTextContent') {
    const textContent = document.body.innerText;
    const url = window.location.href; // add this line to get the URL
    console.log(`innerText: ${textContent}`);
    console.log(`URL: ${url}`); // log the URL to the console
    sendResponse({textContent: textContent}); // include the URL in the response
  }
});
