var botaoComeca = document.querySelector('#botaocomeca');
var botaAdicionar = document.querySelector('#botaoadicionar');
var inicial = document.querySelector('#inicial')
var jogo = document.querySelector('#jogo');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var tecla;
var inicioTexto;
var contErros = 0;
var contAcertos = 0;
var letrasDigitadas = [];
var inicioErradas = 100;
var botaReniciar = document.querySelector('#botaoreniciar')

var palavras = ['coco','celular','alura','monitor','cerveja'];

function geradorDeNumeroAleatorio(){
    let min = 0
    let max = palavras.length - 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1))+min;
}

var sorteio = geradorDeNumeroAleatorio();

function fazerLinhas(inicio , numeroDeLinhas){
    
    for (let i = 0; i < numeroDeLinhas; i++ ) {
        pincel.moveTo(inicio,400);
        pincel.lineTo(inicio+55,400)
        pincel.stroke();
        inicio+=65;
    }   
}

function fazerLetras(inicio,numeroDeLinhas,palavra){
    let x = 0;
    for (let i = 0; i < numeroDeLinhas; i++ ) {
        let letra = palavra[i];
        if(isNaN(tecla)){
            if(testarLetras(tecla,letra)){
            pincel.font = '50px Fredoka One';
            pincel.fillText(tecla, inicio, 390);
            contAcertos ++;
            }else{
                x++;
            } 
        inicio = inicio +65;
        }
    }
    if(x == palavra.length){
        calcularErros();
        pincel.font = '20px Fredoka One';
        pincel.fillText(tecla, 100 , inicioErradas);
        inicioErradas += 20;
    }
}

function testarLetras(tecla,letra){
        if(letra==tecla){
            return true;
        }return false;
    }

function jogar(){
    inicial.classList.add('esconder');
    jogo.classList.remove('esconder');
    let palavra = palavras[sorteio].toUpperCase();
    let numeroDeLinhas = palavra.length;
    let localDeInicio = (1000/2-(numeroDeLinhas/2)*65);
    inicioTexto = localDeInicio
    fazerLinhas(localDeInicio,numeroDeLinhas); 
    document.body.addEventListener('keypress',function(event){
        let key = event.key;
        tecla = key.toUpperCase();
        if(!(letrasDigitadas.includes(tecla))){
        fazerLetras(inicioTexto,numeroDeLinhas,palavra);
        }
        letrasDigitadas.push(tecla);
        if(contErros>=8){
        pincel.font = '40px Fredoka One';
        pincel.fillStyle = 'red'
        pincel.fillText('FIM DE JOGO', 360 , 450);
        }
        if(contAcertos>=palavra.length){
            pincel.font = '40px Fredoka One';
            pincel.fillStyle = 'green'
            pincel.fillText('VITORIA', 410 , 450);
        }
    })
}



function calcularErros(){
    contErros ++;
    
if(contErros == 1){
    pincel.moveTo(300,300);
    pincel.lineTo(600,300)
    pincel.moveTo(400,300);
    pincel.lineTo(400,150);
    pincel.stroke();
}
if(contErros == 2){
    pincel.moveTo(500,150);
    pincel.lineTo(500,170);
    pincel.moveTo(400,150);
    pincel.lineTo(500,150);
    pincel.stroke();
}
if(contErros == 3){
    pincel.beginPath();
    pincel.arc(500,185,15,0,2*Math.PI);
    pincel.stroke();
}
if(contErros == 4){
    pincel.moveTo(500,200);
    pincel.lineTo(500,250);
    pincel.stroke();
}
if(contErros == 5){
    pincel.moveTo(500,215);
    pincel.lineTo(480,230);
    pincel.stroke();
}
if(contErros == 6){
    pincel.moveTo(500,215);
    pincel.lineTo(520,230);
    pincel.stroke();
}
if(contErros == 7){
    pincel.moveTo(500,250);
    pincel.lineTo(485,270);
    pincel.stroke();
}
if(contErros == 8){
    pincel.moveTo(500,250);
    pincel.lineTo(515,270);
    pincel.stroke();
}

}
botaoComeca.addEventListener('click', jogar)
botaReniciar.addEventListener('click', () =>{
    document.location.reload();
})