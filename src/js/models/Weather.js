import axios from 'axios';
console.log('imported module');
//export default 23;
//https://forkify-api.herokuapp.com/api/get?rId=47746

export default class Weather 
{
    constructor(name, unit)
    {
        this.name = name;
        this.unit = unit;
    }

    async getWeather()
    {
        try 
        {
            const res = await axios('https://api.openweathermap.org/data/2.5/weather?q=' + this.name + '&units=' + this.unit + '&appid=fe621362f3067a7385ceb99bd2accef5');
            console.log(res);
            console.log(res.data);
            this.main = res.data.weather[0].main;
            this.weatherDesc = res.data.weather[0].description;
            this.icon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
            this.temperature = res.data.main.temp;
            this.temperatureMin = res.data.main.temp_min;
            this.temperatureMax = res.data.main.temp_max;
            //http://openweathermap.org/img/wn/10d@2x.png
        }
        catch(error)
        {   
            console.log(error);
        }
    }
};