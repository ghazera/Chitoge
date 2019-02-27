const Discord = require("discord.js"); //2018 by DRYNO


// Make sure you got this when you use a command handler!*
module.exports.run = async (bot, message, args) => {

    var prefix = 'c!';
    var blackembed = new Discord.RichEmbed() //un embed si tu sais pas ce que c'est ツ
    .setColor("RANDOM")
    .setTitle("<a:BanHammer:518450308116905997> __BLACKLIST__ <a:BanHammer:518450308116905997>")
    .setThumbnail(`https://cdn2.iconfinder.com/data/icons/financial-circle/512/risk_management-512.png`)
    .addField("<a:Chest:507492479243780116> **__Vous ne pouvez pas m'utiliser car vous êtes banni du bot__** <a:Chest:507492479243780116>", "Pour faire une demande de débannissement, contacté Majesty#1710 ! ou rendez vous sur le [Discord Support](https://discord.gg/KD4G5Ny)")
    .addField("**<:TopLane:520660558215905320> __POUR LE STAFFS SERVEUR__**", `Nous vous conseillons de bannir cette personne de votre serveur car il est présent dans la blacklist des commandes (généralement pour une raison grave, exemple : tente de bypass les permissions du bot, ou envoie des insultes en message privé au bot (support)) Libre a vous de prendre votre choix.`)
    .setImage("https://upload.wikimedia.org/wikipedia/fr/b/bf/The-Blacklist-logo.png") //image de panneau blacklisté
    .setFooter("Pour demander un Blacklist, Envoyé un message privé a Framboise avec l'ID, le pseudo et le lien d'un screen.", bot.user.avatarURL)
    
    if(!message.content.startsWith(prefix)) return
      if(message.author.id === "474311996561424440")  return message.channel.send(blackembed)
      if(message.author.id === "513652107610423297")  return message.channel.send(blackembed)
      if(message.author.id === "404216624980295682")  return message.channel.send(blackembed)
      if(message.author.id === "516419766609641496")  return message.channel.send(blackembed)
      if(message.author.id === "360918262537650177")  return message.channel.send(blackembed)
      if(message.author.id === "434715310361280512")  return message.channel.send(blackembed)
      if(message.author.id === "279992263982186496")  return message.channel.send(blackembed)
      if(message.author.id === "373574345546530847")  return message.channel.send(blackembed)
      if(message.author.id === "356045455785984001")  return message.channel.send(blackembed)
      if(message.author.id === "489092264715485187")  return message.channel.send(blackembed)
      if(message.author.id === "474904367334686730")  return message.channel.send(blackembed)
      if(message.author.id === "391607051513495562")  return message.channel.send(blackembed)
      if(message.author.id === "498491927339991040")  return message.channel.send(blackembed)
      if(message.author.id === "515804592949297190")  return message.channel.send(blackembed)
      if(message.author.id === "505941926357368832")  return message.channel.send(blackembed)
      if(message.author.id === "423580367564308481")  return message.channel.send(blackembed)
      if(message.author.id === "421282157265420288")  return message.channel.send(blackembed)
      if(message.author.id === "393754998737207296")  return message.channel.send(blackembed)
      if(message.author.id === "425961682792087552")  return message.channel.send(blackembed)
      if(message.author.id === "393754998737207296")  return message.channel.send(blackembed)
      if(message.author.id === "314431922887458818")  return message.channel.send(blackembed)
      if(message.author.id === "314391069339156480")  return message.channel.send(blackembed)

    if (message.channel.nsfw === true) {
        let replies = ["https://78.media.tumblr.com/8c3df486bc2f7eb0b992019ff74c812a/tumblr_osn7f1242h1vpw5nxo1_500.gif", "https://78.media.tumblr.com/2ed7f5b5b1886a73b472d0e9f52f8b70/tumblr_o7854tvKXR1vpw5nxo1_400.gif", "https://78.media.tumblr.com/b9abb328981dc634da641b9b0f68cc40/tumblr_o4xkg71BGk1vpw5nxo1_500.gif", "https://78.media.tumblr.com/fd8e86ba904b17170f11d731e99043c2/tumblr_o4ry8qckvG1vpw5nxo1_500.gif", "https://78.media.tumblr.com/40c78b68c8ed362513d3286bf99f322f/tumblr_o4n22jlwJN1vpw5nxo1_400.gif", "https://78.media.tumblr.com/4f50555ee26b8cda1868108c57e8f2e5/tumblr_o4mmiqF2Cz1vpw5nxo1_400.gif", "https://78.media.tumblr.com/eb9a74715e65870b78535e941306307f/tumblr_o4l4ppRqat1vpw5nxo1_250.gif", "https://78.media.tumblr.com/544d5b52e112d86dc8494356118f0d15/tumblr_p9ei8wIJuf1v7dt6vo1_500.gif", "https://78.media.tumblr.com/cd7a4c688c8f5d7b05d8c092951180d1/tumblr_p91b9e2Kfh1v7dt6vo1_500.gif",
            "https://78.media.tumblr.com/5710bafd5111f8ffa3e1d631d689f12a/tumblr_p91toahaH91v7dt6vo1_400.gif"];
        
        
            let result = Math.floor((Math.random() * replies.length));
    
        let gifembed = new Discord.RichEmbed()
            .setTitle("Voici ton GIF! 🍑")
            .setColor("#FF69B4")
            .setFooter(`Demandé par ${message.author.tag} 🍑`, message.author.avatarURL)
            .setImage(replies[result]);
    
        message.channel.send(gifembed);
        } if (message.channel.nsfw === false) return message.channel.send("Désoler, tu n'est pas dans un salon 🔞 NSFW ! Active ce paramètre dans les options d'un canal que tu as choisi !");

    }