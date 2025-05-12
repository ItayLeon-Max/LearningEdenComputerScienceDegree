// Condition

// if
// Syntax: if(condition) { ... }

// operator: < > == != >= <=

const number: number = 6;
// if(number > 10) {
//     console.log("Number is BIG than 10");
// }

// if else
// Syntax: if(condition) { ... } else { ... }
if(number > 10){ 
    console.log("Number is BIG than 10");
    console.log("Number is BIG than 10");
    console.log("Number is BIG than 10");
    
} else {
    console.log("Number is SMALL than 10");
}

// if else if
// Syntax: if(condition) { ... } else if(condition) { ... } else { ... }
if(number > 10) console.log("Number is BIG than 10");
else if(number < 10) console.log("Number is SMALL than 10");
else console.log("Number is EQUAL to 10");

const foo = 5;
if(foo != 5){
    console.log("foo is BIG than 5");
} else {
    console.log("foo is SMALL than 5");
}


