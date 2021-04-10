module.exports = {
    name: 'icanfightuinpractice',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6687fc')
        .setTitle('Yeah Gama is so cool omg I wanna be like him!')
        .setURL('https://www.youtube.com/channel/UCKHIFhdlBJtJKuUSoi0iJXA')

        message.channel.send(newEmbed);

    } 
}