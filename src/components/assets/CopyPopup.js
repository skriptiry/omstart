import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import '../../styles/CopyPopup.scss'
export default function CopyPopup() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const omstartLink = 'https://www.omstart.party'

    //Custom nappi lippujen ostamiselle 
    return (
        <div>
            <a className="nav-link link-underline" href="#" onClick={handleShow}>JAA</a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Kopioi linkki</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <input className="w-75 text-center copy-input" type="link" disabled value={omstartLink} defaultValue={omstartLink} />
                </Modal.Body>
                <Modal.Footer>
                    <a className="nav-link link-underline close-button" style={{color: 'rgba(0,0,0,.55)'}} variant="dark" onClick={handleClose} href="#">
                        Sulje
                    </a>
                </Modal.Footer>
            </Modal>
        </div>
    )
}