import React, { Fragment, useContext } from 'react';
import Tasks from './Tasks';

import projectContext from '../../context/projects/projectContext';


const ListTasks = () => {

    //extrayendo proyectos de state inicial
    const proyectosContext = useContext(projectContext);
    const { proyecto } = proyectosContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    //array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true},
        { nombre: 'Elegir Colores', estado: false},
        { nombre: 'Elegir Plataformas de pago', estado: false},
        { nombre: 'Elegir Hosting', estado: true},
    ];

    return (
        <Fragment>
            <h2> Project: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0 
                    ? (<li className="tarea"><p>No homework</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tasks
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
            >Delete Project &times;</button>

        </Fragment>
    );
}

export default ListTasks;
