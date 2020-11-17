chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'www2.gogoanime.video', urlContains: '-episode-' }


            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]


        }]);
    });
});

//Page Objects
var animeName = "";
//Page Objects 



//Sends Anime Info Request to copyDom.js (content script)---------------------------------
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0]
        chrome.tabs.sendMessage(activeTab.id, { "message": "Retrive_Anime_Info" });
    });
});

//Retriving Anime Info and Assigning it to Respected Variables
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "Return_Anime_Info") {
            request.log(request.Info);
        }
    }
);
//-----------------------------------------------------------------------------------------