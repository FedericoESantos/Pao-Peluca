import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <a href="/">Inicio</a>
                    <Link to="/cortes">Cortes</Link>
                    <Link to="/coloracion">Coloracion</Link>
                    <Link to="/peinados">Peinados</Link>
                    <Link to="/alisados">Alisados</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/cursos">Cursos</Link>
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar