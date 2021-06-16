import React, { useEffect } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import logo from '../img/omstart.webp'
import '../styles/Header.scss'



export default function Header() {

    /*
    useEffect(() => {
        const box = document.querySelector('.box')

        setInterval(setBorderRadius, 300)

        function setBorderRadius() {
            box.style.setProperty('--br-blobby', generateBorderRadiusValue())
            box.style.setProperty('--br-blobby-after', generateBorderRadiusValue())
            box.style.setProperty('--br-blobby-before', generateBorderRadiusValue())
        }

        function generateBorderRadiusValue() {
            return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`
        }

        function getRandomValue() {
            return Math.floor(Math.random() * 50) + 50
        }
    })
    */

    return (
        <Container className="p-5 bg- mw-100 header-bg text-center">
            <div className="">
                <img className="" src={logo} alt="omstart" width='250px' loading="lazy" />
            </div>
        </Container>
    )
}
