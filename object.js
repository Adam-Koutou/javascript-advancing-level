// Objects *
/*
    object have properties and methods
    method = function inside an object
*/

const pencil = {
    length: "7.5 inches",
    shape: "hexagonal",
    diameter: "1/4 inch",
    write: function(){console.log("you can not write now")},
    erase: function(){/*do erasing*/},
    sharpen: function(){/*do sharpening*/},
};

pencil.length           // return the property value
pencil.write()        // return the methode result
pencil.length = "6 inches"      //update property 
pencil.price = "0.5 dollar"     // add new property 

// use shallow copy of the object
const newpencil = {...pencil};
newpencil.shape     // use the same property

// Four way to crate an object
// create object with litteral notation
const mypencil = {
    "property1": "value1",
    "property2": "value2"
};

// or 
const mypencil2 = {};                // create empty object
objName2.property1 = "value1";      // set property

// Create object with constructor function
function Cat(name, type){
    this.name = name;
    this.type = type;
   }
const ourCat = new Cat('Murray', 'domestic short hair');


// Create object with Class 
/*
   Class is the tempolate of object
   class use the constructor 
   you can add properties and method in your class
   use "class" keyword to initialised 
*/

class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
};
const myDog = new Dog("boby", 5)


// create an object with Obect.create() method
const NewDog = {name:"Boby"};
const lastDog = Object.create(NewDog)
lastDog.name


// Modifying object
const Shape = {
    first : "straight",
    second : {
        primary : "rectangle",
        secondary : "triangle",
        ternary : "square",
    }
};
Shape.second.secondary      //Dot notation 
Shape.second['primary']     // Dot + square bracket notation
Shape['second']['ternary']  // Square bracket notation


// Comparing and copying object
const SecondShape = {
    first : "straight",
    second : {
        primary : "rectangle",
        secondary : "triangle",
        ternary : "square",
    }
};
Shape === SecondShape;              // object with copying values aren't the same
Shape.first === SecondShape.first;  // the same object value = true 

const ThirdShape = SecondShape;
ThirdShape.first = "rectangle";
ThirdShape.first === SecondShape.first      // result = true b(3rd are a reference of 2nd)
ThirdShape.third = "new shape";            // add bew propertiy
SecondShape.third                       // find the same property 

const NewThirdShape = {...SecondShape}        // shallow copy to resolve problem

