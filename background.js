chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'closeTabs') {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach(tab => {
        console.log(tab.url); // Log URLs to the console
        chrome.tabs.remove(tab.id); // Close the tab
      });
    });
  }
});
