import React from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../img/omstart.webp'
import Screencap from '../img/screencap-mobile.png'
import '../styles/Body.scss'

const Map = React.lazy(() => import('./assets/MapElement'))
const CountDown = React.lazy(() => import('./assets/CountDown'))
const TicketButton = React.lazy(() => import('./assets/TicketButton'))

export default function Body() {
    return (
        <Container className="p-0 m-0 mw-100">
            
            <div className="container px-4 py-5" id="custom-cards">

                <div className="b-example-divider"></div>

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6 d-none d-lg-block">
                            <img src={Logo} className="d-block mx-lg-auto img-fluid" alt="" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">OMSTART?</h1>
                            <p className="lead">What the fuck did you just fucking say about me, you little bitch? Ill have you know I graduated top of my class in the Navy Seals, and Ive been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and Im the top sniper in the entire US armed forces. You are nothing to me but just another target.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <TicketButton />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="display-4 fw-bold">Liput kätevästi kide.appin kautta!</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Lipunmyynti aukeaa klo 12.00 jne. jne. mitä tähänkin kirjottelee</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-center mb-5">
                            <TicketButton />
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="container px-5 screencap">
                            <img src={Screencap} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                        </div>
                    </div>
                </div>

                <h2 className="pb-2 border-bottom">Kuvia tms</h2>

                <div className="b-example-divider"></div>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                                        <small>Earth</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                                        <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                                        <small>Pakistan</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                                        <small>4d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                    </li>
                                    <li className="d-flex align-items-center me-3">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                                        <small>California</small>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                                        <small>5d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-5 my-5 text-center">
                    <FontAwesomeIcon icon={['fas', 'fire-alt']} size="5x" />
                    <h1 className="display-5 fw-bold">Ja eikun menoks!</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <TicketButton />
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

            </div>
        
            <CountDown />
            
            <Map />

        </Container >
    )
}
