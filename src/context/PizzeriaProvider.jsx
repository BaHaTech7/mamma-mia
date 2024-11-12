import React, {createContext, useState} from 'react'

export const PizzeriaContext = createContext()


const PizzeriaProvider = (props) => {

    const [catalogo, setCatalogo] = useState([])
    const [carro, setCarro] = useState([])
    const [pizzaActiva, setPizzaActiva] = useState({})

    return (
        <PizzeriaContext.Provider value={{ catalogo, setCatalogo, carro, setCarro, pizzaActiva, setPizzaActiva }}>
            {props.children}
        </PizzeriaContext.Provider>
    )
}

export default PizzeriaProvider