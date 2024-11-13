import React, {useContext, useEffect} from 'react'
import "./pizza_catalog.scss"
import Ingredients from "../Ingredients/Ingredients"
import {PizzeriaContext} from "../../context/PizzeriaProvider"
import {obtenerCLP} from "../../util/clp_parser"
import {useNavigate} from "react-router-dom"

const PizzaCatalog = () => {

    const {catalogo, setPizzaActiva, carro, setCarro, total, setTotal} = useContext(PizzeriaContext)
    const navigate = useNavigate();

    useEffect( () => {
        const calcularTotal = () => {
            let acumuladorTotal = 0

            for (let item of carro) {
                acumuladorTotal = acumuladorTotal + item.subtotal
            }

            return acumuladorTotal
        }
        setTotal(calcularTotal())
    },[carro,total])

    const handleAddProduct = (element) => {
        const validarOperacion = () => {
            let resultadoOperacion = false

            const elementoExiste = (element) => {
                let estado = false

                if (carro.length === 0) {
                    estado = false
                } else {
                    for (let pizza of carro) {
                        if (pizza.idProducto === element.id) {
                            estado = true
                            break
                        }
                    }
                }
                return estado
            }

            const elementoValido = (element) => {
                if (typeof(element) === "object") {
                    return true
                } else {
                    return false
                }
            }

            if (elementoValido(element)) {
                if (!elementoExiste(element)) {
                    setCarro([...carro,
                        {
                            idProducto: element.id,
                            src: element.img,
                            nombre: element.name,
                            vUnitario: element.price,
                            cantidad: 1,
                            subtotal: element.price
                        }
                    ])
                    resultadoOperacion = true
                }
            }

            return resultadoOperacion
        }

        if (!validarOperacion()) {
            alert("Producto repetido")
        }
    }

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

        navigate(`/pizza/${id}`)
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
        </div>
    )
}

export default PizzaCatalog