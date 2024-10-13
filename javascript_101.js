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

if (val <= 50 && val >= 40) { //This is a for and operator
    return "yes"
}

if (val <= 50 || val <=30) { //This is for the or operator
    return "No"
} else if( val < 4) {
    return "yes"
} else {
    return "who cares"
}// this about the other cause ones the first loop is done it is not going to check the other code


var num = 6
if (num < 5){
    return "Tiny"
}else if(num < 10){
    return "Small"
}else {
    return "Huge"
}

