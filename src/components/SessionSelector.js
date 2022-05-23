import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';
import axios from 'axios';

import DaySessions from './DaySessions';
import NotFound from './NotFound';

export default function SessionSelector () {
    // Logic

    const id = useParams().MOVIE_ID;
    const [found, setFound] = useState(true);
    const [movie, setMovie] = useState({});
    const [days, setDays] = useState([]);
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)
        promise.then(response => {
            setMovie({...response.data})    
            setDays([...response.data.days]);
            console.log(response.data)
        })
        promise.catch(e => setFound(false));
        console.log(movie, days);
    },[])
    // UI

    return (
        <>
        <SessionSelectorDiv>
            <h3>Selecione o horário</h3>
                    {days.map((d, i) => 
                    <DaySessions
                        key={i}
                        id={d.id}
                        weekday={d.weekday}
                        date={d.date}
                        showtimes={d.showtimes}
                         />)}
               
        </ SessionSelectorDiv>
        <Footer>
            <img src={movie.posterURL} />
            <p>{movie.title}</p>
        </Footer>
        </>
    );
} 

const SessionSelectorDiv = styled.div`
    font-family: roboto, sans-serif;
    display: flex;
    flex-direction: column;
    margin: 100px 0 120px 0;

    h3 {
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
    }
`;

const Sessions = styled.div`
    background-color: black;
    display: flex;
    z-index: 4;
`;

const Footer = styled.div`
    font-family: roboto, sans-serif;
    background-color: #DFE6ED;
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;

    padding: 10px 0 10px 10px;

    img {
        background-color: white;
        height: 72px;
        width: 48px;
        padding: 8px;
    }

    p {
        margin-top: 38px;
        margin-left: 10px;
    }
`;