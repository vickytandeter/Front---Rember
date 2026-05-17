// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import './App.css'
// // import Header from './components/Header'
// // import ListaFunciones from './components/ListaFunciones'
// // import Footer from './components/Footer'

// // function App() {
  
// //    const funciones = [
// //     {
// //       titulo: "Registro anomalía",
// //       descripcion: "Guarda una anomalía para ver patrones con el tiempo."
// //     },
// //     {
// //       titulo: "Tests de memoria",
// //       descripcion: "Hacé un test de 1 minuto para ver cómo está hoy."
// //     },
// //     {
// //       titulo: "Tendencias y patrones",
// //       descripcion: "Mirá si las anomalías aumentan, bajan o se mantienen."
// //     },
// //     {
// //       titulo: "Recomendaciones de médicos",
// //       descripcion: "Orientación simple para saber con quién hablar."
// //     },
// //     {
// //       titulo: "Alertas y recordatorios",
// //       descripcion: "Recibe avisos suaves para seguir de cerca los cambios."
// //     },
// //     {
// //       titulo: "Colaboradores",
// //       descripcion: "Invita a otros a registrar señales y ver el progreso."
// //     }
// //   ]
// //   return (

// //     <div className="container">
      
// //         <Header/>

// //         <ListaFunciones
// //           funciones={funciones}
// //           onSelect={(index) => console.log(index)}
// //         />

// //         <Footer/>
      
// //       </div>

// //   )
// // }

// // export default App;


// import './App.css'
// import Header from './components/Header'
// import ListaFunciones from './components/ListaFunciones'
// import Footer from './components/Footer'

// function App() {

//     const funciones = [
//         {
//             titulo: "Registro anomalía",
//             descripcion: "Guarda una anomalía para ver patrones con el tiempo.",
//             icono: "📋",
//             iconClass: "icon-blue"
//         },
//         {
//             titulo: "Tests de memoria",
//             descripcion: "Hacé un test de 1 minuto para ver cómo está hoy.",
//             icono: "🧠",
//             iconClass: "icon-green"
//         },
//         {
//             titulo: "Tendencias y patrones",
//             descripcion: "Mirá si las anomalías aumentan, bajan o se mantienen.",
//             icono: "📈",
//             iconClass: "icon-purple"
//         },
//         {
//             titulo: "Recomendaciones de médicos",
//             descripcion: "Orientación simple para saber con quién hablar.",
//             icono: "🩺",
//             iconClass: "icon-red"
//         },
//         {
//             titulo: "Alertas y recordatorios",
//             descripcion: "Recibe avisos suaves para seguir de cerca los cambios.",
//             icono: "🔔",
//             iconClass: "icon-teal"
//         },
//         {
//             titulo: "Colaboradores",
//             descripcion: "Invita a otros a registrar señales y ver el progreso.",
//             icono: "👥",
//             iconClass: "icon-green"
//         }
//     ]

//     return (
//         <div className="container">
//             <Header />
//             <ListaFunciones
//                 funciones={funciones}
//                 onSelect={(index) => console.log(index)}
//             />
//             <Footer />
//         </div>
//     )
// }

// export default App







import './App.css'
import Header from './components/Header'
import ListaFunciones from './components/ListaFunciones'
import Footer from './components/Footer'

