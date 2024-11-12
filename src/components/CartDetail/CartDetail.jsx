import React, {useContext} from 'react'
import "./cart_detail.scss"
import CartItem from "../CartItem/CartItem";
import CartSummary from "../CartSummary/CartSummary";
import {PizzeriaContext} from "../../context/PizzeriaProvider";

const CartDetail = () => {

    const {carro, total} = useContext(PizzeriaContext)

    return (
        <section className="detalle mt-5">
            <div className="titulo-wrapper">
                <h5 className="titulo-pedido pt-3">Detalles del pedido:</h5>
            </div>
            <div className="pedido mb-2">
                <div className="unidades">
                    {
                        carro.map( cartItem => (
                            <CartItem item={cartItem} />
                        ))
                    }
                </div>
                <div className="resumen pb-2">
                    <CartSummary total={total} />
                </div>
            </div>
        </section>
    )
}

export default CartDetail