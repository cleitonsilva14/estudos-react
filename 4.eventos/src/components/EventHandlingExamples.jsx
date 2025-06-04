import React from "react";
import { useState } from "react";

function EventHandlingExamples() {
  const handleClick = () => {
    alert("Função");
  };

  const handleGreet = (name) => {
    alert(`Olá ${name}`);
  };

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Foi enviado! ${name}`);
  };

  return (
    <div>
      <button onClick={() => alert("Inline")}>Inline</button>
      <button onClick={handleClick}>Função</button>
      <br />

      <button onClick={() => handleGreet("Olá 1")}>Dizer Olá 1</button>
      <button onClick={() => handleGreet("Olá 2")}>Dizer Olá 2</button>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
}

export default EventHandlingExamples;
