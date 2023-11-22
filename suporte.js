document.getElementById('enviarBtn').onclick = function() {
    const popup = document.createElement('div');
    popup.className = 'popup';

    const mensagem = document.createElement('div');
    mensagem.textContent = 'Sua mensagem foi enviada!';
    mensagem.style.padding = '10px';
    mensagem.style.backgroundColor = '#eee';
    mensagem.style.border = '1px solid #ccc';
    mensagem.style.borderRadius = '5px';
    mensagem.style.marginTop = '10px';

    const textoSuporte = document.createElement('div');
    textoSuporte.textContent = 'Lamentamos, infelizmente, o suporte da Animix está indisponível no momento. Por favor, entre em contato conosco através do WhatsApp ou Email para obter assistência.';
    textoSuporte.style.marginTop = '10px';

    const linkWhatsApp = document.createElement('a');
    linkWhatsApp.href = 'https://api.whatsapp.com/send?phone=SEU_NUMERO';
    const imgWhatsApp = document.createElement('img');
    imgWhatsApp.src = 'whatsapp.png';
    imgWhatsApp.style.width = '100px';
    linkWhatsApp.appendChild(imgWhatsApp);

    const linkEmail = document.createElement('a');
    linkEmail.href = 'https://mail.google.com/';
    const imgEmail = document.createElement('img');
    imgEmail.src = 'gmail.png';
    imgEmail.style.width = '100px'; 
    linkEmail.appendChild(imgEmail);

    popup.appendChild(mensagem);
    popup.appendChild(textoSuporte);
    popup.appendChild(linkWhatsApp);
    popup.appendChild(linkEmail);

    document.body.appendChild(popup);
}

document.addEventListener('DOMContentLoaded', function () {

  const messageInput = document.getElementById('messageInput');
  const enviarBtn = document.getElementById('enviarBtn');
  const chatHistory = document.getElementById('chatHistory');


  function adicionarMensagem() {
    const mensagem = messageInput.value;
    if (mensagem.trim() !== '') {
      const mensagemElement = document.createElement('div');
      mensagemElement.textContent = mensagem;
      chatHistory.appendChild(mensagemElement);
      messageInput.value = ''; 
    }
  }

  enviarBtn.addEventListener('click', adicionarMensagem);

  messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      adicionarMensagem();
    }
  });
});

