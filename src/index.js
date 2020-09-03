import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import WeatherApp from './components/WeatherApp';
import ForecastScreen from './components/ForecastScreen'
import * as serviceWorker from './serviceWorker';
import WeatherContextProvider from '../src/context/WeatherContext'

ReactDOM.render(
  <React.StrictMode>
    <WeatherContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/forecast" component={ForecastScreen} />
          <Route path="/" component={WeatherApp} />
        </Switch>
      </BrowserRouter>
    </WeatherContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
