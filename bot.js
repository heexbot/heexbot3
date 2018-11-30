   const Discord = require('discord.js');
const client = new Discord.Client();

 




client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516313354089005069");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome to Los Anglos 🌹 **`), 4000)        
}
});










client.login(process.env.BOT_TOKEN);
