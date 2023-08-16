import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Altefunctionalitati from './pages/Altefunctionalitati';
import Conturile from './pages/Conturile';
import Depozite from './pages/Depozite';
import IstoricTranzactii from './pages/IstoricTranzactii';
import Login from './pages/Login';
import Reincarcare from './pages/Reincarcare';
import Transferuri from './pages/Transferuri';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/app" element={<Layout />}>
                <Route index element={<Conturile />} />
                <Route path="/app/depozite" element={<Depozite />} />
                <Route path="/app/conturile" element={<Conturile />} />
                <Route path="/app/transferuri" element={<Transferuri />} />
                <Route path="/app/reincarcare" element={<Reincarcare />} />
                <Route path="/app/istorictranzactii" element={<IstoricTranzactii />} />
                <Route path="/app/altefunctionalitati" element={<Altefunctionalitati />} />
            </Route>
        </Routes>
    );
}

export default App;
