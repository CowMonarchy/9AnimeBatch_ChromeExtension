//
//
//
//
//Page Objects
var animeName = "Default Name";
var highestEpisode = 1;
//Page Objects 



//Sends Anime Info Request to copyDom.js / Recieves Info and updates page objects (content script)
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: "Get_Anime_Info" }, function(response) {

        animeName = response.animeName;
    });
});
//-------------------------------------------------------------------------------------------------



//Updating Extension HTML with Anime Info
document.getElementById('displayAnimeName').innerHTML = animeName;
document.getElementById('StartEpisodeIn');
document.getElementById('EndingEpisodeIn');
//---------------------------------------