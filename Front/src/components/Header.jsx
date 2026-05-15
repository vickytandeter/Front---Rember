import React from 'react'

function Header()
{
    return (
        <header>

            <div className = "header-usuario">
                <img src = "./img/ejemplo.png" alt = "fotoUsuario"/>
                <div>
                    <h4>Gerardo Pérez</h4>
                    <p>Paciente</p>
                </div>
            </div>

            <div className="header-buttons">
                <button aria-label="Notificaciones">🔔</button>
                <button aria-label="Menú" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">☰</button>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body">
                        Content for the offcanvas goes here.
                    </div>
                </div>
            </div>

        </header>
        
    
    );
}

export default Header;

