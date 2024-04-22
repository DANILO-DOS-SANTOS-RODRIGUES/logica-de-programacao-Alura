/** exemplo com decremento 
    let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;
console.log(qtdNumeros);

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    console.log(numero);
    soma += numero;
    contador--
}

let media = soma / qtdNumeros;

console.log(media);
 */

// lembrete em uma aplicacao os comentarios e os console.log tem q ser retirado quando for fazer o deploy(subir para producao)

alert("Bem vindo a o jogo do numero secreto");
let valorMaximo = 100;
let numeroSecreto = parseInt(Math.random() * valorMaximo ) + 1;

console.log(`O numero secreto eh ${numeroSecreto}`);

let chute;
let tentativas = 1;

//enquanto o chute n for igual ao numero secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${valorMaximo}`);
    //se chute for igual ao numero secreto
    if(chute == numeroSecreto ){
        break
    } else{
        if(chute > numeroSecreto){
            alert(`O numero secreto eh menor que ${chute}`);
        }else{
            alert(`O numero secreto eh maior que ${chute}`);
        }
        tentativas++;
    }
        
}
//Operador ternario eh um if else de forma reduzida
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
/**
if(tentativas >1){
    alert(`Isso ai voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
}else{
    alert(`Isso ai voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/




  