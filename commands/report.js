const Discord = require('discord.js');
const settings = require('../config.json');
exports.run = (client, message, args, bot) => {


  var prefix = 'c!';
  var blackembed = new Discord.RichEmbed() //un embed si tu sais pas ce que c'est ツ
  .setColor("RANDOM")
  .setTitle("<a:BanHammer:518450308116905997> __BLACKLIST__ <a:BanHammer:518450308116905997>")
  .setThumbnail(`https://cdn2.iconfinder.com/data/icons/financial-circle/512/risk_management-512.png`)
  .addField("<a:Chest:507492479243780116> **__Vous ne pouvez pas m'utiliser car vous êtes banni du bot__** <a:Chest:507492479243780116>", "Pour faire une demande de débannissement, contacté Majesty#1710 ! ou rendez vous sur le [Discord Support](https://discord.gg/KD4G5Ny)")
  .addField("**<:TopLane:520660558215905320> __POUR LE STAFFS SERVEUR__**", `Nous vous conseillons de bannir cette personne de votre serveur car il est présent dans la blacklist des commandes (généralement pour une raison grave, exemple : tente de bypass les permissions du bot, ou envoie des insultes en message privé au bot (support)) Libre a vous de prendre votre choix.`)
  .setImage("https://upload.wikimedia.org/wikipedia/fr/b/bf/The-Blacklist-logo.png") //image de panneau blacklisté
  .setFooter("Pour demander un Blacklist, Envoyé un message privé a Framboise avec l'ID, le pseudo et le lien d'un screen.")
  
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



    
      if(message.member.hasPermission('ADMINISTRATOR')) {
          return message.channel.send('🔨 - Vous ête Admin, cette commandes est dédié au membres uniquement');
      };

      let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      let reports = message.guild.channels.find(channel => channel.name === '📩-reports-📩');
      let reason =  args.slice(1).join(' ');

      if(!target) return message.channel.send("Le pseudo mentionné n'existe pas !");
      if(!reason) return message.channel.send('`Spécifié une raison(s) correcte`');
      if(!reports) return message.channel.send('Le cannal `📩-reports-📩` est introuvable, créer ce canal pour utilisé les commandes de modérations.');

      let reportembed = new Discord.RichEmbed()
          .setThumbnail(target.user.avatarURL)
          .setAuthor('Report', 'https://cdn.discordapp.com/emojis/465245981613621259.png?v=1')
          .setDescription(`Nouveau Report par ${message.author.username}`)
          .addField('⚠ - Membre report', `${target.user.tag}\n(${target.user.id})`, true)
          .addField('⚠ - Report par', `${message.author.tag}\n(${message.author.id})`, true)
          .addField('⚙ - canal', `${message.channel}`)
          .addField('🔨 - Raison(s)', `${reason}`)
          .setColor('0xfc4f35')
          .setTimestamp();
      reports.send(reportembed);

      message.channel.send(`**${target}** a été report par **${message.author}** [ ${reason} ]`).then(message => message.delete(5000));
  }