const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "nadeenmd",
    desc: "To get the bot informations.",
    react: "👨🏻‍💻",
    category: "main",
    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*
                    
 𝐈 𝐀𝐌 𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓
 
⚡𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝗡𝗔𝗗𝗘𝗘𝗡 𝗣𝗢𝗢𝗥𝗡𝗔 (𝗛𝗢𝗥𝗜𝗭𝗢𝗡 𝗠𝗔𝗧𝗥𝗜𝗫)..
           
*☄ɢɪᴛʜᴜʙ :* https://github.com/Nadeenpoorna-max/NADEEN-MD   
             
*🌠ʏᴏᴜᴛᴜʙᴇ :* https://www.youtube.com/@DINKA_FILMS
      
*☄ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ :* https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

*👨‍💻ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ👨‍💻*`

return await conn.sendMessage(from,{image: {url:`https://imgtr.ee/images/2024/09/21/e406ad995acfb5710f1d47b76fe8789f.jpeg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
