import { faEnvelope, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <h2 className="titlename">Raiffeisen Bank</h2>
                    <div className="profile">
                        <div className="envelope">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="user-icon">
                            <FontAwesomeIcon icon={faUser} />
                            <span className="user-text">BOGDAN COSTACHE</span>
                        </div>
                        <div className="poweroff">
                            <FontAwesomeIcon icon={faPowerOff} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
