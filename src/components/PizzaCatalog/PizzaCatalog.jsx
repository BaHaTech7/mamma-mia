import React, {useContext} from 'react'
import "./pizza_catalog.scss"
import Ingredients from "../Ingredients/Ingredients";
import {PizzeriaContext} from "../../context/PizzeriaProvider";
import {obtenerCLP} from "../../util/clp_parser";
import {useNavigate} from "react-router-dom";

const PizzaCatalog = () => {

    const {catalogo, setPizzaActiva, pizzaActiva} = useContext(PizzeriaContext)
    const navigate = useNavigate();

    const handleShowPizzaDetail = (id) => {
        const asignarPizzaActiva = (id) => {
            let pizzaSeleccionada = {}

            for (let pizza of catalogo) {
                if (pizza.id === id) {
                    pizzaSeleccionada = pizza
                    break;
                }
            }

            setPizzaActiva(pizzaSeleccionada)
        }
        asignarPizzaActiva(id)

        if (pizzaActiva !== {}) {
            navigate(`/pizza/${id}`)
        }
    }

    return (
        <div className="row mt-5">
            {
                catalogo.map( pizza => (
                    <article className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3" key={pizza.id}>
                        <div className="card">
                            <img src={pizza.img} className="card-img-top" alt={pizza.name}/>
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
                                        <button className="btn btn-danger">
                                            <i className="icono-carro fa-solid fa-cart-shopping"></i> Añadir
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}

export default PizzaCatalog