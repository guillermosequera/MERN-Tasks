import React from 'react';

const FormTasks = () => {
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
