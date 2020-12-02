//
//
//
//
//Sends Anime Info Request to copyDom.js / Recieves Info and updates page objects (content script)
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: "Get_Anime_Info" }, function(response) {

        document.getElementById('displayAnimeName').innerText = response.animeName;
        document.getElementById('StartEpisodeIn').setAttribute('max', response.maxNumber);
        document.getElementById('EndingEpisodeIn').setAttribute('max', response.maxNumber);
        document.getElementById('EndingEpisodeIn').setAttribute('placeholder', response.maxNumber);
    });
});
//-------------------------------------------------------------------------------------------------