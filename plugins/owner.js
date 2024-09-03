const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*⚡𝙽𝙰𝙳𝙴𝙴𝙽 - 𝙼𝙳⚡*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ​🇳​​🇦​​🇩​​🇪​​🇪​​🇳​ ​🇵​​🇴​​🇴​​🇷​​🇳​​🇦​ (🇩​​🇮​​🇳​​🇰​​🇦​ ​🇴​​🇼​​🇳​​🇪​​🇷​)*
*⚡ɴᴜᴍʙᴇʀ* -: 94711451319

*`👨‍💻 ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ 👨‍💻`*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/f5e0751267307ac475187.mp4`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
