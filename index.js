const { Client, Collection } = require('discord.js')
const { readdir, readFile } = require('fs')
const { resolve } = require('path')
require('dotenv').config({ path: './settings/settings.env' })

const client = new Client()
const commands = new Collection()
const prefixes = new Collection()

readdir('commands', (err, files) => {
    if (err) return console.log(err)
    files = files.filter(f => f.endsWith('.js'))
    files.forEach(file => {
        let command = require(resolve('commands', file))
        commands.set(command.name, command)
    })
})

readdir('events', (err, files) => {
    if (err) return console.log(err)
    files.forEach(file => {
        let event = require(resolve('events', file))
        client.on(event.event, (...args) => {
            event.execute(...args, client)
        })
    })
})

readFile(resolve('settings', 'server-prefixes.json'), (err, data) => {
    if (err) return console.log(err)
    data = JSON.parse(data)
    Object.keys(data).forEach(id => {
        prefixes.set(id, data[id])
    })
})

client.commands = commands
client.prefixes = prefixes
client.prefix = process.env.PREFIX

client.login(process.env.TOKEN)