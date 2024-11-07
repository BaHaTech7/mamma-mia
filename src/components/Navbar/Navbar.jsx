import React from 'react'
import {NavLink} from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/carrito">Carro</NavLink>
        </nav>
    )
}

export default Navbar