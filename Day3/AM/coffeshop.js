import inquirer from "inquirer";

let menu = {            //menu is the object coffee is key and number is value
    coffee: 3,          // 3 is stored in coffee
    tea: 2.5,           // 2.5 is stored in tea

    
}
let menuItems = []

for (const key in menu) {
    // console.log(key)            //key name
    // console.log (menu[key])     //value of key
    // console.log (`${key} - ${menu[key]}`) 
    menuItems.push(key)
}

class CoffeeShop {
    constructor (name) {
        this.name = name
        this.order = []
        this.total=0
    }
    calculateTotal() {
        this.total=0
        for (let i = 0; i <this.order.length;i++) {
            this.total += menu[this.order[i]]               // contents of order item i 
        }
        return this.total
    }
    set updateOrder (newItem){
        this.order.push(newItem)
    }
}

const responce = await inquirer.prompt([
    {               //array of objects
    type: 'input',
    name: 'getName',
    message: "Wahst Your named?"
    }
    // },                   to add more objects
    // {
    //     type 'input'
    // }
])

let customer = new CoffeeShop(responce.getName)

const checkout = aysnc () => {
    console.log(`
        You Ordered:
        ${customer.order.map((item) =>{
            return `${item} = £${menu[item]}`
        })}
        total:
        £${ customer.calculateTotal().toFixed(2)}
    `)

    const pay = await inquirer.prompt([{
        type: 'input',
        name: ' totalMoney',
        message: "Please Pay here",
        validate(value) {
            if (isNaN(value)){
                return "Please enter a Number"
            }else if (customer.total > value){
                return "you dont have enough money"
            } else{
                return true
            }
        }
    }])
    

    console.log (`
        thank You ${customer.name}
        Order: ${customer.order.map((item) =>{
            return `${item} - £${menu[item].toFixed(2)}`
        })}
        Total: £${customer.total.toFixed(2)}
        You Paid: £${parseInt(pay)}
    `)

const askForOrder = async () => {
    const order = await inquirer.prompt([
        {
            type: 'list',
            name: 'getOrder',
            message: "What do you want to order?",
            choices: menuItems
        }
    ])

    If (order.getOrder === " -Go To Check out-"){
        console.log(customer.calculateTotal() )
        return;
    }else{
        customer.updateOrder = order.getOrder
    }
    
    }
    
}