import React, {useContext} from 'react'
import PizzaDetailCard from "../../components/PizzaDetailCart/PizzaDetailCard";
import {useParams} from "react-router-dom";
import {PizzeriaContext} from "../../context/PizzeriaProvider";

const PizzaDetail = () => {

    const {catalogo, setPizzaActiva} = useContext(PizzeriaContext)
    const {id} = useParams()

    const asignarPizzaActiva = (id) => {
        let pizzaSeleccionada = {}

        for (let pizza of catalogo) {
            if (pizza.id === id) {
                pizzaSeleccionada = pizza
                break
            }
        }
        setPizzaActiva(pizzaSeleccionada)
    }
    asignarPizzaActiva(id)

    return (
        <div className="row">
            <div className="col-12">
                <PizzaDetailCard />
            </div>
        </div>
    )
}

export default PizzaDetail