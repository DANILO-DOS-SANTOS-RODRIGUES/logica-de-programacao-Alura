let textoH1 = document.querySelector('h1');
textoH1.innerHTML = 'Hora do desafio';

function mensagemConsole(){
    console.log(`O botao foi clicado`);
}

function alerta(){
    alert(`Eu amo JS`);
}

function prompte(){
    let cidade = prompt(`Informe o nome da sua cidade`);
    alert(`Estive em ${cidade} e lembrei de voce`);
}

function somar(){
    //foi colocado o parseInt pois sem ele o prompt pega sting e quando vai fazewr a soma ele so concatena valor1 e valor2
    let valor1 = parseInt(prompt(`Infomeme o primeiro valor da soma`));
    let valor2 =parseInt(prompt(`Informe o segundo valor da soma`));

    let resultadoSoma = valor1 + valor2;
    alert(`O resutado da soma do ${valor1} e do ${valor2} eh ${resultadoSoma}`);
}