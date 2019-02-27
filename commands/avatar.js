const Discord = require("discord.js"); //YOU WILL NEED TO DEFINE DISCORD SINCE WE ARE USING THE EMBED!

exports.run = async (bot, message, args) => { //OH BTW BOT IS YOUR CLIENT SO IF YOU USED CLIENT THEN CHNAGE ALL THE "BOT" TO "CLIENT" cool!

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


    var footertext = [`${bot.user.username}: oof jolie`, `${bot.user.username}: super`, `${bot.user.username}: 🔥`, `${bot.user.username}: Quelqu'un a l'air vif aujourd'hui!`, `${bot.user.username}: oof si je n'étais pas un bot ...`, `${bot.user.username}: plus sexy qu'une tasse`];
    var rand = Math.floor(Math.random() * footertext.length);
    var randomfooter = footertext[rand]; //THIS AND THE TWO LINES ABOVE IS TOTALLY UNNECESSARY. But you want to make your bot more interactive so keep it.Just an array of some random shit, you can add more if you would like just read the code and change it at your will! 


    message.channel.startTyping(); // TELLS YOUR HANDICAPPED BOT TO START TYPING! ;)


    let msg = await message.channel.send("``Génération d'un avatar sexy...``") //UNNECESSARY BUT COOL.

    let user = message.mentions.users.first() || message.author; //THIS IS IMPORTANT BECAUSE YOU WANT YOUR BOT TO SHOW OTHER PEOPLE'S AVATAR AS WELL BY MENTIONING THEM!

    // AVATAR EMBED

    let embed = new Discord.RichEmbed() //HERE WE DEFINE THE EMBED
        .setAuthor(`${user.username} Avatar`) //HERE WE SHOW THE USER'S NAME!
        .setImage(user.displayAvatarURL) // USER'S AVATAR
        .setColor(msg.guild.me.highestRole.color) //SET THE EMBED COLOR TO THE HIGHEST ROLE COLOR THE BOT HAS! cool right :D
        .setFooter(`${randomfooter}`) //FOOTER AND ICON
        .setTimestamp(); //SHOWS THAT COOL TIME ON THE FOOTER!

    await message.channel.send(embed) //NOW WE GIVE IT SOMETIME TO DO ALL THE CRAZY STUFF ON TOP AND THEN SEND THE EMBED!

    message.channel.stopTyping(true); // TELLS YOUR HANDICAPPED BOT TO STOP TYPING! ;)

    msg.delete(); // THIS WILL DELETE (Generating that sexy avatar...) AFTER SENDING THE EMBED! This will be quick so watch out for the small details :P
}

//PS: I suck at coding and explaining shit. So i do apologise. If you have any questions you can contact me on discord.("Please Don\'t!") ;)