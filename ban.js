const { Guild } = require("discord.js")

module.exports = {
    name: 'ban',
    description: "this is a ping command!",
    execute(message, args){
        if(!message.member.hasPermission("BAN_MEMBERS")) return;
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send('User has been banned');
        }else{
            message.channel.send('you couldnt ban that member')
        }

    } 
}