   const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "F"
 
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
        if(message.channel.type === 'dm') return message.reply('This Command Is Only For Server!');
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
}
});





  client.on('message', async message => {
  if(message.content.startsWith(prefix + "رسالة")) {
    let i = client.users.size;
    if(message.author.id !== '323888904602124299') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});

__
كود برودكاست مدموج مع كود bcall
من صنعي طبعا
@here l @everyone 






client.login(process.env.BOT_TOKEN);
