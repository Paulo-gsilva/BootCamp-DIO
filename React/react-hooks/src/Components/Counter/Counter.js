function Counter(){
    let numero = 10;

    function aumentar(){
        numero = numero + 1;
        const h1 = document.getElementById('counterH1');
        h1.innerHTML = numero;
    }

    return(
        <div>
            <h1 id="counterH1">{numero}</h1>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    )

}

export default Counter;