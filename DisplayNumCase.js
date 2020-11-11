var prompt = require('prompt-sync')();
let num = prompt("Enter the number: ");
var result = "";
switch (num) {
    case 1:
        result = "unit";
        break;
    case 10:
        result = "tens";
        break;
    case 100:
        result = "hundreds";
        break;
    case 1000:
        result = "thousands";
        break;
    case 10000:
        result = "ten thousands";
        break;
    case 100000:
        result = "hundreds of thousands";
        break;
}
console.log(result);