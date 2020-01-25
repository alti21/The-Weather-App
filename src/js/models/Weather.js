import axios from 'axios';
console.log('imported module');
//export default 23;
//https://forkify-api.herokuapp.com/api/get?rId=47746

export default class Weather 
{
    constructor(name)
    {
        this.name = name;
    }

    async getWeather()
    {
        try 
        {
            const res = await axios('https://api.openweathermap.org/data/2.5/weather?q=' + this.name + '&appid=fe621362f3067a7385ceb99bd2accef5');
            console.log(res);
            console.log(res.data);
            this.weatherDesc = res.data.weather[0].description;
            this.icon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
            //http://openweathermap.org/img/wn/10d@2x.png
        }
        catch(error)
        {   
            console.log(error);
        }
    }
};