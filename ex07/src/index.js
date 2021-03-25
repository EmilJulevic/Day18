let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
let uniqueSet = new Set(numberArray);
let uniqueArray = [];

for (let number of uniqueSet) {
    uniqueArray.push(number);
}
uniqueArray.sort((a,b) => {
    return a - b;
});
console.log(uniqueArray);
module.exports = { numberArray, uniqueArray };
