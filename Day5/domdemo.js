let pet=null;

class Cyberpet {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.thirsty = 100;
    }
//methods
    drink(){
        this.health += 10;
        this.thirsty += 15;
    }

    eat() {
        this.hunger += 10;
        this.thirsty -= 7;
        this.health += 15;
    }

}

let newPet = new Cyberpet("john")

newPet.eat()

console.log ( newPet )

class Dog extends Cyberpet {
    constructor(name) {
        super (name)
        this.happy = 100;
    }
    playFetch() {
        this.happy += 20;
        this.thirsty -= 10;
        this.hunger -= 10;
    }
}

class Cat extends Cyberpet {
    constructor(name) {
        super (name)
        this.happy = 100;
    }
    groom() {
        this.lazy += 10;
        this.thirsty -= 5;
        this.hunger -= 5;
    }
}

let submitBtn = document.getElementById ("submitBtn")

submitBtn.addEventListener('click',() =>{
   let chosenPet = 'dog'
    document.querySelectorAll('.choice') forEach((element)) => {
        if(element.checked){
            chosenPet = element.value
        }
    }
})

if (chosenPet === "dog"){
    pet = 
}




document.addEventListener('keypress',(event) =>{
    if (event.code === "Enter"){

    }
})