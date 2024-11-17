import React, {useContext, useEffect} from 'react'
import "./pizza_catalog.scss"
import Ingredients from "../Ingredients/Ingredients"
import {PizzeriaContext} from "../../context/PizzeriaProvider"
import {obtenerCLP} from "../../util/clp_parser"
import {useNavigate} from "react-router-dom"
import {useAgregarProducto} from "../../hooks/useAgregarProducto"
import Modal from "../Modal/Modal"
import ReactImageAppear from 'react-image-appear';


const PizzaCatalog = () => {

    const {catalogo, toogle, setToogle, messageStatus, setMessageStatus} = useContext(PizzeriaContext)
    const [agregarProductoCarro, errorObjeto, errorElementoExiste] = useAgregarProducto()
    const navigate = useNavigate();

    const handleAddProduct = (element) => {
        setToogle(!toogle)
        agregarProductoCarro(element)
    }

    useEffect( ()=>{
        if (errorObjeto) {
            setMessageStatus({...messageStatus, mostrar: true, operacion:"errorObjeto"})
        }
        if (errorElementoExiste) {
            setMessageStatus({...messageStatus, mostrar: true, operacion:"errorElementoExiste"})
        }
    },[errorObjeto, errorElementoExiste, toogle])

    const handleShowPizzaDetail = (id) => {
        navigate(`/pizza/${id}`)
    }

    return (
        <div className="row mt-5">
            {
                catalogo.map( pizza => (
                    <article className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3" key={pizza.id}>
                        <div className="card">
                            <ReactImageAppear
                                src={pizza.img}
                                showLoader={true}
                                className="card-img-top"
                                animation="bounceIn"
                                animationDuration="1s"
                                easing="ease-in"
                            />
                            <div className="card-body">
                                <h3 className="card-title">{pizza.name}</h3>
                                <hr />
                                <h5 className="card-title">Ingrediente:</h5>
                                <Ingredients ingredientes={pizza.ingredients} />
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h2 className="my-3">{obtenerCLP(pizza.price)}</h2>
                                    <div className="mb-2">
                                        <button className="btn btn-info color-info"
                                                onClick={() => {handleShowPizzaDetail(pizza.id)}}>
                                            👀 Ver Más
                                        </button>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <button className="btn btn-danger"
                                                onClick={ ()=>{handleAddProduct(pizza)}}>
                                            <i className="icono-carro fa-solid fa-cart-shopping"></i> Añadir
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </article>
                ))
            }
            <Modal />
        </div>
    )
}

export default PizzaCatalog