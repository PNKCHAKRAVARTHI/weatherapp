const request = require('request')

const weather = (lat,long,callback)=>{
    url="http://api.weatherstack.com/current?access_key=3469f4ed094d984fc364e04076d7c5df&query="+lat+","+long
    request({url:url,json:true},(error,response)=>{
        // console.log(response.body.current)
        if(error){
            callback("unable to connect to network",undefined)
        }
        else if(response.body.error){
            callback("location not found",undefined)
        }
        else{
            console.log(lat)
            console.log(long)
            
            // callback(undefined,"Temperature of "+response.body.location.country+" location is "+response.body.current.temperature+" degree centigrade")
            callback(undefined,{
                "location":response.body.location.region+","+response.body.location.country,
                "forecast":response.body.current.weather_descriptions[0]
            })
        }
    })
}


module.exports = weather