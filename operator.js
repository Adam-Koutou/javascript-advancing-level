// The symbols or keywords that make expressions do their work are called operator

// Arythmetic operator
// +, -, /, 
// Operator precedence
/*
    many operator can be used in the same expression
    we'll make this with operator precedence
    Operator Precedence
        Division (/) and Multiplication (*) precedence = 13
        Addition (+) and Substraction (-) precedence = 12
        Assignement (=) precedence = 2
    
    PS : this mean that * and / are priority on + or -
*/

let x;
x = 5 - 1/2 // first : 1/2 = 0.5 and 5 - 0.5 = 4.5 at the end we assigne x = 4.5

// To controle operator priority, use parentheses
x = (5-3) - (1*2/2*2)


// Assignement operator
y = z = k = 2

// Comparaison operator
/*
    ==, !=, >=, <=, <, >, ===, !===
*/

3 != 2          //true
3 == 3          //true (simple equality)
3 === "3"       // false (strict equality)
3 >= 2          // true


// concatenate operator 
let numberOfHats = 10;
console.log('Harriet has ' + numberOfHats + " hats.");

// Logical Operator
/*
    AND = &&
    OR = ||
    NOT = !
    Logical operator return true or false value
*/
