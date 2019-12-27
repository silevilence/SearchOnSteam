let btn = document.getElementById("search");
let txt = document.getElementById("txt");

btn.onclick = function () {
    // window.open("https://store.steampowered.com/search/?term=baldr%20sky");
    window.open("https://store.steampowered.com/search/?term=" + encodeURI(txt.value)
        .replace("&", "%26").replace("=", "%3D").replace("?", "%3F"));
    // encodeURI(txt.value).replace("&", "%26").replace("=", "%3D").replace("?", "%3F")
}

txt.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
});