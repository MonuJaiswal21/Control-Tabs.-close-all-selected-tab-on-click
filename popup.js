document.addEventListener('DOMContentLoaded', () => {
  const tabList = document.getElementById('tab-list');
  const closeAllBtn = document.getElementById('close-all-btn');

  // Function to update the tab list in the popup
  function updateTabList(tabs) {
    tabList.innerHTML = '';
    tabs.forEach(tab => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = tab.url;
      link.textContent = tab.title || tab.url;
      link.target = '_blank';
      listItem.appendChild(link);
      tabList.appendChild(listItem);
    });
  }

  // Fetch all tabs and display them
  chrome.tabs.query({}, (tabs) => {
    updateTabList(tabs);
  });

  // Add event listener to the "Close All Tabs" button
  closeAllBtn.addEventListener('click', () => {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach(tab => {
        chrome.tabs.remove(tab.id);
      });
    });
  });
});
