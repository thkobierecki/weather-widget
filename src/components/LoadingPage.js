import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    display:flex;
    justify-content:center;
    margin-top:70px;
    font-size:1.5rem;
    color: grey;
    @media (min-width: 600px) {
        font-size:2rem;
    }
`;
const LoadingPage=()=>(
    <Container>
        Please select a city to get a weather.
    </Container>
);

export default LoadingPage;