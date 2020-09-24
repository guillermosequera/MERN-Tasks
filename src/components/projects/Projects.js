import React from 'react';

import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import FormTasks from '../tareas/FormTasks';
import ListTasks from '../tareas/ListTasks';

const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Bar />

                <main>
                    <FormTasks />

                    <div className="contenedor-tareas">
                        <ListTasks />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;
