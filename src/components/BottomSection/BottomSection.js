import React from "react";
import SingleDay from "./SingleDay";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  color: grey;
  width: 90%;

  @media (min-width: 600px) {
    flex-direction: row;
    flex:none;
  }
`;

const BottomSection = ({ forecastDay }) => (
  <StyledContainer>
    {forecastDay.map(day => (
      <SingleDay key={day} weather={day} />
    ))}
  </StyledContainer>
);

export default BottomSection;
