module.exports = {
    name: 'admininfo',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Info')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')
        .setDescription('This is in alphabetical  order')
        .addFields(
            {name: '-Mute ', value: 'Description: SILENCE', inline: true},
            {name: '-Ban', value: 'Description: Admin Aboose', inline: true},
            {name: '-Unmute', value: 'Description: DESILENCE', inline: true},
            {name: '-Clear', value: 'Description: MASS DELETE', inline: true},
            {name: '-Warn', value: 'Description: Make people back off', inline: true}
        )
        message.channel.send(newEmbed);

    } 
}