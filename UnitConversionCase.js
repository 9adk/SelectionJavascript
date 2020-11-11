var prompt = require('prompt-sync')();
let choice  = prompt('Unit Conversion: 1.Feet to Inch 2.Feet to Meter 3.Inch to Feet 4.Meter to feet ' );
let num = prompt('Enter a value to for conversion: ');

switch (parseInt(choice)) {
    case 1: 
        console.log(num +" Feet = " + num * 12 + " Inch"); 
        break;  
    case 2: 
        console.log(num +" Feet = " + num * 0.3048 + " Meter"); 
        break;
            
    case 3: 
        console.log(num +" Inch = " + num / 12 + " Feet"); 
        break;
    
    case 4: 
        console.log(num +" Meter = " + num * 3.281 + " Feet"); 
        break;

    default:
        console.log("Ivalid Input");
}