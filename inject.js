if (localStorage.getItem("autologouter") === "true") {
    console.log("-- ログイン無効化 --");
    const inject_alub = document.createElement("script");
    inject_alub.src = chrome.runtime.getURL("autologoutblocker.js");
    (document.head || document.documentElement).insertAdjacentElement("afterbegin", inject_alub);
}
