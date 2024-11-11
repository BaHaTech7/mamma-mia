import React, {createContext, useState} from 'react'

export const PizzeriaContext = createContext()


const PizzeriaProvider = (props) => {

    const [catalogo, setCatalogo] = useState([])
    const [carro, setCarro] = useState({})

    return (
        <PizzeriaContext.Provider value={{catalogo,setCatalogo,carro,setCarro}}>
            {props.children}
        </PizzeriaContext.Provider>
    )
}

export default PizzeriaProvider