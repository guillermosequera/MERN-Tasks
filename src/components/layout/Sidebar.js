import React from 'react';

import NewProject from '../projects/NewProject';
import ListProyect from '../projects/ListProyect';

const Sidebar = () => {
    return (
        <aside>
            <h1>Mern<span>Tasks</span></h1>

            <NewProject />

            <div className="proyectos">
                <h2>Your Projects</h2>

                <ListProyect />
                
            </div>
        </aside>
    );
}

export default Sidebar;
