import React from 'react'
import { WeatherContext } from '../context/WeatherContext'


const ForeCastScreen = () => {

    const { data } = React.useContext(WeatherContext);
    console.log(data.weatherData);

    const foreCastObj = data.weatherData[data.selectedState].cities.find(obj => obj.name === data.selectedCity).forecast;

    return <div>
        <div className="header">
            <h2>{`Five days Forecast for ${data.selectedCity}, ${data.selectedState} `}</h2>
        </div>
        {
            foreCastObj.map(forecast => {
                return <div>
                    <div className="container">
                        <h3 className="day">{forecast.Date}</h3>
                        <h3 className="time">{forecast.Time}</h3>
                        <div className="partlycloudy">
                            <p className="conditions">Partly Cloudy</p>
                            <p className="tempRange"><span className="high">{forecast.temprature}</span></p>
                            <p className="feelsLike">Feels Like: <span className="high">{forecast.feels}</span></p>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
}

export default ForeCastScreen;
