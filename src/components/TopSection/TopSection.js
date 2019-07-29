import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: grey;
  font-size: 1rem;
`;
const StyledWrapperLeft = styled.div`
  display: flex;
  flex-direction: ${props => (props.prim ? "column" : "row")};
  align-items: center;
`;
const StyledWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-right: 20px;
`;

const StyledParagraph = styled.p`
  font-size: ${props => props.bold && "2.5rem"};
  margin-left: ${props => props.bold && "20px"};
  color: ${props => props.bold && "black"};
`;
const StyledIcon = styled.img`
  width: 4rem;
  height: 4rem;
`;
const StyledUnit = styled.span`
  margin-top: -15px;
`;

const TopSection = ({ forecastDay, cities }) => (
  <StyledContainer>
    <StyledWrapperLeft prim>
      <StyledParagraph>
        {cities[forecastDay.cityId].name}, {forecastDay.date}
      </StyledParagraph>
      <StyledWrapperLeft>
        <StyledIcon src={`/img/${forecastDay.type}.png`} />
        <StyledParagraph bold>{forecastDay.temperature}</StyledParagraph>
        <StyledUnit>&deg;C</StyledUnit>
      </StyledWrapperLeft>
    </StyledWrapperLeft>
    <StyledWrapperRight>
      <StyledParagraph>
        Precipitation: {forecastDay.precipitation}%
      </StyledParagraph>
      <StyledParagraph>Humidity: {forecastDay.humidity}%</StyledParagraph>
      <StyledParagraph>
        Wind: {forecastDay.windInfo.speed} mph {forecastDay.windInfo.direction}
      </StyledParagraph>
      <StyledParagraph>Pollen Count: {forecastDay.pollenCount}</StyledParagraph>
    </StyledWrapperRight>
  </StyledContainer>
);

export default TopSection;
