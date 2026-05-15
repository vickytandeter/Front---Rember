import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import ListaFunciones from './components/ListaFunciones'
import Footer from './components/Footer'

function App() {
  
   const funciones = [
    {
      titulo: "Registro anomalía",
      descripcion: "Guarda una anomalía para ver patrones con el tiempo."
    },
    {
      titulo: "Tests de memoria",
      descripcion: "Hacé un test de 1 minuto para ver cómo está hoy."
    },
    {
      titulo: "Tendencias y patrones",
      descripcion: "Mirá si las anomalías aumentan, bajan o se mantienen."
    },
    {
      titulo: "Recomendaciones de médicos",
      descripcion: "Orientación simple para saber con quién hablar."
    },
    {
      titulo: "Alertas y recordatorios",
      descripcion: "Recibe avisos suaves para seguir de cerca los cambios."
    },
    {
      titulo: "Colaboradores",
      descripcion: "Invita a otros a registrar señales y ver el progreso."
    }
  ]
  return (

    <div className="container">
      
        <Header/>

        <ListaFunciones
          funciones={funciones}
          onSelect={(index) => console.log(index)}
        />

        <Footer/>
      
      </div>

  )
}

export default App;
