//වාලුක 
const config = require('../config')

const {cmd , commands} = require('../command')


cmd({

    pattern: "waluka",
    desc: "To get the bot informations.",
    react: "🖕🏻",
    category: "fun",
    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = `හායි *${pushname}*

*මගේ නම වාලුක නිම්සර*

*මං තාම singel boy කෙනෙක්* 

*මට කැමති කෙල්ලෝ ඉන්නවනම් inbox එන්න*

*👾Contact:* 0702131812  

*©ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ*`

return await conn.sendMessage(from,{image: {url:`https://files.catbox.moe/fu4sor.JPG`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})

//තරුෂ 
const config = require('../config')

const {cmd , commands} = require('../command')

cmd({

    pattern: "tharusha",
    desc: "To get the bot informations.",
    react: "😂",
    category: "fun",
    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = `හායි *${pushname}*

*🤗මගේ නම තරුෂ නිම්සර*

*😋මට නම් කෙල්ලෙක් ඉන්නවා * 

*මට $#*%$ #$%%# ඉන්නවනම් inbox එන්න*

*😋Contact:* +94775920743  

*©ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ*`

return await conn.sendMessage(from,{image: {url:`https://files.catbox.moe/2785mm.JPG`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)
