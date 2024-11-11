import React from 'react'
import "./cart_summary.scss"

const CartSummary = () => {
    return (
        <div className="summary-op-wrapper">
            <h2>Total: <span>$134.000</span></h2>
            <button className="btn btn-success">Ir a pagar</button>
        </div>
    )
}

export default CartSummary