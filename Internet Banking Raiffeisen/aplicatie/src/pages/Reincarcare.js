import React, { useState } from 'react';
import DatepickerComponent from '../components/Datepicker';
import Dropdown from '../components/Dropdown';
import InputText from '../components/InputText';
import cardInfoArray from '../data/cardInfo';

export default function Reincarcare() {
    const [selectedCardNumber, setSelectedCardNumber] = useState('');

    const handleSelect = (event) => {
        setSelectedCardNumber(event.target.value);
    };

    const [inputValueTwo, setInputValueTwo] = useState('');
    const [inputValueThree, setInputValueThree] = useState('');

    const handleInputChangeTwo = (event) => {
        setInputValueTwo(event.target.value);
    };

    const handleInputChangeThree = (event) => {
        setInputValueThree(event.target.value);
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectOperator = (event) => {
        setSelectedOption(event.target.value);
    };

    const [updatedCardInfoArray, setUpdatedCardInfoArray] = useState(cardInfoArray);

    const handleTransferClick = () => {
        const parsedInputValue = parseInt(inputValueTwo);

        if (isNaN(parsedInputValue) || parsedInputValue <= 0) {
            return;
        }

        const sourceCardIndex = updatedCardInfoArray.findIndex(
            (item) => item.cardNumber === selectedCardNumber
        );

        if (sourceCardIndex !== -1) {
            const updatedArray = updatedCardInfoArray.map((item, index) => {
                if (index === sourceCardIndex) {
                    return {
                        ...item,
                        cardAmount: `${parseInt(item.cardAmount) - parsedInputValue} EUR`,
                    };
                }
                return item;
            });

            setUpdatedCardInfoArray(updatedArray);
            setInputValueThree('');
        }
    };

    return (
        <div className="transferuri-container">
            <div className="col">
                <div className="section">
                    <h1 className="dincont">DIN CONTUL</h1>
                    <Dropdown
                        cardInfoArray={updatedCardInfoArray}
                        onSelect={handleSelect}
                        placeholder="Selecteaza un cont"
                    />
                </div>

                <div className="section">
                    <h1 className="dincont">OPERATOR</h1>
                    <select
                        className="dropdown"
                        value={selectedOption}
                        onChange={handleSelectOperator}
                    >
                        <option value="">Selecteaza un operator</option>
                        <option value="telekom">Telekom</option>
                        <option value="vodafone">Vodafone</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
                <div className="section">
                    <InputText
                        title="VALOARE REINCARCARE"
                        value={inputValueTwo}
                        onChange={handleInputChangeTwo}
                        placeholder="5 EUR"
                    />
                </div>
                <div className="section">
                    <InputText
                        title="NUMAR TELEFON"
                        value={inputValueThree}
                        onChange={handleInputChangeThree}
                        placeholder="07XXXX"
                    />
                </div>
                <div className="section">
                    <DatepickerComponent
                        label="Data platii:"
                        selectedDate={selectedDate}
                        onChange={handleDateChange}
                    />
                </div>
                <div className="section">
                    <button onClick={handleTransferClick}>REINCARCA</button>
                </div>
            </div>
            <div className="col">
                <div className="section">
                    {selectedCardNumber && (
                        <p className="pclass">Din contul: {selectedCardNumber}</p>
                    )}
                </div>
                <div className="section">
                    {selectedOption && <p className="pclass">Operator: {selectedOption}</p>}
                </div>
                <div className="section">
                    {inputValueTwo && (
                        <p className="pclass">Valoare reincarcare: {inputValueTwo}</p>
                    )}
                </div>
                <div className="section">
                    {inputValueThree && <p className="pclass">Numar telefon: {inputValueThree}</p>}
                </div>
                <div className="section">
                    {selectedDate && (
                        <p className="pclass">Data platii: {selectedDate.toLocaleDateString()}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
