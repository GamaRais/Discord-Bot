module.exports = {
    name: 'society',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('society')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')
        .addFields(
            {name: 'This says a lot about our society', values: ' '},
            {name: 'We live in a society', values: ' '},
            {name: 's o c i e t y', values: ' '}
        )

        message.channel.send(newEmbed);

    } 
}