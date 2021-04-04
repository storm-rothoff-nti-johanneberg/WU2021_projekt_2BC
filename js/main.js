document.querySelector(".menu-button").addEventListener("click",showMenu)

document.querySelector(".darkmode-button").addEventListener("click",darkMode)

function showMenu (){
    let menu = document.querySelector(".news-feed-list");
    menu.classList.toggle("hide");

}
function darkMode (){
    let dark = document.body;
    dark.classList.toggle("darkmode");

}