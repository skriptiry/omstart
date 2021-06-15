import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../img/omstart.png'

import '../styles/Footer.scss'


export default function Footer() {
    return (
        <footer className="bg-dark text-center text-lg-start text-white">
            <div className="container p-4">
                <div className="row my-4">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto logo-div">
                            <img src={Logo} height="140" alt="omstart" loading="lazy" />
                        </div>

                        <p className="text-center">OMSTART</p>

                        <ul className="list-unstyled d-flex flex-row justify-content-center">
                            <li>
                                <a className="text-white px-2" href="#!">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                                </a>
                            </li>
                            <li>
                                <a className="text-white px-2" href="#!">
                                    <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
                                </a>
                            </li>
                            <li>
                                <a className="text-white ps-2" href="#!">
                                    <FontAwesomeIcon icon={['fab', 'youtube']} size="lg" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">heading</h5>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">heading</h5>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                            <li className="mb-2">
                                <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>text</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">heading</h5>

                        <ul className="list-unstyled">
                            <li>
                                <p><i className="fas fa-map-marker-alt pe-2"></i>text</p>
                            </li>
                            <li>
                                <p><i className="fas fa-phone pe-2"></i>text</p>
                            </li>
                            <li>
                                <p><i className="fas fa-envelope pe-2 mb-0"></i>text</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3">
                © 2021 Copyright: OMSTART
                <br />
                <a href="#">back to top</a>
            </div>
        </footer>
    )
}
