var prompt = require('prompt-sync')();
let day = prompt('Enter the day:');
let month = prompt('Enter the month:');

if(month == "March" && day >= 1 && day <= 31){
    console.log("true");
}else if(month == "April" && day >= 1 && day <= 30){
    console.log("true");
}else if(month == "May" && day >= 1 && day <= 31){
    console.log("true");
}else if(month == "June" && day >= 1 && day <= 30){
    console.log("true");
}else{
    console.log("false");
}
