import React from 'react';
import './Dropdown.css';

const Dropdown = ({ cardInfoArray, onSelect, placeholder }) => {
    return (
        <select className="dropdown" onChange={onSelect}>
            <option value="">{placeholder}</option>
            {cardInfoArray.map((cardInfo, index) => (
                <option key={index} value={cardInfo.cardNumber}>
                    {cardInfo.cardTitle} - {cardInfo.cardNumber} - {cardInfo.cardAmount}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
