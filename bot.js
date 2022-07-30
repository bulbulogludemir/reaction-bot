const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === 'ping') {
		message.channel.send('pong');
	}
	if (message.content === '*') {
		message.react('haha');
	}
});

client.login(token);
