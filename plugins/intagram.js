const {cmd , commands} = require('../command');
cmd({
    pattern: "ig",
    desc: "To download instagram videos.",
    category: "download",
    react: "🔎",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

  if (!args[0]) {
    return reply('*`ρℓєαѕє gινє α ωαιℓ∂ ιηѕтαgяαм ℓιηк`*');
  }

  await m.react('🕒');
  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return reply('*`єяяσя σвтαιηιηg ∂αтα.`*');
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return reply('*`ησ яєѕυℓт ƒσυη∂.`*');
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");
  } catch (error) {
    return reply('*`єяяσя ∂αтα ℓσѕѕ.`*');
  }

  if (!data) {
    return reply('*`No Data Found.`*');
  }

  await m.react('✅');
  let video = data.url;
  let dev = '*👨‍💻ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ👨‍💻*'
  
  try {
    await conn.sendMessage(m.chat, { video: { url: video }, caption: dev, fileName: 'ig.mp4', mimetype: 'video/mp4' }, { quoted: m });
  } catch (error) {
    return reply('*`Error Download Vide.`*');
  await m.react('❌');
  }
}catch(e){
console.log(e)
  reply(`${e}`)
}
});
