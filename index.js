function headSoftware(softwareName) {
    console.clear();
    softwareName = " ".repeat(30) + softwareName + " ".repeat(30);
    console.log("=".repeat(softwareName.length));
    console.log(softwareName);
    console.log("=".repeat(softwareName.length));
}
headSoftware("CÁLCULADORA SIMPLES!");
const readline = require("readline-sync");

function start() {
    const calc = {}
    calc.operator = askAndReturnOperator();
    calc.numbers = askAndReturnNumbers();
    calc.result = returnResult();

    function askAndReturnOperator() {
        const operators = ["Soma", "Subtração", "Multiplicação", "Divisão", "Potência", "Raíz Quadrada"];
        const selectedOperator = readline.keyInSelect(operators, "Escolha uma operação para executar: ");
        return selectedOperator
    }

    function askAndReturnNumbers() {
        switch (calc.operator) {
            case 0:
                return [readline.question("\nEscolha o primeiro número para somar: "), readline.question("\nEscolha o segundo número para somar: ")];
            case 1:
                return [readline.question("\nEscolha o primeiro número para subtrair (minuendo): "), readline.question("\nEscolha o segundo número para subtrair (subtraendo): ")];
            case 2:
                return [readline.question("\nEscolha o primeiro termo para multiplicar: "), readline.question("\nEscolha o segundo termo para multiplicar: ")];
            case 3:
                return [readline.question("\nEscolha o primeiro número para dividir (dividendo): "), readline.question("\nEscolha o segundo número para dividr (divisor): ")];
            case 4:
                return [readline.question("\nEscolha a base da potenciação: "), readline.question("\nEscolha o expoente da potenciação: ")];
            case 5:
                return [readline.question("\nEscolha o número para achar sua raíz quadrada: "), null];
            default:
                console.log("ATÉ A PRÓXIMA!!!!");
                process.exit();
        }
    }

    function returnResult() {
        switch (calc.operator) {
            case 0:
                calc.operator = "Soma";
                return parseFloat(calc.numbers[0]) + parseFloat(calc.numbers[1]);
            case 1:
                calc.operator = "Subtração";
                return parseFloat(calc.numbers[0]) - parseFloat(calc.numbers[1]);
            case 2:
                calc.operator = "Multiplicação";
                return parseFloat(calc.numbers[0]) * parseFloat(calc.numbers[1]);
            case 3:
                calc.operator = "Divisão";
                return parseFloat(calc.numbers[0]) / parseFloat(calc.numbers[1]);
            case 4:
                calc.operator = "Potenciação";
                return parseFloat(calc.numbers[0]) ^ parseFloat(calc.numbers[1]);
            case 5:
                calc.operator = "Raíz Quadrada";
                return Math.sqrt(parseFloat(calc.numbers[0]));
        }
    }
    console.log("O resultado da sua " + calc.operator + " é " + calc.result + ".\n");
    restart();
    function restart() {
        console.log(calc);
        let selectedRestart = readline.keyInYN("Gostaria de fazer outra operação? ");
        if (selectedRestart == true){
            start();
        } else {
            console.log("\nATÉ A PRÓXIMA!!!!");
        }
    }
    function checkNumber() {
        
    }
    // function sum() {
    //     console.log(parseFloat(calc.numbers[0]) + parseFloat(calc.numbers[1]));
    // }
    // function subtract() {
    //     console.log(parseFloat(calc.numbers[0]) - parseFloat(calc.numbers[1]));
    // }
    // function multiply() {
    //     console.log(parseFloat(calc.numbers[0]) * parseFloat(calc.numbers[1]));
    // }
    // function divide() {
    //     console.log(parseFloat(calc.numbers[0]) / parseFloat(calc.numbers[1]));
    // }
    // function potentiate() {
    //     console.log(parseFloat(calc.numbers[0]) ^ parseFloat(calc.numbers[1]));
    // }
    // function squareRoot() {
    //     console.log(parseFloat(calc.numbers[0] ^ 0.5));
}
start();