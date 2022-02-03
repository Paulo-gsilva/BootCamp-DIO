const alunos = [
    {nome: 'Paulo', nota1: 6, nota2: 7, nota3: 9, nota4: 10 },
    {nome: 'Ana', nota1: 10, nota2: 8, nota3: 7, nota4: 8 },
    {nome: 'Joana', nota1: 10, nota2: 6, nota3: 8, nota4: 5 },
    {nome: 'Maria', nota1: 7, nota2: 3, nota3: 6, nota4: 9 },
    {nome: 'Pedro', nota1: 7, nota2: 4, nota3: 5, nota4: 7 },
    {nome: 'Ricardo', nota1: 3, nota2: 8, nota3: 7, nota4: 7 },
    {nome: 'Fernando', nota1: 6, nota2: 10, nota3: 7, nota4: 4 },
]

function calculaAprovados(array, media){
    let aprovados = [];
    
    for(let i = 0 ; i < array.length ; i++){
        nota = (alunos[i].nota1 + alunos[i].nota2 + alunos[i].nota3 + alunos[i].nota4)/4;
        if(nota >= media){
            aprovados.push(alunos[i].nome);
        }
    }
    return aprovados;
}



console.log(calculaAprovados(alunos, 7));
