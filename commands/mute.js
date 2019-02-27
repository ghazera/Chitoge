const Discord = require("discord.js");
const ms = require("ms");

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




    if (!message.member.hasPermissions ('MANAGE_MESSAGES')) return message.channel.send("Vous avez besoin de **MANAGE_MESSAGES** pour utiliser cette commande.")
    const modlog = message.guild.channels.find(channel => channel.name === '📜-sanctions-📜');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Le pseudo mentionné n'existe pas !")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.send('Spécifiez une raison pour le rendre muet')
    let muterole = message.guild.roles.find(role => role.name === "🔕 MUTED");
    if(args[0] == "help"){
      message.reply("Utilisation : c!mute <@pseudo> <raison>");
      return;
    }
  let muteChannel = message.guild.channels.find(channel => channel.name === "📜-sanctions-📜");
  if (!muteChannel) {
    message.channel.send('Le cannal `📜-sanctions-📜` est introuvable, créer ce canal pour utilisé les commandes de modérations.');
  }
    
    

  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "🔕 MUTED",
                color: "#000000",
                permissions: []
            })

            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('Pseudo', `<@${user.id}>`)
            .addField('Raison', `${reason}`)
            .addField('Par', `${mod}`)
            .setColor('#D9D900')
        modlog.muteChannel.send(muteembed)
  
  
    }