import React from 'react';

function button(props){
    const {name, onClick} = props;

    return(
        <div>
            <button onClick={onClick}>Aperta aqui {name}</button>
        </div>
    )
}

export default button;