//
//
//
chrome.runtime.onMessage.addListener(
    function(request, sender, response) {
        if (request.message === "Get_Anime_Info") {
            //Obtaining Info From Webpage
            var link = $("link[rel = 'canonical']").eq(0).attr('href');
            var showName = $(".anime-info > a").text();
            //var highestEpisode


            //Returning that Info to popup.js
            response({ animeName: showName });
        }
    }
);