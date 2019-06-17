const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#af0e97")
 .addField("Coin Amount", `💰 ${uCoins}`)
  .setFooter("coin shop coming soon")

  message.channel.send(coinEmbed)

}

module.exports.help = {
  name: "coins"
}