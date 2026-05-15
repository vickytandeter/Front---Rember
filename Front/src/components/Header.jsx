import React from 'react'

function Header()
{
    return (
        <div className = "header">

            <div className = "header-usuario">
                <img src = "" alt = "fotoUsuario"/>
                <div>
                    <h4>Gerardo Pérez</h4>
                    <p>Paciente</p>
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