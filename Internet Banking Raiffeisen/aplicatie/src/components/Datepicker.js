import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Datepicker.css';

const DatepickerComponent = ({ label, selectedDate, onChange }) => {
    const handleDateChange = (date) => {
        onChange(date);
    };

    return (
        <div className="datepicker-container">
            <label className="label">{label}</label>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                isClearable
            />
        </div>
    );
};

export default DatepickerComponent;
