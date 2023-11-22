// Função para lidar com o login
function login() {
    // Aqui você pode adicionar a lógica para autenticar o usuário
    // Com Firebase: firebase.auth().signInWithEmailAndPassword(email, password)
    // Ou com outro sistema de autenticação

    // Neste exemplo, apenas simularemos um login bem-sucedido
    const loginPopup = document.createElement('div');
    loginPopup.textContent = 'Login feito com sucesso!';
    loginPopup.className = 'login-popup';
    document.body.appendChild(loginPopup);

    // Remove a mensagem de sucesso após 3 segundos (3000 ms)
    setTimeout(() => {
        document.body.removeChild(loginPopup);
    }, 3000);
}

// Adicione um evento de clique ao botão de login
document.getElementById('loginBtn').addEventListener('click', login);
