import React from 'react'
import Datos from '../assets/datos.json'
import { useState, useContext } from 'react';
import UsuariosList from './UsuariosList';
import { UsuarioDatailContext } from '../context/UsuariosContext';

const Inicio = () => {
    const {searchValue, setSearchValue,infoFilter, setInfoFilter,ocultar, setOcultar}=useContext(UsuarioDatailContext)
    const ingresar = (()=>{ 
        const FilterDatos = Datos.filter(e=>(                    
            e.codigo_medico==searchValue)); 
            setInfoFilter(FilterDatos)
            if (FilterDatos) {
                setOcultar(false)
            } else{
                setOcultar(true)
            }
    })
    
    return (
        <>
        <div className='contenedor'>
            {ocultar==false? "":
            <div className="form">
                <p className="form-title">Ingrese su login de atención 123999797</p>
                <div className="input-container">
                    <input type="input" placeholder="Login" value={searchValue} onChange={(event)=>{
                            setSearchValue(event.target.value)}}/>
                </div>
                <button type="submit" className="submit" onClick={(event)=>{ingresar()}}>
                    Buscar
                </button>
            </div>}
            
            {ocultar==true? "":<UsuariosList usuarios={infoFilter}/>}
        </div>
        </>
    )
}

export default Inicio