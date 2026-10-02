module.exports = (client) => {
    client.once("ready", () => {
        console.log(`Glorppy is online as ${client.user.tag}`);

        client.user.setPresence({
            activities: [
                {
                    name: "In development (Progress 3%/100%)",
                    type: 0
                }
            ],
            status: "dnd"
        });
    });
};