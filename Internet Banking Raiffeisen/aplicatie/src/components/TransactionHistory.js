import React, { useState } from 'react';
import transactionsData from '../data/transactionsData';
import './TransactionHistory.css';
import TransactionItem from './TransactionItem';

const TransactionHistory = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState(transactionsData);

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchText(searchTerm);

        const filtered = transactionsData.filter((transaction) =>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTransactions(filtered);
    };

    return (
        <div className="transaction-history-container">
            <h2 className="transaction-history-header">Istoric tranzactii</h2>
            <input
                className="search-input"
                type="text"
                placeholder="Cauta tranzactie"
                value={searchText}
                onChange={handleSearch}
            />
            <ul className="transaction-list">
                {filteredTransactions.map((transaction, index) => (
                    <TransactionItem key={index} transaction={transaction} />
                ))}
            </ul>
        </div>
    );
};

export default TransactionHistory;
