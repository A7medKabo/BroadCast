const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"
var adminprefix = '$'


//bc

client.on('message', message => {
	    var prefix = "*";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "by 󠂪󠂪ˣᵖʳᶤᶰᶜᵉ A7medKabo#7255";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... تم الانتهاء وارسال البرودكاست بنجاح __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('سيرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**تم الغاء ارسال البرودكاست.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

//bc online


  var prefix = "$";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("$avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$adminbc')){
if(!message.author.id === '476185102922285066') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  client.on('message', msg => {
    if(msg.content === '$help')
    msg.reply('Check Your DM :white_check_mark:')
  });
  
  
  client.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       $obc | لأرسال برود كاست للكل

       $bc  |  لأرسال برود كاست للأونلاين

       $adminbc | برودكاست عادي

       ** `)
   message.author.sendEmbed(embed)
   
   }
   });

const developers = ["514414982130302986","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

var prefix = "-";

client.on('message', message => {

    if(message.content === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ ✅ **")
           });
             }
 if(message.content === prefix + "unmutechannel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__✅**")
           });
             }
             
      
    
});

client.on('message', message => {   ///Toxic Codes 
var prefix = "*";

    if (message.content === prefix + "date") {   ///Toxic Codes
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**!~[ التاريخ ]~! **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
             message.channel.sendEmbed(Date15);
    }
});   ///Toxic Codes

client.on('guildMemberAdd', Member=> {
    member.setNickname(`Shadow|| ${member.user.username}`)
});

client.on('guildMemberAdd', Member=> {
    var role = member.guild.roles.find("name","Member");
    member.addRole(Member);
});

client.on('message', message => {/////toxic codes and zezo
    if(message.content.toLowerCase().startsWith(`discord.gg`)){
        message.member.addRole(message.guild.roles.find('name', 'Muted'));
        var embed = new Discord.RichEmbed()
        .setDescription(`تمت معاقبتك لنشرك سيرفر اخر هنا`)
            message.delete();
        message.channel.send(`<@${message.author.id}`);
        message.channel.send({embed});
    }/////toxic codes and zezo
});/////toxic codes and zezo


client.on("message", (message) => {
 
   if (message.content.startsWith("-new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("-close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب.confirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '.confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('👋𝓦𝓔𝓛𝓒𝓞𝓜𝓔👋')
if (!channel) return;
channel.send({embed : embed});
}); 

client.on("message", msg => { //Toxic Codes CopyRight & Me 92.♥#0092
  if(msg.author.bot) return;
  if(msg.channel.type === 'dm') return;
let prefix = '#'; //البرفكس
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);
if(cmd === `${prefix}warn`){//الامر
  
  

  let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!rUser) return msg.channel.send("Couldn't find users.");
    let reason = args.join(" ").slice(22);

    let reportembed = new Discord.RichEmbed()
    .setDescription("Warn")
    .setColor("BLACK")
    .addField("Warn User", `${rUser} with ID: ${rUser.id}`)
    .addField("Warn By", `${msg.author} with ID: ${msg.author.id}`)
    .addField("Channel", msg.channel)
    .addField("Time", msg.createdAt)
    .addField("Reason",`${reason}`)
    
    
    let reportchannel = msg.guild.channels.find(`report`,"اسم الروم"); //حط هنا اسم الروم الي يوريك بعض المعلومات
    if(!reportchannel) return msg.channel.send("Couldn't find `اسم الروم` channel. "); //ط هنا اسم الروم الي يوريك بعض المعلومات
    
    msg.delete().catch(O_o=>{});
    reportchannel.send(reportembed);
    let role = msg.guild.roles.find(`Reporter`, 'اسم الرتبة'); //حط هنا اسم الرتبة
    if(!role) return msg.guild.channel.send("Could't find `اسم الرتبة` role."); //حط هنا اسم الرتبة
    rUser.addRole(role);
    
        return;
    }
    }); //Toxic Codes


var prefix = "*";
const mmss = require('ms');
        client.on('message', async message => {
            let muteReason = message.content.split(" ").slice(3).join(" ");
            let mutePerson = message.mentions.users.first();
            let messageArray = message.content.split(" ");
            let muteRole = message.guild.roles.find("name", "Muted");
            let time = messageArray[2];
            if(message.content.startsWith(prefix + "tempmute")) {
                if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send('**Sorry But You Dont Have Permission** `MUTE_MEMBERS`' );
                if(!mutePerson) return message.channel.send('**Mention Someone**')
                if(mutePerson === message.author) return message.channel.send('**You Cant Mute Yourself**');
                if(mutePerson === client.user) return message.channel.send('**You Cant Mute The Bot**');
                if(message.guild.member(mutePerson).roles.has(muteRole.id)) return message.channel.send('**This Person Already Tempmuted !**');
                if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
                if(!time) return message.channel.send("**Type The Duration**");
                if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time**');
                if(!muteReason) return message.channel.send('Please Type The Reason')
                message.guild.member(mutePerson).addRole(muteRole);
                message.channel.send(`**:white_check_mark: ${mutePerson} has been muted ! :zipper_mouth: **`)
                message.delete()
                let muteEmbed = new Discord.RichEmbed()
                .setTitle(`New Temp Muted User`)
                .setThumbnail(message.guild.iconURL)
                .addField('- Muted By:',message.author,true)
                .addField('- Muted User:', `${mutePerson}`)
                .addField('- Reason:',muteReason,true)
                .addField('- Duration:',`${mmss(mmss(time), {long: true})}`)
                .setFooter(message.author.username,message.author.avatarURL);
                let incidentchannel = message.guild.channels.find(`name`, `incidents`);
                if(!incidentchannel) return message.channel.send("Cant Find incidents Channel");
                incidentchannel.sendEmbed(muteEmbed)
                mutePerson.send(`**You Are has been temp muted in ${message.guild.name} reason: ${muteReason}**`)
                .then(() => { setTimeout(() => {
                   message.guild.member(mutePerson).removeRole(muteRole);
               }, mmss(time));
            });
            }
        });


client.on("guildMemberAdd", async member => {
  let moment2 = require('moment-duration-format'),
      moment = require("moment"),
      date = moment.duration(new Date() - member.user.createdAt).format("d");
 
  if(date < 6) {
    member.ban("Member account age is lower than 6 days.")
  }
});

client.on('ready', async ready => {
    client.channels.get('557554566778978324').join()
});

client.on('message', message => {
    var prefix = '§';//هنا البريفيكس
    if (message.content.startsWith(prefix + 'reject')) {//هنا الأمر
        if (message.author.bot) return;
        if (!message.guild) return;
        let Room = message.guild.channels.find(`name`, 'accept-denied');//هنا ضع إسم الروم
        let user = message.mentions.users.first();
        let embedreject = new Discord.RichEmbed()/
        .setColor('RANDOM')//
        .setAuthor(user.username,user.avatarURL)
        .setTitle('» `لم يتم قبولك كإداري` :x: ')//هنا تقدر تغير الكلام حق الرسالة
        .setThumbnail(message.author.avatarURL)
        Room.sendEmbed(embedreject);
    }
});
 
client.on('message', message => {
    var prefix = '§';//هنا البريفيكس
    if (message.content.startsWith(prefix + 'accept')) {
        if (message.author.bot) return;
        if (!message.guild) return;
        let Room = message.guild.channels.find(`name`, 'accept-denied');//هنا ضع إسم الروم
        let user = message.mentions.users.first();
        let embedreject = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(user.username,user.avatarURL)
        .setTitle('» `تم قبولك كإداري` :white_check_mark:  ')
        .setThumbnail(message.author.avatarURL)
        Room.sendEmbed(embedreject);
    }
});//By JustMeAlone && EditeD By JuStMeAlone

client.on('message', message => {
    if (message.content == "$سرعة") {
        var x = ["https://cdn.discordapp.com/attachments/553287876243357721/553515081296773140/bandicam_2019-03-07_12-50-04-444.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515077697929241/bandicam_2019-03-07_12-45-37-573.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515078180405249/bandicam_2019-03-07_12-48-29-284.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515078515949568/bandicam_2019-03-07_12-48-07-648.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515078129942548/bandicam_2019-03-07_12-49-15-371.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515077458853898/bandicam_2019-03-07_12-48-44-988.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515076385112065/bandicam_2019-03-07_12-47-45-547.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515076162813963/bandicam_2019-03-07_12-47-11-464.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515073897889793/bandicam_2019-03-07_12-46-28-283.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515071716982806/bandicam_2019-03-07_12-44-55-900.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515050653188097/bandicam_2019-03-07_12-44-33-759.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515045334810656/bandicam_2019-03-07_12-44-15-396.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515038917525505/bandicam_2019-03-07_12-43-48-900.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515019153965066/bandicam_2019-03-07_12-43-09-939.jpg",
"https://cdn.discordapp.com/attachments/553287876243357721/553515014066012160/bandicam_2019-03-07_12-42-33-352.jpg",
];
        var x2 = ['By 7md | DgPro',
        "طبق رطب مرق بقر",
        "عش العصفور",
        "شجرة الأوغيري",
"ليوبليانا",
"كانيكي",
"خير و طماطم",
"تفاح و زلاطه",
"خيار وطرشي",
"جافاسكربت",
"امازون",
"النهاية",
"القسطنطينية",
"السعودية",
"البرازيل",
     ];
       
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اكتب اسرع
 :  ${x[x3]}
لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
       
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة الكلمه في الوقت المناسب`);
        })
        })
    }
});


client.login(process.env.TOKEN);
