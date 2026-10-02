const { Events } = require("discord.js");

const Permissions = {
    Discord: {
        Administrator: "Discord.Administrator",

        View: {
            Channel: "Discord.View.Channel",
            Members: "Discord.View.Members",
            AuditLog: "Discord.View.AuditLog",
            ServerInsights: "Discord.View.ServerInsights"
        },

        Manage: {
            Channels: "Discord.Manage.Channels",
            Roles: "Discord.Manage.Roles",
            Server: "Discord.Manage.Server",
            Webhooks: "Discord.Manage.Webhooks",
            Messages: "Discord.Manage.Messages",
            Events: "Discord.Manage.Events",
            Automod: "Discord.Manage.Automod",
        },

        Kick: {
            Members: "Discord.Kick.Members"
        },

        Ban: {
            Members: "Discord.Ban.Members"
        },

        Moderate: {
            Members: "Discord.Moderate.Members"
        }
    },

    Manage: {
        Glorppy: {
            Server: "Manage.Glorppy.Server",
            Settings: "Manage.Glorppy.Settings",
            Modules: "Manage.Glorppy.Modules",
            Permissions: "Manage.Glorppy.Permissions",
            Roles: "Manage.Glorppy.Roles",
            Commands: "Manage.Glorppy.Commands",
            Logging: "Manage.Glorppy.Logging",
            Ping: "Glorppy.Ping",
        }
    },

    Grant: {
        Glorppy: {
            Plus: "Grant.Glorppy.Plus",
            CustomBot: "Grant.Glorppy.CustomBot",
            Features: "Grant.Glorppy.Features",
            Modules: "Grant.Glorppy.Modules",
            Limits: "Grant.Glorppy.Limits",
        }
    },

    Moderation: {
        View: "Moderation.View",
        Warn: "Moderation.Warn",
        Kick: "Moderation.Kick",
        Ban: "Moderation.Ban",
        Unban: "Moderation.Unban",
        Timeout: "Moderation.Timeout",
        Mute: "Moderation.Mute",
        Unmute: "Moderation.Unmute",
        Untimeout: "Moderation.Untimeout",
        Purge: "Moderation.Purge",
        Slowmode: "Moderation.Slowmode",
        Lockdown: "Moderation.Lockdown",
        Unlockdown: "Moderation.Unlockdown"
    },

    Tickets: {
        View: "Tickets.View",
        Create: "Tickets.Create",
        Close: "Tickets.Close",
        Reopen: "Tickets.Reopen",
        Delete: "Tickets.Delete",
        Manage: "Tickets.Manage",
        Claim: "Tickets.Claim",
        Unclaim: "Tickets.Unclaim",
        AddUser: "Tickets.AddUser",
        RemoveUser: "Tickets.RemoveUser",
        Lock: "Tickets.Lock",
        Unlock: "Tickets.Unlock",
        Rename: "Tickets.Rename",
        Transcript: "Tickets.Transcript",
    },

    Leveling: {
        View: "Leveling.View",
        Manage: "Leveling.Manage",
        XP: {
            View: "Leveling.XP.View",
            Manage: "Leveling.XP.Manage",
            Grant: "Leveling.XP.Grant",
            Remove: "Leveling.XP.Remove"
        },

        Level: {
            Grant: "Leveling.Level.Grant",
            Remove: "Leveling.Level.Remove"
        }
    },

    Linking: {
        View: "Linking.View",
        Create: "Linking.Create",
        Accept: "Linking.Accept",
        Reject: "Linking.Reject",
        Manage: "Linking.Manage",
        Remove: "Linking.Remove",
        Punishments: "Linking.Punishments",
        Warnings: "Linking.Warnings",
        Bans: "Linking.Bans",
        Timeouts: "Linking.Timeouts",
        Mutes: "Linking.Mutes",
        Kicks: "Linking.Kicks",
        Levels: "Linking.Levels",
        XP: "Linking.XP"
    },

    Logging: {
        View: "Logging.View",
        Manage: "Logging.Manage",
        Moderation: "Logging.Moderation",
        Messages: "Logging.Messages",
        Members: "Logging.Members",
        Channels: "Logging.Channels",
        Roles: "Logging.Roles",
        Tickets: "Logging.Tickets",
        Server: "Logging.Server",
        Export: "Logging.Export",
        Delete: "Logging.Delete"
    },

    Automation: {
        View: "Automation.View",
        Create: "Automation.Create",
        Edit: "Automation.Edit",
        Delete: "Automation.Delete",
        Manage: "Automation.Manage",
        Enable: "Automation.Enable",
        Disable: "Automation.Disable"
    },

    Developer: {
        Access: "Developer.Access",
        Debug: "Developer.Debug",
        ManageBot: "Developer.ManageBot",

        Database: {
            Read: "Developer.Database.Read",
            Write: "Developer.Database.Write",
        },

        Shard: {
            View: "Developer.Shard.View",
            Restart: "Developer.Shard.Restart",
            Manage: "Developer.Shard.Manage"
        },

        Cache: {
            View: "Developer.Cache.View",
            Clear: "Developer.Cache.Clear"
        },

        Commands: {
            Register: "Developer.Commands.Register",
            Unregister: "Developer.Commands.Unregister",
            Reload: "Developer.Commands.Reload"
        },

        Modules: {
            Reload: "Developer.Modules.Reload",
            Enable: "Developer.Modules.Enable",
            Disable: "Developer.Modules.Disable",
            Manage: "Developer.Modules.Manage"
        }
    },

    Owner: {
        Access: "Owner.Access",
        Manage: "Owner.Manage",
        Override: "Owner.Override",
        Transfer: "Owner.Transfer",
    }
}