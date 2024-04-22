import React from 'react'
import { useParams } from "react-router-dom";
import Datos from '../assets/datos.json'
import {  useContext } from 'react';
import UsuariosList from './UsuariosList';
import { UsuarioDatailContext } from '../context/UsuariosContext';



const Items = ({identificacion,genero,nombre,edad,ciclo,codigo_medico,medico,fecha,hora,pes,cardiometabolico,planificacion,agudeza,odontologia,citologia,resultado_cito,ultimo_psa,resultado_psa,ultimo_mamografia,resultado_mamo,ultimo_somf,resultado_somf,ultimo_hepatitis_c,resultado_hcv,ultimo_vdrl,resultado_vdrl,ultimo_vih,resultado_vih,ultimo_hepatitis_b,resultado_vhb,ultimo_hb,resultado_hb,ultimo_hto,resultado_hto,procex,epoc,cancer,salud_mental,punta_piramide}) => {
    const { id } = useParams();
    console.log(codigo_medico)
    const {infoFilter, setInfoFilter,ocultar, setOcultar}=useContext(UsuarioDatailContext)
    const ingresar = (()=>{ 
        const FilterDatos = Datos.filter(e=>(                    
            e.codigo_medico==codigo_medico)); 
            setInfoFilter(FilterDatos)
            if (FilterDatos) {
                setOcultar(false)
            } else{
                setOcultar(true)
            }
    })
    return (
    <>

    {ocultar==false? "":
    <div className='contenedor'>
        <div className='grid'>
            <div className='card'>
                <label><b>Hora:</b>  {hora}</label>
                <label className='nombre'><b>Nombre:</b> {nombre}</label>
                <label><b>Edad:</b> {edad}</label>
                <label><b>Ciclo de Vida:</b> {ciclo}</label>
                {pes=="0"? <label><b>Sin enferdad cronica</b></label> : <label> <b>Programa Especial:</b>  {pes}</label>}
                <label><b>Fecha de Cardiometabolicos:</b> {cardiometabolico}</label>
            </div>
            <div className='card'>
                {genero=="M"? <label>  </label> : <label><b>Fecha Mamografia: </b>{ultimo_mamografia} --- <b>Resultado de Mamografia:</b> {resultado_mamo} <br/><b>Fecha de ultima citologia:</b>  {citologia} --- <b>Resultado de citologia:</b> {resultado_cito}
                <br /><b>Ultima HTO:</b> {ultimo_hto} --- <b>Resulado HTO:</b> {resultado_hto} <b>Ultima HB:</b> {ultimo_hb} --- <b>Resultado HB:</b> {resultado_hb} <br /> <b>Ultima consulta de planificacion:</b> {planificacion} </label> }
            </div>
            <div className='card'>
                {genero=="F"? <label> </label> : <label> <b>Fecha Psa:</b> {ultimo_psa} --- <b>Resultado de Psa:</b> {resultado_psa} </label> }
                <label><b>Ultima Agudeza Visiual:</b> {agudeza}</label>
                <label><b>Ultima consulta de odontologia:</b> {odontologia}</label>
                <label><b>Toma de muestra somf:</b>  {ultimo_somf}---<b>Resultado de somf:</b> {resultado_somf}</label>
                <label><b>Ultima Hepatitis C:</b> {ultimo_hepatitis_c} --- <b>Resultado Hepatitis C:</b> {resultado_hcv} </label>
                <label><b>Ultima realizacion de VDRL:</b> {ultimo_vdrl}---<b>Resultado VDRL:</b> {resultado_vdrl}</label>
            </div>
            <div className='card'>
                <label><b>Ultima realizacion de Vih:</b> {ultimo_vih}---<b>Resultado Vih:</b> {resultado_vih}</label>
                <label><b>Ultima realizacion de Hepatitis B:</b> {ultimo_hepatitis_b}---<b>Resultado de Hepatitis B</b>: {resultado_vhb}</label>
                <label><b>Ultima Psa:</b>{ultimo_psa} --- <b>Resultado Psa</b>: {resultado_psa} </label>
                <label><b>Paciente con Ca: </b>{cancer} <b>Paciente con Epoc:</b> {epoc}</label>
            </div>
            
            <button type="submit" className="retorn" onClick={(event)=>{ingresar()}}>
                    Regresar
            </button>
        </div>
        </div>
        }
        {ocultar==true? "":
        <div className='contenedor'>        <UsuariosList usuarios={infoFilter}/>
        </div>
        }

    </>
    )
}

export default Items