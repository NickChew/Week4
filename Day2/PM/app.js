// Third step in application 
//inquirer lets u use the terminal and arrow keys
// get it to import answers and ask questions 


// ======= Example 1 ========
// import inquirer and use the prompt a simple entering of text, or multiple choice 
// it will output the result that we want from row 20

// import inquirer from 'inquirer';

// inquirer 
//     .prompt([
//       {
//           name: 'favReptile',
//           message:'What is your favourite reptile? ',
//           default: 'Alligator'
//       },
//   ])
//     .then(answers => {
//       console.info('Answer: ', answers.favReptile) ;
//     });


// ATTENTION!
// if you get an error to load ES module "type", you need to add  "type": "module",
// on row 5 in the package.json file under description and the error will disappear 

// ----------------------------------------------------------------------------

// ====== Example 2 : Pizza Toppings 


import inquirer from 'inquirer';

    const toppingArray = ["cheese", "peperoni", "onions", "olives", "mushrooms", "tuna"];
    
    inquirer.prompt([
        {
          name: "pizza_topping",
          type: "checkbox", 
          message: "Choose your topping, carefully!", // what will appear on the screen Qs
          choices: toppingArray,
        },
    ])
    .then((answer) => {
      console.log(answer.pizza_topping);
    });


// GITIGNORE
// if you want to ignore specific files or modules 
// package.json file let's us know which depenendices we've installed 
// add node modules into the .gitignore folder


