module.exports = {
    name: 'funny',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Funny')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')
        .addFields(
            {name: 'Funny Detected. Laugh is go.', value: 'lmao', value: 'imagine', value: 'lol', value: 'AHAHAHAHHAHAHAHAHAHA'}
        )

        message.channel.send(newEmbed);

    } 
}