const Discord = require('discord.js');

module.exports.run = (bot, message, args, discord) => {
    require('snekfetch').get('http://thecatapi.com/api/images/get')
    .then(response => {
      let em = new Discord.RichEmbed()
      .setTitle("Des chats ! **Des chats partout !**")
      .setImage(response.body.url)
      .setDescription("Un chat vient par ici...")
      .setTimestamp()
      .setFooter("Chat aléatoires")
      if (response.body.status == "200 OK") {
        message.channel.send({embed: em})
      } else {
        message.channel.send("Aucun chats n'est dans les environt")
      }
    })
  }