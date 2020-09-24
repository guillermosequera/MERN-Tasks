import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProyectoState = props => {
    const initialState = {
        formulario : false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispach] = useReducer(projectReducer, initialState)

    //serie de funciones para el Crud 

    return (
        <projectContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProyectoState;
