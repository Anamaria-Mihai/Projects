import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logoo from '../data/logo.png';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="content-footer">
                <div className="logo">
                    <img src={logoo} alt="logo" />
                </div>
                <div className="suport">
                    <h2>Suport</h2>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faPhone} className="phone" />
                            <span className="phone-number">*2000</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMailBulk} className="mail" />
                            <span className="mail">online@raiffeisen.ro</span>
                        </li>
                        <li>
                            <span className="phone-number">+4 021 306 30 02</span>
                        </li>
                    </ul>
                </div>
                <div className="asistenta">
                    <h2>Asistenta</h2>
                    <ul>
                        <li>
                            <a href="#">Conditii general bancare</a>
                        </li>
                        <li>
                            <a href="#">Cerinte tehnice</a>
                        </li>
                        <li>
                            <a href="#">Politica de confidentialitate</a>
                        </li>
                        <li>
                            <a href="#">Informatii referitoare la protectia depozitelor</a>
                        </li>
                    </ul>
                </div>
                <div className="important-link">
                    <h2>Link-uri utile</h2>
                    <ul>
                        <li>
                            <a href="#">Conditii general bancare</a>
                        </li>
                        <li>
                            <a href="#">Cerinte tehnice</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
