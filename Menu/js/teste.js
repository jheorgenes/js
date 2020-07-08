let numSoma1
let numSoma2
let resultado

alert("Vamos somar suas notas")
numSoma1 = new Number(prompt("Qual a nota da sua N1?"))
numSoma2 = new Number(prompt("Qual a nota da sua N2?"))

resultado = (numSoma1 + numSoma2) /(2)

if(resultado >= 6){
    alert("Você foi aprovado, sua nota é " + resultado)
}
if(resultado < 6){
    alert("Você foi reprovado, sua nota foi " + resultado)
}

let testOBJ="{}"

new Number();
new Object();
new Array();