//MAP(callback, this)

const array = [9, 4, 16, 49];
const numbers = array.map(function(num){
    num *= 2;
    return num;
});

console.log(numbers);
console.log(array);