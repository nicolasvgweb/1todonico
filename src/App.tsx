import { useState } from 'react'
import './App.css'
import Tarea from './Tarea.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        
        <h1 className='tituloTodonico'>Todo<span>Nico</span></h1>

        <section className='nuevaTarea'>
          <form>
            <input type='text' id='tarea' name='tarea' placeholder='Ingresar tarea aquí'></input>
            <br/>
            <input type='textarea' id='descripcion' name='descripcion' placeholder='Ingresar descripción'></input>
            <br/>
            <div className='dosColumnas'>
              <select name='etiquetas' id='etiquetas'>
                <option value='trabajo'>Trabajo</option>
                <option value='estudio'>Estudio</option>
                <option value='familia'>Familia</option>
                <option value='personal'>Personal</option>
              </select>
              <br/>
            <input className='botonAnimacion' type='submit' id='agregar' name='agregar' value='Agregar'></input>
            </div>
          </form>
        </section>

        <section className='listadoTareas'>
        <Tarea rutaImagen="iconos/iconoFamilia.svg" etiqueta="Familia" tituloTarea="Agendar reunión en Teams título muy muy largo para probr" descripcionTarea="Agendar reunión con todo el equipo de producción profesional y muy disciplinado" colorEtiqueta='#1d81e6'/>

        <Tarea rutaImagen="iconos/iconoPersonal.svg" etiqueta="Personal" tituloTarea="Agendar reunión en Teams título muy muy largo para probr" descripcionTarea="Agendar reunión con todo el equipo de producción profesional y muy disciplinado" colorEtiqueta='#eaac1c'/>

        <Tarea rutaImagen="iconos/iconoTrabajo.svg" etiqueta="Trabajo" tituloTarea="Agendar reunión en Teams título muy muy largo para probr" descripcionTarea="Agendar reunión con todo el equipo de producción profesional y muy disciplinado" colorEtiqueta='#ee1b45'/>

        <Tarea rutaImagen="iconos/iconoEstudio.svg" etiqueta="Estudio" tituloTarea="Agendar reunión en Teams título muy muy largo para probr" descripcionTarea="Agendar reunión con todo el equipo de producción profesional y muy disciplinado" colorEtiqueta='#0ec253'/>
          
        
        </section>
      </div>
      <br/>
      <p className='creditos'> Realizado por Nicolás VG</p>
    </>
  )
}

export default App

