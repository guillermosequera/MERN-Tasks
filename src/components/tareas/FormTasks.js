import React, { useContext } from 'react';

import projectContext from '../../context/projects/projectContext';

const FormTasks = () => {

    //extrayendo si un proyecto esta activo
    const proyectosContext = useContext(projectContext);
    const { proyecto } = proyectosContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    //array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const onSubmit = e => {
        e.preventDefault();

        //validar

        //pasar la validacion

        //agregar la nueva tarea al state de tarea

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
                        name="nombre"
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
