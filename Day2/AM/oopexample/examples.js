//// MORNING TUESDAY CLASS Object Orientated Programming (OOP) 
//// Object Literals Example
//// Constructor Method example 

//// ==== Example 1 ====
//// NOTE: Any properties related to the class are added in the constructor 

// const person = {firstName: "Bruce", lastName: "Willis", age: 80 }

// class Person {
//   constructor(name, age, job) {
//       this.name = name;
//       this.age = age;
//       this.job = job;
// }

////method here

// talks() {
//     console.log(
//         `Hi, my name is ${this.name}, I am ${this.age} and I work as a ${this.job}`,
//     );
// }
// work() {
//     console.log(`I am going to build a house, because I am a ${this.job}`);
//   }
// }

////create a new instance of the class

// const dave = new Person('Dave', 41, 'Builder');

// dave.talks();
// dave.work();

////==== Example 2 with the new dog ====

// class Dog {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
// walks() {
//     console.log(`Taking ${this.name} the ${this.breed} for a walk`);
// }
// eats() {
//     console.log(`${this.name} has had some food`);
//   }
// }

// const stanley = new Dog('Stanley', 'Bulldog');

// stanley.walks();
// stanley.eats();









//// ======= Class Inheritance =======
//// using sub-classes allows us to use call the properties and methods from a parent class 
//// and it will enable you to add more
//// SUBCLASS EXAMPLE
// class hedgehog extends Animal {
//   constructor(name) {
//       this.name = name;
//       this.health = 100;
//       this.hunger = 100; 
//   }
//   drinks() {
//       this.health += 5;
//       return this;
//   }
//   eats() {
//       this.health += 5;
//       this.hunger += 10;
//       console.log(`${this.name}'s health is ${this.health}`);
//       return this;
//   }
//   stats() {
//       return console.table({
//         name: this.name,
//         health: this.health,
//       });
//     }
//   sleeps() {
//     console.log(`${this.name} the ${this.breed} is taking a name`);{
//       return this;
//     }
// }
// }

// //call out a new animal 
// const hedgehog = new hedgehog('hedgehog');
// hedgehog.eats().drinks().stats();

//// We are creating a new instance and connecting to the hedgehog class 
//// by accessing the variable where we're storing the instance of the class 




















//// ======= Getters and Setters Person Name Example ========
//// - GET: is the keyword used to define a getter method for retrieving the property value
//// - SET: defines a setter method for changing the value of the specific property

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }  
//   get fullName() {
//   return (`${this.firstName} ${this.lastName}`);
//   }
//   set fullName(value) {
//       const names = value.split(' ');
//       this.firstName = names[0];
//       this.lastName = names[1];
//     }
//   }

//   let person = new Person('Dave', 'Jones');
//   //set it
//   person.fullName = 'Will Smith';
//   //get it
//   console.log(person.fullName);

//// ===================== ACTIVITY TO DO: =========================
  //// NOT part of the assignment 
  //// Build a class for a coffee shop till. 
  //// Have a method that takes names and drinks and totals the price 

  //// Stretch goal: Have a separate class for a customer and total cash and compare total 
  //// price of drink against total cash to see if the order can be afforded 

////-------- EXAMPLE 1 --------

// class coffeShopTill {
//   constructor (name) {
//     this.name = name;
//     // this.drink = drink; we can refer to it if need: run this in a new method 
//     this.price = 0;
//   }
//   drinks(drinkName, cost) {
//       console.log(`Your drink is ${drinkName} and it costs ${cost}.`);
//       this.price += cost;
//     }
//     toPay() {
//       console.log(`It costs ${this.price}.`);
//     }
//     get totalPrice() {
//         return (this.price);
//     }
// }

//   const starbucks = new coffeShopTill(`Starbucks`);
//   starbucks.drinks('Matcha Latte', 3.99);
//   starbucks.drinks('Tea', 1.99);
//   console.log(`Total bill to pay: ${starbucks.totalPrice}`);
//   console.log(starbucks.totalPrice)



