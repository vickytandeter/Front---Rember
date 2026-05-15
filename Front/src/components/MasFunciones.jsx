import React from 'react'
import FuncionCard from 'FuncionCard'

function Home(funciones, onSelect) {

    return (
        <div className = "home">
                <div className = "funcionCard">
                    {funciones.map((funcion, index) => (
                        <FuncionCard
                            key={index}
                            funcion={funcion}
                            seleccionar={() => onSelect(index)}
                        />
                    ))}
                </div>
        </div>
    )
}