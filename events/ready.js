module.exports = (bot) => {
    console.info(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity('/help', { type: 'LISTENING' });
}