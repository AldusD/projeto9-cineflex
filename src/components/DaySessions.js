import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function DaySessions({id, date, weekday, showtimes}) {
    return (
        <Container>
            <h4> {weekday} - {date}</h4>
            <Showtimes>
                {showtimes.map((s, i) => 
                <Link to={`/assentos/${s.id}`}>
                    <span key={i}>{s.name}</span>
                </Link>
                )}
            </Showtimes>
        </Container>
    );
}

const Container = styled.div`
    font-family: roboto, sans-serif;
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    h4 {
        font-size: 20px;
        margin: 22px 0;
    }

    span {
        box-sizing: border-box;
        background-color: #E8833A;
        color: white;
        height: 30px;
        width: 80px;
        padding-top: 8px;
        margin: 10px 0;
        margin-right: 20px;

        text-decoration: none;
    }
`;

const Showtimes = styled.div`
    display: flex;
    text-align: center;
`;