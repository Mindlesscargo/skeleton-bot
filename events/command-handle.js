module.exports = {
    event: 'message',
    execute(message, client) {
        const guild = message.guild
        const prefix = client.prefixes.get(guild.id) || client.prefix

        if (!message.content.startsWith(prefix)) return
        let args = message.content.slice(prefix.length).split(' ')
        let name = args.shift()
        let command = client.commands.get(name) || client.commands.find(c => c.aliases && c.aliases.includes(name))

        if (!command) return
        command.execute(args, client, message)
    }
}