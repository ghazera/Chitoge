const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    if (message.channel.nsfw === false) return message.channel.send("Désoler, tu n'est pas dans un salon 🔞 NSFW ! Active ce paramètre dans les options d'un canal que tu as choisi !");
    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor("4K", bot.user.avatarURL)
                .setFooter(`Demandé par ${message.author.tag} <a:fbLOVE:507492479621398549>`, message.author.avatarURL)
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}