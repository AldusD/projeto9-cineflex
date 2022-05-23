import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import './assets/reset.css';
import Header from './components/Header.js'
import MovieSelector from './components/MovieSelector.js';

export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <MovieSelector /> } />
            </Routes>
        </BrowserRouter>
    );
}