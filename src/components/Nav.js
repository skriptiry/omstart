import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import '../styles/Nav.scss'

export default function Nav() {
    return (
        <Navbar className="navbar navbar-expand-md navbar-white bg-white">
            <Navbar.Collapse className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav me-auto ms-2">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">JAA</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">JAA</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">JAA</a>
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
                        <button type="button" className="btn btn-outline-danger btn-lg">osta liput</button>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}
