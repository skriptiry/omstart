import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import TicketButton from './assets/TicketButton'
import CopyPopup from './assets/CopyPopup'
import '../styles/Nav.scss'

export default function Nav2() {
    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="md" bg="white">
                <Navbar.Brand className='logo-text' href="#">OMSTART</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <CopyPopup />
                        </Nav.Link>
                        <Nav.Link href='https://kide.app/events/814170de-afab-4aa6-8256-e4a0718cf39d'>
                            <TicketButton />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
