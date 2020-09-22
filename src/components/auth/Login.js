import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {

    //State para inciar sesion
    const [ usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    //extraer de usuario
    const { email, password } = usuario; 

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

        //pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Login" />
                    </div>
                </form>

                <Link to={'/new-account'} className="enlace-cuenta">
                    Get account
                </Link>
            </div>
        </div>
    );
}

export default Login;
