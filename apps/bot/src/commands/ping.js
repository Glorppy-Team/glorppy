const {
    SlashCommandBuilder
} = require('discord.js');

const PermissionManager = require("../permissions/PermissionManager");
const Permissions = require("../permissions/permissions");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Checks if Glorppy is online and working.'),

    async execute(interaction) {
        const hasPermission = PermissionManager.hasPermission(
            interaction.user.id,
            Permissions.Manage.Glorppy.Ping
        );

        if (!hasPermission) {
            return interaction.reply({
                content: "❌ You do not have permission to use this command.",
                flags: 64
            });
        }

        const latency = interaction.client.ws.ping;

        await interaction.reply({
            content: `🏓 Pong! Latency is ${latency}ms.`,
        });
    }
};