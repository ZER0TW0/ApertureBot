require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity('/help', { type: 'LISTENING' });
});

// PING PONG //

bot.on('message', msg => {
    if (msg.content.toLowerCase() == 'ping') {
        msg.channel.send('pong');
    }
});

// HELP //

bot.on('message', msg => {
    if (msg.content === '/help') {
        msg.channel.send(`I'm afraid I can't do that, ${msg.author}.

My developers are still configuring me. Go bother them instead.`);
    }
});

// KONAMI CODE //

bot.on('message', msg => {
    if (msg.content === '^^vv<><>ba') {
        msg.channel.send(`Nerd`);
    }
});

// B99 ZING //

bot.on('message', msg => {
    let x = Math.random() + 0.01;
    let chance = 0.05;
    let increase = ['ass', 'balls', 'bone', 'butt', 'deep', 'dick', 'fast', 'hard', 'hole', 'juicy', 'lick', 'long', 'moist', 'mouth', 'pleasure', 'sex', 'sexual', 'sexy', 'sleep', 'slippery', 'slowly', 'squeeze', 'wet'];
    let blacklist = ['bad', 'dead', 'death', 'depressed', 'die', 'died', 'fail', 'hurt', 'ill', 'pain', 'poor', 'sad', 'sick', 'suicide', 'therapy'];

    if (increase.some(word => msg.content.includes(word))) {
        chance += 0.10;
    };

    if (blacklist.some(word => msg.content.includes(word))) {
        chance = 0;
    };

    if ((msg.content.length >= 10) && (msg.content.length <= 50) && (x < chance) && (msg.author.bot == false)) {
        msg.channel.send(`${msg.author} 
> ${msg.content}, title of your sex tape`);
    }
});

