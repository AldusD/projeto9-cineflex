import styled from 'styled-components';

export default function NotFound() {
    return (
        <Container>
            <h1>404</h1>
            <h2>Not Found :/</h2>
            <p>The content you are looking for are missing or was incorrectly requested </p>
        </Container>
    );
}

const Container = styled.div`
    font-family: roboto, sans-serif;
    
    heigth: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 30%;
    left: 0;
    z-index: 1;
    margin-top: 100px;
    
    text-align: center;
    h1 {
        font-size 46px;
        margin: 16px 0; 
    }

    h2 {
        font-size: 26px;
    }

`;