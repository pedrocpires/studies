console.clear();
const tituloPrograma = " ".repeat(31) + "CALCULADORA BÀSICA" + " ".repeat(31);
console.log("=".repeat(tituloPrograma.length));
console.log(tituloPrograma);
console.log("=".repeat(tituloPrograma.length));

var opcaoCalc

function mostraOpcoes() {
    let readOperacao = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })  
    readOperacao.question("Escolha a opção do cálculo que quer executar:\n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir\n5 - Exponenciação\n6 - Raiz Quadrada\n\n", function (escolhaFuncao) {
        opcaoCalc = (escolhaFuncao);
        if (opcaoCalc == "1" || opcaoCalc == "2" || opcaoCalc == "3" || opcaoCalc == "4" || opcaoCalc == "5" || opcaoCalc == "6") {
            console.log("Você escolheu a função: " + opcaoCalc);
            readOperacao.close();
        } else {
            console.log("Opção Inválida. Favor digite novamente")   
            readOperacao.close();
            mostraOpcoes();

        }
    });
    // readOperacao.on("close", function () {
    //     console.log("\nBYE BYE !!!");
    //     // process.exit(0);
    // });
}
mostraOpcoes();

switch (opcaoCalc) {
    case 1:
        leNumeros();
        console.log(num1 + num2);
    default:
        console.log("Não é soma!");
}

function leNumeros() {
    let readNumeros = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })  
    readNumeros.question("Escolha o primeiro número:\n ", function (num1) {
        readNumeros.question("Escolha o segundo número:\n ", function (num2) {
            
            console.log("num1 = " + num1);
            console.log("num2 = " + num2);
            readNumeros.close();
        })
    });
    return num1, num2;
}