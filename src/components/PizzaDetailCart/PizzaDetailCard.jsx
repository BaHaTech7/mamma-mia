import React, {useContext, useEffect} from 'react'
import Ingredients from "../Ingredients/Ingredients";
import "./pizza_detail_card.scss"
import {PizzeriaContext} from "../../context/PizzeriaProvider";
import {obtenerCLP} from "../../util/clp_parser";

const PizzaDetailCard = () => {

    const {carro, setCarro, setTotal, pizzaActiva} = useContext(PizzeriaContext)

    useEffect( () => {
        const calcularTotalDC = () => {
            let acumuladorTotal = 0

            for (let item of carro) {
                acumuladorTotal = acumuladorTotal + item.subtotal
            }

            return acumuladorTotal
        }
        setTotal(calcularTotalDC())
    })

    const handleAddProductDC = (element) => {

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

    return (
        <div className="card mb-3 mt-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={pizzaActiva.img} className="img-fluid rounded-start" alt={pizzaActiva.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{pizzaActiva.name}</h3>
                        <hr />
                        <p className="card-text">{pizzaActiva.desc}</p>
                        <h5 className="card-title">Ingredientes:</h5>
                        <Ingredients ingredientes={pizzaActiva.ingredients} />
                        <div className="operaciones mt-4">
                            <h2>Precio: {obtenerCLP(pizzaActiva.price)}</h2>
                            <button className="btn btn-danger" onClick={()=>handleAddProductDC(pizzaActiva)}>
                                <i className="icono-carro fa-solid fa-cart-shopping"></i> Añadir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaDetailCard