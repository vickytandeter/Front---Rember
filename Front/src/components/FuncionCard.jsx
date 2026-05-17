// import React from 'react'

// function FuncionCard({ funcion, onSelect }) {

//     return (
//         <button onClick={onSelect}>

//             <h3>{funcion.titulo}</h3>
//             <p>{funcion.descripcion}</p>

//         </button>
//     )
// }

// export default FuncionCard;


import './FuncionCard.css'

function FuncionCard({ funcion, onSelect, iconClass }) {
    return (
        <button className="funcion-card" onClick={onSelect}>
            <div className={`funcion-card-icon ${iconClass || 'icon-blue'}`}>
                {funcion.icono}
            </div>
            <h3>{funcion.titulo}</h3>
            <p>{funcion.descripcion}</p>
        </button>
    )
}

export default FuncionCard;