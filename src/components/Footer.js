import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Logo from '../img/omstart.webp'

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
                        <p className="text-center lead fw-bold">OMSTART</p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Tietoa</h5>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <div href="#!" className="text-white"><strong>Mitä?</strong> OMSTART!</div>
                            </li>
                            <li className="mb-2">
                                <div href="#!" className="text-white"><strong>Missä?</strong> Kerubissa!</div>
                            </li>
                            <li className="mb-2">
                                <div href="#!" className="text-white"><strong>Milloin?</strong> Keskiviikkona 1.9.2021!</div>
                            </li>
                            <li className="mb-2">
                                <div href="#!" className="text-white"><strong>Paljonko maksaa?</strong> 5€!</div>
                            </li>
                            <li className="mb-2">
                                <div className="text-white"><strong>Kenelle?</strong> Opiskelijoille!</div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">seuraa meitä</h5>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
                                <a href="#!" className="text-white link-underline ms-2">Facebook</a>
                            </li>
                            <li className="mb-2">
                                <FontAwesomeIcon icon={['fab', 'kaggle']} size="lg" />
                                <a href="#!" className="text-white link-underline ms-2">Kide.app</a>
                            </li>
                            <li className="mb-2">
                                <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                                <a href="#!" className="text-white link-underline ms-2">Instagram</a>
                            </li>
                            <li className="mb-2">
                                <FontAwesomeIcon icon={['fab', 'youtube']} size="lg" />
                                <a href="#!" className="text-white link-underline ms-2">Youtube</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Ota yhteyttä</h5>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <FontAwesomeIcon icon={['fas', 'envelope']} size="lg" />
                                <a href="#!" className="text-white link-underline ms-2">omstart@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3">
                © 2021 Copyright: <strong>OMSTART</strong>
                <br />
                <a className="text-white link-underline" href="#">takaisin ylös</a>
            </div>
        </footer>
    )
}
