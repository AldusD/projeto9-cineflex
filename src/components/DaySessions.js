import styled from 'styled-components';

export default function DaySessions({id, date, weekday, showtimes}) {
    return (
        <Container>
            <h4> {weekday} - {date}</h4>
            <Showtimes>
                {showtimes.map((s, i) => <span key={i}>{s.name}</span>)}
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
`;

const Showtimes = styled.div`
    display: flex;
    text-align: center;
    span {
        box-sizing: border-box;
        background-color: #E8833A;
        color: white;
        height: 30px;
        width: 80px;
        padding-top: 8px;
        margin: 10px 0;
        margin-right: 20px;
    }
`;