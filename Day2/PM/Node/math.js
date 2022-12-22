// NODE JS AFTERNOON TUESDAY LESSON 2PM:
// In class example 

let add = (num1, num2) => {
    let result = num1 + num2 
    return result;
}
  
let substract = (num1, num2) => {
    let result = num1 - num2 
    return result;
}
  
let multiply = (num1, num2) => {
    let result = num1 * num2 
    return result;
}
  
let divide = (num1, num2) => {
    let result = num1 / num2 
    return result; 
}
  
module.exports = { add, substract, multiply, divide};