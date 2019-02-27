const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/CheckAuth');

router.get("/:guildID", CheckAuth, (req, res) => {
    let serv = req.client.server.bot.guilds.get(req.params.guildID);
    if (!serv) return res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${req.client.server.bot.user.id}&scope=bot&permissions=-1&guild_id=${req.params.guildID}`);
    if(!req.client.server.bot.guilds.get(req.params.guildID).members.get(req.user.id).hasPermission("MANAGE_GUILD")) return res.redirect("/dashboard");
      res.render("guild.ejs", {
        status: (req.isAuthenticated() ? `${req.user.username}#${req.user.discriminator}` : "Se connecter"),
        bot: req.client.server.bot.user,
        user: req.user,
        avatarURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
        iconURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
        guild: serv,
      });
})
    .post("/:guildID", CheckAuth, async function(req, res) { 
        if(!req.body.send_CHANNELID) return res.send("Erreur, pas de salon spécifié");
        if(!req.body.send_MESSAGE) return res.send("Erreur, pas de message spécifié");
        await req.client.server.bot.guilds.get(req.params.guildID).channels.get(req.body.send_CHANNELID).send(req.body.send_MESSAGE);
        await res.redirect(`/serveurs/${req.params.guildID}`);
    });

module.exports = router;