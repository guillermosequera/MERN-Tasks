import React, { Fragment, useContext, useState } from 'react';

import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(projectContext);
    const { formulario, mostrarFormulario } = proyectosContext;

    //State para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //extraer nombre de proyecto
    const { nombre } = proyecto;

    //lee los conenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        //validando el proyecto

        //agregar al state

        //reiniciar el form
    }

    //mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return (
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickFormulario}
        >New Project</button>

        { formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Name Project"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Add Project"
                        />
                    </form>

                ) : null
        }
        </Fragment>
    );
}

export default NewProject;
