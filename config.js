module.exports = {
    Bot: {
    token: "MTA1MjQ3ODE5MjE2Nzk2NDczMw.GwMZfZ._G_qorG0nFwH1npnB2KkfrO-_SCnFH_F6mxcbc", //Add your token here
    prefix: ["$getServerVar[prefix]","<@!$clientID>","<@$clientID>","$getUserVar[uprefix]","$getGlobalUserVar[cprefix]"],
    intents: "all",
    database: {
         type:'default',
        db:require('dbdjs.db'),
        path:"./db/",
        tables:["main"],
        promisify:false
    },

    respondOnEdit: {
        commands: true
    },
    suppressAllErrors: true
    }

}