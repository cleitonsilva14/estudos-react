import React from "react";

const JsxExamples = () => {
  const username = "user";

  const user = {
    name: "user01",
    level: 10,
  };

  function greeting(name) {
    return `Bem vindo ${name}!`;
  }

  const userIsLoggedIn = false;

  const userRole = "ADMIN";

  const languages = [
    {id: 1, name: "Javascript"},
    {id: 2, name: "Golang"},
    {id: 3, name: "Dart"}
  ];

  return (
    <div>
      <h2>Conteúdo que o usuário visualiza</h2>
      {/* Listando dados */}

      <p>username: {username}</p>
      <p>
        user: {user.name} - Level: {user.level}
      </p>

      <p>
        <u>{greeting(username)}</u>
      </p>
      <p>
        <u>{greeting("Tux")}</u>
      </p>

      {/* Diferenças com HTML */}
      <div className="algumaClass">Diferença</div>

      <div className="teste">teste</div>

      <button onClick={() => alert("Teste OnClick")}>onClick</button>

      <div>
        <input type="text" placeholder="Digite o nome" />
      </div>

      {/* Renderização Condicional */}

      {userIsLoggedIn ? (
        <div>
          <p className="logado">Logado!</p>
        </div>
      ) : (
        <p className="nao-logado">Não Logado</p>
      )}

    <p>
        {userRole === "ADMIN" && "É Admin"}
    </p>

    {/* Renderizar Listas */}

    {/* <li> Precisa de 'key' */}
    <div>
        <ul>
            {languages.map((l) => (
                <li key={l.id}>
                    {l.id} - {l.name}
                </li>
            ))}

        </ul>
    </div>



    </div>
  );
};

export default JsxExamples;
