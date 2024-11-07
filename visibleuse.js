let autologouter = localStorage.getItem("autologouter") === "true";

const interval = setInterval(() => {
    const logoutButtonFrame = document.querySelector('.logoutButtonFrame');

    if (logoutButtonFrame) {
        const logout = document.createElement('li');
        logout.className = 'logoutblock';
        logout.innerHTML = `<a href="#">${autologouter ? '自動ログアウト無効化中' : '自動ログアウト有効化中'}</a>`;
        logoutButtonFrame.parentNode.insertBefore(logout, logoutButtonFrame.nextSibling);

        logout.addEventListener('click', () => {
            autologouter = !autologouter;
            localStorage.setItem("autologouter", autologouter);
            logout.innerHTML = `<a href="#">${autologouter ? '自動ログアウト無効化中' : '自動ログアウト有効化中'}</a>`;
            location.reload();
        });

        clearInterval(interval);
    }
}, 100);
