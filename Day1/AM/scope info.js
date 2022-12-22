//  SCOPE
// Global Scope
let age = 21;
console.log(`My age: ${age}`);
const callAge = () => {
    console.log(`My age: ${age}`);
};
callAge()

//Function Scope
let age = '21';
console.log(`My age: ${age}`);
const callAge = () => {
    let name = 'Karen';
    console.log(`My age is: ${age}`);
    console.log(`My name is: ${name}`);
};
callAge();
console.log(`Global Scope with local variable: ${name}`);
//ReferenceError: Name is not defined

//Block Scope
function startLet() {
    for (let i = 0; i < 5; i++) {               //ES6 introduced the Let and Const
        console.log(i); //Output: 0,1,2,3,4     //keywords. These two keywords provide       
    }                                           //block scope in Javascript.
    console.log(i); //Error i is not defined
   }
   function startVar() {
    for (var i = 0; i < 5; i++) {
    console.log(i); //Output: 0,1,2,3,4
    }                                           //Variables declared inside a block cannot 
    console.log(i); //Output: 5                 //be accessed outside a block. 
   }
   console.log('Running with let:');
   startLet();
   console.log('Running with var:');
   startVar();

//Block Scope  
//Now let’s take a look at Var and Let in an if/else statement. 
   function startLet() {
        for (let i = 0; i < 5; i++) {
            if (true) {
                let colour = 'red';
                console.log(i, colour); //Output: 0,1,2,3,4 with red
            }
        }         
    console.log(i, colour); //ReferenceError: i is not defined
   }
   function startVar() {
        for (var i = 0; i < 5; i++) {
            if (true) {
                var colour = 'blue';
                console.log(i, colour); //Output: 0,1,2,3,4 with blue
            }
        }
    console.log(i, colour); //Output: 5, blue
   }
   console.log('Running with let:');
   startLet();
   console.log('Running with var:');
   startVar();

   //Scoping works outwards…
// …JS looks for variables in the current scope. If it doesn’t find it, it will then look outward to the previous scope 
// until the global scope if needed. This is called scope chain

// Scope Chain
let globalVar = 'globalVar';
console.log(`Global Scope: ${globalVar}`);
const outerFun = () => {
    let outerVar = 'outerVar';
    console.log(`Outer function: ${globalVar}`);
    console.log(`Outer function: ${outerVar}`);
    console.log(`Outer function: ${innerVar}`); //ReferenceError: innerVar is not defined
    const innerFun = () => {
        let innerVar = 'innerVar';
        console.log(`Inner function: ${globalVar}`);
        console.log(`Inner function: ${outerVar}`);
        console.log(`Inner function: ${innerVar}`);
    };
    innerFun();
};
outerFun();
innerFun(); //ReferenceError: innerFun is not defined (as it's inside outerFun())

//Higher order Functions
//Example 1
const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
};
   const greet = (time, fn) => {
        if (time < 1200) {
            fn('Morning');
        }else if (time >= 1200 && time < 1800) {
            fn('Afternoon');
        } else {
        fn('Evening');
        }
   };
   greet(1400, whichGreeting);

// Higher Order Functions… Intermediate JS
// Example Two
const add = () => {
    return 2 + 3;
   };
   add(); //logs 5
   add; // logs the whole function

// Higher Order Functions… Intermediate JS
// Example Three
    const add = (num1) => {
        return (num2) => {
            return num1 + num2;
        };
    };
    console.log(add(2)); //returns the function in the main function

// Higher Order Functions… Intermediate JS
// Example four
    const add = (num1) => {
        return (num2) => {
            return num1 + num2;
        };
    };
console.log(add(2)(1)); //output: 3


