const Discord = require('discord.js');
const auth = require('./auth.json');
const bot = new Discord.Client;

bot.login(auth.token);

bot.on('login', () => {
    bot.user.setActivity('Cyberbullying Discord users');
    console.log('online');
});