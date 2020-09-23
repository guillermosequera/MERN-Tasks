import React from 'react';

import Project from './Project';

const ListProyect = () => {

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de Sitio Web'}
    ]

    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Project
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListProyect;
