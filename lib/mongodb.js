const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://telegra.ph/file/c7ce95554df8fcfa85680.jpg' },
    { key: 'ALIVE_MSG', value: '*👋 Hello ${pushname}* ✫💫𝐍𝐀𝐃𝐄𝐄𝐍-𝐌𝐃💫✫\n\n*Hey there!*\n\n 💫 *ηα∂єєη-м∂ ωнαтѕαρρ вσт ιѕ υρ αη∂ яυηηιηg!*\n🖤 *яυηтιмє : 1 hour, 5 minutes, 44 seconds\n👨‍💻 *¢яєαтє∂ ву:* NADEEN POORNA\n\n*𝐻𝑒𝓇𝑒'𝓈 𝓌𝒽𝒶𝓉 𝐼 𝒸𝒶𝓃 𝒹𝑜*\n💿 *Download Songs & Videos*\n📰 *Fetch Latest News*\n🎭 *Entertain with Fun Commands*\n🔧 *Manage Groups*\n\n*𝒮𝓉𝒶𝓎 𝒸𝑜𝓃𝓃𝑒𝒸𝓉𝑒𝒹 𝒶𝓃𝒹 𝑒𝓃𝒿𝑜𝓎 𝓉𝒽𝑒 𝓈𝑒𝓇𝓋𝒾𝒸𝑒𝓈!*\n\n💕𝙃𝙚𝙡𝙥𝙚𝙧𝙨💕: \n MANHIRU YUWAN\n> INDUWARA DUSHRSHANGANA\n> DINKA\n\n_*©𝐍𝐀𝐃𝐄𝐄𝐍-𝐌𝐃*_\n*👨‍💻 ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ 👨‍💻*' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'false' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
