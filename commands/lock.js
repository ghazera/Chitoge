const ms = require("ms");
const Discord = require('discord.js');
exports.run = async (bot, message, [time, reason]) => {


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



  if (!bot.lockit) { bot.lockit = []; }
  let validUnlocks = ["release", "unlock", "u"];
  if (!time) { return message.reply('**Vous devez sélectionner le temps suivie de "s" pour secondes, "m" pour minutes ou "d" pour day pour bloquer un channel**'); }

    let Lockembed = new Discord.RichEmbed()
    .setColor(0xDD2E44)
    .setTimestamp()
    .setTitle("🔒 LOCKDOWN NOTICE 🔒")
    .setDescription(`Ce channel a été bloquer par ${message.author.tag} pendant ${time}`);
    if (reason != null) { Lockembed.addField("Raison(s): ", reason); }

  let Unlockembed = new Discord.RichEmbed()
    .setColor(0xDD2E44)
    .setTimestamp()
    .setTitle("🔓 LOCKDOWN NOTICE 🔓")
    .setDescription("Le channel a été débloqué");

  if (message.channel.permissionsFor(message.author.id).has("MUTE_MEMBERS") === false) { 
    let Permembed = new Permembed.RichEmbed()  
      .setColor(0xDD2E44)
      .setTimestamp()
      .setTitle(":no: ERREUR :no:")
      .setDescription("Permissions inssufisante");
    return message.channel.send({Permembed});  
  }  

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: null }).then(() => {
      message.channel.send({embed: Unlockembed});
      clearTimeout(bot.lockit[message.channel.id]);
      delete bot.lockit[message.channel.id];
    }).catch(error => { console.log(error); });
  } else {
    message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: false }).then(() => {
      message.channel.send({embed: Lockembed}).then(() => {
        bot.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send({embed: Unlockembed})).catch(console.error);
          delete bot.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => { console.log(error); });
    });
  }
};