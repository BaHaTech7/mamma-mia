import {useContext, useEffect, useState} from "react"
import {PizzeriaContext} from "../context/PizzeriaProvider"

export const useAgregarProducto = () => {

    const {carro, setCarro, toogle} = useContext(PizzeriaContext)
    const [errorObjeto, setErrorObjeto] = useState()
    const [errorElementoExiste, setErrorElementoExiste] = useState()
    const [elemento, setElemento] = useState({})

    useEffect( () => {

        if (errorObjeto === false) {
            if (errorElementoExiste === false) {
                setCarro([...carro,
                    {
                        idProducto: elemento.id,
                        src: elemento.img,
                        nombre: elemento.name,
                        vUnitario: elemento.price,
                        cantidad: 1,
                        subtotal: elemento.price
                    }
                ])
            }
        }
    }, [toogle])

    const agregarProductoCarro = (element) => {
        setElemento(element)

        const elementoExiste = (element) => {
            let estado = false

            if (carro.length === 0) {
                estado = false
            } else {
                for (let pizza of carro) {
                    if (pizza.idProducto === element.id) {
                        estado = true
                        break
                    }
                }
            }
            setErrorElementoExiste(estado)
        }
        const elementoValido = (element) => {
            if (typeof(element) === "object") {
                setErrorObjeto(false)
            }
        }

        elementoExiste(element)
        elementoValido(element)
    }

    return[
        agregarProductoCarro,
        errorObjeto,
        errorElementoExiste
    ]
}