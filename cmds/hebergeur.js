const Discord = require('discord.js')
const { prefix } = require('../db/config.json')

module.exports.run = async(bot, message, args) => {

let HebergeurEmbed = new Discord.MessageEmbed()
.setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 512}))
.setColor('00ff26')
.setDescription('Permet de savoir l\'état de l\'hébergeur du bot')
.setTitle('Hébergement')
.addField('L\'état de votre Hébergeur est : \n\`ACTIF\`')
.setFooter('Cubik Bot | Hébergeur', bot.user.displayAvatarURL({dynamic: true, size: 512}))

message.channel.send(HebergeurEmbed)
}

module.exports.config = {
    name: "hebergeur"
}
