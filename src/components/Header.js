import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import logo from '../img/omstart.png'

export default function Header() {
    return (
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">Header</h1>
                <img src={logo} alt="omstart" width='250px' />
            </Jumbotron>
        </Container>
    )
}
