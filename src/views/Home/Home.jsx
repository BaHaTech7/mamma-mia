import React from 'react'
import Hero from "../../components/Hero/Hero"
import PizzaCatalog from "../../components/PizzaCatalog/PizzaCatalog"

const Home = () => {
    return (
        <div className="row">
            <div className="col-12">
                <Hero />
                <PizzaCatalog />
            </div>
        </div>
    )
}

export default Home