import { elements } from './base';

export const renderWeather = (weather) => {
    //to display the current weather on the UI
    const markup = `
    <div class="results__container">
        <div class="results__weather--info">${weather.main}</div>
        <img class="results__weather--info" src=${weather.icon}>
    </div>
    <div class="results__weather--temperature">
        <div>Current temperature: ${weather.temperature}</div>
        <div>Min temperature: ${weather.temperatureMin}</div>
        <div>Max temperature: ${weather.temperatureMax}</div>
        <div>Feels like: ${weather.temperatureFeel}</div>
    </div>
    <div class="city__name">
        ${weather.name}
    </div>
    `;
   
    if(elements.container.contains(document.querySelector('.results__container')) 
        && elements.container.contains(document.querySelector('.results__weather--temperature'))
        && elements.container.contains(document.querySelector('.city__name')))
    {
        elements.container.removeChild(document.querySelector('.results__container'));
        elements.container.removeChild(document.querySelector('.results__weather--temperature'));
        elements.container.removeChild(document.querySelector('.city__name'));
    }

    //document.querySelector('.results__weather').insertAdjacentHTML('afterbegin', markup);
    elements.container.insertAdjacentHTML('beforeend', markup);



    //change background depending on weather
    if(weather.main === 'Haze' || weather.main === 'Mist' || weather.main === 'Smoke')
    {
        //remove css of previous city's weather
        elements.container.className = 'container';
        document.querySelector('.mist__container--outer').classList.remove('appear');
        document.querySelector('.cloud__container').classList.remove('appear');
        document.querySelector('.sun').classList.remove('appear');

        //add css of new city's weather
        elements.container.classList.add('background__mist');
        document.querySelector('.mist__container--outer').classList.add('appear');
    }
    else if(weather.main === 'Clear')
    {
        //remove css of previous city's weather
       // elements.container.classList.remove('background__mist');
        elements.container.className = 'container';
        document.querySelector('.mist__container--outer').classList.remove('appear');
        document.querySelector('.cloud__container').classList.remove('appear');

        //add css of new city's weather
        elements.container.classList.add('clear-sky');
        document.querySelector('.sun').classList.add('appear');

    }
    else if(weather.main === 'Clouds')
    {
        //remove css of previous city's weather
        elements.container.className = 'container';
        document.querySelector('.mist__container--outer').classList.remove('appear');
        document.querySelector('.sun').classList.remove('appear');

        //add css of new city's weather
        elements.container.classList.add('clear-sky');
        document.querySelector('.cloud__container').classList.add('appear');

      //  Array.from(document.querySelectorAll('.cloudy')).forEach(cur => cur.classList.add(''))
    }
    else if(weather.main === 'Rain')
    {

    }
    else if(weather.main === 'Snow')
    {
         //remove css of previous city's weather
        elements.container.className = 'container';
        document.querySelector('.mist__container--outer').classList.remove('appear');
        document.querySelector('.sun').classList.remove('appear');
        document.querySelector('.cloud__container').classList.remove('appear');

        //add css of new city's weather
        document.querySelector('.snow').classList.add('appear');

    }
    //else if()
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
*/

//TODO: add unit symbol in front of temperature based on unit that user selects
//Add funcitonality for user to save cities

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