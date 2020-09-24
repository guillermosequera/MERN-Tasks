import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FROMULARIO_PROYECTO, 
    OBTENER_PROYECTOS 
} from '../../types';


const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de Sitio Web' }
    ]

    const initialState = {
         proyectos : [],
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

    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    return (
        <projectContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProyectoState;
