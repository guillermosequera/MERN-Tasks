import React, { useContext, useEffect } from 'react';

import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListProyect = () => {

    //extrayendo proyectos de state inicial
    const proyectosContext = useContext(projectContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>There are no projects, start by creating one</p>;


    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                   <CSSTransition
                         key={proyecto.id}
                         timeout={200}
                         classNames="proyecto"
                   >
                   <Project
                        proyecto={proyecto}
                    />
                   </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListProyect;
