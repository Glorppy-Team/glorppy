require("dotenv").config({
    path: ".roleenv"
});

console.log("OWNER IDS:", process.env.GLORPPY_OWNER_IDS);
console.log("DEVELOPER IDS:", process.env.GLORPPY_DEVELOPER_IDS);
console.log("ADMIN IDS:", process.env.GLORPPY_ADMIN_IDS);

const Permissions = require("./permissions");

const parseIds = (value) => {
    if (!value) return [];

    return value
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean);
};

const SystemRoles = {
    OWNER: {
        name: "Owner",
        users: parseIds(process.env.GLORPPY_OWNER_IDS),

        Permissions: [
            ...Object.values(Permissions.Discord),
            ...Object.values(Permissions.Manage.Glorppy),
            ...Object.values(Permissions.Grant.Glorppy),
            ...Object.values(Permissions.Moderation),
            ...Object.values(Permissions.Tickets),
            ...Object.values(Permissions.Leveling),
            ...Object.values(Permissions.Linking),
            ...Object.values(Permissions.Logging),
            ...Object.values(Permissions.Automation),
            ...Object.values(Permissions.Developer),
            ...Object.values(Permissions.Owner)
        ]
    },

    DEVELOPER: {
        name: "Developer",
        users: parseIds(process.env.GLORPPY_DEVELOPER_IDS),

        Permissions: [
            ...Object.values(Permissions.Developer)
        ]
    },

    ADMIN:{
        name: "Admin",
        users: parseIds(process.env.GLORPPY_ADMIN_IDS),

        Permissions: [
            ...Object.values(Permissions.Moderation),
            ...Object.values(Permissions.Tickets),
            ...Object.values(Permissions.Leveling),
            ...Object.values(Permissions.Logging),
            ...Object.values(Permissions.Automation)
        ]
    }
};

module.exports = SystemRoles; // Fixed