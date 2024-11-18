import React from 'react'
import PizzaHero from "../../assets/img/pizza_hero.jpg"
import "./hero.scss"
const Hero = () => {
    return (
        <div className="hero">
            <div className="leyenda">
                <h3 className="display-2">¡Pizzería Mamma Mía!</h3>
                <h5>¡Tenemos las mejores pizzas que podrás encontrar!</h5>
                <hr />
            </div>
            <div className="imagen">
                <img src={PizzaHero} alt="Pizza Hero" />
            </div>
        </div>
    )
}

export default Hero