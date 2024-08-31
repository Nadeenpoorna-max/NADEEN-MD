const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download song.",
    category: "download",
    reaction: "🎵"
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give me `URL` or `TITLE`")
const search = await yts(q)
const data = search.videos[0]:
const url = data.url

let desc = '
⚡ `NADEEN-MD` SONG DOWNLOADER ⚡

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY `NADEEN POORNA`     
'
await conn.sendMessage(from,{image:{url}: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document messege
await conn.sendMessage(from,{audio: {url:downloadUrl,mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl,mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"`ɴᴀᴅᴇᴇɴ-ᴍᴅ` ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ"},{quoted:mek})
    
}catch(e){
  console.log(e)
  reply(`${e}`) 
}
})

//===========video-dl=============
cmd({
    pattern: "video",
    desc: "download videos.",
    category: "download",
     reaction: "🎥"
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give me `URL` or `TITLE`")
const search = await yts(q)
const data = search.videos[0]:
const url = data.url

let desc = '
⚡ `NADEEN-MD` VIDEO DOWNLOADER ⚡

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY `NADEEN POORNA`     
'
await conn.sendMessage(from,{image:{url}: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document messege
await conn.sendMessage(from,{video: {url:downloadUrl,mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl,mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"`ɴᴀᴅᴇᴇɴ-ᴍᴅ` ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ"},{quoted:mek})
    
}catch(e){
  console.log(e)
  reply(`${e}`) 
}
})
