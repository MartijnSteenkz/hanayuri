const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  if(!message.member.hasPermission("")) return message.reply("Sorry my dude, you can't do that");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user m8");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role");
  await(rMember.removeRole(gRole.id));

try{
  await rMember.send(`That's too bad, you lost the ${gRole.name} role`)
}catch(e){
  message.channel.send(`Removed ${gRole.name} from <@${rMember.id}>`)
  }
}


module.exports.help = {
  name: "removerole"
}