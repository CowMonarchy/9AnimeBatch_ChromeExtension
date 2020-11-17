//
//
//
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "Retrive_Anime_Info") {
            //Obtaining Info From Webpage
            var link = $("link[rel = 'canonical']").eq(0).attr('href');






            //Returning that Info to popup.js
            chrome.runtime.sendMessage({ "message": "Return_Anime_Info", "Info": link });
        }
    }
);