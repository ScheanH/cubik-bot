const Discord = require('discord.js');
const { prefix } = require('../db/config.json')

module.exports.run = async (bot, message, args) => {

    if(args[0] == 'help') return message.channel.send(`Vous devez juste faire : ${prefix}help.`);

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command)
            let SHembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Cubik Bot | Footer`, message.guild.iconURL({dynamic: true, size: 512}))
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 512}))
            .setDescription(`Le préfix du bot est : \`${prefix}\`\n\n`)
            message.channel.send(SHembed)
    }}

    let cmdmember = `\`help\` \`userinfo\` \`serveurinfo\` \`...\``
    let cmdadmin = `\`Aucune \``
    if(!args[0]) {
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Command d'aide`, message.guild.iconURL({dynamic: true, size: 512}))
        .setColor('RANDOM')
        .setDescription(`${message.author.username} va voir tes mps !`)

        let Sembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Cubik Bot Help`, message.guild.iconURL({dynamic: true, size: 512}))
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Voici les commandes disponibles pour le bot \`${bot.user.username}\` \n Le préfix du bot est : \`${prefix}\``)
        .addField('Commandes pour les Membres :', cmdmember)
        .addField('Commandes pour les Admins', cmdadmin)
        .setFooter('Cubik Bot | Help', bot.user.displayAvatarURL({dynamic: true, size: 512}))
        message.channel.send(embed)
        .then(m => m.delete(5000))
        .catch(() => message.channel.send('Si vous n\'avez pas reçu de message du bot veuillez réactiver vos mp si il sont désactiver sinon veuillez contacter le support'))
        message.author.send(Sembed)
    }
}

module.exports.config = {
    name: 'help'
}