import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductPage from './pages/ProductPage/ProductPage';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <HomePage/> } path="/" exact/>
                <Route element={ <LoginPage/> } path="/Login"/>
                <Route element={ <ProductPage/> } path="/Product"/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;