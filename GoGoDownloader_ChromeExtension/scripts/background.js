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