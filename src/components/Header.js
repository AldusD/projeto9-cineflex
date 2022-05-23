import styled from 'styled-components';

export default function Header() {
    return (
        <Container>
                <h1>CINEFLEX</h1>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-itens: center;
    background-color: #C3CFD9;
    height: 68px;
    position: fixed;
    top:0;
    left:0;
    
    h1 {
        margin-top: 16px;
        font-size: 34px;
        color: #E8833A;
    }
`;