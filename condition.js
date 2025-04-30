// Conditional Block

// if ... else statement 
/*
    We used this branching statement to define some logic in our code
    When a first condition is true (if) = code execute and 
    when first condition is false (else) = other code execution 
*/

let username = "adam";
if (username == "adam"){
    let address = " Brazzaville";
    console.log(address);
}
else {
    address = "You're not register ! :)";
    console.log(address);
}

// multiple path : if...else if...else
if (username =="jerold"){
    console.log("it me :)");
}
else if (username =="jhon"){
    console.log(`${username} you're not welcome her`)
}
else {
    console.log("nothing special... just waitnig!")
}


// Ternary operator 
/*
    use ternary operator help you to write if...else in a single line
    just replace if by ? and else by :
    Waring : ternary operator is used for only two choice no more
*/
let color = "blue";
let favoriteColor = color=="blue"?(`my favorite color is ${color}`) : ("i don't have a favorite color yet");
console.log(favoriteColor);



// switch statement
/*
    With switch statement you can decide wich possible statement
    to run based on the result 
*/
switch(username){
    case "adam":
        console.log(`${username} you're the author of this tutorial`);
        break;
    case "jhon":
        console.log(`we don't know someone called by ${username}`);
        break;
    default:
        console.log('Sorry we don\'t found the author ');
};


