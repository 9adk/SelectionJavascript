var prompt = require('prompt-sync')();
let value = prompt('Enter a single digit no:');
var string = "Number is ";
switch(parseInt(value)){
    case 0:
        console.log(string + "Zero");
        break;
    case 1:
        console.log(string + "One");
        break;
    case 2:
        console.log(string + "Two");
        break;
    case 3:
        console.log(string + "Three");
        break;
    case 4:
        console.log(string + "Four");
        break;
    case 5:
        console.log(string + "Five");
        break;
    case 6:
        console.log(string + "Six");
        break;
    case 7:
        console.log(string + "Seven");
        break;
    case 8:
        console.log(string + "Eight");
        break;
    case 9:
        console.log(string + "Nine");
        break;
    default:
        console.log("Invalid input");
}