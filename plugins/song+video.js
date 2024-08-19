const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "song",
    desc: "download song.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

}catch(e){
  console.log(e)
  reply(`${e}`) 
}
})
