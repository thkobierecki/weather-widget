import React, { Component } from "react";
import WeatherWidget from "./components/WeatherWidget";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      selectedIdCity: "0",
      isChanged: false,
      forecastDay: [],
      error: ""
    };
  }

  componentDidMount() {
    fetch("http://dev-weather-api.azurewebsites.net/api/city")
      .then(res => {
        return res.json();
      })
      .then(data => {
        let citiesApi = data.map(city => {
          return { id: city.id, name: city.name };
        });
        this.setState({
          cities: [{ id: "0", name: "Select a city" }].concat(citiesApi)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleChange = e => {
    this.setState({
      selectedIdCity: e.target.value
    });
  };
  handleSubmit = async e => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const cityID = this.state.selectedIdCity;
    fetch(
      `http://dev-weather-api.azurewebsites.net/api/city/${cityID}/weather?date=${currentDate}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);

        let forecastAPI = data.map(day => {
          return {
            cityId: day.cityId,
            date: day.date.slice(0, 10),
            temperature: day.temperature,
            precipitation: day.precipitation,
            humidity: day.humidity,
            windInfo: {
              speed: day.windInfo.speed,
              direction: day.windInfo.direction
            },
            pollenCount: day.pollenCount,
            type: day.type
          };
        });
        this.setState({
          isChanged: true,
          forecastDay: forecastAPI
        });
        console.log(this.state.forecastDay[0]);
      })
      .catch(error => {
        console.log(error);
      });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <WeatherWidget
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          cities={this.state.cities}
          selectedIdCity={this.state.selectedIdCity}
          forecastDay={this.state.forecastDay}
          isChanged={this.state.isChanged}
        />
      </div>
    );
  }
}
