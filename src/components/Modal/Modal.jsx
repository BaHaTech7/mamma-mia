import React, {useContext, useState} from 'react'
import {Button, Modal as MessageBox} from "react-bootstrap"
import {PizzeriaContext} from "../../context/PizzeriaProvider";


const Modal = () => {

    const {messageStatus, setMessageStatus} = useContext(PizzeriaContext)

    const handleClose = () => setMessageStatus({...messageStatus, mostrar:false})

    return (
        <MessageBox show={messageStatus.mostrar} onHide={handleClose}>
            <MessageBox.Header closeButton>
                <MessageBox.Title>Modal heading</MessageBox.Title>
            </MessageBox.Header>
            <MessageBox.Body>Woohoo, you're reading this text in a modal!</MessageBox.Body>
            <MessageBox.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </MessageBox.Footer>
        </MessageBox>
    )
}

export default Modal