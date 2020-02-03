const request = require('request');
const forecast = ({latitude,longitude,location}, callback) =>{
    const url = 'https://api.darksky.net/forecast/c958ffb9f7e7667fa39d18862f33edad/' + latitude + ',' + longitude + '?units=si';
    request({url, json:true}, (error, {body}) =>{
        if (error){
            callback('Unable to connect to weather service ',undefined)
        } else if (body.error){
            callback('Unable to find location',undefined)
        }else {
            callback(undefined,{
                summary:body.daily.data[0].summary,
                currently:body.currently.temperature,
                timezone:body.timezone
            })
        }
    });
};
module.exports = forecast;