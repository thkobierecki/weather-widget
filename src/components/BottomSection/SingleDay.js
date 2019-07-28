import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: none;
  }
`;

const StyledParagraph = styled.p`
  font-size: 0.9rem;

  color: ${({ bold }) => bold && "black"};
  font-weight: ${({ bold }) => bold && "600"};
`;
const StyledIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

const SingleDay = ({ weather }) => (
  <StyledContainer>
    <StyledParagraph bold>{weather.date}</StyledParagraph>
    <StyledIcon src={`/img/${weather.type}.png`} />

    <StyledParagraph bold>
      {weather.temperature}
      &deg;
    </StyledParagraph>

    <StyledParagraph>Pollen {weather.pollenCount}</StyledParagraph>
  </StyledContainer>
);

export default SingleDay;
