// IMPORT THE MODULE
import * as calc from "./modules/calculator.js";

function calculate() {

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let x = Number(window.prompt(`Enter the first number to be used in your math equation.`))
console.log(x);
let y = Number(window.prompt(`Enter the second number for the equation.`));
console.log(y);
let equation = window.prompt(`What type of equation are we doing? Enter add, subract, multiply, or divide.`);

// CHECK TO SEE WHAT OPERATION THEY'RE USING
switch (equation) {
    case "add":
        console.log(Number(calc.add()));
        alert(`${calc.add()} is the sum of the two numbers`);
        break;
    case "subtract":
        Number(calc.sub());
        alert(`${calc.sub()} is the difference of the two numbers`);
        break;
    case "multiply":
        calc.mult();
        alert(`${calc.mult()} is the product of the two numbers`);
        break;
    case "divide":
        calc.div();
        alert(`${calc.div()} is the quotient of the two numbers`);
        break;
    default:
        alert(`Invalid entry! Enter an equation type, let's start over.`);
        if (equation !== "add" && equation !== "subtract" && equation !=="subtract"  && equation !== "divide") {
            calculate();
        } break;
}
}
calculate();
// CALL THE APPROPRIATE FUNCTION

