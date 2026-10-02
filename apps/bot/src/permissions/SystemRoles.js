require("dotenv").config({
    path: ".roleenv"
});

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
            Object.values(Permissions.Discord),
            Object.values(Permissions.Glorppy)
        ]
    },

    DEVELOPER: {
        name: "Developer",
        users: parseIds(process.env.GLORPPY_DEVELOPER_IDS),
    },

    ADMIN:{
        name: "Admin",
        users: parseIds(process.env.GLORPPY_ADMIN_IDS),
    }
};

module.exports = SystemRoles;