import React from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 150px;
  height: 50px;
  background: white;
  color: black;
  font-size: 1rem;
  padding-left: 25px;
  border:none;
  border-bottom:1px solid lightgray;
  @media (min-width: 600px) {
    width: 200px;
    font-size: 1.3rem;
  }
`;
const Option = styled.option`
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  
`;
const Button=styled.input`
  padding:10px 15px;
  width: 100px;
  border-radius:20px;
  font-size:.7rem;
  margin-left:50px;
  transition: ease-out 0.3s;

  @media (min-width: 600px) {
    width: 140px;
    font-size: .9rem;
  }

  :hover{
    font-weight:600;
    cursor:pointer;
    box-shadow: 1px 2px 5px darkgray;
  }
`;

const GetCity = ({ cities, selectedIdCity, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Select value={selectedIdCity} onChange={handleChange}>
      {cities.map(city => (
        <Option key={city.name} value={city.id}>
          {city.name}
        </Option>
      ))}
    </Select>
    <Button type="submit" value="Get Weather" />
  </form>
);

export default GetCity;
