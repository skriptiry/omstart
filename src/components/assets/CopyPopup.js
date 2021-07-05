import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import '../../styles/CopyPopup.scss'
export default function CopyPopup() {
    const [show, setShow] = useState(false)
    const [copied, setCopied] = useState(false)

    //suljetaan ikkuna ja kopioitu falseksi
    const handleClose = () => {
        setShow(false)
        setCopied(false)
    }

    const handleShow = () => setShow(true)

    //tekstin kopiointi ja näytön päivitys
    const handleCopy = () => {
        navigator.clipboard.writeText(link)
        setCopied(true)
    }

    const link = 'omstart.party'

    useEffect(() => {
        var animateButton = function (e) {

            //reset animation
            e.target.classList.remove('animate')

            e.target.classList.add('animate')
            setTimeout(function () {
                e.target.classList.remove('animate')
            }, 700)
        }
        
        var classname = document.getElementsByClassName('confetti-button')

        if (classname.length > 0) {
            classname[0].addEventListener('click', animateButton, false)
        }
    })

    //Custom nappi lippujen ostamiselle 
    return (
        <div>
            <a className="nav-link link-underline" href="#" onClick={handleShow}>JAA</a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Kopioi linkki klikkaamalla</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <button className="confetti-button" onClick={() => handleCopy()}>{link}</button>
                    {copied &&
                        <p className=" mt-2">Kopioitu!</p>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <a className="nav-link link-underline close-button" style={{ color: 'rgba(0,0,0,.55)' }} variant="dark" onClick={handleClose} href="#">
                        Sulje
                    </a>
                </Modal.Footer>
            </Modal>
        </div>
    )
}