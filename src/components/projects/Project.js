import React, { useContext } from 'react';

import projectContext from '../../context/projects/projectContext';
import tareaContext from '../../context/tasks/tareaContext';

const Project = ({proyecto}) => {

    //obtener el state de proyectos
    const proyectosContext = useContext(projectContext);
    const { proyectoActual } = proyectosContext;

    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;


    //funcion para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); //fijar un proyecto actual
        obtenerTareas(id); //filtrar las tareas cuando se de click
    }


    return (
        <li>
            <button
                type="button"
                className=" btn btn-blank"
                onClick={ () => seleccionarProyecto(proyecto.id) }
            >{proyecto.nombre}</button>
        </li>
    );
}

export default Project;
