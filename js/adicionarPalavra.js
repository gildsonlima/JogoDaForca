var botaoAdicionar = document.querySelector('#botaoadicionar');
var palavraNova = document.querySelector('#palavranova');
var palavra = document.querySelector('#palavra');
var botaoPalavra = document.querySelector('#botaopalavra');
var botaoComeca1 = document.querySelector('#botaocomeca1');

botaoAdicionar.addEventListener('click', () => {
    inicial.classList.add('esconder');
    palavra.classList.remove('esconder');
})

botaoComeca1.addEventListener('click', () => {
    palavra.classList.add('esconder')
    jogo.classList.remove('esconder')
    jogar();
})

botaoPalavra.addEventListener('click',() => {
    palavras.push(palavraNova.value);
    console.log(palavras); 
    palavraNova.value = '';
})