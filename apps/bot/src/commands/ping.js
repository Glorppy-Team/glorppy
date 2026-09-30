const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Checks if Glorppy is online.'),

    async execute(interaction) {
        await interaction.reply('Pong!');
    }
};