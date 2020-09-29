import React, { useContext, useState } from 'react';

import projectContext from '../../context/projects/projectContext';
import tareaContext from '../../context/tasks/tareaContext';

const FormTasks = () => {

    //extrayendo si un proyecto esta activo
    const proyectosContext = useContext(projectContext);
    const { proyecto } = proyectosContext;

    //obtener la funcion que agrega las nuevas tareas
    const tareasContext = useContext(tareaContext);
    const { agregarTarea } = tareasContext;

    //state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //extraer el nombre del proyecto
    const { nombre } = tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    //array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar

        //pasar la validacion

        //agregar la nueva tarea al state de tarea
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        //reiniciar el form
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Name Tasks"
                        name={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Add Tasks"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTasks;
