import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function SeatSelector() {
    // Logic
    const sessionId = useParams().SESSION_ID;
    const [seats, setSeats] = useState([]);
    const [info, setInfo] = useState({});
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
        promise.then(r => {
            setSeats([...r.data.seats])
            setInfo({...r.data});
            console.log(r.data);
        })    
    }, [])
        


    // UI
    return (
        <SeatSelectorDiv>
            <h2>Select your seat{'(s)'}</h2>
            <Seats>
            {
                seats.map((s, i) => 
                    <span key={i} isAvailable={s.isAvailable} onClick={() => {}}>{s.name}</span>
                )
            }
            </Seats>
            <Form>
                <p>Costumer's name:</p>
                <input placeholder='Your name here'></input>
                
                <p>Costumer's CPF:</p>
                <input placeholder='Your CPF here'></input>
            </Form>

        </SeatSelectorDiv>
    );
}

const SeatSelectorDiv = styled.div`
    margin-top: 100px;
    font-family: roboto, sans-serif;
    text-align: center;

    span {
        box-sizing: border-box;
        padding-top: 7px;
        background-color: ${props => (!props.isAvailable) ? `#C3CFD9` : `#FBE192`};
        border: 1px solid ${props => (props.isAvailable) ? `#7B8B99` : `#7C52BB` };
        border-radius: 50px;
        height: 30px;
        width: 30px;
        margin: 4px;
    }
`;

const Seats = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 20px;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    text-align: left;

    input {
        text-align: center;
        border: 1 solid #00000080;
        height: 26px;
        margin-bottom: 20px;

    }
`;