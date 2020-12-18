module.exports = (msg) => {
    let start = Date.parse('mar 13 2020 17:00:00');
    let today = Date.parse(new Date());
    let difference = Math.floor((today - start) / (24 * 60 * 60 * 1000));
    msg.channel.send(`We've been in quarantine due to COVID-19 for ${difference} days. 
    
Stay safe. Wear a mask. Wash your hands. We'll see you soon. <3`);
}