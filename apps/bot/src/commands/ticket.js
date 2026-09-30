const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChannelType
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ticket")
        .setDescription("Open a support ticket.")
        .addStringOption((option) =>
            option
                .setName("reason")
                .setDescription("Why are you opening this ticket?")
                .setRequired(false)
                .setMaxLength(1000)
        ),

    async execute(interaction) {
        if (!interaction.guild) {
            await interaction.reply({
                content: "This command can only be used in a server.",
                ephemeral: true
            });
            return;
        }

        const reason = interaction.options.getString("reason") || "No reason provided.";

        try {
            let category = interaction.guild.channels.cache.find(
                (channel) =>
                    channel.type === ChannelType.GuildCategory &&
                    channel.name.toLowerCase() === "tickets"
            );

            if (!category) {
                category = await interaction.guild.channels.create({
                    name: "tickets",
                    type: ChannelType.GuildCategory,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.roles.everyone.id,
                            deny: [PermissionFlagsBits.ViewChannel]
                        }
                    ]
                });
            }

            const safeUsername = interaction.user.username
                .replace(/[^a-zA-Z0-9-]/g, "")
                .slice(0, 20) || "ticket";

            const channel = await interaction.guild.channels.create({
                name: `ticket-${safeUsername}-${Date.now().toString().slice(-4)}`,
                type: ChannelType.GuildText,
                parent: category.id,
                permissionOverwrites: [
                    {
                        id: interaction.guild.roles.everyone.id,
                        deny: [PermissionFlagsBits.ViewChannel]
                    },
                    {
                        id: interaction.user.id,
                        allow: [
                            PermissionFlagsBits.ViewChannel,
                            PermissionFlagsBits.SendMessages,
                            PermissionFlagsBits.ReadMessageHistory,
                            PermissionFlagsBits.AttachFiles
                        ]
                    }
                ]
            });

            await channel.send({
                content: `${interaction.user} opened this ticket.\nReason: ${reason}\n\nA staff member will be with you shortly.`
            });

            await interaction.reply({
                content: `Your ticket has been created: ${channel}`,
                ephemeral: false
            });
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: "Something went wrong while creating your ticket.",
                ephemeral: true
            });
        }
    }
};
