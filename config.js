const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put your session id",
MONGODB: process.env.MONGODB || "enter mongodb",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
