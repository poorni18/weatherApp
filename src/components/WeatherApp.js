import React from 'react';
import SelectComponent from './SelectComponent'
import { WeatherContext } from '../context/WeatherContext'
import CONST from '../config/constants';
import { useHistory } from "react-router-dom";

const WeatherApp = () => {
  const { data } = React.useContext(WeatherContext);

  const stateArray = Object.keys(data.weatherData);
  console.log(data.weatherData);
  let history = useHistory();

  const cityArray = [];
  if (data.selectedState !== '') {
    data.weatherData[data.selectedState].cities.forEach(city => {
      cityArray.push(city.name)
    });
  }

  const citySelectComp = cityArray.length > 0 ? <SelectComponent
    name="selectedCity"
    id="select-city"
    options={cityArray}
    label="City"
    actionName={CONST.UPDATE_CITY}
    context={WeatherContext}
  /> : null

  const forecastBtnHandler = () => {
    history.push("/forecast");
  }

  const submitButtonComp = data.selectedCity === '' ? null :
    <div>
      <button onClick={ forecastBtnHandler }>Show Forecast</button>
    </div>

  return (
    <div id="app">
      <div className="header">
        <h2>Weather App</h2>
      </div>
      <div className="content">
        <SelectComponent
          name="selectedState"
          id="select-state"
          options={stateArray}
          label="State"
          actionName={CONST.UPDATE_STATE}
          context={WeatherContext}
        />
        {citySelectComp}
      </div>
      { submitButtonComp }
    </div>
  );
}

export default WeatherApp;
