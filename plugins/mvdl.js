const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

// FETCH API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


const yourName = "❗මෙය වෙබ් පිටපතක් වන අතර,සිංහල උපසිරැසි වෙනම එකතු කරගැනීමට *සිංහල උපසිරැසි* Button එක click කරන්න.\n\n> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ*\n\n 🎬*ɴᴀᴅᴇᴇɴ ᴍᴅ ᴄɪɴᴇʀᴜ.ʟᴋ ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*🎬​";


cmd({
    pattern: "mvdl",
    alias: ["cinerulk"],
    desc: "download cinerulk movie ",
    category: "download",
    react: "🎬",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("මට මෙය හදුනාගැනීමට අපහසුයි🤔.\nඑකෙන් ලබා ගන්නා,Google drive ලින්ක් පමණක් භාවිතා කරන්න ")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/gdrivedl?url=${q}`)
        reply("🎬*ɴᴀᴅᴇᴇɴ ᴍᴅ ᴄɪɴᴇʀᴜ.ʟᴋ ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*🎬​ \n*--------------------------------------------*\n𝕐𝕆𝕌ℝ 𝕄𝕆𝕍𝕀𝔼 𝕀𝕊\n*📤𝕌ℙ𝕃𝕆𝔸𝔻𝕀ℕ𝔾 ◽◽◽◽◽◽*\n\n> *ɴᴀᴅᴇᴇɴ-ᴍᴅ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ*")
        await conn.sendMessage(from, { document: { url: data.data.download }, fileName: data.data.fileName, mimetype: data.data.mimeType, caption: `🍟Movie Name : ${data.data.fileName} | සිංහල උපසිරැසි ඇතුළත් කර නැත.\n🍫Bot Owner : 94711451319 \n\n${yourName}` }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
