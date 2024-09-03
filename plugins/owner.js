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

let dec = `*🧚‍♀️𝐃𝐀𝐑𝐊 𝐙𝐄𝐑𝐎-𝐌𝐃🧚‍♀️*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ʜᴀᴄᴋᴇʀ ᴛᴍ ᴏꜰᴄ (ᴅᴀʀᴋ ᴢᴇʀᴏ ᴛᴍ)*
*⚡ɴᴜᴍʙᴇʀ* -: 94757286833

*©𝗗ᴀʀᴋ ᴢᴇʀᴏ-ᴍᴅ ʙʏ ᴅᴀʀᴋ ᴢᴇʀᴏ ʜᴀᴄᴋᴇʀ ᴛᴍッ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7e1f9a45d326abc34d161.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
