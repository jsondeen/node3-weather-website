const request = require('request')

const forecast = (latitude, longitude, callback) => {

//jws    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

const url = 'https://api.darksky.net/forecast/5e5bf7da1a42dd3a689daf3f7a46161f/' + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            //console.log('body.daily.data[0]:', body.daily.data[0])
            //console.log('body.currently:', body.currently)
            callback(undefined,
                body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +
                ' degress out.' +
                ' The low/high will be ' + body.daily.data[0].temperatureLow + '/' +
                body.daily.data[0].temperatureHigh +
                ' There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
