module.exports = {

name: "on",

$if: "v4",

code: `

$if[$authorid==$ownerid]

$author[1;Autorespown nyala;https://images-ext-1.discordapp.net/external/yqI36lWljGkYOLAhmgc6u3YVk5zP--SgpOdwljSmdK4/https/i.ibb.co/5TCYr8h/success.png]

$color[1;$getServerVar[color]]

$description[1;**$username** Autorespown mu sudah hidup
Pesan : $message]

$setUserVar[afk;true]

$setUserVar[afkt;$dateStamp]

$setUserVar[afkr;$message]

$else

$author[1; Autorespown nyala;https://images-ext-1.discordapp.net/external/yqI36lWljGkYOLAhmgc6u3YVk5zP--SgpOdwljSmdK4/https/i.ibb.co/5TCYr8h/success.png]

$color[1;$getServerVar[color]]

$description[1;**$username** Auto respown mu sudah hidup

Pesan: $message]

$setUserVar[afk;true]

$setUserVar[afkt;$dateStamp]

$setUserVar[afkr;$message]

$endif

$if[$checkcondition[$ownerid==$authorid]$checkcondition[$roleposition[$highestrole[$clientid]]>=$roleposition[$highestrole[$authorid]]]$checkcondition[$hasperms[$clientid;managenicknames]==true]==falsefalsetrue]
$changeNickname[$authorid;$replacetext[$replacetext[$checkcondition[$charcount[$nickname]<=26];true;+AFK+ $username];false;$nickname]]
$else
$endif
$setuservar[memek;$datestamp]
$let[reason;$replacetext[$replacetext[$checkcondition[$message==];true;None];false;$message]]
$onlyIf[$getUserVar[afk]==false;$getServerVar[error] Auto respown mu masih hidup]

$argsCheck[>0;$getServerVar[error] **yang bener gini: $tolowercase[$commandname]  < pesan >**]

$if[$getServerVar[afkroles]!=undefined]

$onlyForRoles[$joinsplittext[;];$getServerVar[error] Kamu tidak memiliki role afk]
$onlyForIds[1005671406903767092;$botownerid;]
$textsplit[$getservervar[afkroles];/]

$endif`}