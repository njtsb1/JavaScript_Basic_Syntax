// conditional structures

// decision structures

// if

/* var player1 = 0;
var player2 = 1;
var score; */

// nesting if's
// if ternary
/* player1 != -1 && player2 != -1 ? console.log('the players are valid') : console.log('the players are not valid')
if (player1 > 0 && player2 == 0) {
    console.log('player 1 scored a point');
    score = player1 > player2;
}
// using else if
else if (player2 > 0 && player1 == 0) {
    console.log('player 2 has scored');
    score = player2 > player1;
} */
/* // using the else
else {
    console.log('nobody scored');
} */

// using switch case
/* switch(score) {
    case score = player1 > player2:
        console.log('player 1 won');
        break;
    case score = player2 > player1:
        console.log('player 2 won');
        break;
    default:
        console.log('nobody scored')
} */


// repetition structures
// let array = ['value1', 'value2', 'value3', 'value4', 'value5']
// let object = { property1: '12', property2: 'value2', property3: 'value3'}

/* // for - run until false
for (let i = 0; i < array.length; i++) {
    console.log(i);
} */


/* // for/in - perform repetition from a property
// with array
for(i in array) {
    console.log(i);
}

// with object
for(i in object) {
    console.log(i);
} */

/* // for/of - execute repetition from a value
// with array
for(i of array) {
    console.log(i);
}

// with object doesn't work because it's not iterable
for (i of object.property1) {
    console.log(i);
} */


// while - executes while true
// var a = 0;
/* while (a < 10) {
    a++;
    console.log(a)
} */

// do - run until false
/* of {
    a++;
    console.log(a);
} while(a < 10); */