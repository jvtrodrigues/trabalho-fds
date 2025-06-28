const botao = document.querySelector("#botao");
const seletor = document.querySelector("#mensagem");

botao.addEventListener("click", exibirMensagem)

function exibirMensagem() {
    seletor.innerHTML = "Olá, seja bem vindo!";

    setTimeout(() => {
        seletor.innerHTML = "";
    }, 5000);
}