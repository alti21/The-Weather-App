export const renderWeather = (weather) => {
    //to display the current weather on the UI
    const markup = `
    <div class="results__container">
        <p class="results__weather--info"> ${weather.weatherDesc} </p>
        <img class="results__weather--info" src=${weather.icon}>
    </div>
    `;
    if(document.querySelector('.results__weather').contains( document.querySelector('.results__container') ))
    {
        document.querySelector('.results__weather').removeChild(document.querySelector('.results__container'));
    }
   // document.querySelector('.results__weather').replaceChild()
    document.querySelector('.results__weather').insertAdjacentHTML('afterbegin', markup);
    //TODO remove current weather info if user searches another city
    //remove children of div with class = results__weather

    //change background depending on weather
    if(weather.weatherDesc === 'haze' || weather.weatherDesc === 'mist')
    {
        document.querySelector('.container').classList.add('background__mist');
       
        document.querySelector('.mist__item--1').classList.add('mist');
        document.querySelector('.mist__item--2').classList.add('mist');
        document.querySelector('.mist__item--3').classList.add('mist');
        document.querySelector('.mist__item--4').classList.add('mist');
        document.querySelector('.mist__item--5').classList.add('mist');

        document.querySelector('.mist__item--1-2').classList.add('mist');
        document.querySelector('.mist__item--2-2').classList.add('mist');
        document.querySelector('.mist__item--3-2').classList.add('mist');
        document.querySelector('.mist__item--4-2').classList.add('mist');
        document.querySelector('.mist__item--5-2').classList.add('mist');
    }
}