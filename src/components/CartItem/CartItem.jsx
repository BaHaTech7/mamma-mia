import React from 'react'
import "./cart_item.scss"
import {obtenerCLP} from "../../util/clp_parser";

const CartItem = (props) => {
    return (
        <div className="item-wrapper px-2 py-2">
            <div className="cart-item">
                <div className="nombre">
                    <img src={props.item.src} className="card-img-top" alt={props.item.nombre}/>
                    &nbsp; {props.item.nombre}
                </div>
                <div className="precio">
                    <span className="text-success">{obtenerCLP(props.item.subtotal)}</span>  &nbsp;
                    <button className="btn btn-danger">-</button>                &nbsp;
                    <span>{props.item.cantidad}</span>                           &nbsp;
                    <button className="btn btn-primary">+</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem