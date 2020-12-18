const help = require('../commands/help');
const weather = require('../commands/weather');
const thanos = require('../commands/thanos');
const twentytwenty = require('../commands/2020');
const b99 = require('../functions/b99');

module.exports = (bot, msg) => {
    
    // PING PONG

    if (msg.content.toLowerCase() == 'ping') {
        msg.channel.send('pong');
    }

    // HELP

    if (msg.content === '/help') {
        return help(msg);
    }

    // KONAMI CODE

    if (msg.content.toLowerCase() == '^^vv<><>ba') {
        msg.channel.send(`Nerd`);
    }

    // B99 ZING

    //if (msg.channel.id

    if ((msg.content.length >= 10) && (msg.content.length <= 50) && (msg.author.bot == false)) {
        return b99(msg);
    }

    // WEATHER

    if (msg.content === '/weather') {
        return weather(msg);
    }

    // THANOS SNAP

    if (msg.content === '/thanos') {
        return thanos(msg);
    }

    // QUARANTINE COUNTDOWN

    if (msg.content === '/2020') {
        return twentytwenty(msg);
    }   

}
