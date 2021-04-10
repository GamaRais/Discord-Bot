module.exports = {
    name: 'depriviligize',
    description: "This puts a staff member in the darkest state",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            
            let modRole = message.guild.roles.cache.find(role => role.name === 'MOderators');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            
            memberTarget.roles.remove(modRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been demoted mod rank and has been muted`);
        } else {
            message.channel.send('Cant find that member!');
        }
    }
}
 