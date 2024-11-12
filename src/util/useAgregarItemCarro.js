import {useContext} from "react";
import {PizzeriaContext} from "../context/PizzeriaProvider";

export const useAgregarItemCarro = (element) => {

    const {setCarro, carro} = useContext(PizzeriaContext)
    let resultadoOperacion = false

    const elementoExiste = (element) => {
        let estado = true
        for (let pizza of carro) {
            if (pizza.idProducto == element.id) {
                estado = false
                break
            }
        }
        return estado
    }

    const elementoValido = (element) => {
        if (typeof (element) === "object") {
            return true
        } else {
            return false
        }
    }


    if (elementoValido()) {
        if (!elementoExiste()) {
            setCarro([...carro, element])
            resultadoOperacion = true
        }
    }

    return [resultadoOperacion]
}