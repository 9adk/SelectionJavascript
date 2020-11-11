var prompt = require('prompt-sync')();
let dayNumber = prompt('Enter the day no: ');
var string = "The day is ";
if(dayNumber == 1){
    console.log(string + "Monday");
}else if(dayNumber == 2){
    console.log(string + "Tuesday");
}else if(dayNumber == 3){
    console.log(string + "Wednesday");
}else if(dayNumber == 4){
    console.log(string + "Thursday");
}else if(dayNumber == 5){
    console.log(string + "Friday");
}else if(dayNumber == 6){
    console.log(string + "Saturday");
}else if(dayNumber == 7){
    console.log(string + "Sunday");
}else{
    console.log("Invalid input");
}
