module.exports = async  (bot) => {
    console.log("===============CONNECTION=============");
    console.log("");
    console.log(`[!] Le bot ${bot.user.tag} est prêt !!.`);
    console.log("");
    console.log("======================================");

   await bot.website.load(bot);

}