function App() {

    const funciones = [
        {
            titulo: "Registrar anomalia",
            descripcion: "Guarda una anomalía para ver patrones con el tiempo.",
            iconClass: "icon-blue",
            icono: (
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10V8H7V10H0ZM0 6V4H11V6H0ZM0 2V0H11V2H0ZM9 16V12.925L14.525 7.425C14.675 7.275 14.8417 7.16667 15.025 7.1C15.2083 7.03333 15.3917 7 15.575 7C15.775 7 15.9667 7.0375 16.15 7.1125C16.3333 7.1875 16.5 7.3 16.65 7.45L17.575 8.375C17.7083 8.525 17.8125 8.69167 17.8875 8.875C17.9625 9.05833 18 9.24167 18 9.425C18 9.60833 17.9667 9.79583 17.9 9.9875C17.8333 10.1792 17.725 10.35 17.575 10.5L12.075 16H9ZM10.5 14.5H11.45L14.475 11.45L14.025 10.975L13.55 10.525L10.5 13.55V14.5Z" fill="#4F46E5"/>
                </svg>
            )
        },
        {
            titulo: "Tests de Memoria",
            descripcion: "Hace un test de 1 minuto para ver como esta hoy.",
            iconClass: "icon-green",
            icono: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20V15.7C2.05 14.8333 1.3125 13.8208 0.7875 12.6625C0.2625 11.5042 0 10.2833 0 9C0 6.5 0.875 4.375 2.625 2.625C4.375 0.875 6.5 0 9 0C11.0833 0 12.9292 0.6125 14.5375 1.8375C16.1458 3.0625 17.1917 4.65833 17.675 6.625L18.975 11.75C19.0583 12.0667 19 12.3542 18.8 12.6125C18.6 12.8708 18.3333 13 18 13H16V16C16 16.55 15.8042 17.0208 15.4125 17.4125C15.0208 17.8042 14.55 18 14 18H12V20H10V16H14V11H16.7L15.75 7.125C15.3667 5.60833 14.55 4.375 13.3 3.425C12.05 2.475 10.6167 2 9 2C7.06667 2 5.41667 2.675 4.05 4.025C2.68333 5.375 2 7.01667 2 8.95C2 9.95 2.20417 10.9 2.6125 11.8C3.02083 12.7 3.6 13.5 4.35 14.2L5 14.8V20H3Z" fill="#059669"/>
                </svg>
            )
        },
        {
            titulo: "Tendencias y patrones",
            descripcion: "Mira si las anomalías aumentan, bajan o se mantienen.",
            iconClass: "icon-purple",
            icono: (
                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 17C1.45 17 0.979167 16.8042 0.5875 16.4125C0.195833 16.0208 0 15.55 0 15C0 14.45 0.195833 13.9792 0.5875 13.5875C0.979167 13.1958 1.45 13 2 13C2.1 13 2.1875 13 2.2625 13C2.3375 13 2.41667 13.0167 2.5 13.05L7.05 8.5C7.01667 8.41667 7 8.3375 7 8.2625C7 8.1875 7 8.1 7 8C7 7.45 7.19583 6.97917 7.5875 6.5875C7.97917 6.19583 8.45 6 9 6C9.55 6 10.0208 6.19583 10.4125 6.5875C10.8042 6.97917 11 7.45 11 8C11 8.03333 10.9833 8.2 10.95 8.5L13.5 11.05C13.5833 11.0167 13.6625 11 13.7375 11C13.8125 11 13.9 11 14 11C14.1 11 14.1875 11 14.2625 11C14.3375 11 14.4167 11.0167 14.5 11.05L18.05 7.5C18.0167 7.41667 18 7.3375 18 7.2625C18 7.1875 18 7.1 18 7C18 6.45 18.1958 5.97917 18.5875 5.5875C18.9792 5.19583 19.45 5 20 5C20.55 5 21.0208 5.19583 21.4125 5.5875C21.8042 5.97917 22 6.45 22 7C22 7.55 21.8042 8.02083 21.4125 8.4125C21.0208 8.80417 20.55 9 20 9C19.9 9 19.8125 9 19.7375 9C19.6625 9 19.5833 8.98333 19.5 8.95L15.95 12.5C15.9833 12.5833 16 12.6625 16 12.7375C16 12.8125 16 12.9 16 13C16 13.55 15.8042 14.0208 15.4125 14.4125C15.0208 14.8042 14.55 15 14 15C13.45 15 12.9792 14.8042 12.5875 14.4125C12.1958 14.0208 12 13.55 12 13C12 12.9 12 12.8125 12 12.7375C12 12.6625 12.0167 12.5833 12.05 12.5L9.5 9.95C9.41667 9.98333 9.3375 10 9.2625 10C9.1875 10 9.1 10 9 10C8.96667 10 8.8 9.98333 8.5 9.95L3.95 14.5C3.98333 14.5833 4 14.6625 4 14.7375C4 14.8125 4 14.9 4 15C4 15.55 3.80417 16.0208 3.4125 16.4125C3.02083 16.8042 2.55 17 2 17ZM3 6.975L2.375 5.625L1.025 5L2.375 4.375L3 3.025L3.625 4.375L4.975 5L3.625 5.625L3 6.975ZM14 6L13.05 3.95L11 3L13.05 2.05L14 0L14.95 2.05L17 3L14.95 3.95L14 6Z" fill="#9333EA"/>
                </svg>
            )
        },
        {
            titulo: "Recomendaciones de médicos",
            descripcion: "Orientacion simple para saber con quien hablar.",
            iconClass: "icon-red",
            icono: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 20C9.7 20 8.16667 19.3667 6.9 18.1C5.63333 16.8333 5 15.3 5 13.5V12.925C3.56667 12.6917 2.375 12.0208 1.425 10.9125C0.475 9.80417 0 8.5 0 7V1H3V0H5V4H3V3H2V7C2 8.1 2.39167 9.04167 3.175 9.825C3.95833 10.6083 4.9 11 6 11C7.1 11 8.04167 10.6083 8.825 9.825C9.60833 9.04167 10 8.1 10 7V3H9V4H7V0H9V1H12V7C12 8.5 11.525 9.80417 10.575 10.9125C9.625 12.0208 8.43333 12.6917 7 12.925V13.5C7 14.75 7.4375 15.8125 8.3125 16.6875C9.1875 17.5625 10.25 18 11.5 18C12.75 18 13.8125 17.5625 14.6875 16.6875C15.5625 15.8125 16 14.75 16 13.5V11.825C15.4167 11.625 14.9375 11.2667 14.5625 10.75C14.1875 10.2333 14 9.65 14 9C14 8.16667 14.2917 7.45833 14.875 6.875C15.4583 6.29167 16.1667 6 17 6C17.8333 6 18.5417 6.29167 19.125 6.875C19.7083 7.45833 20 8.16667 20 9C20 9.65 19.8125 10.2333 19.4375 10.75C19.0625 11.2667 18.5833 11.625 18 11.825V13.5C18 15.3 17.3667 16.8333 16.1 18.1C14.8333 19.3667 13.3 20 11.5 20Z" fill="#F43F5E"/>
                </svg>
            )
        },
        {
            titulo: "Colaboradores",
            descripcion: "Invita a otros a registrar senales y ver el progreso.",
            iconClass: "icon-teal",
            icono: (
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM18 16V13C18 12.2667 17.7958 11.5625 17.3875 10.8875C16.9792 10.2125 16.4 9.63333 15.65 9.15C16.5 9.25 17.3 9.42083 18.05 9.6625C18.8 9.90417 19.5 10.2 20.15 10.55C20.75 10.8833 21.2083 11.2542 21.525 11.6625C21.8417 12.0708 22 12.5167 22 13V16H18ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8Z" fill="#16A34A"/>
                </svg>
            )
        },
        {
            titulo: "Alertas y recordatorios",
            descripcion: "Recibe avisos suaves para seguir de cerca los cambios.",
            iconClass: "icon-indigo",
            icono: (
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 17V15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H16V17H0ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM4 15H12V8C12 6.9 11.6083 5.95833 10.825 5.175C10.0417 4.39167 9.1 4 8 4C6.9 4 5.95833 4.39167 5.175 5.175C4.39167 5.95833 4 6.9 4 8V15Z" fill="#4338CA"/>
                </svg>
            )
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