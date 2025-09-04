const settings = require("./config/settings");

console.log(settings.port)

// const {addition, substraction} = require('./math')
// or

const Math = require('./math')

n1 = 10
n2 = 20

// sum = addition (n1, n2)
sum = Math.addition(n1,n2)

console.log(`Addition of ${n1} and ${n2} is ${sum}`)

console.log(`Substraction : ${n1} from ${n2} is ${Math.substraction(n2, n1)}`)

console.log(`Multiplication : ${n1} and ${n2} is ${Math.multiplication(n1, n2)}`)

console.log(`Division : ${n1} and ${n2} is ${Math.division(n1, n2)}`)

console.log(`Modulus : ${n1} and ${n2} is ${Math.modulus(n1, n2)}`)


