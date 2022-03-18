import {useState} from 'react';

function SmartCounter(){
    const [numero, aumentar] = useState(1);
    //retorna um vetor
    //variavel stateful: aguarda o estado do elemento
    //função amarra a essa variavel que atualiza o valor
    
    return(
        <div>
            <h1>{numero}</h1>
            <button onClick={() => aumentar(numero + 1)}>Aumentar</button>
        </div>
    )
}

export default SmartCounter;