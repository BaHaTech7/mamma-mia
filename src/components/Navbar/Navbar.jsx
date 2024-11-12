import React, {useContext} from 'react'
import {NavLink} from "react-router-dom";
import "./navbar.scss"
import {PizzeriaContext} from "../../context/PizzeriaProvider";
import {obtenerCLP} from "../../util/clp_parser";

const Navbar = () => {

    const {total} = useContext(PizzeriaContext)

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
                <h3>{obtenerCLP(total)}</h3>
            </div>
        </nav>
    )
}

export default Navbar