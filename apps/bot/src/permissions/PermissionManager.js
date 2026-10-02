const SystemRoles = require("./SystemRoles");

class PermissionManager {
    static hasSystemRole(userId, rolekey) {
        const role = SystemRoles[rolekey];

        if (!role) {
            return false
        }

        if (role.unrestricted) {
            return true;
        }

        return role.users?.includes(userId) ?? false;
    }

    static getSystemRole(userId) {
        return Object.entries(SystemRoles)
            .filter(([_, role]) => {
                if (role.unrestricted) {
                    return true;
                }

                return role.users?.includes(userId) ?? false;
            })
            .map(([roleKey]) => roleKey);
    }

    static hasPermission(userId, permission) {
        const roles = this.getSystemRole(userId);

        const rolePermissions = {
            OWNER: ["*"],
            DEVELOPER: ["*"],
            ADMIN: ["*"]
        };

        for (const role of roles) {
            const permissions = rolePermissions[role] || [];

            if (permissions.includes("*")) {
                return true;
            }

            if (permissions.includes(permission)) {
                return true;
            }
        }

        return false;
    }
}

module.exports = PermissionManager;