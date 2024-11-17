import React, {useContext, useState} from 'react'
import {Button, Modal as MessageBox} from "react-bootstrap"
import {PizzeriaContext} from "../../context/PizzeriaProvider";
import {useNavigate} from "react-router-dom";


const Modal = () => {

    const {messageStatus, setMessageStatus} = useContext(PizzeriaContext)
    const navigate = useNavigate()

    const handleClose = () => setMessageStatus({...messageStatus, mostrar:false})
    const handleNavAgregarProducto = () => {
        setMessageStatus({...messageStatus, mostrar: false, operacion:""})
        navigate("/carrito")
    }

    const handleRender = () => {
        const op = messageStatus.operacion

        if (op === "errorElementoExiste") {
            return (
                <MessageBox show={messageStatus.mostrar} onHide={handleClose}>
                    <MessageBox.Header closeButton>
                        <MessageBox.Title>Producto en el carro</MessageBox.Title>
                    </MessageBox.Header>
                    <MessageBox.Body>Ya ingresó esta pizza en el carro. Puede revisarlo ahora</MessageBox.Body>
                    <MessageBox.Footer>
                        <Button variant="success" onClick={ ()=>handleNavAgregarProducto()}>
                            <i className="icono-carro fa-solid fa-cart-shopping"></i> Revisar carro
                        </Button>
                    </MessageBox.Footer>
                </MessageBox>
            )
        }

        if (op === "errorObjeto") {
            return (
                <MessageBox show={messageStatus.mostrar} onHide={handleClose}>
                    <MessageBox.Header closeButton>
                        <MessageBox.Title>Objeto incorrecto</MessageBox.Title>
                    </MessageBox.Header>
                    <MessageBox.Body>El objeto ingresado no es un producto válido</MessageBox.Body>
                    <MessageBox.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </MessageBox.Footer>
                </MessageBox>
            )
        }
    }

    return (
        <>
            {handleRender()}
        </>
    )
}

export default Modal