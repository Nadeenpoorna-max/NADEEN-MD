const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { cmd, commands } = require('../command');
const config = require('../config');

cmd({
    pattern: "rvideo",
    desc: "ƒєт¢н αη∂ ѕєη∂ α яαη∂σм νι∂єσ ƒяσм ρєχєℓѕ.",
    category: "fun",
    react: "🎥",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Notify user that the video is being downloaded
        await conn.sendMessage(from, { text: '⏳ *ωαιтιηg, уσυя νι∂єσ ιѕ ∂σωηℓσα∂ιηg...* ⏳' }, { quoted: mek });

        const apiUrl = `https://api.pexels.com/videos/search?query=random&per_page=1&page=${Math.floor(Math.random() * 100) + 1}`;
        const response = await axios.get(apiUrl, { headers: { Authorization: config.PEXELS_API_KEY } });

        const video = response.data.videos[0];
        if (!video || !video.video_files || video.video_files.length === 0) {
            throw new Error('ησ νι∂єσ ƒιℓєѕ ƒσυη∂ ιη тнє яєѕρσηѕє');
        }

        const videoUrl = video.video_files[0].link;
        const videoTitle = video.title || 'Random Video';

        // Download the video
        const videoPath = path.join(__dirname, 'tempVideo.mp4');
        const writer = fs.createWriteStream(videoPath);

        const responseVideo = await axios.get(videoUrl, { responseType: 'stream' });
        responseVideo.data.pipe(writer);

        writer.on('finish', async () => {
            await conn.sendMessage(from, { text: '✅ *Your Video has Been Successfully Downloaded!* ✅' }, { quoted: mek });
            await conn.sendMessage(from, { video: { url: videoPath }, caption: `🎥 *ʀᴀɴᴅᴏᴍ ᴘᴇxᴇʟꜱ ᴠɪᴅᴇᴏ* 🎥\n\nTitle: ${videoTitle}\n> *👨‍💻ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ👨‍💻*` }, { quoted: mek });

            // Clean up
            fs.unlinkSync(videoPath);
        });

        writer.on('error', (err) => {
            console.log(err);
            reply(`❌ Error Downloading Video: ${err.message}`);
        });
    } catch (e) {
        console.log(e);
        reply(`❌ єяяσя ƒєт¢нιηg νι∂єσ: ${e.message}`);
    }
});
