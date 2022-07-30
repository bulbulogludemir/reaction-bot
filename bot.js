const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

if (message.content === '!ping') {
	message.channel.send('Pong!');
};

if (message.content.startsWith('*')) {
	message.react(':haha:');
};

client.login(process.env.key);
