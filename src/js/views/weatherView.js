import { elem } from './base';



export const renderWeather = (weather) => {
    //to display the current weather on the UI
    const markup = `
    <div class="results__container">
        <div class="results__weather--info">${weather.main}</div>
        <img class="results__weather--info" src=${weather.icon}>
        <span class="current">${Math.round(weather.temperature)}${unitDisplay(weather.unit)}</span>
    </div>
    <div class="results__weather--temperature">
        <div>Min<br>${weather.temperatureMin}</div>
        <div>Max<br>${weather.temperatureMax}</div>
        <div>Feels like<br>${weather.temperatureFeel}</div>
    </div>
    <div class="city__name">
        ${weather.name}, ${weather.country}
    </div>
    
    <div class="wind">
        Wind 
        <div>${weather.wind.speed} m/s at ${weather.wind.deg}°</div>
        <i class="wi wi-wind towards-${weather.wind.deg}-deg"><i>
    </div>
    
    `;

    const weatherObj = {
        resContainer: document.querySelector('.results__container'),
        temp: document.querySelector('.results__weather--temperature'),
        city: document.querySelector('.city__name'),
        mist: document.querySelector('.mist__container--outer'),
        cloud: document.querySelector('.cloud__container'),
        sun: document.querySelector('.sun'),
        snow: document.querySelector('.snow'),
        thunder: document.querySelector('.lightning__container')
    }

    if(elem.container.contains(weatherObj.resContainer) 
        && elem.container.contains(weatherObj.temp)
        && elem.container.contains(weatherObj.city))
    {
        elem.container.removeChild(weatherObj.resContainer);
        elem.container.removeChild(weatherObj.temp);
        elem.container.removeChild(weatherObj.city);
    }

    elem.container.insertAdjacentHTML('beforeend', markup);

    //change background depending on weather
    if(['Haze', 'Mist', 'Smoke'].includes(weather.main))
    {
        //remove css of previous city's weather
        elem.container.className = 'container';
        //weatherObj.mist.classList.remove('appear');//try to make 1 function that can have different
        weatherObj.cloud.classList.remove('appear');
        weatherObj.sun.classList.remove('appear');
        weatherObj.snow.classList.remove('appear');
        weatherObj.thunder.classList.remove('appear');

        //add css of new city's weather
        elem.container.classList.add('background__mist');
        weatherObj.mist.classList.add('appear');
    }
    else if(weather.main === 'Clear')
    {
        //remove css of previous city's weather
        elem.container.className = 'container';
        weatherObj.mist.classList.remove('appear');
        weatherObj.cloud.classList.remove('appear');
        weatherObj.snow.classList.remove('appear');
        weatherObj.thunder.classList.remove('appear');

        //add css of new city's weather
        elem.container.classList.add('clear-sky');
        weatherObj.sun.classList.add('appear');

    }
    else if(weather.main === 'Clouds')
    {
        //remove css of previous city's weather
        elem.container.className = 'container';
        weatherObj.mist.classList.remove('appear');
        weatherObj.sun.classList.remove('appear');
        weatherObj.snow.classList.remove('appear');
        weatherObj.thunder.classList.remove('appear');

        //add css of new city's weather
        elem.container.classList.add('clear-sky');
        weatherObj.cloud.classList.add('appear');

    }
    else if(weather.main === 'Rain')
    {

    }
    else if(weather.main === 'Snow')
    {
         //remove css of previous city's weather
        elem.container.className = 'container';
        weatherObj.mist.classList.remove('appear');
        weatherObj.sun.classList.remove('appear');
        weatherObj.cloud.classList.remove('appear');
        weatherObj.thunder.classList.remove('appear');

        //add css of new city's weather
        weatherObj.snow.classList.add('appear');

    }
    else if(weather.main === 'Thunderstorm')
    {

        //remove css of previous city's weather
        elem.container.className = 'container';
        weatherObj.mist.classList.remove('appear');
        weatherObj.sun.classList.remove('appear');
        weatherObj.cloud.classList.remove('appear');
        weatherObj.snow.classList.remove('appear');

        //add css of new city's weather
        elem.container.className = 'container';
        elem.container.classList.add('background__mist');
        weatherObj.cloud.classList.add('appear');
        weatherObj.thunder.classList.add('appear');
    }
}
//Following is list of possible weather for cities
/*
moderate rain: rain with a little sunshine
light rain: rain with a little sunshine
broken clouds
smoke
light snow
rain
Drizzle - rainy
Thunderstorm
*/

//TODO: add unit symbol in front of temperature based on unit that user selects
//Add funcitonality for user to save cities
//add funcitonality if weather is hot, put warm symbol, if cold, put cold symbol

export const errorWarning = () => {
    const markup = `
    <div class="error_warning">
        <p>Invalid city name</p>
    </div>
    `;
    document.querySelector('.search__form').insertAdjacentHTML('afterend', markup);
    sleep(2500).then(() => document.querySelector('.error_warning').remove());
}

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}


const change = (cl, visibility) => {
    document.querySelector(cl).classList.remove(visibility);
}

const unitDisplay = (unitType) => {
    if(unitType === "metric")
    {
        return `°C`;
    } 
    else if(unitType === "imperial")
    {
        return '°F';
    }
    else return ` K`;
}

//helper functions
const weatherDisplay = (weatherType) => {
   // document.querySelector(weatherType).
}

const removeChild = (parent, child, amount) => {
    for(let i=0; i < amount; i++)
    {
        document.querySelector(parent).removeChild(document.querySelector(child));
    }
}
