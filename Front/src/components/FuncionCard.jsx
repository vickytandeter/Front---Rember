import React from 'react'

function FuncionCard(funcion) {

    return (

        <div className = "funcion">

            <img src = ""/>
            <div>
                <p>{funcion.nombre}</p>
                <p>{funcion.descripcion}</p>
            </div>

        </div>

    );

}

export default FuncionCard;