//const apitoken = require('../config.json').dark_sky_api;
//const {prefix} = require('../config.json');
module.exports = (msg) => {
    //const args = msg.content.slice(prefix.length).split(' ');
    const city = msg.content.slice(8);
    //const command = args.shift().toLowerCase();

    /*const args = message.content.slice(prefix.length).trim().split(' ');
    axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${apitoken}`
        )
        .then(response => {
            let apiData = response;
            let currentTemp = Math.ceil(apiData.data.main.temp)
            let maxTemp = apiData.data.main.temp_max;
            let minTemp = apiData.data.main.temp_min;
            let humidity = apiData.data.main.humidity;
            let wind = apiData.data.wind.speed;
            let author = message.author.username
            let profile = message.author.displayAvatarURL
            let icon = apiData.data.weather[0].icon
            let cityName = args
            let country = apiData.data.sys.country
            let pressure = apiData.data.main.pressure;
            let cloudness = apiData.data.weather[0].description;
            msg.channel.send(`The temperature in ${cityName} is ${currentTemp}.`)
            //message.channel.send(exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName, country));
        }).catch(err => {
            message.reply(`Enter a valid city name`)
        })*/

    
    // let location = msg.author.locale();
    msg.channel.send('location: ' + city);
    // msg.channel.send(location);
}