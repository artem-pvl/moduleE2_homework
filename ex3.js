let str = 'Very long string';

let revStr = '';
for(let i = 0; i < str.length; i++){
    revStr = str[i]+revStr;
}
console.log(revStr);
