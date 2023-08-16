import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo2 from '../data/logo.png';
import './Login.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'bogdan costache' && password === 'react') {
            navigate('/app');
        } else {
            alert('Credențiale incorecte');
        }
    };

    return (
        <div className="background-2">
            <div className="group-parag">
                <p className="grp1">Bine ai venit la</p>
                <p className="grp2">Raiffeiesen Online</p>
            </div>
            <div className="login-container">
                <div className="logo2">
                    <img src={logo2} alt="logo2" className="logo2-image" />
                </div>
                <h1 className="logare">Logare</h1>
                <input
                    className="login-input"
                    type="text"
                    placeholder="Cod utilizator"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Cod de autentificare"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>
                    Autentificare <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
}
