let myArr = [];

function* multiplication(x) {
    for (let i = x; i >= 0; i--) {
        yield (x*=2);
        myArr.push(x);   
    }

}
let num = multiplication(3);

for (let i = 0; i < 3; i++) {
    console.log(num.next().value);
}

module.exports = multiplication;
