module.exports = {
    name: 'faizping',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Hey Faiz!')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')

        message.channel.send(newEmbed);
        message.channel.send('<@506365331283902465>')

    } 
}