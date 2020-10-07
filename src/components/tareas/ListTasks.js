import React, { Fragment, useContext } from 'react';
import Tasks from './Tasks';

import projectContext from '../../context/projects/projectContext';
import tareaContext from '../../context/tasks/tareaContext';


const ListTasks = () => {

    //extrayendo proyectos de state inicial
    const proyectosContext = useContext(projectContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;
    

    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Select a project</h2>;

    //array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2> Project: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0 
                    ? (<li className="tarea"><p>No homework</p></li>)
                    : tareasproyecto.map(tarea => (
                        <Tasks
                            key={tarea.id}
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Delete Project &times;</button>

        </Fragment>
    );
}

export default ListTasks;
