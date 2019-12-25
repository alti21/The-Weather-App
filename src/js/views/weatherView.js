export const renderWeather = (weather) => {
    const markup = `
    <p> ${weather.weatherDesc} </p>
    `;
    document.querySelector('.search__form').insertAdjacentHTML('beforeend', markup);
}