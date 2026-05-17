// // import React from 'react'
// // import './Footer.css'

// // function Footer() {

// //     return (

// //         <footer>

// //             <div className="header-buttons">
// //                 <button url = "Home" aria-label="Home">⌂</button>
// //                 <button url = "Funciones" aria-label="Funciones">▦</button>
// //                 <button url = "Settings" aria-label="Settings">⚙️</button>
// //             </div>

// //         </footer>

// //     )
// // }

// // export default Footer;


// import React from 'react'
// import './Footer.css'

// function Footer() {
//     return (
//         <footer>
//             <div className="header-buttons">
//                 <button aria-label="Inicio">⌂</button>
//                 <button aria-label="Funciones" className="active">▦</button>
//                 <button aria-label="Ajustes">⚙️</button>
//             </div>
//         </footer>
//     )
// }

// export default Footer


import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <button className="nav-btn" aria-label="Inicio">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z" fill="#94A3B8"/>
                </svg>
                <span>INICIO</span>
            </button>

            <button className="nav-btn active" aria-label="Funciones">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8V0H8V8H0ZM0 18V10H8V18H0ZM10 8V0H18V8H10ZM10 18V10H18V18H10Z" fill="#4338CA"/>
                </svg>
                <span>Funciones</span>
            </button>

            <button className="nav-btn" aria-label="Ajustes">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3 20L6.9 16.8C6.68333 16.7167 6.47917 16.6167 6.2875 16.5C6.09583 16.3833 5.90833 16.2583 5.725 16.125L2.75 17.375L0 12.625L2.575 10.675C2.55833 10.5583 2.55 10.4458 2.55 10.3375C2.55 10.2292 2.55 10.1167 2.55 10C2.55 9.88333 2.55 9.77083 2.55 9.6625C2.55 9.55417 2.55833 9.44167 2.575 9.325L0 7.375L2.75 2.625L5.725 3.875C5.90833 3.74167 6.1 3.61667 6.3 3.5C6.5 3.38333 6.7 3.28333 6.9 3.2L7.3 0H12.8L13.2 3.2C13.4167 3.28333 13.6208 3.38333 13.8125 3.5C14.0042 3.61667 14.1917 3.74167 14.375 3.875L17.35 2.625L20.1 7.375L17.525 9.325C17.5417 9.44167 17.55 9.55417 17.55 9.6625C17.55 9.77083 17.55 9.88333 17.55 10C17.55 10.1167 17.55 10.2292 17.55 10.3375C17.55 10.4458 17.5333 10.5583 17.5 10.675L20.075 12.625L17.325 17.375L14.375 16.125C14.1917 16.2583 14 16.3833 13.8 16.5C13.6 16.6167 13.4 16.7167 13.2 16.8L12.8 20H7.3Z" fill="#64748B"/>
                </svg>
                <span>Ajustes</span>
            </button>
        </footer>
    )
}

export default Footer