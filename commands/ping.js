module.exports = {
    name: 'ping',
    description: 'Ping Pong',
    aliases: ['pinger'],
    category: 'Test',
    execute(args, client, message) {
        message.channel.send('pong!')
    }
}