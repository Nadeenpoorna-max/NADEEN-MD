const {cmd , commands} = require('../command')

cmd({
    pattern: "nadeenlogo",
    desc: "wallpaper the bot",
    category: "main",
    react: "🎗️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮ NADEEN-MD WALLPEPAR 👾💗 ❯❯`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/c7ce95554df8fcfa85680.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/c253ba5258dc2c5c2f33d.png`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/f2a6ee1ab649a2fb72708.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/f5e0751267307ac475187.mp4`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
