import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ info }) {
    const { cardTitle, cardNumber, cardAmount, historyButtonText, refundButtonText } = info;

    return (
        <div className="card">
            <p className="p1">{cardTitle}</p>
            <p className="p2">{cardNumber}</p>
            <p className="amount">{cardAmount}</p>
            <div className="card-buttons">
                <Link to="/app/IstoricTranzactii">
                    <button className="history">{historyButtonText}</button>
                </Link>
                <button className="refund">{refundButtonText}</button>
            </div>
        </div>
    );
}

export default Card;
