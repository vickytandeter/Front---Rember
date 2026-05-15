import React from 'react'

function FuncionCard({ funcion, onSelect }) {

    return (
        <div onClick={onSelect}>

            <h3>{funcion.titulo}</h3>
            <p>{funcion.descripcion}</p>

        </div>
    )
}

export default FuncionCard;