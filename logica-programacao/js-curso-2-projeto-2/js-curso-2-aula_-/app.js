let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log( `Numero secreto ${numeroSecreto}`);

/**let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';
*/

// essa funcao faz o mesmo que o codigo acima deixando o codigo mais limpo e reutilizavel
function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Essa função serve para inserir mensagens no html atravez das tags.
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}
exibirMensagemInicial();

//essa função esta verificando o chute se esta certo ou errado e se o valor é maior ou menor.
function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        exibirTextoNaTela('h1','errou tente novamente');
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto eh menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto eh maior');
        }
        tentativas++;
        limparCampo()
    }
}

//gera o numero aleatorio e o parseInte serve para trazer um numero inteiro.
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    //limpa a lista quando ela atinge o valor maximo
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    //Verifica se o elemento esta na lista
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();//recursão chama a funçao novamente 
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);//adiciona o numero sorteado na lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

//limpa o campo de chute caso você erre o chute
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    console.log(`Numero secreto ${numeroSecreto}`);
    document.getElementById('reiniciar').setAttribute('disabled',true);
}