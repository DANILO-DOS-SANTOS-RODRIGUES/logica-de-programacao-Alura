//exercicio 1 calculo imc
function calcularImc(altura, peso){
    return peso / (altura * altura);
}
console.log(calcularImc(1.85, 100));

//exercicio 2 calculo fatorial
function calculoFatorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }else{
        //return n * fatorial(n - 1); toco o codigo abaixo eh a mesma coisa que isso
        let fatorial = 1;
        for(let i = 2; i <= numero; i++){
            fatorial *= i;
        }
        return  fatorial;
    }
    
}
console.log(` fatorial ${calculoFatorial(5)}`);

//exercicio 3 conversao dolar real

function converterDolar(valorDolar) {
    let cotacaoDia = 4.80;
    return valorDolar * cotacaoDia
}

console.log(converterDolar(11));

//exercicio 4 calcular area retangulo
function calcularAreaRetangulo(alturaRetangulo, larguraRetangulo) {
    return alturaRetangulo * larguraRetangulo;
}

alert(calcularAreaRetangulo(15,32));

//exercicio 5 calcular area circulo
function calcularAreaCirculo(raioCirculo) {
    return 3.14 * (raioCirculo * raioCirculo);
}

alert(calcularAreaCirculo(30));

// 6 calcular taboada
function fazerTabuada(numeroTabuada) {
    let tabuada = 1
    while(tabuada <= 10){ 
        console.log(numeroTabuada * tabuada);
        tabuada++
    }
}
fazerTabuada(10);