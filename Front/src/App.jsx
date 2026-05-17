// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import Header from './components/Header'
// import ListaFunciones from './components/ListaFunciones'
// import Footer from './components/Footer'

// function App() {
  
//    const funciones = [
//     {
//       titulo: "Registro anomalía",
//       descripcion: "Guarda una anomalía para ver patrones con el tiempo."
//     },
//     {
//       titulo: "Tests de memoria",
//       descripcion: "Hacé un test de 1 minuto para ver cómo está hoy."
//     },
//     {
//       titulo: "Tendencias y patrones",
//       descripcion: "Mirá si las anomalías aumentan, bajan o se mantienen."
//     },
//     {
//       titulo: "Recomendaciones de médicos",
//       descripcion: "Orientación simple para saber con quién hablar."
//     },
//     {
//       titulo: "Alertas y recordatorios",
//       descripcion: "Recibe avisos suaves para seguir de cerca los cambios."
//     },
//     {
//       titulo: "Colaboradores",
//       descripcion: "Invita a otros a registrar señales y ver el progreso."
//     }
//   ]
//   return (

//     <div className="container">
      
//         <Header/>

//         <ListaFunciones
//           funciones={funciones}
//           onSelect={(index) => console.log(index)}
//         />

//         <Footer/>
      
//       </div>

//   )
// }

// export default App;


import './App.css'
import Header from './components/Header'
import ListaFunciones from './components/ListaFunciones'
import Footer from './components/Footer'

function App() {

    const funciones = [
        {
            titulo: "Registro anomalía",
            descripcion: "Guarda una anomalía para ver patrones con el tiempo.",
            icono: "📋",
            iconClass: "icon-blue"
        },
        {
            titulo: "Tests de memoria",
            descripcion: "Hacé un test de 1 minuto para ver cómo está hoy.",
            icono: "🧠",
            iconClass: "icon-green"
        },
        {
            titulo: "Tendencias y patrones",
            descripcion: "Mirá si las anomalías aumentan, bajan o se mantienen.",
            icono: "📈",
            iconClass: "icon-purple"
        },
        {
            titulo: "Recomendaciones de médicos",
            descripcion: "Orientación simple para saber con quién hablar.",
            icono: "🩺",
            iconClass: "icon-red"
        },
        {
            titulo: "Alertas y recordatorios",
            descripcion: "Recibe avisos suaves para seguir de cerca los cambios.",
            icono: "🔔",
            iconClass: "icon-teal"
        },
        {
            titulo: "Colaboradores",
            descripcion: "Invita a otros a registrar señales y ver el progreso.",
            icono: "👥",
            iconClass: "icon-green"
        }
    ]

    return (
        <div className="container">
            <Header />
            <ListaFunciones
                funciones={funciones}
                onSelect={(index) => console.log(index)}
            />
            <Footer />
        </div>
    )
}

export default App