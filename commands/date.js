const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('date')
		.setDescription('Replies with date now'),
	async execute(interaction, channel) {
        const date = new Date().toLocaleDateString();;
		console.log(date);
		await interaction.reply(date);
	},
};