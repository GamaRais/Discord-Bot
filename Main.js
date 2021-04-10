const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Gama is online!');
    client.user.setActivity("'-info'", {type: 'PLAYING'}).catch(console.error);
});

client.on('guildMemberAdd', guildMember =>{
    guildMember.guild.channels.cache.get('793135701167570956').send("```Server Lore!\n\nRuba and Youssef share a single role, and the server is called sef's children. We can conclude that Youssef and Ruba are married and have kids. Lets assume that the first 10 are the biological children, and the gamer role are all of his kids. Ashraf has roles synonymous to the word 'daddy', which means that Ruba is cheating on Youssef for Ashraf. Faiz's role is depicted as lonely and sad, so Faiz is the antagonist of Youssef's life, because Youssef belittles him. The proffesional gamers are the favorite children.\nbut hey, thats just a theory, a discord theory, aaaaand banned```")
})

client.on('message', message =>{

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    


    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
    } else if (command == 'bruh'){
        client.commands.get('bruh').execute(message, args);
    } else if (command == 'funny'){
        client.commands.get('funny').execute(message, args, Discord);
    } else if (command == 'admininfo'){
        client.commands.get('admininfo').execute(message, args, Discord);
    } else if (command == 'textinfo'){
        client.commands.get('textinfo').execute(message, args, Discord);
    } else if (command == 'presidentinfo'){
        client.commands.get('presidentinfo').execute(message, args, Discord);
    } else if (command == 'candidates'){
        client.commands.get('candidates').execute(message, args, Discord);
    } else if (command == 'presidentvotes'){
        client.commands.get('presidentvotes').execute(message, args, Discord);
    } else if (command == 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
    } else if (command == 'presidentstats'){
        client.commands.get('presidentstats').execute(message, args, Discord);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command == 'mod'){
        client.commands.get('mod').execute(message, args);
    } else if (command == 'demod'){
        client.commands.get('demod').execute(message, args);
    } else if (command == 'depriviligize'){
        client.commands.get('depriviligize').execute(message, args);
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command == 'joker'){
        client.commands.get('joker').execute(message, args, Discord);
    } else if (command == 'say'){
        client.commands.get('say').execute(message, args);
    } else if (command == 'society'){
        client.commands.get('society').execute(message, args, Discord);
    } else if (command == 'ok'){
        client.commands.get('ok').execute(message, args, Discord);
    } else if (command == 'gm'){
        client.commands.get('gm').execute(message, args, Discord);
    } else if (command == 'gn'){
        client.commands.get('gn').execute(message, args, Discord);
    } else if (command == 'why'){
        client.commands.get('why').execute(message, args, Discord);
    } else if (command == 'info'){
        client.commands.get('info').execute(message, args, Discord);
    } else if (command == 'selfpromo'){
        client.commands.get('selfpromo').execute(message, args, Discord);
    } else if (command === 'unpog'){
        client.commands.get('unpog').execute(message, args, Discord);
    } else if (command == 'test'){
        client.commands.get('test').execute(message, args, Discord);
    } else if (command == 'getgood'){ 
        client.commands.get('getgood').execute(message, args, Discord);
    } else if (command == 'zachping'){
        client.commands.get('zachping').execute(message, args, Discord);
    } else if (command == 'faizping'){
        client.commands.get('faizping').execute(message, args, Discord);
    } else if (command == 'eissaping'){
        client.commands.get('eissaping').execute(message, args, Discord);
    } else if (command == 'f'){
        client.commands.get('f').execute(message, args, Discord);
    } else if (command == 'info'){
        client.commands.get('info').execute(message, args, Discord);
    } else if (command == 'die'){
        client.commands.get('die').execute(message, args, Discord);
    } else if (command == 'kys'){
        client.commands.get('kys').execute(message, args, Discord);
    } else if (command == 'ip'){
        client.commands.get('ip').execute(message, args, Discord);
    } else if (command == 'kindacringenolie'){
        client.commands.get('kindacringenolie').execute(message, args, Discord);
    } else if (command == 'trash'){
        client.commands.get('trash').execute(message, args, Discord);
    } else if (command == 'faizpretend'){
        client.commands.get('faizpretend').execute(message, args, Discord);
    } else if (command == 'credit'){
        client.commands.get('credit').execute(message, args, Discord);
    } else if (command == 'zachpretend'){
        client.commands.get('zachpretend').execute(message, args, Discord);
    } else if (command == 'poll'){
        client.commands.get('poll').execute(message, args, Discord, client);
    } else if (command == 'zachpretend2'){
        client.commands.get('zachpretend2').execute(message, args, Discord);
    } else if (command == 'hey'){
        client.commands.get('hey').execute(message, args, Discord);
    } else if (command == 'gama'){
        client.commands.get ('gama').execute(message, args, Discord);
    } else if (command == 'pog'){
        client.commands.get('pog').execute(message, args);
    } else if (command == 'hamzahping'){
        client.commands.get('hamzahping').execute(message, args, Discord);
    } else if (command == 'yt'){
        client.commands.get('yt').execute(message, args, Discord);
    } else if (command == 'icanfightuinpractice'){
        client.commands.get('icanfightuinpractice').execute(message, args, Discord);
    } else if (command == 'gamaping'){
        client.commands.get('gamaping').execute(message, args, Discord);
    } else if (command =='swag'){
        client.commands.get('swag').execute(message, args, Discord);
    } else if (command == 'Faiz'){
        client.commands.get('Faiz').execute(message, args, Discord);
    } else if (command == 'say-knowledge'){
        client.commands.get('say-knowledge').execute(message, args);
    } else if (command == 'VbucksDownloader'){
        client.commands.get('VbucksDownloader').execute(message, args);
    } else if (command == 'virus')
        client.commands.get('virus').execute(message, args, Discord);
          


});
