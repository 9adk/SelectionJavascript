var prompt = require('prompt-sync')();
let dayNumber = prompt('Enter the day no: ');
var string = "The day is ";
switch(parseInt(dayNumber)){
    case 1:
        console.log(string + "Monday");
        break;
    case 2:
        console.log(string + "Tuesday");
        break;
    case 3:
        console.log(string + "Wednesday");
        break;    
    case 4:
        console.log(string + "Thursday");
        break;    
    case 5:
        console.log(string + "Friday");
        break;
    case 6:
        console.log(string + "Saturday");
        break;
    case 7:
        console.log(string + "Sunday");
        break;
    default:
        console.log("Invalid input");
}
