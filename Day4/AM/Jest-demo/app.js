const add = (num1, num2) => {
    return num1 + num2; 
}
  
const substract = (num1, num2) => {
    return num1 - num2; 
}
  
const multiply = (num1, num2) => {
    return num1 * num2; 
}
  
const divide = (num1, num2) => {
    return num1 / num2;   
}

let myArray = ['Dan','Stuart','Ben','Steven'];
let myString = 'This string should have 16 characters';
module.exports = {add,substract, multiply, divide, myArray, myString}