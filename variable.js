/* 
    In this section we'll learn variable concept
    And we'll see how to use it in practice

    Definition : Variable is like a box that store value

    Use your browser console to execute code and to see result

*/
// Declare variable 
let varName;        // let is keyword to declare mutable variable 

// Initialise variable
varName = "my name";    

// Declare and initialise variable in the same time
let varName2 = "my name";


// type of data 
// Tis is the primitive data 
let myName = "adam";     // string data
let quote = "\" my quote";   // if you whant to use quote in your string
let number = 1;          // int (integer data)
let number2 = 0.5;       //float (double)
let id = Symbol("my Unique id")    // Symbol() == create a unique javascript identifier
typeof myName;
typeof number;
typeof number2;
typeof id


// variable with Expression
/*
    You can use the basic operation on your data
    you can do addition, division andd so on...
*/
let seven = 7;
let eight = 8;
let sum = seven + eight;
let concat = "my name is " + myName;


// Create Constant variable with const 
/*
    Use this when you want to create immutable value,
     that can't change in the future 
     ex : Url, id, ...etc 
*/
const firstname = "adam";

// Template litteral string
/*
    you can concat string from many variables,
    by using $ symbol and {} == ${variableName}
    use the special quote like in this example
*/
let Format = `i wanna ${firstname} you ${myName}`;


// string built-in functions
/*
    chartAt() = return the indexe of string in the specific position
    concat() = sum of string 
    indexOf() == return the position of a specified value
    split() == split the string with a charactere
    slice() == substring() 
    replace() == replace a string by other string
    toLowerCase() == return lower string
    toUpperCase() == capitalize string (upper)
*/

myName.charAt(0);
myName.concat('',firstname);
myName.indexOf('d');
myName.split('');
myName.substring(1,2);
myName.slice(1,2);
myName.replace('d','lb');
myName.toLowerCase();
myName.toUpperCase();


// Number Datz built-in function
/*
    parseInt() == use to convert float data type to integer
    paerseFloat() == use to convert int to float
    Don't convert string data to float/integer == error 
    But you can convert string data if is character value is a number or float

*/

parseInt(3.734532);
parseFloat(9);
parseInt("3");
toString()


/*  Boolean Data Type (value always bettween True or False)
    All data can return a boolean if comparaison
    All data can be convert by boolean if put !! at the begining of it
*/
!!"adam";
!!1000;


// Compexe data type 
/*
    We've other data type called by complexe data type
    Object == sum of many data type in one. You can used all type of data in an object
    Object are this structure : ObjectName = {key:value} = this values are object properties
    Object is create as constant == okject can't be changed but her value can be changed
*/

const customer = {
    name: 'adam',
    address: 'Congo-Brazzaville',
    id: 1,
    isCustomer: true,
};

customer.name;   // check object properties 

// Array data type
/*
    Array is using to store items or data types
*/

const cities = [
    'Brazzaville',
    'New York',
    'Paris',
];

cities[1]   // Get a specific value of youre array by her position



// Scope 
/*
    scope is the place you store youre variable.
    And, you can give some priority for youre variable
    scope is like bedroom + livingroom + bathroom 

    Three type of scope :
        Global-scoped variable = used anywhere in program
        Function-scoped variable == local variable used inside a function
        Block-scoped variable == used inside the block (block is variable start by let/const and = {})
*/

