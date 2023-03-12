import React, { useState } from "react";
import "../stylesheet/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  /*cuando el usuario escriba */
  const manejarCambio = (e) => {
    setInput(e.target.value); /*Asigna el nuevo valor actualizado */
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: "false",
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form action="" className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="tarea-input"
        placeholder="Escriba una tarea"
        name="texto"
        onChange={manejarCambio} /*Cuando ocurra un cambio */
      />

      {/*Boton de agregar */}

      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}
export default TareaFormulario;
