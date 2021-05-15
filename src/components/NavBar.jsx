import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <ul className='navegador'>
                <li className='navegador__caja' >
                    <Link id='navHome' className='navegador__opcion' to="/">Home</Link>
                </li>
                <li className='navegador__caja' >
                    <Link id='navPuestos' className='navegador__opcion' to="/Puestos">Puestos</Link>
                </li>
                <li className='navegador__caja' >
                    <Link id='navEmpresas' className='navegador__opcion' to="/Empresas">Empresas</Link>
                </li>
                <li className='navegador__caja' >
                    <Link id='navCiudades' className='navegador__opcion' to="/Ciudades">Ciudades</Link>
                </li>
                <li className='navegador__caja' >
                    <Link id='navPaises' className='navegador__opcion' to="/Paises">Paises</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default NavBar;