import React from 'react'
import { useParams } from 'react-router-dom';
import Inicio from './Inicio';

const ListaUsuarios = ({id,identificacion, nombre,hora}) => {
    return (
    <>
        <div className='datos_usuario'>
            <span>{hora}</span>
            <a href={`/item/${id}`}>{identificacion}</a>
            <a href={`/item/${id}`}>{nombre}</a>
        </div>
        
        
        
    </>
    )
}

export default ListaUsuarios