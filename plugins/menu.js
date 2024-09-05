const config = require('../config')
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
let menu = { 
main: '',
download: '',
group: '',
owner: '',
prank: '',
convert: '',
search: '',
ai: ''
};
    
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}
    
const voice = {
    menu: 'media/AUD-20240901-WA0161.mp3'
}

let dec = `👋 *Hello ${pushname} * `
*╭───────────◉◉►*
*│Hey, I'm *NADEEN-MD*, Created By*
*│NADEEN POORNA✨🤍*
*│*
*│I'm always here for help you.😇 Love │you forever ♥️*
*╰───────────◉◉►*

*╭───────────◎◎►*
│💻 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 💻
*│ ─────────*
${menu.download}
│─────────
│👾 𝗔𝗜 𝗠𝗲𝗻𝘂 👾
*│─────────*
${menu.ai}
│─────────
│⛥ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ⛥
*│─────────*
${menu.owner}
│─────────
│⛥ 𝗣𝗿𝗮𝗻𝗸 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀⛥
*│─────────*
${menu.prank}
│─────────
│⛥ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀⛥
*│─────────*
${menu.group}
│─────────
│⛥ 𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀⛥
*│─────────*
${menu.convert}
│─────────
│⛥ 𝗦𝗲𝗮𝗿𝗰𝗵 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀⛥
*│─────────*
${menu.search}
│─────────
│💫 𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│─────────*
${menu.main}
*╰───────────◎◎►*
> *`👨‍💻 ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ 👨‍💻`*

await conn.sendMessage(from,{ audio: { url: voice.menu }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/c7ce95554df8fcfa85680.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
