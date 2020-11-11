var prompt = require('prompt-sync')();
let value = prompt('Enter a single digit no:');
var string = "Number is ";
if(value == 0){
    console.log(string + "Zero");
}else if(value == 1){
    console.log(string + "One");
}else if(value == 2){
    console.log(string + "Two");
}else if(value == 3){
    console.log(string + "Three");
}else if(value == 4){
    console.log(string + "Four");
}else if(value == 5){
    console.log(string + "Five");
}else if(value == 6){
    console.log(string + "Six");
}else if(value == 7){
    console.log(string + "Seven");
}else if(value == 8){
    console.log(string + "Eight");
}else if(value == 9){
    console.log(string + "Nine");
}else{
    console.log("Invalid input");
}
