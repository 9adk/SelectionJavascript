var prompt = require('prompt-sync')();
function leapYear(year){
    return  (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
}

let yearInput = prompt("Enter the input for year: ");
let output = leapYear(yearInput);
if(output){
    console.log("Leap year");
}else{
    console.log("Not a Leap year");
}
