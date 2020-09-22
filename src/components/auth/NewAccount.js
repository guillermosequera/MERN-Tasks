import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const NewAccount = () => {

    //State para inciar sesion
    const [ usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    //extraer de usuario
    const { nombre, email, password, confirmar } = usuario; 

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        //validando que no haya campos vacios


        //password minimo 6 caracteres

        //los dos password son iguales

        //pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Get account</h1>

                <form
                    onSubmit={onSubmit}
                >
                     <div className="campo-form">
                        <label htmlFor="nombre">Name</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Your Name"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Mail"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repeat Your Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Sign up" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Return to Log
                </Link>
            </div>
        </div>
    );
}

export default NewAccount;
