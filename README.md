# Bare Discord.JS Bot
A barebones, skeleton Discord.JS bot, intended to serve as the foundation for a discord bot.

### Features
- [x] Command Handler
- [x] Event Handler
- [x] Example Event and Command
- [x] Server Prefix Support
- [x] Env File Config
- [ ] Basic Help Command
- [ ] Prefix Control     


### Code examples

1. Commands
  ```js
  module.exports = {
    name: 'ping', // Name of the command, will show on help command
    description: 'Ping Pong',
    aliases: ['pinger'],
    category: 'Test',
    execute(args, client, message) {
       message.channel.send('pong!')
     }
  }
  ```
  2. Events 
  ```js
  module.exports = {
      event: 'ready', // Name of the event (ready, message, error, guildUpdate, etc)
      execute() {
          console.log('Bot started')
      }
  }
  ```
