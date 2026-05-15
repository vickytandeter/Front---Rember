import React from 'react'

function FuncionCard(funcion) {

    return (

        <div clas = "funcion">

            <img src = ""/>
            <div>
                <p>{funcion.nombre}</p>
                <p>{funcion.descripcion}</p>
            </div>

        </div>

    );

}

export default FuncionCard;