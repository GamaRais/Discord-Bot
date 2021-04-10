module.exports = {
    name: 'info',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Info')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')
        .setDescription('This is in alphabetical  order')
        .addFields(
            {name: 'Prefix ', value: '-', inline: true},
            {name: 'Total Number of Commands:', value: '40', inline: true},
            {name: '** **', value: '** **', inline: false},
            {name: 'Text Commands', value: '-textinfo', inline: true},
            {name: 'Prank Commands', value: '-prankinfo', inline: true},
            {name: 'President Commands', value: '-presidentinfo', inline: true},
            {name: 'Admin Commands', value: '-admininfo', inline: true}
        )
        message.channel.send(newEmbed);

    } 
}