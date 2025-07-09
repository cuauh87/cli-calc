const sum = require('./operations/sum');
const sub = require('./operations/sub');
const mul = require('./operations/mul');
const div = require('./operations/div');

const [, , operation, num1, num2] = process.argv;

const a = Number(num1);
const b = Number(num2);

let result;

switch (operation) {
  case 'sum':
    result = sum(a, b);
    break;
  case 'sub':
    result = sub(a, b);
    break;
  case 'mul':
    result = mul(a, b);
    break;
  case 'div':
    result = div(a, b);
    break;
  default:
    console.log('Operación no soportada');
    process.exit(1);
}

console.log('Resultado:', result);
