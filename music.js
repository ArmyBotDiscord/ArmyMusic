const Discord = require('discord.js'); // To Install Discord.js | Run This Command in Console/Terminal `npm install --save discordjs/discord.js`
const client = new Discord.Client();

var prefix = ("!")

client.on('message', message => {

    if (message.content.startsWith(PREFIX + 'Userinfo')) {

        const UserInfo = new Discord.MessageEmbed()


            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('UserInfo')
            .setURL('www.google.com')
            .setColor('RANDOM')
            .setImage(message.author.avatarURL())
            .setThumbnail(message.author.avatarURL()


            .addField('Avatar', message.author.avatar, true)
            .addField('AvatarURL', message.author.avatarURL({
                format: 'png'
            }), true) gif" //.defaultAvatarURL() A link to the user's default avatar //.displayAvatarURL() A link to the user's avatar if they have one. Otherwise a link to their default avatar will be returned
            .addField('AvatarURL', message.author.avatarURL({
                size: '2048'
            }), true)
            .addField('Bot', message.author.bot, true) 
            .addField('Created At', message.author.createdAt, false) 
            .addField('Discrim', message.author.discriminator, true) 
            .addField('DMChannel', message.author.dmChannel) 
            .addField('ID', message.author.id) 
            .addField('Last Message', message.author.lastMessage) 
            .addField('Last Message ID', message.author.lastMessageID) 
            .addField('Presence', message.author.presence) 
            .addField('Presence Status', message.author.presence.status) 
            .addField('Presence Game', message.author.presence.activity.name) 
            .addField('Tag', message.author.tag) 
            .addField('Username', message.author.username) 
            .addField('Nick Name', message.guild.member(target).displayName) 

            .setFooter('Requested By', message.author.tag) 
            .setTimestamp() 

        message.channel.send(UserInfo);
    }
});



bot.login(process.env.TOKEN)
