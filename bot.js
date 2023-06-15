const {Client, Intents, Collection} = require("discord.js");
const auth = require('./auth.json')
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as + ${client.user.tag}`);
}); 

client.commands = new Collection();
const commandsPath = path.join(__dirname, './commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	// client.commands.set(command.data.name, command);
    if(command?.data !== undefined) client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on('messageCreate',async (message)  => {
    // console.log(message);
    if (message.content === 'Star Platinum') {
        message.reply('Ora!! Ora!! Ora!!')
        message.channel.send({files: ['https://c.tenor.com/VUxS_efMaw0AAAAC/ora.gif']})
    }
    if (message.content === 'Time Stop') {
        message.reply('The Worlddd!!')
        message.channel.send({files: ['https://c.tenor.com/7xkg1jWTFPIAAAAC/dio-the-world.gif']})
    }
})

client.login(auth.token)
