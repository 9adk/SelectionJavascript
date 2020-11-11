var prompt = require('prompt-sync')();
let num = prompt("Enter the number");
var result = "";
if (num == 1) {
    result = "unit";
}
else if (num == 10) {
    result = "tens";
}
else if (num == 100) {
    result = "hundreds";
}
else if (num == 1000) {
    result = "thousands";
}
else if (num == 10000) {
    result = "ten thousands";
}