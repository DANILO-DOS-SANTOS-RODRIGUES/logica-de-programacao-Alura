
// 1 
let mensagemBoasVindas = "Bem vindo(a) ao nosso site";
console.log(`${mensagemBoasVindas}`);

//2- 3- 
let nome = "Danilo";
console.log(`Ola, ${nome}!`);
alert(`Ola, ${nome}`);

//4- 
let linguagemFavorita = prompt("Qual sua linguagem de programacao favorita");
console.log(`A linguagem favorita do usuario e ${linguagemFavorita}`);

//5- 6-
let valor1 = 30;
let valor2 = 80;
let resultado = valor1 + valor2;
console.log(`O resultado da soma de ${valor1} e ${valor2} é igual a ${resultado}`);
resultado = valor1 - valor2;
console.log(`A diferenca entre ${valor1} e ${valor2} é igual a ${resultado}`);

//7-
let idade = prompt("informe sua idade");
let verificacaoIdade = idade >= 18? "Maior de idade" :"menor de idade";
console.log(`O usuario tem ${idade} anos e é ${verificacaoIdade} `);

//8-
let numero = prompt("Informe um numero");
if(numero > 0){
    console.log(`O numero ${numero} é positivo`);
}else{
    if(numero < 0){
        console.log(`O numero ${numero} é negativo`);
    }else{
        console.log(`o numero ${numero} é zero`);
    }
};


//9-
let contador = 0
while(contador < 10){
    contador++
    console.log(contador)
}

//10- 
let nota = 7;
let validacaoAprovacao = nota >= 7? "Aprovado" : "Reprovado";
console.log(`A nota do aluno é ${nota} e ele esta ${validacaoAprovacao}`);

//11- 12- 13-
console.log(Math.random());
console.log(parseInt((Math.random()*10)+1))
console.log(parseInt((Math.random()*1000)+1));