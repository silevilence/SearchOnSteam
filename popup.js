let btn = document.getElementById("search");

btn.onclick = function () {
    let txt = document.getElementById("txt");
    // window.open("https://store.steampowered.com/search/?term=baldr%20sky");
    window.open("https://store.steampowered.com/search/?term=" + encodeURI(txt.value)
        .replace("&", "%26").replace("=", "%3D").replace("?", "%3F"));
    encodeURI(txt.value).replace("&", "%26").replace("=", "%3D").replace("?", "%3F")
}