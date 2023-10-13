const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem");
//const nao muda o valor (valor constante)
botaoAlterarTema.addEventListener("click", () =>{
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")
    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sol-quente.webp")
    } 
    else {

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.webp");
}

});