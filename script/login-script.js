const email = document.querySelector('.campo-email')
const senha = document.querySelector('.campo-senha')
const logarBtn = document.querySelector('.botao-login')

logarBtn.addEventListener('click', () => {
    if (email.value === "cristiano@gmail.com" && senha.value === "ronaldo123") {
        alert('Email e senha estão corretos, vamos para pagina inicial!');
        window.location.href = '../index.html';
    } else {
        alert('Email ou senha incorretos');
    }
})