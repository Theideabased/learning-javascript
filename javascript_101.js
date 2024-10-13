var number = 5; // in-line comment
/*
this is the best way to 
write a documentation in 
javascript just enjoy the course
and keeping learning
*/
/* Data types:
undefined, null, boolean, string, symbol, number, and object
*/

// let declare three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";

//Declarations in javascript are case sensitive
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
var myVar = 11;

// incrementing in javascript
myVar = myVar + 1;
// or
myVar++
// decrimenting in javascript
myVar = myVar -1
//or
myVar--

//
var remainder;
remainder = 11 % 3;

// only modify code below this line

// compound augumented programming

var a = 10;
var b = 10;
var c = 10;

// Either adding substraction multiplying or dividing is the same thing

a = a * 5;
b = b * 10;
c = c * 15;
// is the same as 
a *= 5;
b *= 10;
c *= 15;
// as so on for all the other BODMAS

var myFirstname = "Seyi";

var myStr = "FirstLine \n SecondLINE";
var myName = "Seyi"
// Getting the length of a string
length = myName.length;
//Getting variables in a string

firstLetterofmyName = myName[0]

// String are immutable
lastLetter = myName[myName.length -1]

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    //Your code below this line
    var result = "";
    result += "The " + myAdjective +" "+ myNoun+" " + myVerb + " to the store " + myAdverb
    // Your code above this line
    return result;
}
// Change the words here to test your function

// Array
var ourArray = ["John", 23];

//Nested Array
var myArray = [[1,2,3], [5,6,7]]

ourArray[0] = 45;
ourArray.push(34);

var myList = [["cereal", 3], ["milk", 4]]


// Using function in javascript
function ourReusableFunction(a, b) {
    console.log(a - b)
}

function trueofFalse(wasThatTrue){
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return false
}

// Double equal sign is goin to change the two values to the same type
// But the === which is the strict equal sign is not going to change it to same type

// same as the strict not equal and strict not equal

// if (val <= 50 && val >= 40) { //This is a for and operator
//     return "yes"
// }

// if (val <= 50 || val <=30) { //This is for the or operator
//     return "No"
// } else if( val < 4) {
//     return "yes"
// } else {
//     return "who cares"
// }// this about the other cause ones the first loop is done it is not going to check the other code


var num = 6
if (num < 5){
    return "Tiny"
}else if(num < 10){
    return "Small"
}else {
    return "Huge"
}

//golf code
var names = ['Eagle', 'Par']
function golfScore(par, strokes){
    if (strokes == 1){
        return names[0]
    }else if (strokes <= par -2) {
    return names[1]
    }
}

// switch statements
function caseInSwitch(val){
    var answer ="";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "beta";
            break;
        case 4:
            answer = "beta";
            break;
        default:
        answer = "stuff";
        break;
    }
    return answer;
}

// You can use either if or switch as you which

// you can return the boolean as the case may be 


// counting function code
var count = 0;
function cc(card){
    switch(card){
        case 2:
    }
    return "Change Me"
}

//object in javascript are like dictionary in python
// you can use the dot notation to add and change properties
// you will use delete to delete element in the object

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    }else {
        return "Not found"
    }
}

// using while loops 
var thisList = [];
var i = 0;
while(i < 5) {
    thisList.push(i)
    i++;
}
// for loop is also used
for (var i = 0; i < 5; i++){
    thisList.push(i);
}

//Looping through and array with a for loop in javascript
var myArr = [2,3,4,5,6];
for (var i = 0; i < ourArray.length; i++){
    total += myArr[i]
} 


// Do while loop

//Math.random() this will give a random fraction
// Math.floor(Math.random() * 10) this will approximate to the nearest whole number from 0 to 9
// for a range of number let us randomize the number
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// using the parseInt function
function convertToInteger(str) {
    return parseInt(str)
}
// using the radix with the parseInt for the base
function convertToInteger(str) {
    return parseInt(str, 2)//this will parse the interger as base two
}

// using the tenary operation
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

// Different btw let and var
// let will not allow you do declare a statement twice
// You cannot reassign a const 
// Eventhough const is not assignable it can actually be mutated

// Object.freze(variable) will not allow the object to be mutable

//you can even use .filter to filter an array in a function
// ...args is the on that will recieve numbers of argument and return the result
// arr2 = [...arr1] is the same as copy in python