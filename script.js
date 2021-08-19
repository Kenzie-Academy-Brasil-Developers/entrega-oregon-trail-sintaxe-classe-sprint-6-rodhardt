

class Traveler {

    constructor(name) {
        this.name = name
        this.foodQuantity = 1
        this.isHealthy = true
    }

    hunt() {
        this.foodQuantity += 2
    }
    eat() {
        if (this.foodQuantity === 0) {
            this.isHealthy = false
        }
        if (this.foodQuantity > 0) {
            this.foodQuantity--
        }
    }

}


class Wagon {

    constructor(capacity) {
        this.capacity = capacity
        this.currentPassengers = []
    }

    getAvailableSeatCount = () => {
        return this.capacity - this.currentPassengers.length
    }

    join = (travelerName) => {
        if (this.getAvailableSeatCount() > 0) {
            this.currentPassengers.push(travelerName)
            return `${travelerName} has joined the Wagon!`
        }
        return `There is no empty seats for ${travelerName}.`
    }

    shouldQuarantine = () => {
        let isSomeoneSick = false
        this.currentPassengers.forEach((element) => {
            if (!element.isHealthy) {
                isSomeoneSick = true
            }
        })
        return isSomeoneSick
    }

    totalFood = () => {
        return this.currentPassengers.reduce((acm, current) => {
            return acm + current.foodQuantity
        }, 0)
    }

}



// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);


