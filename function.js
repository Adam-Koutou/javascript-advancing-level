// Introduce to function
/*
    function is a small program inside youre program
    wich can take data (input) and return result (outup)
    values bettwen parantheses are called by parameters
    The values you pass into a function when you call it are called arguments.
    A function inside an object is called a method.
*/

// create a function =  function definition
function squarednumber(nb) {    
    return nb**2
};
squarednumber(5);       // call the function + passing arguments

// Using Top-level functions
Boolean(0);
Number("2025");          // transform all value to number
String(2025);
isNaN("23")             // false


// Using rest parameters
function getfunc(orderby,...items){
    
};
getfunc('name','age','size');

// default parameter
function greetUser(firstName='Valued', lastName='Customer'){
    alert(`Hello, ${firstName} ${lastName}`);
};
greetUser()

// Arrow functions
const bird = (birds) => {
    present = birds + " my favorite";
    return present;
}

bird("eagle");

// Using context and this
const mycar = {
    speed : 20
};

function getspeed(params) {
    this.params = params;
    console.log("succes"); 
};


// using context function with call()
const myCar = {
    speed: 0,
   };
function drive(vehicle, speedLimit) {
    vehicle.speed = speedLimit;
    console.log(`Driving at ${vehicle.speed}mph.`);
   };

drive(myCar,55);
drive.call(myCar, 65);

// sharing function from object to another object
// to do this, we need to passing function as parameter inside the method of the first object
const myCars = {
    speed: 0,
    operate(speedLimit, callback) {
    callback(speedLimit);
    console.log(`myCar is driving at ${this.speed}`);
    },
};

function drives(speed) {
    this.speed = speed;
    console.log(`Start driving at ${this.speed}`);
};

myCars.operate(55, drives)

// second example :
const mycolor = {
    color : "blue",
    setcolor(rgb,colortype){
        colortype(rgb);
        console.log(`my favorite color is ${this.color}`);
    }
};

function colorbook(hexadec) {
    this.hexadec = hexadec;
    console.log(`I want to used ${this.hexadec} as new favorite color`)
};

mycolor.setcolor("red", colorbook);

// passing function to the child to change parent

const bookstore = {
    books: ['Ulysses', 'The Great Gatsby'],
    removeBook(title) {
        let newList = this.books.filter((book) => book != title);
        this.books = newList;
        this.displayBookstore();
    },
    displayBookstore() {
        const renderTarget = document.getElementById('bookstore');
        const bookList = this.books.map((book) => `<p>${book}</p>`);
        renderTarget.innerHTML = bookList.join('');

    shoppingCart.displayCart(this.removeBook.bind(this));
    },
};

const shoppingCart = {
    itemsInCart: ['The Great Gatsby'],
    handleClick(removeBook) {
        removeBook(this.itemsInCart);
    },
    displayCart(clickHandler) {
        const renderTarget = document.getElementById('cart');
        const itemsInCart = this.itemsInCart.map((item) => `<p>${item}</p>`);
        const checkoutButton = "<button id='checkout'>Check out</button>";
        renderTarget.innerHTML = itemsInCart.join('') + checkoutButton;
    document
        .getElementById('checkout')
        .addEventListener('click', () => this.handleClick(clickHandler));
    },
};

bookstore.removeBook('The Great Gatsby');

// Chaining functions
// function chaining works by passing the same object to multiple functions sequentially
const robot = {
    currentActivity: undefined,
    walk() {
        this.currentActivity = 'walking';
        return this;
    },
    talk() {
        this.currentActivity = 'talking';
        return this;
    },
    write() {
        this.currentActivity = 'writing';
        return this;
    },
};

robot.walk().talk().write();
