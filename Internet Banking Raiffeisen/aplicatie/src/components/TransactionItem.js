import React from 'react';
import './TransactionItem.css';

const TransactionItem = ({ transaction }) => {
    return (
        <div className="transaction-card">
            <h4 className="transaction-title">{transaction.description}</h4>
            <p className="transaction-date">{transaction.date}</p>
            <p className="transaction-amount">{transaction.amount}</p>
        </div>
    );
};

export default TransactionItem;
