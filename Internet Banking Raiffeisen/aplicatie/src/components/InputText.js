import React from 'react';
import './InputText.css';

const InputText = ({ title, value, onChange, placeholder }) => {
    return (
        <div>
            <h4 className="descriere">{title}</h4>
            <textarea
                className="input"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={4}
            />
        </div>
    );
};

export default InputText;
