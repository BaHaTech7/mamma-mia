import React, {createContext, useState} from 'react'

export const PizzeriaContext = createContext()


const PizzeriaProvider = (props) => {

    const [catalogo, setCatalogo] = useState([])
    const [carro, setCarro] = useState([])
    const [pizzaActiva, setPizzaActiva] = useState({})
    const [total, setTotal] = useState(0)
    const [toogle, setToogle] = useState(true)

    return (
        <PizzeriaContext.Provider value={{   catalogo, setCatalogo,
                                             carro, setCarro,
                                             pizzaActiva, setPizzaActiva,
                                             total, setTotal,
                                             toogle, setToogle}}>
            {props.children}
        </PizzeriaContext.Provider>
    )
}

export default PizzeriaProvider