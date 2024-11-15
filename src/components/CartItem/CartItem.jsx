import React, {useContext, useEffect} from 'react'
import "./cart_item.scss"
import {obtenerCLP} from "../../util/clp_parser";
import {PizzeriaContext} from "../../context/PizzeriaProvider";

const CartItem = (props) => {

    const {carro, setCarro, setTotal, total} = useContext(PizzeriaContext)


    const calcularTotal = () => {
        let acumuladorTotal = 0

        for (let item of carro) {
            acumuladorTotal = acumuladorTotal + item.subtotal
        }

        return acumuladorTotal
    }

    useEffect( () => {
        if (carro.length === 0) {
            setTotal(0)
        }else{
            setTotal(calcularTotal())
        }
    },[total, carro])

    const handleIncrement = (item) => {

        const carroCopia = [...carro]

        for (let producto of carroCopia) {
            if (item.idProducto === producto.idProducto) {
                producto.cantidad = ++producto.cantidad
                producto.subtotal =  producto.vUnitario*producto.cantidad
                break
            }
        }

        setCarro(carroCopia)
        setTotal(calcularTotal())
    }

    const handleDecrement = (item) => {

        const carroCopia = [...carro]

        if (item.cantidad > 1) {

            for (let producto of carroCopia) {
                if (item.idProducto === producto.idProducto) {
                    producto.cantidad = --producto.cantidad
                    producto.subtotal =  producto.vUnitario*producto.cantidad
                    break
                }
            }
            setCarro(carroCopia)
        }
        else {
            setCarro(carroCopia.filter(producto => (producto.idProducto !== item.idProducto)))
        }
    }

    const handleDelete = (id) => {
        const carroCopia = [...carro]
        setCarro(carroCopia.filter(producto => (producto.idProducto !== id)))
    }
    
    return (
        <div className="item-wrapper px-2 py-2">
            <div className="cart-item">
                <div className="nombre">
                    <img src={props.item.src} className="card-img-top" alt={props.item.nombre}/>
                    &nbsp; {props.item.nombre}
                </div>
                <div className="precio">
                    <span className="text-success">{obtenerCLP(props.item.subtotal)}</span>  &nbsp;
                    <button className="btn btn-danger"  onClick={ () =>{ handleDecrement(props.item) }}>-</button> &nbsp;
                    <span>{props.item.cantidad}</span>  &nbsp;
                    <button className="btn btn-primary" onClick={ () =>{ handleIncrement(props.item) }}>+</button>
                    <i className="fa-solid fa-trash" onClick={() => {handleDelete(props.item.idProducto)}}></i>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem