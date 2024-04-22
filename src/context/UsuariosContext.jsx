import React from 'react'
import { useState} from 'react'
import { createContext } from "react";

export const UsuarioDatailContext=createContext();
const UsuariosContext = ({children}) => {
    
    const [searchValue, setSearchValue]=useState('');
    const [infoFilter, setInfoFilter]=useState([])
    const [ocultar, setOcultar]=useState(true)
    
    return (
    <UsuarioDatailContext.Provider value ={{searchValue, setSearchValue,infoFilter, setInfoFilter,ocultar, setOcultar}}>
        {children}
    </UsuarioDatailContext.Provider>
    )
}

export default UsuariosContext