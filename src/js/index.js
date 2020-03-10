import Weather from './models/Weather';
import * as weatherView from './views/weatherView';
const n = 25;
console.log(`imported ${Weather} from another module ${n}`);
//import axios from 'axios';

const state = {};

const controlWeather = async (cityName, unitType, e) => {
//want user to input city into search field, then that city will go in as paramater in next line
    //document.querySelector('.search__form').nodeValue;
    state.weather = new Weather(cityName, unitType, e);

    try
    {
        await state.weather.getWeather();

        if(!state.weather.err)
        {
            weatherView.renderWeather(state.weather);
        }
        else if(state.weather.err)
        {
            weatherView.errorWarning();
        }
        
    }
    catch(error)
    {
        console.log(error);
        alert('ok');
    }
}
let test = 'a';

document.querySelector('form').addEventListener('submit', e => {
   // alert(document.querySelector('.search__field').value);//get value of search field
    e.preventDefault();
    controlWeather(document.querySelector('.search__field').value, document.querySelector('.search__dropDown').options[document.querySelector('.search__dropDown').options.selectedIndex].value);
   // alert(window.location + 'a');
    
});



/*
async function test(cityID) {
    try{
        //const res = await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=fe621362f3067a7385ceb99bd2accef5');
        const res = await axios('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=fe621362f3067a7385ceb99bd2accef5');
        //const data = await res.json();
        //return data;
        console.log(res);
        console.log(res.data);
    }
    catch(error)
    {
        console.log(error);
    }
};

test(6167865);
*/


/*
test(6167865).then(result => {
    console.log(result);
});
*/
