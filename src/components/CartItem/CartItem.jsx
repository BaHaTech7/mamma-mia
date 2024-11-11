import React from 'react'
import "./cart_item.scss"

const CartItem = () => {
    return (
        <div className="item-wrapper px-2 py-2">
            <div className="cart-item">
                <div className="nombre">
                    <img src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" className="card-img-top" alt="..."/>
                    &nbsp; Pizza
                </div>
                <div className="precio">
                    <span className="text-success">$55.000</span>  &nbsp;
                    <button className="btn btn-danger">-</button>  &nbsp;
                    <span>7</span>                                 &nbsp;
                    <button className="btn btn-primary">+</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem