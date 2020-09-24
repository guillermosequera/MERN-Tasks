import React, { useContext } from 'react';

import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProyect = () => {

    //extrayendo proyectos de state inicial
    const proyectosContext = useContext(projectContext);
    const { proyectos } = proyectosContext;

    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return null;

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
