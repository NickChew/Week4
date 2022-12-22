class coffeShop {
    constructor (){
        this.cofShpName = "Coffay!";
        this.address = "100 HighStreet";
    }
}    
class customer extends coffeShop {                  //like a blueprint we can pass parameters to eg name order wallet etc.
    constructor (name, orderNo, order, wallet){
        super (name, orderNo, order, wallet);
        this.name = name;
        this.orderNo = orderNo;
        this.order = order;
        this.wallet = wallet;
    }
// need a loop to total drink price using drinkprice array (order), see if less than wallet if yes 
// subtract and give total and adjust wallet else say cant afford etc. check length of array order
// need a loop to add every other array item+2 [1],[3],[5] (from order)etc up and give a total, check total is less than wallet 
// for i=0;i<=order.length;i++{ 
//      bill=order(i) + order[i+1] 
// checktotal()
// if bill <= wallet{
//      wallet=wallet-bill
// console.log(`${customer.name} can afford this order!`);
// console.log(`${coffeShop}, ${customer} your order ${order()} costs ${bill}`);
//  else    
// console.log(`${customer.name} cannot afford this order!`);  
// console.log (checktotal);   
} 

console.log (new customer("Bob",35, [{drinkName:"Coffee", drinkPrice:6}], 20));         // inserts new data into name, orderNo, order, wallet
console.log (new customer("Sam",36, [{drinkName:"Hot Chocy", drinkPrice:5},{drinkName:"Tea", drinkPrice:4}], 5));  // sam has ordered 2 drinks and not enough £

// let totalPrice = drink1.price + drink2.price;
// console.log(`Total Cost = £${totalPrice}`);
// if (Robert.walletAmount - totalPrice > 0){
// console.log(`${Robert.customerName} can afford this order!`);
// } else {
// console.log(`${Robert.customerName} cannot afford this order!`);// }
    

// console.log(coffeShop(),customer(),order(),totalCash());

 