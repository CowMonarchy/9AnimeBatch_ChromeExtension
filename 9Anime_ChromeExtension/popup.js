function getAnimeName() {
    //Pulls anime name from anime page h2 element and pastes text it into popup.html h2
    var animeName = document.querySelector("h2.title[data-jtitle]");
    var setName = document.getElementById("animeName");
    setName.innerHTML = document.URL;
    return setName;
}