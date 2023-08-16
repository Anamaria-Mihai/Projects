import React from 'react';
import '../Conturile.css';
import Card from '../components/Card';
import Carduri from '../components/Carduri';
import Deschidecont from '../components/Deschidecont';
import cardInfoArray from '../data/cardInfo';

export default function Conturile() {
    return (
        <>
            <div className="card-container">
                <h1 className="title1">Conturi</h1>
                <div className="cards">
                    {cardInfoArray.map((info, index) => (
                        <Card key={index} info={info} />
                    ))}

                    <Deschidecont />
                </div>
                <div className="2carduri">
                    <h1 className="title2">Carduri</h1>
                    <Carduri />
                </div>
            </div>
        </>
    );
}
