//exercicio1
let olaMundo = function(){
    console.log("Ola, Mundo");
}
olaMundo();

//exercicio 2
function saudacao(nome){
    console.log(`Ola, ${nome}`)
}
saudacao("Josivaldo");

//exercicio 3
function calcularDobro(numero){
    //console.log( numero*numero);
    return numero * 2;
}
console.log(calcularDobro(3));

//exercicio 4
function calcularMedia(numero1, numero2, numero3){
    console.log("A media eh " + (numero1 + numero2 + numero3) / 3);
}
calcularMedia(8,10,27);

//exercicio 5
function compararNumero(numero1, numero2){
    if(numero1 == numero2){
        console.log(`Sao iguais`);
    }else if(numero1 > numero2){
        console.log(`O primeiro numero ${numero1} eh maior que o segundo numero ${numero2} `);
    }else{
        console.log(`O primeiro numero ${numero1} eh menor que o segundo numero ${numero2} `);
    }
}
compararNumero(2,3);

//exercicio 6
function elevaAoQuadrado(numero){
    return numero * numero;
}
console.log(elevaAoQuadrado(3));