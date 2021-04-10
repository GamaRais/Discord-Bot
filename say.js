module.exports = {
    name: 'say',
    description: "this is a ping command!",
    execute(message, args){
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage)

    } 
}