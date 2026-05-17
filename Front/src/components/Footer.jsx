// import React from 'react'
// import './Footer.css'

// function Footer() {

//     return (

//         <footer>

//             <div className="header-buttons">
//                 <button url = "Home" aria-label="Home">⌂</button>
//                 <button url = "Funciones" aria-label="Funciones">▦</button>
//                 <button url = "Settings" aria-label="Settings">⚙️</button>
//             </div>

//         </footer>

//     )
// }

// export default Footer;


import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="header-buttons">
                <button aria-label="Inicio">⌂</button>
                <button aria-label="Funciones" className="active">▦</button>
                <button aria-label="Ajustes">⚙️</button>
            </div>
        </footer>
    )
}

export default Footer