function validArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

        if(typeof arr !== 'object') throw new TypeError('Não é um array de objetos');

        if(typeof num !== 'number') throw new TypeError('Não é um número');

        if(arr.length !== num) throw new RangeError('Tamanho do array deve equivaler ao número indicado')
    }

    catch(e){
        if(e instanceof ReferenceError){
            console.log('Reference Error');
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log('TypeError');
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log('RangeError');
            console.log(e.message);
        }
        else   
            console.log('Erro inesperado');
    }

}

console.log(validArray([],abc));