module.exports = {
    name: 'hamzahping',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Hey Hamzah!')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')

        message.channel.send(newEmbed);
        message.channel.send('<@486906780010676234>')

    } 
}
