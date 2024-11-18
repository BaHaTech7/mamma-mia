import React from 'react'
import "./pizza_loader.scss"
import {RingLoader} from "react-spinners"

const PizzaLoader = () => {
    return (
        <div className="pizza-loader card-img-top">
            <RingLoader color="#1b7ced" size={50} />
        </div>
    )
}

export default PizzaLoader