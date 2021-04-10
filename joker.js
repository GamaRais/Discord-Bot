module.exports = {
    name: 'joker',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('How about another joke, Murray?')
        .setURL('https://www.youtube.com/watch?v=WbliHNs4q14')
        .addFields(
            {name: 'What do you get when you cross a mentally ill loner with a society that treats him like trash?', value: 'Ill tell you what you get, you get what you fucking deserve!'}
        )

        message.channel.send(newEmbed);

    } 
}