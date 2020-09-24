import React, { Fragment } from 'react';
import Tasks from './Tasks';

const ListTasks = () => {

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true},
        { nombre: 'Elegir Colores', estado: false},
        { nombre: 'Elegir Plataformas de pago', estado: false},
        { nombre: 'Elegir Hosting', estado: true},
    ];

    return (
        <Fragment>
            <h2> Project : Tienda virtual </h2>

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
