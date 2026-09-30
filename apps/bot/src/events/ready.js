module.exports = (client) => {
    client.once("ready", () => {
        console.log(`Glorppy is online as ${client.user.tag}`);

        client.user.setPresence({
            activities: [
                {
                    name: "In development",
                    type: 0
                }
            ],
            status: "idle"
        });
    });
};