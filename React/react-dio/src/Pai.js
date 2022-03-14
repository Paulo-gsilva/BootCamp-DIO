import React, { Children } from 'react';

function pai(props){
    return(
        <h2>Papai
            <h3>{props.children}</h3>
        </h2>
    )
}

export default pai;