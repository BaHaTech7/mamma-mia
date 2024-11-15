import React, {useContext, useEffect} from 'react'
import Ingredients from "../Ingredients/Ingredients";
import "./pizza_detail_card.scss"
import {PizzeriaContext} from "../../context/PizzeriaProvider";
import {obtenerCLP} from "../../util/clp_parser";
import {useAgregarProducto} from "../../hooks/useAgregarProducto";
import Modal from "../Modal/Modal";

const PizzaDetailCard = (props) => {

    const {toogle, setToogle, messageStatus, setMessageStatus} = useContext(PizzeriaContext)
    const [agregarProductoCarro, errorObjeto, errorElementoExiste] = useAgregarProducto()

    useEffect( ()=>{
        if (errorObjeto) {
            setMessageStatus({...messageStatus, mostrar: true, operacion:"errorObjeto"})
        }
        if (errorElementoExiste) {
            setMessageStatus({...messageStatus, mostrar: true, operacion:"errorElementoExiste"})
        }
    },[errorObjeto, errorElementoExiste, toogle])


    const handleAddProductDC = (element) => {
        setToogle(!toogle)
        agregarProductoCarro(element)
    }

    let pizzaActiva = props?.pizza

    return (
        <div className="card mb-3 mt-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={pizzaActiva?.img} className="img-fluid rounded-start img-tarjeta" alt={pizzaActiva?.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{pizzaActiva?.name}</h3>
                        <hr />
                        <p className="card-text">{pizzaActiva?.desc}</p>
                        <h5 className="card-title">Ingredientes:</h5>
                        <Ingredients ingredientes={pizzaActiva?.ingredients} />
                        <div className="operaciones mt-4">
                            <h2>Precio: {obtenerCLP(pizzaActiva?.price)}</h2>
                            <button className="btn btn-danger" onClick={()=>handleAddProductDC(pizzaActiva)}>
                                <i className="icono-carro fa-solid fa-cart-shopping"></i> Añadir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal />
        </div>
    )
}

export default PizzaDetailCard