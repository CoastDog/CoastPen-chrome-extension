'use strict';

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
  }
);

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');
