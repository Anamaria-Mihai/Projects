import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './components/Footer';
import './pages/Transferuri.css';

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Menu />
            <div className="categories-navbar"></div>
            <div className="background">
                <div className="content-container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}
