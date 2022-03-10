//array.filter(callback, thisArg) thisarg é opcional
function searchName(string){
    return array.filter (function(element){
        return element.toLowerCase().indexOf(string.toLowerCase()) > 1;
    });
}

const array = ['Paulo Gonçalves', 'Maria Clara', 'Paulo Henrique', 'Pedro João', 'Ana Braga', 'Pedro Paulo', 'Ana Vitória'];

console.log(searchName('a'));