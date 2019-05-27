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


const sql = require('sqlite');
const path = require('path');
sql.open(path.join(__dirname, 'credits.sql')) // read sql file
.then(() => { // then ?
	console.log('Opened') // if the sql opened
	sql.run(`CREATE TABLE IF NOT EXISTS creditSysteme (id VARCHAR(30), credits BIGINT, timeDaily BIGINT)`) // create new table if the table does'nt exosts
})
.catch(err => console.error(err)) // if the sql file does'nt exists

const ms = require('parse-ms'); // package time ? 
client.on("message", async msg => { // event message
	if(!msg.channel.guild) return; // channel guild
	let men = msg.mentions.users.first() || msg.author; // the mention or the author
	let prize =  msg.content.split(" ").slice(2).join(" ") // prize

	if(msg.content.startsWith(prefix+"credits")) { // if the message content credits do 
		if(!men || !men === undefined) return msg.channel.send("** :interrobang: | "+men.username+", I can't find "+men.username+"!**"); // undefind user
		if(!prize) {
		sql.get(`SELECT * FROM creditSysteme WHERE id = '${men.id}'`).then(res => { // select user from table
			if(!res) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if the user does'nt exisit in table
			if(res) { // if user exsist
					msg.channel.send("**"+men.username+" :credit_card: balance is ``"+res.credits+"$``.**") // reply
			}
		})
		}else{ // else ?
			if(isNaN(prize)) return msg.channel.send(" :interrobang: | "+msg.author.username+", type the credit you need to transfer!"); // is nan :)
			if(parseFloat(prize) === NaN) return msg.channel.send(" :interrobang: | "+msg.author.username+", type the credit you need to transfer!"); // if nan :))
			if(men === msg.author) return; // if the men = author
			let authorRes = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${msg.author.id}'`) // select from sql
			let userRes = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${men.id}'`) // select from sql
			if(!authorRes) sql.run(`INSERT INTO creditSysteme VALUES ('${msg.author.id}', 0, 0)`) // if !user create new col 
			if(!userRes) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if !user create new col 
			let authorCredits = authorRes.credits; // credits before transfer
			let userCredits = userRes.credits; // credits before transfer
			if(parseFloat(prize) > authorCredits) return msg.channel.send("** :thinking: | "+msg.author.username+", Your balance is not enough for that!**"); // if the balance hight then prize
			sql.run(`UPDATE creditSysteme SET credits = ${authorCredits - parseInt(prize)} WHERE id = '${msg.author.id}'`); // uptade credits for the author
			sql.run(`UPDATE creditSysteme SET credits = ${userCredits + parseInt(prize)} WHERE id = '${men.id}'`); // update credits for the mentions user
			msg.channel.send("**:moneybag: | "+msg.author.username+", has transferred ``$"+prize+"`` to "+men.toString()+"**") // the message :)
		}
	} else if(msg.content.startsWith(prefix+"daily")) {  // if the message content daily do
		let daily = 86400000; // 24h
		let amount = Math.floor((Math.random() * 500) + 1) // Money
    let res = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${msg.author.id}'`) // select from sql
		if(!res) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if !user create new col 
    let time = res.timeDaily; // select last daily
    let credits = res.credits; // credits before daily
    if(time != null && daily - (Date.now() - time) > 0) { // if already climed the daily in same day

			let fr8 = ms(daily - (Date.now() - time)); // the remining time
			msg.channel.send("**:stopwatch: | "+msg.author.username+", your daily :yen: credits refreshes in "+fr8.hours+" hours and "+fr8.seconds+" seconds. **") //reply

		}else{ // if does'nt clim her daily in 24h
			msg.channel.send("**:atm:  |  "+msg.author.username+", you received your :yen: "+amount+" daily credits!**"); // reply
			sql.run(`UPDATE creditSysteme SET credits = ${credits + amount}, timeDaily = ${Date.now()} WHERE id = '${msg.author.id}'`); // add amount to the credits before daily
		}
	}
})
//58 line :) -

client.login("NTgwNTIwMTU5MTUyNzAxNDU5.XOvLLw.t8aozMDkCQfPC3XpuX8OoWKrZgw");//node botdiscord.js