require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    Collection
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
});

client.commands = new Collection();

// Event Handers
require("./events/ready")(client);
require("./events/interactionCreate")(client);

// Command Handlers
const pingCommand = require("./commands/ping");
const ticketCommand = require("./commands/ticket");
client.commands.set(pingCommand.data.name, pingCommand);
client.commands.set(ticketCommand.data.name, ticketCommand);

// Login
client.login(process.env.DISCORD_TOKEN);