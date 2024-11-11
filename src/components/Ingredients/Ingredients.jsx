import React from 'react'
import "./ingredients.scss"

const Ingredients = (props) => {
    return (
        <ul>
            {
                props.ingredientes.map( ingrediente => (
                    <li>🍕 {ingrediente}</li>
                ))
            }
        </ul>
    )
}

export default Ingredients