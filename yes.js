const token = 'OTU2MjM4NzE1ODE3MTcyOTky.G3U078.K6OTQC7esPu240FAFXTKREI3M7o5uDM4KjrOJg'

const { Client, Intents, Guild, Interaction } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('interaction', function (i) {
  
})

client.login(token);