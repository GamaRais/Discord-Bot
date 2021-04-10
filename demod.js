module.exports = {
    name: 'demod',
    description: "This ungrants a member mod rank",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            
            let modRole = message.guild.roles.cache.find(role => role.name === 'MOderators');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            
            memberTarget.roles.remove(modRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been demoted mod rank`);
        } else {
            message.channel.send('Cant find that member!');
        }
    }
}
 