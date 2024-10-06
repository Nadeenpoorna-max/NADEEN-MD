const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "⛓",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*🎃NADEEN-MD Support Channels🎃*

*🔰Youtube Channel Link:* https://www.youtube.com/@DINKA_FILMS

*⚜Whatsapp Channel Link:* https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

*👾Contact Bot Owner:* 0711451319

*👾Cantact Bot Co-Owner :* 0775383340

*©ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ*`

return await conn.sendMessage(from,{image: {url:`https://www.imgtr.net/ib/7ghhUAnAw1MgXnU_1728205341.png`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
