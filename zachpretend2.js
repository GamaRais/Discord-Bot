module.exports = {
    name: 'zachpretend2',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Zach be like:')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')
        .addFields(
            {name: 'Zach:', value: 'even though im a bad person, we can all agree hamzah does lolis'}
        )

        message.channel.send(newEmbed);

    } 
}