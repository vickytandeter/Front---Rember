import React from 'react'

function Header(usuario)
{
    return (
        <div class = "header">

            <div class = "header-usuario">
                <img src = "" alt = "fotoUsuario"/>
                <div>
                    <h4>{usuario.nombre}</h4>
                    <p>{usuario.descripcion}</p>
                </div>
            </div>

            <div className="header-buttons">
                <button aria-label="Notificaciones">🔔</button>
                <button aria-label="Menú">☰</button>
            </div>

        </div>
        
    
    );
}

export default Header;