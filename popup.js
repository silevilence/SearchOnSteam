let btn = document.getElementById("search");

btn.onclick = function () {
    let txt = document.getElementById("txt");
    // window.open("https://store.steampowered.com/search/?term=baldr%20sky");
    window.open("https://store.steampowered.com/search/?term=" + escape(txt.value));
}