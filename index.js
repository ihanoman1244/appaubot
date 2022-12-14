
const aoijs = require('aoi.js'); //We're authorized "aoijs" as our bot in here, you can type anything you want. 
const config = require('./config.js'); //This will be our configuration file. I didn't want your main file be messy. 
const bot = new aoijs.Bot(config.Bot);
const fs = require('fs');




//Events

bot.onMessage()

//Clinet status
bot.status({
  text: "$getUserVar[prefix]help / mention",
  type: "WATCHING",
    status: "idle"
})


require('./callbacks.js')(bot)
bot.variables(require('./variables.js'));

//Ready Event

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://Starter-bot-1.xangsut.repl.co',
    title: 'xangsut',
    interval: 1 // minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));


//Command Handler loader
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/')

const voice = new aoijs.Voice(bot, {




  cache: {

    cacheType: "Memory",//Disk

    enabled: true,

  }, 

});

bot.onInteractionCreate()

bot.readyCommand({
 channel: "952669582890500106",
 $if: "v4",
 code: `
$djseval[$Readfile[gaw.txt];no]
$log[____________________________________________
YouTube    : $replaceText[$replaceText[$isValidLink[https://youtube.com/];true;✅];false;❌]
SoundCloud : $replaceText[$replaceText[$isValidLink[https://soundcloud.com/];true;✅];false;❌]
Spotify    : $replaceText[$replaceText[$isValidLink[https://spotify.com/];true;✅];false;❌]
____________________________________________
IPV4       : $advancedTextSplit[$httpRequest[https://ip-fast.com/api/ip/];";2]
Load       : $numberSeparator[$divide[$sub[$dateStamp;$get[time]];10]]s
____________________________________________]
$log[$userTag[$clientID] active at $formatDate[$dateStamp;LLLL]]
$sendMessage[<@$clientID> active at <t:$cropText[$dateStamp;10]:F>;no]
$djsEval[global.aoi = (e, code, rc = true, re = true, sm = true) => e.interpreter(e.client, e.message, e.args, { name: 'Eval', code: code }, e.client.db, rc, undefined, {}, undefined, undefined, re, false, sm)]
$let[memek;$dateStamp]
$suppressErrors`
})
bot.joinCommand({ 

channel: "$getServerVar[wchannel]", 

code: `

$If[$getServerVar[wchannel]!=undefined;

$author[1;New user joined;$authoravatar]

$color[1;$getServerVar[color]]

$description[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[wmessage];<name>;$username];<mention>;<@$authorid>];<tag>;$usertag[$authorid]];<servername>;$servername];<count>;$memberscount];<owner>;$username[$ownerid]];<owner.tag>;$usertag[$ownerid]];<owner.id>;$ownerid];<owner.mention>;<@$ownerid>];<author.id>;$authorid];<user.age>;<t:$truncate[$divide[$creationDate[$authorid;ms];1000]]:R>];<owner.age>;<t:$truncate[$divide[$creationDate[$ownerid;ms];1000]]:R>];<server.age>;<t:$truncate[$divide[$creationDate[$guildid;ms];1000]]:R>];<join.time>;<t:$truncate[$divide[$datestamp;1000]]:R>];undefined;**☕ Welcome to $servername <@$authorID>, we now have $membersCount members!**]]

$image[1;$get[wimg]]

$setUserVar[jage;$datestamp]

$let[wimg;$replaceText[$getServerVar[wimg];undefined;$jsonRequest[https://nekos.best/api/v1/wave;url]]]]

`})


bot.leaveCommand({ 
channel: "$getServerVar[gchannel]", 
code: `
$author[1;User left;$authoravatar]
$color[1;$getServerVar[color]]
$description[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[gmessage];<name>;$username];<mention>;<@$authorid>];<tag>;$usertag[$authorid]];<servername>;$servername];<count>;$memberscount];<owner>;$username[$ownerid]];<owner.tag>;$usertag[$ownerid]];<owner.id>;$ownerid];<owner.mention>;<@$ownerid>];<author.id>;$authorid];<user.age>;<t:$truncate[$divide[$creationDate[$authorid;ms];1000]]:R>];<owner.age>;<t:$truncate[$divide[$creationDate[$ownerid;ms];1000]]:R>];<server.age>;<t:$truncate[$divide[$creationDate[$guildid;ms];1000]]:R>];<join.time>;<t:$truncate[$divide[$datestamp;1000]]:R>];<leave.time>;<t:$truncate[$divide[$getUserVar[jage];1000]]:R>];undefined;**☕ goodbye $username, we now have $membersCount members!**]]
$image[1;$get[wimg]]
$let[wimg;$replaceText[$getServerVar[limg];undefined;$jsonRequest[https://nekos.best/api/v1/cry;url]]]
`}) 
 bot.onLeave()
 bot.onJoin()


bot.guildJoinCommand({
channel: "$systemChannelID",
code: `
$if[$memberscount[$guildID;;no]>=30;
**Server needs \`30\` or more members**
$setServerVar[wchannel;$systemChannelD]
$setServerVar[gchannel;$systemChannelID]
$setGlobalUserVar[wl;$getGlobalUserVar[wl;$clientid]/$guildid;$guildid]
$onlyIf[$checkContains[$guildID;$joinSplitText[;];955629081054036059;956657229879189564;765789714384814120;900900133150007376;952139172653723709;946961245989380206;953775397315686420;943246795700580452;946761370119069717;739811956638220298;797833180936667153;935576651767619626;941026456396509244;818214679456514118;1020313829940404244;819888735092604938;886782273498808370;920988644318281749]==false;]
$textSplit[$getGlobalUserVar[wl;$clientid];/]]
`}) 
bot.onGuildJoin();


bot.onTypingStart();
bot.onRateLimit();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onChannelCreate();
bot.onVoiceStateUpdate();
bot.onRoleUpdate();
bot.onMemberUpdate();
bot.onRoleDelete();
bot.onRoleCreate();
bot.onBanRemove();
bot.onMessageUpdate();
bot.onPresenceUpdate();
bot.onUserUpdate();
bot.onMessageDelete();
bot.onInteractionCreate();
bot.onGuildUpdate();
bot.onEmojiCreate();
bot.onEmojiUpdate();
bot.onEmojiDelete();
bot.onReactionRemoveAll();
bot.onReactionRemoveEmoji();
bot.onMessageDeleteBulk();
bot.onWebhookUpdate();
bot.onChannelPinsUpdate();
bot.onVariableCreate();
bot.onVariableUpdate();
bot.onVariableDelete();
bot.onApplicationCmdCreate()
bot.onApplicationCmdUpdate();;
bot.onApplicationCmdDelete();
bot.onStickerCreate();
bot.onStickerUpdate();
bot.onStickerDelete();
bot.onThreadCreate();
bot.onThreadUpdate();
bot.onThreadDelete();
bot.onThreadListSync();