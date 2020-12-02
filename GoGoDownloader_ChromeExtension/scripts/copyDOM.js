//
//
//
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "Get_Anime_Info") {
            //Obtaining Info From Webpage

            console.log("Step 02 : Message Received")
            var link = $("link[rel = 'canonical']").eq(0).attr('href');
            console.log("Step 03 : Info Grabbed");



            //Returning that Info to popup.js
            sendResponse({ farewell: "Return_Anime_Info" });
            console.log("Step 04 : Info Sent");
        }
    }
);