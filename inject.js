const username = "ユーザー名をここに入力してください。";
const password = "パスワードをここに入力してください。";

function AutoClickButton(selector) {
    const button = document.querySelector("button[name='"+selector+"']");
    if (button) button.click();
}

function InputText(selector, value) {
    const input = document.querySelector("input[name='"+selector+"']");
    if (input) input.value = value;
}

document.addEventListener("DOMContentLoaded", () => {
    if (location.href.startsWith("https://study.ns.kogakuin.ac.jp/lms/lginLgir/")) {
        AutoClickButton("loginButton");
    }
    else if (location.href.startsWith("https://auth.kogakuin.ac.jp/idp/profile/SAML2/Redirect/")) {
        InputText("j_username", username);
        InputText("j_password", password);
        AutoClickButton("_eventId_proceed");
    }
});

if (localStorage.getItem("autologouter") === "true") {
    const inject_alub = document.createElement("script");
    inject_alub.src = chrome.runtime.getURL("autologoutblocker.js");
    (document.head || document.documentElement).insertAdjacentElement("afterbegin", inject_alub);
}
