let shopingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
]);

let arrKey = [];
let arrValue = [];

for (let col of shopingList.entries()) {
    arrKey.push(col[0]);
    console.log(`groceries: ${col[0]}`);
}
for (let col of shopingList.entries()) {
    arrValue.push(col[1]);
    console.log(`amount: ${col[1]}`);
}
for (let col of shopingList.entries()) {
    console.log([col[0], col[1]]);
}

module.exports = { shopingList, arrKey, arrValue };