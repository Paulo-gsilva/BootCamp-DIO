import React, {useState} from "react";
import '../Tarefa/tarefa.css';

export default function Tarefa(){
    const [valor, inserirValor] = useState(1);
    const [estiloBotao, mudarBotaoEstilo] = useState('botao-subtrair-ativo');

    function subtrair(){
        if(valor <= 0){
            mudarBotaoEstilo('botao-subtrair-desativo');
            return;
        }

        inserirValor(valor - 1);
    }

    function adicionar(){
        inserirValor(valor + 1);
        mudarBotaoEstilo('botao-subtrair-ativo');
    }

    return(
        <div className="conteudo">
            <button className={estiloBotao} onClick={subtrair}>-</button>
            <p>{valor}</p>
            <button className="botao-adicionar-ativo" onClick={adicionar}>+</button>
        </div>
    )
}