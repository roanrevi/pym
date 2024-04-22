import React from 'react'
import Datos from '../assets/datos.json'
import Items from './Items'
import { useContext} from 'react'
import { UsuarioDatailContext } from '../context/UsuariosContext';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const {searchValue, setSearchValue,infoFilter, setInfoFilter,ocultar, setOcultar}=useContext(UsuarioDatailContext)
    const usuarioFilter=Datos.filter((dato)=>dato.id == id);
    
    return (
    <>
    {usuarioFilter.map(e=>(<Items key={e.id} 
                genero={e.genero}
                edad={e.edad} 
                nombre={e.nombre}
                ciclo={e.ciclo_vital} 
                codigo_medico={e.codigo_medico} 
                medico={e.Nombre_Medico} 
                fecha={e.fecha_cita} 
                hora={e.hora_cita} 
                pes={e.pes} 
                cardiometabolico={e.ultimo_cardiometabolico} 
                planificacion={e.ultimo_planificacion}
                agudeza={e.ultimo_agudeza}
                odontologia={e.ultimo_odontologia}
                citologia={e.ultimo_citologia}
                resultado_cito={e.resultado_cito}
                ultimo_psa={e.ultimo_psa}
                resultado_psa={e.resultado_psa}
                ultimo_mamografia={e.ultimo_mamografia}
                resultado_mamo={e.resultado_mamo}
                ultimo_somf={e.ultimo_somf}
                resultado_somf={e.resultado_somf}
                ultimo_hepatitis_c={e.ultimo_hepatitis_c}
                resultado_hcv={e.resultado_hcv}
                ultimo_vdrl={e.ultimo_vdrl}
                resultado_vdrl={e.resultado_vdrl}
                ultimo_vih={e.ultimo_vih}
                resultado_vih={e.resultado_vih}
                ultimo_hepatitis_b={e.ultimo_hepatitis_b}
                resultado_vhb={e.resultado_vhb}
                ultimo_hb={e.ultimo_hb}
                resultado_hb={e.resultado_hb}
                ultimo_hto={e.ultimo_hto}
                resultado_hto={e.resultado_hto}
                procex={e.procex}
                epoc={e.epoc}
                cancer={e.cancer}
                salud_mental={e.salud_mental}
                punta_piramide={e.punta_piramide}  />))}
        
    </>
   
  )
}

export default ItemDetailContainer