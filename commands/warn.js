const Discord = require('discord.js');
exports.run = (client, message, args, guild, bot) => {


    var prefix = 'f!';
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



    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let sanctions = message.guild.channels.find(channel => channel.name === '📜-sanctions-📜');
    if (!sanctions) return message.reply("Le cannal `📜-sanctions-📜` est introuvable, créer ce canal pour utilisé les commandes de modérations.")
    if (reason.length < 1) return message.reply("Vous devez fournir une raison, puis m'entionner l'utilisateur que vous souhaitez avertir");
    if (message.mentions.users.size < 1) return message.reply("Vous devez fournir une raison, puis m'entionner l'utilisateur que vous souhaitez avertir").catch(console.error);
    client.channels.get(sanctions.id).send({embed: {
        color: 16381497,
        author: {
        name: `⚠️ Avertissement émis à ${user.username}#${user.discriminator} (${user.id})`,
        icon_url: user.avatarURL
        },
        title: "Warn",
        url: "",
        description: `\`\`\`js\nRaison: ${reason}\nModérateur responsable: ${message.author.tag} (${message.author.id})\`\`\``,
        // fields: [{
        //     name: "Fields",
        //     value: "They can have different fields with small headlines."
        // },
        // {
        //     name: "Masked links",
        //     value: "You can put [masked links](http://google.com) inside of rich embeds."
        // },
        // {
        //     name: "Markdown",
        //     value: "You can put all the *usual* **__Markdown__** inside of them."
        // }
        // ],
        timestamp: new Date(),
        footer: {
        icon_url: client.user.avatarURL,
        text: "Les avertissements ne sont pas suivis actuellement"
        }
    }
});
message.channel.send(':ok_hand:');
user.send(`⚠️ Vous avez été averti par ${message.guild.name} pour la raison "${reason}". Assurez-vous de suivre toutes les règles qui s’appliquent à vous dans le serveur / Team, car être averti à plusieurs reprises peut entraîner votre bannissement ou votre expulsion.`);
};