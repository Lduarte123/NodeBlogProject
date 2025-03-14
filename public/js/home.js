document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token'); 
    const loginStatusElement = document.getElementById('loginStatus'); 
    if (token) {
        loginStatusElement.innerHTML = '<a href="/logout" id="logout">Sair</a>';
    } else {
        loginStatusElement.innerHTML = '<a href="/login">Login</a>';
    }
    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('token');
            window.location.reload()
        });
    }
});
