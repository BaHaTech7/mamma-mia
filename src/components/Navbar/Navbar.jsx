import React from 'react'
import {NavLink} from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav>
            <div className="titulo">
                <NavLink to="/home">
                    <h3>🍕 Pizzería Mamma Mía !</h3>
                </NavLink>
            </div>
            <div className="navbar-carro">
                <NavLink to="/carrito">
                    <i className="icono-carro fa-solid fa-2x fa-cart-shopping"></i>
                </NavLink>
                <h3>$134.000</h3>
            </div>
        </nav>
    )
}

export default Navbar