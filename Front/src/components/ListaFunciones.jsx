import React from 'react'
import FuncionCard from './FuncionCard'

function Home(funciones, onSelect) {

    return (
        <div className = "home">
                <div className = "funcionCard">
                    {funciones.map((funcion, index) => (
                        <FuncionCard
                            key={index}
                            funcion={funcion}
                            onSelect={() => onSelect(index)}
                        />
                    ))}
                </div>
        </div>
    )
}

export default ListaFunciones;