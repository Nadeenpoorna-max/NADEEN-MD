const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yWxC0ZpL#je-Facol1XsuqThO3tsogEYQeEZDwqfVeTxYBrNXlCA", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/l7e7kt.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello ${pushname}* ✫💫𝐍𝐀𝐃𝐄𝐄𝐍-𝐌𝐃💫✫\n\n*Hey there!*\n\n 💫 *ηα∂єєη-м∂ ωнαтѕαρρ вσт ιѕ υρ αη∂ яυηηιηg!*\n🖤 *яυηтιмє : 1 hour, 5 minutes, 44 seconds\n👨‍💻 *¢яєαтє∂ ву:* NADEEN POORNA\n\n*𝐻𝑒𝓇𝑒'𝓈 𝓌𝒽𝒶𝓉 𝐼 𝒸𝒶𝓃 𝒹𝑜*\n💿 *Download Songs & Videos*\n📰 *Fetch Latest News*\n🎭 *Entertain with Fun Commands*\n🔧 *Manage Groups*\n\n*𝒮𝓉𝒶𝓎 𝒸𝑜𝓃𝓃𝑒𝒸𝓉𝑒𝒹 𝒶𝓃𝒹 𝑒𝓃𝒿𝑜𝓎 𝓉𝒽𝑒 𝓈𝑒𝓇𝓋𝒾𝒸𝑒𝓈!*\n\n💕𝙃𝙚𝙡𝙥𝙚𝙧𝙨💕: \n MANHIRU YUWAN\n> INDUWARA DUSHRSHANGANA\n> DINKA\n\n_*©𝐍𝐀𝐃𝐄𝐄𝐍-𝐌𝐃*_\n*👨‍💻 ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ 👨‍💻*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "public", //private or public
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",  //true or false
AUTO_VOICE:"true" //true or false
};
