let arr = [1, 2, 3, 4, 0, 31];

let even = arr.filter(element => ((element % 2) == 0) && (element != 0));
let odd = arr.filter(element => (element % 2) != 0);
let ziro = arr.filter(element => element == 0);
console.log(`even's: ${even.length}`);
console.log(`odd's: ${odd.length}`);
console.log(`ziro's: ${ziro.length}`);
