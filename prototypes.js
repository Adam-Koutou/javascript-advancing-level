// Prototype chain
function Vehicle(speed) {
    this.speed = speed;
    this.moveForward = function () {
    return `Moving forward at ${this.speed}`;
    };
};

// create an instance of Vehicule
const Automobile = new Vehicle(55);

/*
    The instance of the Vehicule object can've
    her own properties and have accex to parent properties
    This's the inheriting process
*/

Automobile.wheels = 4;
Automobile.engine = 'electric';

// create grandChild of Vehicule = child of Automobile
const Truck = Object.create(Automobile);
Automobile.doors = 4;
Truck.hasOwnProperty("doors")       // false 

// to give child the own property = assign it a value
Truck.doors = 2;
Truck.hasOwnProperty("doors")       // true = child can access to parent's prototype chain

// deleting properties
delete Truck.doors
