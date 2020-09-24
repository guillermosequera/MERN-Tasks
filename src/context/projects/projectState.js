import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FROMULARIO_PROYECTO } from '../../types';

const ProyectoState = props => {
    const initialState = {
        formulario : false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initialState)

    //serie de funciones para el Crud
    const mostrarFormulario = () => {
        dispatch({
            type: FROMULARIO_PROYECTO
        })
    }

    return (
        <projectContext.Provider
            value={{
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProyectoState;
