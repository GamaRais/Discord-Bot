module.exports = {
    name: 'unpog',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send(':confounded:');
    }
}