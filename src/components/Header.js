import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../img/omstart.webp'
import '../styles/Header.scss'

export default function Header() {
  useEffect(() => {
    setInterval(setBorderRadius, 300)

    function setBorderRadius() {
      document.documentElement.style.setProperty(
        '--br-blobby',
        generateBorderRadiusValue()
      )
      document.documentElement.style.setProperty(
        '--br-blobby-after',
        generateBorderRadiusValue()
      )
      document.documentElement.style.setProperty(
        '--br-blobby-before',
        generateBorderRadiusValue()
      )
    }

    function generateBorderRadiusValue() {
      return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`
    }

    function getRandomValue() {
      return Math.floor(Math.random() * 50) + 50
    }
  })

  return (
    <Container className="pt-5 pb-5 mw-100 header-bg">
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-4 text-white d-none d-lg-block">
            <div className="box">
              <div className="logo-container">
                <img
                  className="img-logo"
                  src={logo}
                  alt="omstart"
                  height="250px"
                  width="250px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-white my-auto text-start">
            <div className="">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                OMSTART tulee taas!
              </h1>
              <p className="lead">Alateksti tulee muuten tähän</p>
            </div>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col text-white text-center">
            <div className="list-inline-item p-2 m-2 badge bg-dark align-self-center info-badge">
              <FontAwesomeIcon icon={['fas', 'calendar-day']} size="lg" />
              <span className="ms-3">1.9.2021</span>
            </div>

            <div className="list-inline-item p-2 m-2 badge bg-dark align-self-center info-badge">
              <FontAwesomeIcon icon={['fas', 'map-marker-alt']} size="lg" />
              <span className="ms-3">Kerubi, Joensuu</span>
            </div>

            <div className="list-inline-item p-2 m-2 badge bg-dark align-self-center info-badge">
              <FontAwesomeIcon icon={['fas', 'ticket-alt']} size="lg" />
              <span className="ms-3">5€</span>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  )
}
