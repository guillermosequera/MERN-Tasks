import React from 'react';

const Bar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hi <span>Guillermo Sequera</span></p>

            <nav className="nav-principal">
                <a href="#!">Log out</a>
            </nav>
        </header>
    );
}

export default Bar;
