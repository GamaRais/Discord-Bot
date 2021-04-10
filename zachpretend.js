module.exports = {
    name: 'zachpretend',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Zach be like:')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')
        .addFields(
            {name: 'Zach:', value: 'Super fuckigm ocol an d awesome B))'}
        )

        message.channel.send(newEmbed);

    } 
}