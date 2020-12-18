const {prefix} = require('../config.json')
const help = require('../commands/help');
const weather = require('../commands/weather');
const thanos = require('../commands/thanos');
const twentytwenty = require('../commands/2020');
const b99 = require('../functions/b99');
const hangman = require('../functions/hangman');

module.exports = (bot, msg) => {
    
    // PING PONG

    if (msg.content.toLowerCase() === 'ping') {
        msg.channel.send('pong');
    }

    // HELP

    if (msg.content.toLowerCase() === `${prefix}help`) {
        return help(msg);
    }

    // KONAMI CODE

    if (msg.content.toLowerCase() === '^^vv<><>ba') {
        msg.channel.send(`Nerd`);
    }

    // B99 ZING

    //if (msg.channel.id

    if ((msg.content.length >= 10) && (msg.content.length <= 50) && (msg.author.bot == false)) {
        return b99(msg);
    }

    // WEATHER

    if (msg.content.startsWith(`${prefix}weather`)) {
        return weather(msg);
    }

    // THANOS SNAP

    if (msg.content.toLowerCase() === `${prefix}thanos`) {
        return thanos(msg);
    }

    // QUARANTINE COUNTDOWN

    if (msg.content === `${prefix}2020`) {
        return twentytwenty(msg);
    }   

    // HANGMAN 

    if (msg.content.toLowerCase() === `${prefix}hangman`) {
        // start hangman if not already started
        //return hangman()
    }


    // HERE BE TESTIN'

    // fs.readdir("../commands/", (err, files) => {
    //     files.forEach((file) => {
    //         const commandFile = require(`../commands/${file}`)
    //         const command = file.split(".")[0]
    //         msg.channel.send(commandFile);
    //         if (msg.content === `/${command}`) {
    //             return commandFile(msg);
    //             //bot.on(eventName, (...args) => eventHandler(bot, ...args))
    //         }
    //     })
    // })
    
    //const commandsFolder = fs.readdirSync('../commands').filter(file => file.endsWith('.js'));
    // const commandsFolder = fs.readdirSync('../commands');
   
    // for (const file of commandsFolder) {
    //     const commandFile = require(`../commands/${file}`);
    //     const command = file.split(".")[0];
    //     if (msg.content === `/${command}`) {
    //         return commandFile(msg);
    //         //bot.on(eventName, (...args) => eventHandler(bot, ...args))
    //     }
    // })
    
}
