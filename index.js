require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
//const config = require('./config.json');
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);
//bot.login(config.token);

fs.readdir("./events/", (err, files) => {
    files.forEach((file) => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split(".")[0]
        bot.on(eventName, (...args) => eventHandler(bot, ...args))
    })
})
