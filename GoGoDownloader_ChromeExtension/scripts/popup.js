//
//
// 
//Page Objects
var animeName = "";
//Page Objects 


//Sends Anime Info Request to copyDom.js (content script)---------------------------------
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: "Get_Anime_Info" }, function(response) {
        console.log("Step 01 : Message Sent");
    });
});


//Retriving Anime Info and Assigning it to Respected Variables
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.farewell === "Return_Anime_Info") {
            console.log("Step 05 : Info Recieved");
        }
    }
);
//-----------------------------------------------------------------------------------------