import React from 'react'
import iconoChulito from '../public/iconos/chulito.svg';
import iconoTrabajo from '../public/iconos/iconoTrabajo.svg';
import iconoEstudio from '../public/iconos/iconoEstudio.svg';
import iconoFamilia from '../public/iconos/iconoFamilia.svg';
import iconoPersonal from '../public/iconos/iconoPersonal.svg';
import './Tarea.css'


interface Props {
    rutaImagen:string
    etiqueta:string
    tituloTarea:string
    descripcionTarea:string
    colorEtiqueta:string
}

const Tarea = ({rutaImagen, etiqueta, tituloTarea, descripcionTarea, colorEtiqueta}:Props) => {
  return (
    <article className='tareaPendiente'>

        <div className='contenidoTarea'>

          <div className='contenidoTexto'>
            <h2 className='tituloTarea'>{tituloTarea}</h2>
            <p className='descripcionTarea'>{descripcionTarea}</p>
          </div>


          <div className='headerTarea'>
            <div className='contenidoEtiqueta'>
              <img src={rutaImagen} className='iconoEtiqueta' alt='Icono de Trabajo' style={{ backgroundColor: colorEtiqueta }}/> 
              <p className='nombreEtiqueta'>{etiqueta}</p>
            </div>

            <button className='botonSubmit botonAnimacion'>
              <img src='../public/iconos/chulito.svg' className='iconoEtiqueta' alt='Icono de Trabajo' />   
              <p>Listo</p>
            </button>
          </div>

        </div>

        
    </article>
  )
}

export default Tarea

