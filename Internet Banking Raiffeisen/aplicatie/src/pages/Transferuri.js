import React, { useState } from 'react';
import DatepickerComponent from '../components/Datepicker';
import Dropdown from '../components/Dropdown';
import InputText from '../components/InputText';
import cardInfoArray from '../data/cardInfo';
import './Transferuri.css';

export default function Transferuri() {
    const [selectedCardNumber, setSelectedCardNumber] = useState('');

    const handleSelect = (event) => {
        setSelectedCardNumber(event.target.value);
    };

    let [selectedCardNumber2, setSelectedCardNumber2] = useState('');

    const handleSelect2 = (event) => {
        setSelectedCardNumber2(event.target.value);
    };

    let [inputValueOne, setInputValueOne] = useState('');
    const [inputValueTwo, setInputValueTwo] = useState('');
    const [inputValueThree, setInputValueThree] = useState('');

    const handleInputChangeOne = (event) => {
        setInputValueOne(event.target.value);
    };

    const handleInputChangeTwo = (event) => {
        setInputValueTwo(event.target.value);
    };

    const handleInputChangeThree = (event) => {
        setInputValueThree(event.target.value);
    };

    const [selectedComponent, setSelectedComponent] = useState('componentOne');
    const renderComponent = () => {
        switch (selectedComponent) {
            case 'componentOne':
                inputValueOne = null;
                return (
                    <div>
                        <Dropdown
                            cardInfoArray={updatedCardInfoArray}
                            onSelect={handleSelect2}
                            placeholder="Selecteaza un cont"
                        />
                    </div>
                );
            case 'componentTwo':
                selectedCardNumber2 = null;
                return (
                    <InputText
                        title=""
                        value={inputValueOne}
                        onChange={handleInputChangeOne}
                        placeholder="Introduceti IBAN"
                    />
                );
            default:
                return <></>;
        }
    };
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [updatedCardInfoArray, setUpdatedCardInfoArray] = useState(cardInfoArray);

    const handleTransferClick = () => {
        const parsedInputValue = parseInt(inputValueThree);

        if (isNaN(parsedInputValue) || parsedInputValue <= 0) {
            return;
        }

        const sourceCardIndex = updatedCardInfoArray.findIndex(
            (item) => item.cardNumber === selectedCardNumber
        );
        const destinationCardIndex = updatedCardInfoArray.findIndex(
            (item) => item.cardNumber === selectedCardNumber2
        );

        if (sourceCardIndex !== -1) {
            const updatedArray = updatedCardInfoArray.map((item, index) => {
                if (index === sourceCardIndex) {
                    return {
                        ...item,
                        cardAmount: `${parseInt(item.cardAmount) - parseInt(inputValueThree)} Lei`,
                    };
                } else if (index === destinationCardIndex) {
                    return {
                        ...item,
                        cardAmount: `${parseInt(item.cardAmount) + parseInt(inputValueThree)} Lei`,
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
                    <div className="buttonss">
                        <button onClick={() => setSelectedComponent('componentOne')}>
                            Plata intre conturile proprii
                        </button>
                        <button onClick={() => setSelectedComponent('componentTwo')}>
                            Plata catre alt cont
                        </button>
                    </div>

                    <h1 className="dincont">IN CONTUL</h1>

                    {renderComponent()}
                </div>
                <div className="section">
                    <InputText
                        title="DESCRIERE (OPTIONAL)"
                        value={inputValueTwo}
                        onChange={handleInputChangeTwo}
                        placeholder="Introdu o descriere..."
                    />
                </div>
                <div className="section">
                    <InputText
                        title="SUMA"
                        value={inputValueThree}
                        onChange={handleInputChangeThree}
                        placeholder=""
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
                    <button onClick={handleTransferClick}>Transfera</button>
                </div>
            </div>
            <div className="col">
                <div className="section">
                    {selectedCardNumber && (
                        <p className="pclass">Din contul: {selectedCardNumber}</p>
                    )}
                </div>
                <div className="section">
                    {selectedCardNumber2 && (
                        <p className="pclass">In contul: {selectedCardNumber2}</p>
                    )}
                    {inputValueOne && <p className="pclass">In contul: {inputValueOne}</p>}
                </div>
                <div className="section">
                    {inputValueThree && <p className="pclass">Suma: {inputValueThree}</p>}
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
