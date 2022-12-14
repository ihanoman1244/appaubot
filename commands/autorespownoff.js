module.exports = {

name: "off",

$if: "v4",

code: `



$setuservar[afk_pings;0]

$setuservar[afk_mentions;]

$setuservar[afkr;]

$setuservar[afkt;0]

$setUserVar[afk;false]

$title[1;**$usertag** auto respown mu sudah mati]
$description [1;
\`\`\`js
Jumlah ping: $getUserVar[afk_pings]
Daftar mention: $getUserVar[afk_mentions]\`\`\`]
$color[1;2F3136]
`}