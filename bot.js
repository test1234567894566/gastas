const Discord = require("discord.js");
const client = new Discord.Client();
const prefix =`^`
client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', message => {
    if (message.author.bot) return;
if (message.content.startsWith('مسح')) { //Codes
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!');
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });




client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }
 });

 client.on('message', message => {S

 var ms = require('ms')

 var moment = require('moment');

 if (message.author.bot) return;

 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];

 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 let messageArray = message.content.split(" ");

 let embed = new Discord.RichEmbed()

.setImage("https://d.top4top.net/p_10880lo1r1.png")

 if (command == "ban") {

 if(!message.channel.guild) return message.reply('** This command only for servers**');

 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: You Don't Have ` BAN_MEMBERS ` Permission**");

 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**:x: I Don't Have ` BAN_MEMBERS ` Permission**");

 let user = message.mentions.users.first();

 let Reason = message.content.split(" ").slice(3).join(" ");

 let time = messageArray[2];

 if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)

 if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Ban This User**");

 if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

 if(!Reason)  {

 message.guild.member(user).ban({reason: Reason})

 }

  if(!Reason && time) {

  message.guild.member(user).ban(7, user);

  }

  if(!time) {

  message.guild.member(user).ban(7, user);

  }
  if(time) {

  setTimeout(() => {

  message.guild.unban(user);

  }, ms(time));

  }

  if(time && Reason && user) {

  message.guild.member(user).ban({reason: Reason})


  setTimeout(() => {

  message.guild.unban(user);

  }, ms(time));

  }

  message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:`)

  }

  });


client.on('message', message => {

  var ms = require('ms')

  var moment = require('moment');


  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  let messageArray = message.content.split(" ");

  let muteRole = message.guild.roles.find("name", "Muted");

  let embed = new Discord.RichEmbed()

 .setImage("https://c.top4top.net/p_108825enp1.png")

  if (command == "mute") {

  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });

  if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: You Don't Have ` MUTE_MEMBERS ` Permission**");

  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: I Don't Have ` MUTE_MEMBERS ` Permission**");

  let user = message.mentions.users.first();

  let Reason = message.content.split(" ").slice(4).join(" ");

  let time = messageArray[2];

  if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)

  if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Mute This User**");

  if(!Reason)  {

    message.guild.member(user).addRole(muteRole);

  }

   if(!Reason && time) {

    message.guild.member(user).addRole(muteRole);

   }

   if(!time) {

    message.guild.member(user).addRole(muteRole);

   }
   if(time) {
    if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

   setTimeout(() => {

    message.guild.member(user).removeRole(muteRole);

   }, ms(time));

   }

   if(time && Reason && user) {

    message.guild.member(user).addRole(muteRole);


   setTimeout(() => {

    message.guild.member(user).removeRole(muteRole);

   }, ms(time));

   }

   message.channel.send(`:white_check_mark: ${user} has been muted ! :zipper_mouth:`)

   }

});




client.login(process.env.BOT_TOKEN);
