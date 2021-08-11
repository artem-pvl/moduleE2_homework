let X;

console.log(typeof X);
switch(typeof X){
    case 'number':
        console.log('number');
        break;
    case 'string':
        console.log('string');
        break;
    case 'boolean':
        console.log('boolean');
        break;
    default:
        console.log('undefined');
}