module.exports.run = async (bot, msg) => {
    if(msg.author.id != bot.config.BOT_OWNER_ID) return msg.channel.send("❌ Vous n'avez pas les droits nécessaire pour faire cette commande.");
        msg.channel.send("⚙ Arrêt en cours...").then(async() => {
            console.log('Hors-ligne');
            await bot.destroy();
            await process.exit()
        })
}

