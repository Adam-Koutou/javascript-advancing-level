// Array is the the object which store data type.
/*
    Array work as lsts of element
    We often use litteral notation
*/
const colors = ["red", "blue","purple", "pink"];

// use Array() constructor
const book = new Array();

// assign an element to youre array when initialisation
const newBook = new Array('my book', 'youre book');

// split() function to create an array from string data
let bibleNames = 'adam,eve,moses';
bibleNames.split(',');

// Array element 
newBook[0];       // get the specific element index inside the array
wBook.length;    // get the size of array == number of element

// Modify the array content
newBook[0] = "modifyValue";

// Deleting value inside array
delete newBook[0];
/*
    After deleting array index value, yooure array keep the same size
    the array become the sparse array !
*/


// Array method
newBook.push('Last book');      // add element at the end
newBook.pop();                  // romoving the last element
newBook.shift('First book');    // removing element at begining
newBook.unshift('New Book');    // add element at begining
newBook.slice(1,2);             // return new array with element slicing

const table = newBook.splice(1,2);

// create your own function
function getsquare(number) {
    return number**2;
};

getsquare(2)        // call the function


// callback function
/*
    callback function is function wich can call other function  as parameter
    use reduce() methode as callback function
*/
const numbers = [0,1];

let myNumbers = numbers.reduce(
    (a,b) => a + b
);

// or 
let myNumber = numbers.reduce(
    function (a,b) {
        return a + b
    },0
);


// mapping an array

const students = ["adam","orphet","ninelle","amani","ven"];
const getstudent = students.map(
    (number) => number.startsWith("a")
);

// or

let mystudents = students.map(
    function (names) {
        let a = names.startsWith("a");
        return a
    }
);


// Unpacking 
let [student1,student2,student3] = students;



// Spreading Array
/*
    Spread syntaxe help to create a new array with the all value of
    other array by using three dot
*/

const classroom = [...students, 'new student'];
