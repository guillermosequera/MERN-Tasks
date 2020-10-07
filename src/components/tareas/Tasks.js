import React, { useContext } from 'react';

import tareaContext from '../../context/tasks/tareaContext';
import projectContext from '../../context/projects/projectContext';

const Tasks = ({tarea}) => {

    //obtener el state de proyectos
    const proyectosContext = useContext(projectContext);
    const { proyecto } = proyectosContext;

    //extraer el proyecto
    const[proyectoActual] = proyecto;

    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas } = tareasContext;

    // funcion que se ejecuta cuando el usuario presiona el boton de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id)
    }


    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado 
                ? 
                    (
                        <button
                            type="button"
                            className="completo"
                        >Complete</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >Incomplete</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Edit</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                >Remove</button>
            </div>
        </li>
    );
}

export default Tasks;
