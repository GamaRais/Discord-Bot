module.exports = {
    name: 'mod',
    description: "This grants a member mod rank",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            
            let modRole = message.guild.roles.cache.find(role => role.name === 'MOderators');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            
            memberTarget.roles.add(modRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been granted mod rank`);
        } else {
            message.channel.send('Cant find that member!');
        }
    }
}
 