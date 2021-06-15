import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import logo from '../img/omstart.png'
import '../styles/Header.scss'

export default function Header() {
    return (
        <Container className="p-5 bg- mw-100 header-bg text-center">
            <Jumbotron className="">
                <img className="mw-100" src={logo} alt="omstart" width='250px' loading="lazy" />
            </Jumbotron>
        </Container>
    )
}
