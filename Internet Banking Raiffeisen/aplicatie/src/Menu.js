import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
        <nav>
            <ul className="menu-ul">
                <li>
                    <Link to="/app/conturile" className="nav-link">
                        Conturile tale
                    </Link>
                </li>
                <li>
                    <Link to="/app/transferuri" className="nav-link">
                        Transferuri si plati
                    </Link>
                </li>
                <li>
                    <Link to="/app/depozite" className="nav-link">
                        Depozite
                    </Link>
                </li>
                <li>
                    <Link to="/app/reincarcare" className="nav-link">
                        Reincarcare
                    </Link>
                </li>
                <li>
                    <Link to="/app/altefunctionalitati" className="nav-link">
                        Alte functionalitati
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
