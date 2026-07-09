let nome = "Rodrigo";
let idade = 23;

alert(`Meu nome é ${nome} e tenho ${idade} anos.`);

// -----------------------------------------------------------

let numero1 = 18;
let numero2 = 7;


console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);

// ------------------------------------------------------------

let preco = 250;
console.log();

// ------------------------------------------------------------

let age = 20;
if(age >= 18){
    console.log("Você é maior de idade.");
    
}else{
    console.log("Você é menor de idade.");
    
}

// ------------------------------------------------------------

let nota = 7;
if(nota >= 6){
    console.log("Aprovado(a).");
    
}else{
    console.log("Reprovado(a).");
    
}

// ------------------------------------------------------------

let senha = "1234";
if(senha === "admin"){
    console.log("Acesso permitido.");
    
}else{
    console.log("Senha incorreta.");
    
}

// ------------------------------------------------------------

let status = idade >= 18 ? "Maior de idade" : "Menor de idade.";
console.log(status);

// ------------------------------------------------------------

let temperatura = 32;
let situation = temperatura >= 30 ? "Muito quente" : "Temperatura agradável";
console.log(situation);

// ------------------------------------------------------------

let saldo = 150;
let statusSaldo = saldo > 0 ? "Saldo positivo" : "Saldo zerado ou negativo";
console.log(statusSaldo);

// ------------------------------------------------------------

function cumprimentar(name){
    return `Olá, ${name}`
}

let vamosCumprimentar = cumprimentar("Rodrigo");
console.log(vamosCumprimentar);

// ------------------------------------------------------------

function somar(a,b){
    return a + b;
}

let resultSoma = somar(2,9);
console.log(resultSoma);

// ------------------------------------------------------------

function evenOdd(number){
    if (number % 2 == 0){
        return "É par."
    }else{
        return "É ímpar."
    }
}

let parImpar = evenOdd(32);
console.log(parImpar);

// ------------------------------------------------------------

function boasVindas (nombre = "visitante"){
    return `Bem-vindo(a), ${nombre} !`
}

boasVindas();

// ------------------------------------------------------------

function calcularMedia(n1, n2){
    let media = (n1 + n2) / 2;
    let mensagem = media >= 7 ? "Aprovado(a). " : "Reprovado(a). ";
    return `Sua média é: ${media} . Seu status é: ${mensagem} `
    
}

let result = calcularMedia(9,6);
console.log(result);