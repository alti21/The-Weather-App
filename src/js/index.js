import Weather from './models/Weather';
const n = 25;
console.log(`imported ${Weather} from another module ${n}`);
//import axios from 'axios';
const controlWeather = async () => {
  //  const test = new Weather();
   // await test.getWeather();
}

async function test(cityID) {
    try{
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=fe621362f3067a7385ceb99bd2accef5');
        const data = await res.json();
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
};

test(6167865).then(result => {
    console.log(result);
});

