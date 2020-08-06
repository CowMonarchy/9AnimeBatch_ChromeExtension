chrome.runtime.onInstalled.addListener(function() {

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: '9anime.ru' },
                css: ["span.tab.active[data-name ='35']"]
            }), new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: '9anime.ru' },
                css: ["span.tab[data-name='35']"]
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]





        }]);
    });
});