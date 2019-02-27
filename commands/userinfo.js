const moment = require("moment");

const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    var prefix = '/';
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

    moment.locale('fr')

    let mentionned = message.guild.member(
        message.mentions.users.first() || message.guild.members.get(args[0])
    );

    var mentionnedbot = message.mentions.users.first();
    var getvalueof;

    if(mentionnedbot){
        var getvalueof = mentionnedbot;
    } else {
        var getvalueof = message.author;
    }

    if(getvalueof.bot == true){
        var checkbot = "<:js:520661601649426444> Bot";
    } else {
        var checkbot = "<a:blobjoining:507491465010741258> Humain";
    }


    let member;
    if (!args[0]) {
        member = message.member;
    } else {
        member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    };

    if (!mentionned) {
        return message.channel.send("L'utilisateur n'existe pas ou vous n'avez mentionner aucun utilisateur !");
    }


    if (mentionned.presence.status == 'online') {
        var status = 'En ligne'
    } else if (mentionned.presence.status == 'offline') {
        var status = 'Hors ligne'
    } else if (mentionned.presence.status == 'idle') {
        var status = 'Inactif'
    } else if (mentionned.presence.status == 'dnd') {
        var status = 'Ne pas déranger'
    } else if (mentionned.presence.status == 'streaming') {
        var status = 'Streaming'
    }
    let nickname = mentionnedbot.nickname;

    if (nickname) {
        nickname = mentionnedbot.nickname;
    } else {
        nickname = 'Aucun'
    };
    const dernierMembre = Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m.user.username}`).splice(0, 1)
    let highestRole = member.roles.size > 1 ? member.highestRole.name : 'Pas de rôle suprême';

    let userEmbed = new Discord.RichEmbed()
        .setColor('#b7db24')
        .setThumbnail(message.member.displayAvatarURL)
        .setFooter(bot.user.username , bot.user.displayAvatarURL)
        .setThumbnail(mentionnedbot.displayAvatarURL)
        .addField('👤 Pseudo', `${mentionnedbot}`, true)
        .addField('👥 #', `#${mentionnedbot.discriminator}`, true)
        .addField("<:discordlogo:519947445392769039> Nickname" , nickname, true)
        .addField('✏️ ID', `${mentionned.id}`, true)
        .addField("<:Yes:519577199364407299> Verification", `${mentionnedbot.verified}`, true)
        .addField('🕵 Type', checkbot, true)
        .addField('🔘 Status', status, true)
        .addField('🎮 Jeu', `${mentionned.presence.game ? `${mentionned.presence.game.name}` : "Ne joue à rien"}`, true)
        .addField(`Rôle(s) [${mentionned.roles.size - 1} rôle(s)]`, `- ${mentionned.roles.array().map(g => g).join('\n- ')}`, true)
        .addField('<a:update:507488468084195328> Rôle le plus élevé', mentionned.highestRole, true)
        .addField('🚪 Arrivée sur le serveur', moment(mentionned.joinedAt).format('Do MMMM YYYY, LTS'), true)
        .addField('<a:success:507492479881314314> Compte créé le', moment(mentionnedbot.createdAt).format('Do MMMM YYYY, LTS'), true)
        .addField("<:Gears:520661602488418309> Dernier Membre", dernierMembre, true)
        .addField('⭕ Kickable', `${message.member.hasPermission("KICK_MEMBERS") ? "Oui" : "Non"}`, true)
        .addField('⭕ Bannable', `${message.member.hasPermission("BAN_MEMBERS") ? "Oui" : "Non"}`, true)
        .addBlankField()
        
    return message.channel.send(userEmbed);
}