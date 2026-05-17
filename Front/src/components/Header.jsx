import React from 'react'
import './Header.css'

function Header() {
    return (
        <header>
            <div className="header-usuario">
                <div className="header-avatar">
                    <img src="/img/ejemplo.png" alt="foto usuario" />
                </div>
                <div>
                    <h4>Gerardo Pérez</h4>
                    <p>Paciente</p>
                </div>
            </div>

            <div className="header-buttons">
                <button aria-label="Notificaciones">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 17V15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H16V17H0ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM4 15H12V8C12 6.9 11.6083 5.95833 10.825 5.175C10.0417 4.39167 9.1 4 8 4C6.9 4 5.95833 4.39167 5.175 5.175C4.39167 5.95833 4 6.9 4 8V15Z" fill="white"/>
                    </svg>
                </button>
                <button aria-label="Menú" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z" fill="white"/>
                    </svg>
                </button>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasLabel">Menú</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar">✕</button>
                    </div>
                    <div className="offcanvas-body">
                        Contenido del menú.
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header