//import axios from 'axios';
console.log('imported module');
export default 23;


 class Weather 
{
    constructor()
    {
     //   this.id = id;
    }
//https://forkify-api.herokuapp.com/api/get?rId=47746
    async getWeather()
    {
        try 
        {
           // const res = await axios({
           //     url: 'https://forkify-api.herokuapp.com/api/get?rId=47746',
           //     method: 'get'
          //    });

            
              
        }
        catch(error)
        {   
            alert('error!');
        }
    }
};