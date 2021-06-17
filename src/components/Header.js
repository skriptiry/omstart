import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import logo from '../img/omstart.webp'
import '../styles/Header.scss'



export default function Header() {


    useEffect(() => {

        setInterval(setBorderRadius, 300)

        function setBorderRadius() {
            document.documentElement.style.setProperty('--br-blobby', generateBorderRadiusValue())
            document.documentElement.style.setProperty('--br-blobby-after', generateBorderRadiusValue())
            document.documentElement.style.setProperty('--br-blobby-before', generateBorderRadiusValue())
        }

        function generateBorderRadiusValue() {
            return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`
        }

        function getRandomValue() {
            return Math.floor(Math.random() * 50) + 50
        }
    })


    return (
        <Container className="p-5 mw-100 header-bg text-center">
            <div className="box">
                <div className="logo-container">
                    <img className="img-logo" src={logo} alt="omstart" width='250px' loading="lazy" />
                </div>
            </div>
        </Container>
    )
}
