const pergunta = document.getElementById('music');

pergunta.addEventListener('click', function() {
    const resposta = prompt('Digite a senha para continuar:');
    if (resposta === 'flauta') {
        window.location.href = 'https://github.com/DevMuriloSantos/Flauta-pw';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
});

document.addEventListener('contextmenu', event => event.preventDefault());

    document.addEventListener('keydown', function (e) {
  if (
    e.key === 'F11' ||
    (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase()))
  ) {
    e.preventDefault();
  }
});

