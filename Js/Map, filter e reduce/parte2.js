//filter

function filterArray(array){
    return array.filter(function(num){
        return num % 2 === 0;
    });
}

const array = [1, 2, 3, 4, 5, 6];
console.log(filterArray(array));