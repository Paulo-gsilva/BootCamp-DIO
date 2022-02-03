const myArray = [30, 30, 4556, 2, 1242, 2, 7, 4556, 14, 42, 14];

function findUnicValue(arr){
    const set = new Set(arr);

    return [...set];
    // ... spread usado para converter os valores do map em array
    //set por si só impede valores repetidos
}

console.log(findUnicValue(myArray));