import React from 'react'
import '../styles/Body.scss'
import Container from 'react-bootstrap/Container'
import Logo from '../img/omstart.webp'
import Screencap from '../img/screencap-mobile.png'

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
                            <img src={Logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">OMSTART?</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <TicketButton />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="display-4 fw-bold">kide.appista jotain tähän?</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
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
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
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
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
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
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
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
                    <img className="d-block mx-auto mb-4" src={Logo} alt="" width="72" height="72" />
                    <h1 className="display-5 fw-bold">Centered hero</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
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
