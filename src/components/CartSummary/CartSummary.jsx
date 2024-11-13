import React, {useContext, useEffect} from 'react'
import "./cart_summary.scss"
import {obtenerCLP} from "../../util/clp_parser";
import {PizzeriaContext} from "../../context/PizzeriaProvider";

const CartSummary = (props) => {

    const calcularTotal = () => {
        let acumuladorTotal = 0

        for (let item of carro) {
            acumuladorTotal = acumuladorTotal + item.subtotal
        }

        return acumuladorTotal
    }

    const {carro, setTotal, total} = useContext(PizzeriaContext)

    useEffect( () => {
        if (carro.length === 0) {
            setTotal(0)
        }else{
            setTotal(calcularTotal())
        }
    }, [total, carro])

    return (
        <div className="summary-op-wrapper">
            <h2>Total: <span>{obtenerCLP(props.total)}</span></h2>
            <button className="btn btn-success">Ir a pagar</button>
        </div>
    )
}

export default CartSummary