const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== "542762942416814100") return message.channel.send("⚙️ Cette commande est réservé au développeurs. ⚙️")

    
  rebootBot(message.channel);
       function rebootBot(channel) {
           message.react('✅')
               .then(message => bot.destroy())
               .then(message => bot.destroy())
              .then(() => bot.login("NTMyNTk5NDM3MjUyNDkzMzMz.D1hq7g.uBmoXCpwzKDtf1_8uOTY_Vtnpn8"));
           message.channel.send("``[Chitoge] 🔋 Redémarrage Réussi !``")
       }
    }