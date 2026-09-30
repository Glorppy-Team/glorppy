require("dotenv").config();

const {
    REST,
    Routes
} = require("discord.js");

const pingCommand = require("./commands/ping");
const ticketCommand = require("./commands/ticket");

const commands = [
    pingCommand.data.toJSON(),
    ticketCommand.data.toJSON()
];

const rest = new REST({ version: "10" })
    .setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log("Starting (/) commands deployment...");

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );

        console.log("Successfully deployed (/) commands.");
    } catch (error) {
        console.error(error);
    }
})();