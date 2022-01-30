const request = require('request')

const geocode = (address,callback)=>{
    geourl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address+".json?access_token=pk.eyJ1IjoiY2hha3JpOTgwIiwiYSI6ImNreG45MDFneDB0dzMydmtvaGQwc2x5N3IifQ.SL2E53irxL2nwlshcYE2tA"

    request({url:geourl,json:true},(error,response)=>{
        if(error){
            callback('unable to connect to the services!',undefined)
        }
        else if(response.body.features.length===0){
            callback('Try out with a new different location',undefined)
        }
        else{
            callback(undefined,{
                lon :response.body.features[0].center[0],
                lat : response.body.features[0].center[1],
                place: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
