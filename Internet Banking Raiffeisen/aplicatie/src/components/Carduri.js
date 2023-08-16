import React from 'react';
import cardImage from '../data/card1.png';
import card2Image from '../data/poza2.png';
import './Carduri.css';

function Carduri() {
    return (
        <>
            <div className="carduriexistente">
                <img src={cardImage} alt="Card" />
                <p className="pnume">Bogdan Costache</p>
                <p className="pnr">RO72 RZBR 1111 0900 3380 4602</p>
                <p className="pvalabil">Valabil pana la: 12/26</p>
            </div>
            <div className="carduriexistente">
                <img src={card2Image} alt="Card" />
                <p className="pnume">Bogdan Costache</p>
                <p className="pnr">RO99 RZBR 1234 5678 9012</p>
                <p className="pvalabil">Valabil pana la: 04/25</p>
            </div>
        </>
    );
}

export default Carduri;
