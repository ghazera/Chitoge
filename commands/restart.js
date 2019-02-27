const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== "315188366859567104") return message.channel.send("⚙️ Cette commande est réservé au développeurs. ⚙️")

    
  rebootBot(message.channel);
       function rebootBot(channel) {
           message.react('✅')
               .then(message => bot.destroy())
               .then(message => bot.destroy())
              .then(() => bot.login("NDg4MzkxNzIxMjI3NjQ5MDI0.DxpmTA.i7WyBYp6rm6Pc3fGAWT2_b27NK8"));
           message.channel.send("``[Framboise] 🔋 Redémarrage Réussi !``")
       }
    }