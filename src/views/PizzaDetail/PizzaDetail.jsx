import React, {useContext} from 'react'
import PizzaDetailCard from "../../components/PizzaDetailCard/PizzaDetailCard";
import {useParams} from "react-router-dom";
import {PizzeriaContext} from "../../context/PizzeriaProvider";

const PizzaDetail = () => {

    const {id} = useParams()
    const {catalogo} = useContext(PizzeriaContext)

    const obtenerPizzaActiva = (id) => {
        let pizzaSeleccionada = {}

        for (let pizza of catalogo) {
            if (pizza?.id === id) {
                pizzaSeleccionada = pizza
                break
            }
        }

        return pizzaSeleccionada
    }


    return (
        <div className="row">
            <div className="col-12">
                <PizzaDetailCard pizza = {obtenerPizzaActiva(id)} />
            </div>
        </div>
    )
}

export default PizzaDetail