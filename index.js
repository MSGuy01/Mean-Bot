const Discord = require('discord.js');
const bot = new Discord.Client();
const auth = require('./auth.json');
const botID = "662739267943923734";

bot.login(auth.token);

bot.on('ready', () => {
    bot.user.setActivity('Cyberbullying Discord users');
    console.log('online');
});

bot.on('message', message => {
    var args;
    const msg = message.content;
    if (message.author.id != botID) {
        for (var i = 0; i < msg.length; i++) {
            if (msg.substring(i, i + 4) == 'like' || msg.substring(i, i + 4) == 'love') {
                args = msg.substring(i + 4, msg.length);
                message.channel.send('I hate' + args);
                break;
            }
            else if (msg.substring(i, i + 4) == 'hate') {
                args = msg.substring(i + 4, msg.length);
                message.channel.send('I like' + args);
                break;
            }
            else if (msg.substring(i, i + 9) == 'dont like') {
                args = msg.substring(i + 9, msg.length);
                message.channel.send('I like' + args);
                break;
            }
        }
    }
});