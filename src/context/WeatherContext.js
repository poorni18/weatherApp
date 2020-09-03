import React from 'react';
import { weatherCtxReducer } from '../reducer/WeatherCtxReducer';
import CONST from '../config/constants'

const initialState = {
    weatherData : {},
    selectedState : '',
    selectedCity : ''
};

export const WeatherContext = React.createContext();

const WeatherContextProvider = (props) => {
    const [data, dispatch] = React.useReducer(weatherCtxReducer, initialState);
    React.useEffect(() => {
        const fetchWeatherData = async () => {
            let fetchData = await fetch("http://localhost:3000/States");
            fetchData = await fetchData.json();
            dispatch({
                type: CONST.STORE_WEATHER_DATA,
                weatherData: fetchData
            })
        }
        fetchWeatherData();
    }, [])
    return <WeatherContext.Provider value = {{data , dispatch}}>
        {props.children}
    </WeatherContext.Provider>
}

export default WeatherContextProvider;