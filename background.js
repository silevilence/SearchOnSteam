let searchMenuId = 'SearchOnSteam';

function searchOnSteam(info, tab) {
    if (info.menuItemId === searchMenuId) {
        window.open("https://store.steampowered.com/search/?term=" + escape(info.selectionText));
    }
}

chrome.contextMenus.create({
    type: 'normal',
    title: "Search '%s' on steam store",
    id: searchMenuId,
    contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener(searchOnSteam);