const {cmd , commands} = require('../command')
const yts = require('yt-search');
const fg = require('api-dylux');

// -------- Song Download --------
cmd({
    pattern: 'mp3',
    desc: 'download songs',
    react: "📼",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('*මට ලින්ක් එකක් හරි,නමක් හරි දීපන් download කරන්න 😑*');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `*📼 NADEEN-MD MP3 DOWNLOADER . .⚙️*

🎃⚙️ TITLE - ${data.title}

🎃⚙️ VIEWS - ${data.views}

🎃⚙️ DESCRIPTION - ${data.description}

🎃⚙️ TIME - ${data.timestamp}

🎃⚙️ AGO - ${data.ago}

*Reply This Message With Option*

*1 Audio With Normal Format*
*2 Audio With Document Format*

> *©𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗*`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(from, { audio: { url:downloadUrl }, caption: '> *©ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ*', mimetype: 'audio/mpeg'},{ quoted: mek });
                        await conn.sendMessage(from, { react: { text: '📤', key: mek.key } })
                        break;
                    case '2':               
                        // Send Document File
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloaddocUrl }, caption: '> *©ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ*', mimetype: 'audio/mpeg', fileName:data.title + ".mp3"}, { quoted: mek });
                        await conn.sendMessage(from, { react: { text: '📤', key: mek.key } })
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});


//==================== Video downloader =========================

cmd({
    pattern: 'mp4',
    desc: 'download videos',
    react: "🎞",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('*මට ලින්ක් එකක් හරි,නමක් හරි දීපන් download කරන්න 😑*');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `*🎞 NADEEN-MD MP4 DOWNLOADER . .⚙️*

📽️⚙️ TITLE - ${data.title}

📽️⚙️ VIEWS - ${data.views}

📽️⚙️ DESCRIPTION - ${data.description}

📽️⚙️ TIME - ${data.timestamp}

📽️⚙️ AGO - ${data.ago}

*Reply This Message With Option*

*1 Video With Normal Format*
*2 Video With Document Format*

> *©𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗*`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let downvid = await fg.ytv(url);
                        let downloadvUrl = downvid.dl_url;
                        await conn.sendMessage(from, { video : { url:downloadvUrl }, caption: '> *©ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ*', mimetype: 'video/mp4'},{ quoted: mek });
                        break;
                    case '2':
                        let downviddoc = await fg.ytv(url);
                        let downloadvdocUrl = downviddoc.dl_url;
                        await conn.sendMessage(from, { document: { url:downloadvdocUrl }, caption: '> *©ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ*', mimetype: 'video/mp4', fileName:data.title + ".mp4" }, { quoted: mek });
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
