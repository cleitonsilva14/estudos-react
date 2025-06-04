import React from "react";

// props é um objeto
const PropsExample = (props) => {
    
    return (
        <div>
            <h3>Bem vindo {props.nome}</h3>
            <p>Tem {props.idade}</p>
        </div>
    )
}

export default PropsExample;
