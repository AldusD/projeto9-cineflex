import { Link } from 'react-router-dom';

import styled from 'styled-components';

export default function ({URL, id}) {
    return (
        <Link to={'/sessoes/' + id}>
            <Movie>
                <img src={URL} />
            </Movie>
        </Link>
    );
}

const Movie = styled.div`
    height: 194px;    
    padding: 8px;
    box-shadow: 0 0 10px 2px #00000080;
    border-radius: 6px;
    margin-bottom: 14px;
    img {
        width: 130px;
        height: 194px;
    }

`;