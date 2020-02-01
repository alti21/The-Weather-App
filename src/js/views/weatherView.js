export const renderWeather = (weather) => {
    //to display the current weather on the UI
    const markup = `
    <div class="results__container">
        <p class="results__weather--info">${weather.main} / ${weather.weatherDesc} </p>
        <img class="results__weather--info" src=${weather.icon}>
    </div>
    `;
    if(document.querySelector('.results__weather').contains( document.querySelector('.results__container') ))
    {
        document.querySelector('.results__weather').removeChild(document.querySelector('.results__container'));
    }

    document.querySelector('.results__weather').insertAdjacentHTML('afterbegin', markup);

    //change background depending on weather
    if(weather.main === 'Haze' || weather.main === 'Mist')
    {
        //remove css of previous city's weather
        document.querySelector('.container').classList.remove('clear-sky');

        //add css of new city's weather
        document.querySelector('.container').classList.add('background__mist');
        document.querySelector('.mist__container--outer').classList.add('appear');
    }
    else if(weather.main === 'Clear')
    {
        //remove css of previous city's weather
        document.querySelector('.container').classList.remove('background__mist');
        document.querySelector('.mist__container--outer').classList.remove('appear');

        //add css of new city's weather
        document.querySelector('.container').classList.add('clear-sky');
        document.querySelector('.sun').classList.add('appear');

    }
}
//Following is list of possible weather for cities
/*
moderate rain: rain with a little sunshine
light rain: rain with a little sunshine
broken clouds
smoke
light snow
clear sky
*/