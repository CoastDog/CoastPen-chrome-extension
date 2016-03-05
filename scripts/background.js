'use strict';

chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, request);
    });
    console.log(request);
  }
);

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');
