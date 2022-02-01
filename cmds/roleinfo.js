const Discord = require('discord.js')
const { prefix } = require('../db/config.json')

module.exports.run = async(bot, message, args) => {

        let therole = message.mentions.roles.first();
    if(!therole) return message.reply(`No Role Mentioned !`)
    
    let theroleembed = new Discord.MessageEmbed()
    .setTitle(`Info du role  __${therole.name}__ `)
    .setColor('RANDOM')
    .addField(`Nom`,`${therole.name}`)
    .addField(`Role Id`,`${therole.id}`)
    .addField(`Couleur`,`${therole.hexColor}`)
    .setTimestamp()
    
    message.channel.send(theroleembed);
        }

module.exports.config = {
    name: "roleinfo"
}