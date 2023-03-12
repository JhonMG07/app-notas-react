import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import "../stylesheet/ListaDeTares.css";
import Tarea from "./Tarea";

function ListaDeTareas() {
  const [tareas, setTarea] = useState([]); /*arreglo para añadir tarea */

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      /*verificar si esta vacia */
      tarea.texto = tarea.texto.trim(); /*Eliminar espacios vacios */
      const tareasActualizadas = [tarea, ...tareas]; /*Agregar tareas al arry */
      setTarea(
        tareasActualizadas
      ); /*Asignar el arry al set que confirgura tarea */
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(
      (tarea) => tarea.id !== id
    ); /*Eliminar tarea */
    setTarea(
      tareasActualizadas
    ); /*Asignar el arry al set que confirgura tarea */
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTarea(tareasActualizadas);
  };

  /*Fragmentos */

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea /**Crea un componente por cada tarea  */) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={
              eliminarTarea
            } /*Pasamos la funcion como props para que en tareas funcione el on clic */
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}
export default ListaDeTareas;
