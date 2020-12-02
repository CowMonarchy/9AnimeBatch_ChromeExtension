//
//
//
//
console.log("Script Injected");
chrome.runtime.onMessage.addListener(
    function(request, sender, response) {
        if (request.message === "Get_Anime_Info") {
            //Obtaining Info From Webpage
            var link = $("link[rel = 'canonical']").eq(0).attr('href');
            var showName = $(".anime-info > a").text();

            //Grabbing Episode lists and sorting to place inside of highest episode
            var episodeList = $("a[ep_end]");
            var sortedList = [];
            for (var i = episodeList.length - 1; i >= 0; i--)
                sortedList.push($(episodeList[i]).attr("ep_end"));


            var highestEpisode = sortedList[0];


            //Returning that Info to popup.js
            response({ animeName: showName, maxNumber: highestEpisode });
        }
    }
);