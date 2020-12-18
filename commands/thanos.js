module.exports = (msg) => {
    let snap = Math.random()

    if (snap < 0.5) {
        msg.channel.send("*With a snap of his fingers, Thanos obliterates half of the entire world's population. " + msg.author + " has been* ***turned to dust***.");
    } else {
        msg.channel.send("*With a snap of his fingers, Thanos obliterates half of the entire world's population. " + msg.author + " has been* ***spared***.");
    }

}