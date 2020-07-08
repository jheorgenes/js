let TipoOpera;
let Numero1;
let Numero2;
let Resultado;


//Inicio calculadora
alert("Seja bem vindo a calculadora");
TipoOpera = new Number( prompt("1 Para soma || 2 para sub") );

Numero1 = new Number( prompt("Digite o primeiro numero") );
Numero2 = new Number( prompt("Digite o segundo numero") )


if(TipoOpera == 1){
    Soma(Numero1,Numero2)
}
if(TipoOpera == 2){
    Sub(Numero1,Numero2)
}

function Soma(Numero1, Numero2){
    alert("Você escolheu soma")
    Resultado = Numero1 + Numero2;
    alert(Resultado)
}

function Sub(Numero1, Numero2){
    alert("Você escolheu Sub")
    Resultado = Numero1 - Numero2;
    alert(Resultado)
}