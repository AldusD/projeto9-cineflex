import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Movie from './Movie.js';


export default function MovieSelector() {
    // Logic
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => setMovieList([...response.data]));
        promise.catch(e => alert("an internal error ocurred, please wait a few minutes and try again."));
    }, []);
    
    // UI
    return (
        <MovieSelectors>
            <div>
                <h2>Selecione o filme</h2>
            </div>
            <Movies>
                {movieList.map((movie, i) => 
                <Movie 
                    URL={movie.posterURL} 
                    id={movie.id}
                    key={i} />)}
            </Movies>            
        </MovieSelectors>
    );
}

const MovieSelectors = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    margin-top: 68px;    
    
    
    > div {
        font-family: roboto, sans-serif;
        text-align: center;
        padding-top: 50px;
        font-size: 24px;
        color: #293845;
    }
`;

const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
