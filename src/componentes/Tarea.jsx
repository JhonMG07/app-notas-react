import React from "react";
import "../stylesheet/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div 
        className="tarea-texto" 
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>

      {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div 
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea-icono" />

      </div>
    </div>
  );
}
export default Tarea;
