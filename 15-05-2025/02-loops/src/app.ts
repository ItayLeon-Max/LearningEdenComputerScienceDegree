//Loops: (while, for, do while)
// console.log("Loops");
// console.log("Loops");
// console.log("Loops");
// console.log("Loops");
// console.log("Loops");
// console.log("Loops");
// console.log("Loops");
// console.log("Loops");
// console.log("Loops");
// console.log("Loops");
// console.log("Loops");

// For Loop
// syntax: for(index; condition; increment/decrement) { // code block to be executed }
for(let index = 1; index <= 5; index++) {
    console.log("Loops");
}

// ex1: 1-1000
for(let index = 1; index <= 1000; index++){
    console.log(index);
}
// ex2: option 1
for(let index = 1; index <= 1000; index++){
    if(index % 2 == 0) console.log(index);
}

//ex2: option 2
for(let index = 2; index <=1000; index+=2){
    console.log(index);
}
 
// print * 4 times
for(let row = 1; row <= 4; row++){
    let star = "";
    for(let column = 1; column <= 4; column++){
        star += "*";
    }
    console.log(star);
}

for(let row = 5; row >= 1; row--){
    let star = "";
    for(let column = 1; column <= row; column++){
        star += "*";
    }
    console.log(star);
}

for(let row = 1; row <= 5; row++){
    let star = "";
    for(let column = 1; column <= row; column++){
        star += "*";
    }
    console.log(star);
}

/*
1
12
123
1234
12345
 */

for(let row = 1; row <= 5; row++){
    let star = "";
    for(let column = 1; column <= row; column++){
        star += column;
    }
    console.log(star);
}

// while loop
let index = 1;
while(index <= 5){
    console.log("Loops");
    index++;
}

// do-while loop
let index2 = 1;
// do {
//     console.log("start")
// } while(index2 <=5){
//     console.log("Loops");
//     index2++;
// }

const str = "Hello World";
for(let index = 0; index < str.length; index++){
    console.log(str[index]);
}


