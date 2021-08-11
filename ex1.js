let val;
val = prompt("enter value: ");
val = +val;
if ((typeof val == 'number') && val){
    let parity = val % 2 ? 'odd' : 'even';
    console.log(val+' is '+parity);
} else {
    console.log('oops!');
}
