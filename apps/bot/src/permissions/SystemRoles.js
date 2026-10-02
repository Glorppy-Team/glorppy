const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
    path: path.resolve("/home/container/.roleenv")
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

const collectPermissions = (object) => {
    const permissions = [];

    for (const value of Object.values(object)) {
        if (typeof value === "string") {
            permissions.push(value);
        } else if (value && typeof value === "object") {
            permissions.push(...collectPermissions(value));
        }
    }

    return permissions;
};

const SystemRoles = {
    OWNER: {
        name: "Owner",
        users: parseIds(process.env.GLORPPY_OWNER_IDS),

        Permissions: [
            ...collectPermissions(Permissions.Discord),
            ...collectPermissions(Permissions.Manage.Glorppy),
            ...collectPermissions(Permissions.Grant.Glorppy),
            ...collectPermissions(Permissions.Moderation),
            ...collectPermissions(Permissions.Tickets),
            ...collectPermissions(Permissions.Leveling),
            ...collectPermissions(Permissions.Linking),
            ...collectPermissions(Permissions.Logging),
            ...collectPermissions(Permissions.Automation),
            ...collectPermissions(Permissions.Developer),
            ...collectPermissions(Permissions.Owner),
            ...collectPermissions(Permissions.Everyone)
        ]
    },

    DEVELOPER: {
        name: "Developer",
        users: parseIds(process.env.GLORPPY_DEVELOPER_IDS),

        Permissions: [
            ...collectPermissions(Permissions.Developer)
        ]
    },

    ADMIN: {
        name: "Admin",
        users: parseIds(process.env.GLORPPY_ADMIN_IDS),

        Permissions: [
            ...collectPermissions(Permissions.Moderation),
            ...collectPermissions(Permissions.Tickets),
            ...collectPermissions(Permissions.Leveling),
            ...collectPermissions(Permissions.Logging),
            ...collectPermissions(Permissions.Automation)
        ]
    },

    EVERYONE: {
        name: "Everyone",
        users: null,
        unrestricted: true,

        Permissions: [
            Permissions.Everyone.DiscordEveryone,
            Permissions.Everyone.GlorppyEveryone
        ]
    }
};

module.exports = SystemRoles;