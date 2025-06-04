import React, { useState } from "react";


// useState = hooks

// sempre quando for alterar o valor de algo -> usar o useState
// se for somente de leitura -> usar variavel e state

const UseStateComponent = () => {

    // variável de consulta e outra de alteracao
    // e inicia o hook
    const [count, setCount] = useState(0);



  const increment = () => {
    setCount((prev) => prev + 1)
    // setCount(count+1)
    console.log(count);
  };


  const [user, setUser] = useState({
    name: "Maria",
    year: 20,
    type: ["concorrente", "imperativa", "estruturada"]
  });

  const UpYear = () => {
    setUser((prevUser) => ({
        ...prevUser,
        year: prevUser.year +1 ,
    }));
  }

  const DownYear = () => {
    setUser((prevUser) => ({
        ...prevUser,
        year: prevUser.year - 1
    }))
  }

  return (
    <div>
      <h2>Counter ReactJS</h2>
      <p>Clicado {count} vezes</p>

      <button onClick={increment}> Incrementar +</button>

    
    <p>{user.name}</p>

    <p>{user.year}</p>

    <button onClick={UpYear}>+ Year</button>
    <button onClick={DownYear}>- Year</button>

    </div>
  );
};

export default UseStateComponent;
