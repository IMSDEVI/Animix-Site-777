function login() {

    const loginPopup = document.createElement('div');
    loginPopup.textContent = 'Login feito com sucesso!';
    loginPopup.className = 'login-popup';
    document.body.appendChild(loginPopup);


    setTimeout(() => {
        document.body.removeChild(loginPopup);
    }, 3000);
}

document.getElementById('loginBtn').addEventListener('click', login);
