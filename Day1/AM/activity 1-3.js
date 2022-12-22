// Activity 1

let greet="Hello Codenation"
    const callgreet = () =>{
        for(i=1;i<=5;i++){ 	
            console.log(greet);       
        };
    };
callgreet()

//version2
const logMsg = () =>{
    console.log ('hello Codenation')
}
const loopFunc = (functionToLog)=>{
    for(i=1;i<=5;i++){ 	
        functionToLog();
    }    
}
loopFunc(logMsg);



// Activity2

const numbers = [28, 44, 12, 8, 66];
const newArr = numbers.map(myFunction);

function myFunction(num) {
    console.log (num * 3);
}
//version2
// let number =[1,2,3,4,5]
// let newNumArray=

// Acitvity 3

const add = (a, b) => {
    return a + b;
   };
const subtract = (a, b) => {
    return a - b;
   };
const multiply = (a, b) => {
    return a * b;
   };
const divide = (a, b) => {
    return a / b;
   };
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    };
};
console.log (doMaths(4)(2, add))



