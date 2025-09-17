//Create simple class with private properties and methods using encapsulation in JavaScript.
class Person {
    // Private fields
    #name = 'mahesh';
    #age    = 25;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // Public method to get name
    getName() {
        return this.#name;
    }

    // Public method to set name
    setName(name) {
        this.#name = name;
    }

        // Public method to get age
    getAge() {
        return this.#age;
    }

    // Public method to set age
    setAge(age) {
        if (age > 0) {
            this.#age = age;
        } else {
            console.log('Please enter a valid age.');
        }
    }
}

// Example usage:
const person = new Person('mahesh', 25);
console.log(person.getName());
console.log(person.getAge());

//create simple example of abxtraction in javascript
//Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object.
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Public method to start the car
    start() {
        console.log(`The ${this.brand} ${this.model} is starting.`);
        this.#igniteEngine();
    }

    // Public method to stop the car
    stop() {
        console.log(`The ${this.brand} ${this.model} is stopping.`);
        this.#turnOffEngine();
    }

    // Private method to ignite the engine
    #igniteEngine() {
        console.log('Engine ignited.');
    }

    // Private method to turn off the engine
    #turnOffEngine() {
        console.log('Engine turned off.');
    }
}

// Example usage:
const myCar = new Car('Toyota', 'Camry', 2020);
myCar.start();
myCar.stop();