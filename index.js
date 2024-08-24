const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const { token, monitorChannelId } = require('./config');

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

let faqData;

fs.readFile('./faq.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading faq.json:', err);
    return;
  }
  faqData = JSON.parse(data);
});

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', message => {
  if (message.channel.id !== monitorChannelId || message.author.bot) return;

  const content = message.content.toLowerCase();

  for (const question in faqData) {
    if (content.includes(question.toLowerCase())) {
      message.channel.send(faqData[question]);
      break;
    }
  }

  if (!content.startsWith('!') || message.author.bot) return;

  const args = content.slice(1).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command!');
  }
});

client.login(token);
