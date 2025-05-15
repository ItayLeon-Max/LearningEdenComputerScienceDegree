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

// get max number with if else:
const foo1: number = 578;
const foo2: number = 6;
const foo3: number = 100;
// get max number with if else:
// if(foo1 > foo2) {
//     if(foo1 > foo3) {


if(foo1 > foo2){ // 57 > 6 == true
    if(foo1 > foo3){ // 57 > 100 == false
        console.log(`max is ${foo1}`);
    } else {
        console.log(`max is ${foo3}`);
    }
} else if(foo2 > foo3){ // 6 > 100 == false
    console.log(`max is ${foo3}`);
} 

// || = OR , && = AND
// syntax: if(condition1 || condition2) { ... } : if(condition1 && condition2) { ... }
const foo4: number = 6;
const foo5: number = 5;
if((foo4 > foo5) || (foo4 < foo5)){
    //enter code here
} else {
    //enter code here
}

if((foo4 > foo5) && (foo4 < foo5)){
    //enter code here
} 

// shorthand if
// syntax: condition ? block : else

const foo6: number = 5;
const result = foo6 >= 5 ? "foo6 is BIG than 5" /*true */ : "foo6 is SMALL than 5" /*false */ ;
console.log(result);


