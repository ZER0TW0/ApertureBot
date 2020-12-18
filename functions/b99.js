module.exports = (msg) => {
    let x = Math.random() + 0.01;
    let chance = 0.05;
    let increase = ['ass', 'balls', 'bone', 'butt', 'deep', 'dick', 'fast', 'hard', 'hole', 'juicy', 'lick', 'long', 'loose', 'moist', 'mouth', 'pleasure', 'sex', 'sexual', 'sexy', 'sleep', 'slippery', 'slow', 'slowly', 'squeeze', 'tight', 'wet'];
    let blacklist = ['anxiety', 'babies', 'baby', 'bad', 'child', 'children', 'dead', 'death', 'depressed', 'depression', 'die', 'died', 'fail', 'hurt', 'ill', 'kid', 'kids', 'pain', 'poor', 'sad', 'sick', 'suicide', 'therapy'];

    increase.forEach((word) => {
        if (msg.content.includes(word)) {
            chance += 0.10;
        };
    });

    if (blacklist.some(word => msg.content.includes(word))) {
        chance = 0;
    };

    /*if (x < chance) {
        msg.channel.send(`${msg.author} 
> ${msg.content}, title of your sex tape`);
    };*/

    if (x < chance) {
        msg.channel.send(`"${msg.content}", title of your sex tape`);
    };

    // STORE EACH TITLE IN A FILE



    // RATING SYSTEM

}