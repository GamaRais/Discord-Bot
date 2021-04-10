module.exports = {
    name: 'virus',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Virus Running')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')
        .addFields(
            {name: 'Status', value: 'Downloaded'},
            {name: 'Status', value: 'Running'},
            {name: 'Status', value: 'Activated'}
        )

        message.channel.send(newEmbed);

    } 
}