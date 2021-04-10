module.exports = {
    name: 'candidates',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Info')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')
        .setDescription('This is in alphabetical  order')
        .addFields(
            {name: 'Candidates ', value: 'Gama, Taqy, Abubaker', inline: true}
        )
        message.channel.send(newEmbed);

    } 
}