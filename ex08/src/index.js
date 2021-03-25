let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);
let unionSet = new Set([...one, ...two]);

let intersectionSet = new Set(
  [...one].filter( x => {
    return two.has(x);
  })
);
let differenceSet = new Set(
  [...one].filter( x => {
    return !two.has(x);
  })
);

console.log(one);
console.log(two);
console.log(unionSet);