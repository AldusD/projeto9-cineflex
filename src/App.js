import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './assets/reset.css';
import Header from './components/Header.js'
import MovieSelector from './components/MovieSelector.js';
import SessionSelector from './components/SessionSelector.js';

export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <MovieSelector /> } />
                <Route path="/sessoes/:MOVIE_ID" element={ <SessionSelector />} />
            </Routes>
        </BrowserRouter>
    );
}