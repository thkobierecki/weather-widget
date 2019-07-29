import React from "react";
import GetCity from "../components/TopSection/GetCity/GetCity";
import TopSection from "../components/TopSection/TopSection";
import BottomSection from "../components/BottomSection/BottomSection";
import LoadingPage from "./LoadingPage";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 20px 20px 10px 30px;
  overflow-x: hidden;
  border-bottom: 1px solid darkgray;

  @media (min-width: 600px) {
    width: 90%;
    max-width: 700px;
    box-shadow: 1px 2px 5px darkgray;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;

const WeatherWidget = ({
  handleSubmit,
  handleChange,
  cities,
  selectedIdCity,
  forecastDay,
  isChanged
}) => (
  <StyledContainer>
    <GetCity
      cities={cities}
      selectedIdCity={selectedIdCity}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
    {isChanged ? (
      <>
        <TopSection cities={cities} forecastDay={forecastDay[0]} />
        <BottomSection forecastDay={forecastDay} />
      </>
    ) : (
      <LoadingPage />
    )}
  </StyledContainer>
);

export default WeatherWidget;
