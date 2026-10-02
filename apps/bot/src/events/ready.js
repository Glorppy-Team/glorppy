module.exports = (client) => {
    client.once("clientReady", () => {
        console.log(`Glorppy is online as ${client.user.tag}`);

        client.user.setPresence({
            activities: [
                {
                    name: "In development (Progress 5%/100%)",
                    type: 0
                }
            ],
            status: "dnd"
        });
    });
};