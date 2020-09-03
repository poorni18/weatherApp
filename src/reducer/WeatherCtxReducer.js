import CONST from '../config/constants';

export const weatherCtxReducer = (state, action) => {
    switch(action.type){
        case CONST.UPDATE_STATE: 
            return {
                ...state,
                selectedState: action.selectedState,
                selectedCity: ""
            }
        case CONST.UPDATE_CITY:
            return {
                ...state,
                selectedCity: action.selectedCity
            }
        case CONST.STORE_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.weatherData
            }
        default: 
            return state
    }
}
