import React, {createContext, useState} from 'react'

export const PizzeriaContext = createContext()


const PizzeriaProvider = (props) => {

    const [catalogo, setCatalogo] = useState([])
    const [carro, setCarro] = useState([])
    const [pizzaActiva, setPizzaActiva] = useState({})
    const [total, setTotal] = useState(0)

    return (
        <PizzeriaContext.Provider value={{   catalogo, setCatalogo,
                                             carro, setCarro,
                                             pizzaActiva, setPizzaActiva,
                                             total, setTotal }}>
            {props.children}
        </PizzeriaContext.Provider>
    )
}

export default PizzeriaProvider