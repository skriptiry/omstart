import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import TicketButton from './assets/TicketButton'
import CopyPopup from './assets/CopyPopup'
import '../styles/Nav.scss'

export default function Nav() {
    return (
        <Navbar className="navbar navbar-expand-md navbar-white bg-white">
            <Navbar.Collapse className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav me-auto ms-2">
                    <li className="nav-item active">
                        <CopyPopup />
                    </li>
                </ul>
            </Navbar.Collapse>
            <div className="mx-auto order-0">
                <a className="navbar-brand mx-auto logo-text" href="#">OMSTART</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <Navbar.Collapse className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto me-2">
                    <li className="nav-item">
                        <TicketButton />
                    </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}
