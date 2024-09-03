const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const voice = {
    menu: 'media/AUD-20240901-WA0161.mp3'
}

let dec = `👋 *Hello ${pushname}*
*╭───────────◉◉►*
*│Hey, I'm *NADEEN-MD*, Created By*
*│NADEEN POORNA✨🤍*
*│*
*│I'm always here for help you.😇 Love │you forever ♥️*
*╰───────────◉◉►*

*╭───────────◎◎►*
│💻 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 💻
*│ ─────────*
*│►.song*
*│►.video*
*│►.fb*
*│►.tt*
*│►.mediafire*
*│►.twitter*
*│►.gdrive*
│─────────
│👾 𝗔𝗜 𝗠𝗲𝗻𝘂 👾
*│─────────*
*│►.ai*
*│►.gen (comming soon!)*
│─────────
│⛥ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ⛥
*│─────────*
*│►.restart*
│─────────
│💫 𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│─────────*
*│►.menu*
*│►.alive*
*│►.ping*
*│►.repo*
*│►.owner*
*╰───────────◎◎►*
> *`👨‍💻 ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ 👨‍💻`*

await conn.sendMessage(from, { audio: { url: voice.menu }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7e1f9a45d326abc34d161.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
