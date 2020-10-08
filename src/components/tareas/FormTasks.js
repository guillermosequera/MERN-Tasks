import React, { useContext, useState, useEffect } from 'react';

import projectContext from '../../context/projects/projectContext';
import tareaContext from '../../context/tasks/tareaContext';

const FormTasks = () => {

    //extrayendo si un proyecto esta activo
    const proyectosContext = useContext(projectContext);
    const { proyecto } = proyectosContext;

    //obtener la funcion que agrega las nuevas tareas
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    // effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada)
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);

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
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        // si es edicion o si es nueva tarea
        if(tareaseleccionada === null) {
            //agregar la nueva tarea al state de tarea
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            //actualizar tarea existente
            actualizarTarea(tarea);

            //elimina tarea seleccionada del state
            limpiarTarea();
        }



        // obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        //reiniciar el form
        guardarTarea({
            nombre: ''
        })
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
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Edit Task' : 'Add Task'}
                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}

export default FormTasks;
