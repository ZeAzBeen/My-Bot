const Discord = require('discord.js');
const myBot = new Discord.Client();

myBot.login('NjQxNjkyMjI1OTg5NzcxMjc0.XcMHkQ.-qPUviHAisl0SkBZvgQnh3H15Ro');

myBot.on('message', message => {
			if (message.content === 'test') {
			message.channel.send('test réussi');
});
