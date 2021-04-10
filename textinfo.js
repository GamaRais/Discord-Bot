module.exports = {
    name: 'textinfo',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Info')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')
        .setDescription('info for general text messages')
        .addFields(
            {name: 'Bruh ', value: 'Answer: bruh', inline: true},
            {name: 'embed', value: 'Answer: sends an embed', inline: true},
            {name: 'f', value: 'Pay Respects', inline: true},
            {name: 'Faiz', value: 'idk', inline: true},
            {name: 'faizpretend', value: 'pretend to be faiz', inline: true},
            {name: 'funny', value: 'funny chat', inline: true},
            {name: 'gama', value: 'idk', inline: true},
            {name: 'gm', value: 'Good Morning', inline: true},
            {name: 'gn', value: 'Good Night', inline: true},
            {name: 'hey', value: 'hey', inline: true},
            {name: 'ip', value: 'IP Leak POGGG', inline: true},
            {name: 'Joker', value: 'Society', inline: true},
            {name: 'kindacringenolie', value: 'cringe', inline: true},
            {name: 'ping', value: 'pong', inline: true},
            {name: 'pog', value: 'BEAR', inline: true},
            {name: 'say', value: 'Make the bot say anything!', inline: true},
            {name: 'Society', value: 'Society', inline: true},
            {name: 'Test', value: 'Toasty Test', inline: true},
            {name: 'Trash', value: 'Faiz', inline: true},
            {name: 'unpog', value: 'NOT POGGERS', inline: true},
            {name: 'virus', value: 'INJECT VIRUS', inline: true}
            )
        message.channel.send(newEmbed);

    } 
}