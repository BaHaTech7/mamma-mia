import React from 'react'
import "./cart_summary.scss"
import {obtenerCLP} from "../../util/clp_parser";

const CartSummary = (props) => {
    return (
        <div className="summary-op-wrapper">
            <h2>Total: <span>{obtenerCLP(props.total)}</span></h2>
            <button className="btn btn-success">Ir a pagar</button>
        </div>
    )
}

export default CartSummary