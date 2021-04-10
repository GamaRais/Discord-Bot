module.exports = {
    name: 'selfpromo',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('SUBSCRIBE TO TECHNOBLADE')
        .setURL('https://www.youtube.com/user/technothepig')
        .addFields(
            {name: 'Why?', value: 'Technoblade never dies'}
        )

        message.channel.send(newEmbed);

    } 
}