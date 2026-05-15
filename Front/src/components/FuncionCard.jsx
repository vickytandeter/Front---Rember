import React from 'react'

function FuncionCard({ funcion, onSelect }) {

    return (
        <button onClick={onSelect}>

            <h3>{funcion.titulo}</h3>
            <p>{funcion.descripcion}</p>

        </button>
    )
}

export default FuncionCard;