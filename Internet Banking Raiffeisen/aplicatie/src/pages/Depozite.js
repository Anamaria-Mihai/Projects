import { faArrowRight, faFaceGrinWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Depozite.css';

function Depozite() {
    return (
        <>
            <div className="custom-container">
                <h6 className="in-din">Transfer in/din depozite</h6>
                <div className="title-group">
                    <h2>Transfer din depozit</h2>
                    <h2>Transfer catre depozit</h2>
                </div>
                <FontAwesomeIcon
                    className="facegrin"
                    icon={faFaceGrinWink}
                    style={{ color: '#e2d003' }}
                />

                <div className="paragraph-group">
                    <p className="parag1">Nu ai niciun depozit eligibil pentru transfer!</p>
                    <p>De aici vei putea transfera bani din contul de depozit</p>
                </div>
                <div className="button-container">
                    <button className="but">
                        Deschide un depozit
                        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Depozite;
