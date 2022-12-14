module.exports = {

name: "$alwaysExecute",

$if: "v4",

code: `

$if[$getUserVar[afk;$mentioned[1;no]]==true]

$setuservar[afk_pings;$sum[$getuservar[afk_pings;$mentioned[1]];1];$mentioned[1]]

$setuservar[afk_mentions;$getuservar[afk_mentions;$mentioned[1]]\n$usertag;$mentioned[1]]
$description[1;$getUserVar[afkr;$mentioned[1]]
]
$color[$getServerVar[color]]
$endif

`}

