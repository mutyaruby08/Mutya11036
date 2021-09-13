
let result;
const op = parseFloat(prompt('Enter a number (1- Add, 2- Subtract, 3- Multiply, 4- Divide):'));

const n1 = parseFloat(prompt('Enter first number: '));
const n2 = parseFloat(prompt('Enter second number: '));

switch(op){
    case 1: 
        result = n1 + n2;
        alert(`${n1} + ${n2} = ${result}`); break;
    case 2: 
        result = n1 - n2; 
        alert(`${n1} - ${n2} = ${result}`); break;
    case 3: 
        result = n1 * n2; 
        alert(`${n1} * ${n2} = ${result}`); break;
    case 4:
        result = n1 / n2; 
        alert(`${n1} / ${n2} = ${result}`); break;
    default:
        alert('Invalid operator');
}