//// ------ EXAMPLE 2: CLASS DRINKS AND CUSTOMER ---------

// class DrinkPurchase {
//   constructor(drinkName, price){
//       // Properties
//       this.drinkName = drinkName;
//       this.price = price;
//   }
//// Methods
//   showPrice(){
//       console.log(`The price for a ${this.drinkName} is £${this.price}`);
//   }
// }
// class Customer {
//   constructor(customerName, walletAmount){
//       // Properties
//       this.customerName = customerName;
//       this.walletAmount = walletAmount;
//   }
//// Methods
//   showWalletAmount() {
//       console.log(`The customer ${this.customerName} has got £${this.walletAmount} in their wallet.`);
//   }
// }

// const Robert = new Customer('Robert', 15);
// const drink1 = new DrinkPurchase('latte', 6);
// const drink2 = new DrinkPurchase('frappe', 8);
// drink1.showPrice();
// drink2.showPrice();
// let totalPrice = drink1.price + drink2.price;
// console.log(`Total Cost = £${totalPrice}`);

// if (Robert.walletAmount - totalPrice > 0){
//   console.log(`${Robert.customerName} can afford this order!`);
// } else {
//   console.log(`${Robert.customerName} cannot afford this order!`);
// }

////============ 2PM WE WILL COVER NODE.JS AND IT'S PACKAGE MANAGER, plus 
//// Tuesday Afternoon PM class

//// Learning Objectives
//// - Explore what nodeJs is used for  
//// - Be able to run your javascript in a Node Environment 
//// - Came out in 2004, became popular in 2013-2014
//// - Be familiar with modularity in JS 
//// - Be able to export and require modules
//// - To explore what NPM is and how we use it 

////About Node 
//// - it is fast
//// - it is event driven
//// - it is non-blocking (can run JS asynchonously)
//// - It is powered by Googles V8 engine 
//// - it is written in C++ 
//// - it takes JavaScript 




//// --------------------------------------------
//// LESSON 2PM:
//// maths export example add/substract/multiply/divide

// const myFunction = require('./maths.js');

// console.log(myFunction.add(2, 5));
// console.log(myFunction.substract(6, 2));
// console.log(myFunction.multiply(6, 2));
// console.log(myFunction.divide(6, 2));

//// ============================= NODEJS.ORG =========================
//// USING OS AND FS MODULES 

//// NOTES
//// os - short of operating system modules
//// fs - short for file system modules 
//// os and fs have different methods, see what else you can do
//// check: https://nodejs.org/api/os.html
//// check: https://nodejs.org/api/fs.html

// const os = require('os');
// const fs = require('fs');

// let userDetails = os.userInfo().username;
// console.log(userDetails);

// fs.appendFile('oh-hi.txt', `Hello ${userDetails}`, (err) => {
//   if (err) {
//     console.log('OOPS');
//   }
// });

//// ========= THIRD PARTY MODULES ========
//// NOTES
//// These modules are written by other individuals/companies to enable us to do certain tasks/increase reputation/money
//// To access Node Package Manager in JS we need to install packages to have access and initialize them using npm

// I. First step: Install packages 
// Use NPM command line: npm init -y (try whitout npm -y see what happens) 
// If you don't have -y it will ask you loads of Qs, so the npm init -y deals with all prompts

// II. Second step:. Create a mymodules folder within week2
// create a app.js file and initialize the project to add a third party module, use npm init -y
// ATTENTION: A new file has been created called package.json within the folder 

// III. Third step: INQUIRER
// Now everything seems ok in the package.json ,  we want to add other third parties modules 
// IMP STEP =>USE: npm install inquirer
// Inquirer let's use the terminal to interact more with it, use the arrows keys, ask questions,
// get answers and it has millions of uses 
// GO TO app.js file in mymodules
