// Looping Statement 
/*
    Looping statement are currently named iteratives
*/

// for loops
/*
    we have three element to for 
    (initialisation, condition, final expression)
    we have many kind of for iteration
*/
for(let i=1; i <= 100; i++) {
    console.log(i);
   };

// for ... in
let color = {first:"blue",second:"pink"};
for (const key in color){
    console.log(color.first) 
};

// for ... of
let animals = ["dog", "cat", "lion"];
for (const element of animals) {
    console.log(element);
};

// use for ... of with a string data type
let names = "adam";
for (const element of names) {
    console.log(`${names} the next letter of your name is ${element}`);
}


// While Loop
/*
    The while statement creates a loop that repeats a block of code if a specified 
    condition evaluates to true.
*/
let num = 1;
while (num <= 10) {
    num ++;
    console.log(num);
}

// do ... while Loop
/*
    it's the same but, do ... while execute block before condition
*/
do {
    num++
    console.log(num)
} while (num < 10);