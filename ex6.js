let arr = [1, 2, 1, 1];
let res
res = arr.every(function fn(value, index, array){
    return value == array[0];
});

console.log(res)
