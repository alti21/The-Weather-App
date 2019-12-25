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
            //const res = await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=fe621362f3067a7385ceb99bd2accef5');
            //const res = await axios('https://api.openweathermap.org/data/2.5/weather?id=' + this.id + '&appid=fe621362f3067a7385ceb99bd2accef5');
            const res = await axios('https://api.openweathermap.org/data/2.5/weather?q=' + this.name + '&appid=fe621362f3067a7385ceb99bd2accef5');
            //const data = await res.json();
            //return data;
            console.log(res);
            console.log(res.data);
            this.weatherDesc = res.data.weather[0].description;
        }
        catch(error)
        {   
            console.log(error);
        }
    }
};