// classes provide a syntax for working in JavaScript in an object-oriented way
/*
» Encapsulation = "private state" for each object
» Abstraction = "public method" for each obj
» Inheritance = child inherit parent method + attr (properties)
» Polymorphism = child can modify parent state (method)
» Base Classes = keyword to create new class of obj == class ObjName {}
*/

// create class and store it inside the variable
const parent = class Newparent{};
const myinstance = new parent();


// Derived class
// use extends keyword to create it
class Parent {};
class firstchild extends Parent{};


// use the constructor in your class
class Beverage {
    constructor(size,temperature) {
    this.size = size;
    this.temperature = temperature;
 }
};

// constructor in Derived class
class Coffee extends Beverage {
    constructor(size, temperature, hasCaffeine, howYouTakeIt){
    // use super() to init parent parameters
    super(size, temperature);
    this.hasCaffeine = hasCaffeine;
    this.howYouTakeIt = howYouTakeIt;
    }
    drink(){
        if (this.temperature !== 'scalding'){
        console.log('now drinking');
        }
    }
};

// to use Coffee class you need to create an instance of this obj
const morningCoffee = new Coffee('64oz', 'hot', true, 'black');

// Creating methods in a class
class Beverage {
    constructor(size, temperature) {
        this.size = size;
        this.temperature = temperature;
    }
    drink(){
            if (this.temperature !== 'scalding'){
            console.log('now drinking');
            }
    }
};


// creating Field inside the class
// methods + field = members
class Cat {
    paws = 4;
    sound = 'meow';
    constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
    }
};

// private members
// use # as prefix of your property's name
class Cat {
    #isSleeping;
    paws = 4;
    sound = 'meow';
    constructor(name, favoriteToy) {
        this.name = name;
        this.favoriteToy = favoriteToy;
    }
    #takeNap(){
        this.#isSleeping = true;
     }
};

//static members
 class Cat {
    static species = 'Felis catus';
    #isSleeping;
    paws = 4;
    sound = 'meow';
    constructor(name, favoriteToy) {
        this.name = name;
        this.favoriteToy = favoriteToy;
    }
    static herd(){
        throw new Error(`You can't do that.`);
    }
    #takeNap(){
        this.#isSleeping = true;
    }
    play() {
        console.log(`Playing with ${this.favoriteToy}.`);
        this.#takeNap();
    }
};
