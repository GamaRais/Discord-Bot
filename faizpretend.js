module.exports = {
    name: 'faizpretend',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('ez calp')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')

        message.channel.send(newEmbed);

    } 
}