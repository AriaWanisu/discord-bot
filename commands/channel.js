const { SlashCommandBuilder } = require('@discordjs/builders');
const { TextChannel } = require("discord.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('clear text channel'),
	async execute(message, text) {
		message.channel.bulkDelete(100)
		await message.channel.send('clear')

		// const newChannel = await message.channel.clone()
		// console.log(newChannel.id) // Do with this new channel ID what you want
	
		// // Delete old channel
		// message.channel.delete()
	},
};