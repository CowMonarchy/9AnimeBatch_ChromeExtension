//
//
//
//
//Variables
var link = "";
var showName = "";
var highestEpisode = "";
//Variables



//Receiving message from popup.js to obtain info from webpage
chrome.runtime.onMessage.addListener(
    function(request, sender, response) {
        if (request.message === "Get_Anime_Info") {

            //Grabbing episode lists and sorting them to find the biggest episode number
            var sortedList = [];
            var episodeList = $("a[ep_end]");
            for (var i = episodeList.length - 1; i >= 0; i--)
                sortedList.push($(episodeList[i]).attr("ep_end"));
            //Placing elements (whith attributes that coorespond to episode #) into array in reverse order


            highestEpisode = sortedList[0];
            showName = $(".anime-info > a").text();
            link = $("link[rel = 'canonical']").eq(0).attr('href');


            //Returning that Info to popup.js
            response({ animeName: showName, maxNumber: highestEpisode });
        }
    }
);