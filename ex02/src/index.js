function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
function* insideGenerator2() {
    yield 10;
    yield 11;
    yield 12;
    yield 13;
    yield 14;
    yield 15;
}
function* insideGenerator3() {
    yield 6;
    yield 7;
    yield 8;
    yield 9;
}

let iterator = myGenerator();
let fifteenArray = [];
let fifteenArrayStr = "";

for (let i = 0; i <= 15; i++) {
    let { value } = iterator.next();
    fifteenArray.push(value);

    if (value != undefined) fifteenArrayStr += value + "#, ";
    else fifteenArrayStr += value + "!";
}

console.log(fifteenArrayStr);
module.exports = { fifteenArray, myGenerator };
