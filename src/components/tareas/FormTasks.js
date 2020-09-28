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

    return (
        <div className="formulario">
            <form>
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
