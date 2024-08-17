const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/f2a6ee1ab649a2fb72708.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "👨‍💻💝 Hello, I am `NADEEN-MD`,I am alive Now! 🇱🇰

> 👨🏻‍💻 Bot Developed by *@NADEEN POORNA*   

> 🥏Contact Bot Owner - +94711451319 

> 🛡 Powered By *DINKA FILMS* 
----------------------------------------------------------
⚙ Type *.menu* to get the bot's command list. 
----------------------------------------------------------
----------------------------------------------------------
🌀 YouTube - www.youtube.com/@DINKA_FILMS

🌀 Follow WhatsApp Channel - https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I
----------------------------------------------------------
 `ᴛʜɪꜱ ꜱʏꜱᴛᴇᴍ ᴄʀᴇᴀᴛᴇ ʙʏ ©ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ`"
};
