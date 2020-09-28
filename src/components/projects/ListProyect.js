import React, { useContext, useEffect } from 'react';

import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProyect = () => {

    //extrayendo proyectos de state inicial
    const proyectosContext = useContext(projectContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>There are no projects, start by creating one</p>;


    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Project
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListProyect;
