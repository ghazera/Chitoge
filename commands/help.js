const Discord = require('discord.js');
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {

  var prefix = 'c!';
  var blackembed = new Discord.RichEmbed() //un embed si tu sais pas ce que c'est ツ
  .setColor("RANDOM")
  .setTitle("<a:BlobBanHammer:541660125283352584> __BLACKLIST__ <a:BlobBanHammer:541660125283352584>")
  .setThumbnail(`https://cdn2.iconfinder.com/data/icons/financial-circle/512/risk_management-512.png`)
  .addField("<a:Chest:507492479243780116> **__Vous ne pouvez pas m'utiliser car vous êtes banni du bot__** <a:Chest:507492479243780116>", "Pour faire une demande de débannissement, contacté Majesty#1710 ! ou rendez vous sur le [Discord Support](https://discord.gg/KD4G5Ny)")
  .addField("**<:off:530323938539208714> __POUR LE STAFFS SERVEUR__ <:off:530323938539208714>**", `Nous vous conseillons de bannir cette personne de votre serveur car il est présent dans la blacklist des commandes (généralement pour une raison grave, exemple : tente de bypass les permissions du bot, ou envoie des insultes en message privé au bot (support)) Libre a vous de prendre votre choix.`)
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
    if(message.author.id === "516033691525447680")  return message.channel.send(blackembed)
 




const embed = new Discord.RichEmbed()
        .setTitle("Commandes Liste | Chitoge")
        .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setDescription('`PREFIX : "c!"` \n  | `PREFIX COMMANDES MUSIQUE : "m"`')
        .setFooter("Pour plus d'informations, rendez-vous sur le discord.", bot.user.avatarURL)
        .setThumbnail(`${bot.user.avatarURL}`)
        /*
         * Takes a Date object, defaults to current date. 
         */
        .setTimestamp()
        .addBlankField(true)
        .addField("<:BlurpleBanHammer:541663983380332555>__BLACKLIST__",
          "`Pour demander le blacklisting du bot pour utilisateurs, envoyé un message privé au proprietaire (support) au rendez-vous sur le dicord support.`")
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        .addField("<a:BlobBanHammer:541660125283352584>__MODERATIONS__  ", "`ban`, `kick`, `mute`, `unmute`, `clear`, `report`")
        
        /*
         * Blank field, useful to create some space.
         */
        .addField("<:513304670244962324:541362659199680513>__FUN__", "`slot`, `avatar`, `8ball`, `norris`, `roll`, `angry`, `animeprotest`, `beautiful`, `blood`, `bloddhelp`, `bluely`, `blur`, `blurblack`, `blureen`, `blurey`, `blurple`, `bob`, `brazzers`, `codebabes`, `hitler`, `hypesquad`, `illuminati`, `implode`, `invert`, `jackolantern`, `link`, `loveship`, `magik`, `orangblur`, `orangly`, `pixelate`, `posterize`, `presidentialalert`, `purply`, `rain`, `respect`, `sepia`, `shocked`, `snow`, `thisfilm`, `time`, `tobecontinued`, `triggered`, `triggeredinvert`, `waifu`, `wanted`, `wasted`, `welcome`, `whoisthis`, `yelloblur`, `youporn`")
        
        .addField("<:503941083424882718:541659459139928065>__MUSIQUE__", "`play`, `stop`, `skip`, `pause`, `resume`, `volume`, `np`")
        
        .addField("<a:Loading:541658541837123605>__UTILE__", "`id`, `poll`, `infodiscord`, `weather`, `serveurs`, `invite`, `userinfo`")
        
        .addField("<a:IntslYasunaOribeSEX:541662814519951381>__NSFW__", "`gif`, `anime`, `4k`")
      
        .addField("<:DiscordDev:541660934155010069> __RESERVE AU DEVELOPPEUR / SUPPORT__", "`restart`, `setstatut`, `eval`, `logout`, `reply`")

        .addField("<:8784_MicrosoftWord:541661857849671701> __DISCORD SUPPORT__", "https://discord.gg/rqzG5Ym")
      
        message.channel.send({embed});
      
           }