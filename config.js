const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put session_id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/c7ce95554df8fcfa85680.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello ${pushname}* ✫💫👨‍💻I am `NADEEN-MD`💫✫\n\n*Hey there!*\n\n 💫 *> 👨🏻‍💻 Bot Developed by *@NADEEN POORNA*\n🖤 *яυηтιмє : 1 hour, 6 minutes, 43 seconds\n🤍 ⚙ Type *.menu* to get the bot's command list. \n\n*𝐻𝑒𝓇𝑒'𝓈 𝓌𝒽𝒶𝓉 𝐼 𝒸𝒶𝓃 𝒹𝑜*\n💿 *Download Songs & Videos*\n📰 *Fetch Latest News*\n🎭 *Entertain with Fun Commands*\n🔧 *Manage Groups*\n\n*𝒮𝓉𝒶𝓎 𝒸𝑜𝓃𝓃𝑒𝒸𝓉𝑒𝒹 𝒶𝓃𝒹 𝑒𝓃𝒿𝑜𝓎 𝓉𝒽𝑒 𝓈𝑒𝓇𝓋𝒾𝒸𝑒𝓈!*\n\n🎆POWERED BY : DINKA CREW\nMANHIRU YUWAN\n_*© NADEEN- MD*_\n\n💻 *GitHub:* https://github.com/Nadeenpoorna-max/NADEEN-MD\n `👨‍💻 ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ 👨‍💻`",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
