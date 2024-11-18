import React, {useContext, useEffect} from 'react'
import {NavLink} from "react-router-dom"
import "./navbar.scss"
import {PizzeriaContext} from "../../context/PizzeriaProvider"
import {obtenerCLP} from "../../util/clp_parser"

const Navbar = () => {

    const {total, carro, setTotal} = useContext(PizzeriaContext)

    useEffect( () => {
        const calcularTotal = () => {
            let acumuladorTotal = 0

            for (let item of carro) {
                acumuladorTotal = acumuladorTotal + item?.subtotal
            }

            return acumuladorTotal
        }
        setTotal(calcularTotal())
    }, [carro])

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