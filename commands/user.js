const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed  } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
		// .addChannelOption(option =>
		// 	option.setName('channel')
		// 		.setDescription('Select a channel')
		// 		.setRequired(true)
		// 		),
	async execute(interaction,) {
		// const channel = interaction.options.getChannel('channel');
		// console.log(interaction);
		// console.log(interaction.user);
		console.log(interaction.user.avatarURL());

		const embed = new MessageEmbed ()
			.setColor(0x0099FF)
			.setAuthor({ name: `User: ${interaction.user.tag}`, iconURL: interaction.user.avatarURL() })
			// .setTitle(`User: ${interaction.user.tag}`)
			// .setURL('https://discord.js.org/')
			.setTitle(`Your id: ${interaction.user.id}`)
			.setThumbnail('https://cdn.discordapp.com/avatars/' + interaction.user.id + '/' + interaction.user.avatar);

		// await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`)
		await interaction.reply({ embeds: [embed]});
	},
};