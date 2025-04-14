const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session:process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61V2Y6jOBT9lZFfk+qwBohU0gCBrJCF7KNRywEDzgLENiSklV8azT/0j41IqlQldXdNjTQ8WcY+99x7zz3+BpIUUzRAJWh9AxnBBWSoWrIyQ6AFjDwMEQF1EEAGQQss7UFfhQvDRftRPO5OMp7KgaLtHKm506NlOJvgzdATr8TuPYNbHWT59oD9DwCTaSPuT+x13xs6DooUdnacguut7Frh0eHA7GyvUz1Kkdq2nsGtQoSY4CSyshgdEYGHASrHEJPP0e/0hzt6mnj7WdER/N5i6Y6iWJzUTslKLIuE+HSQ8mM/my73n6O/JDbZdMJav7abhWY3H3vLBVfopdPpU0dQzvZgOD1u1Y35Sp/iKEFBL0AJw6z8dN1r3ThxvEBvq257K4xgPBnvk8l0t42sztqFiifAcdBoMs7yP0e8VCPlZJSdIhcmNejpNdP2uY448OYq5+znLvWHVpiSLrnu3xMfk1et7P9L3fOREM61RrwktH2d79XJ4lxcd/NRyC05N1cHYU10hrKcmqvJJ+mf+gd3Uegdxpwh7Dl8bZuzk1VbNs2TRLVBglU+O+MEie/qDllOPmLp22SuzxZZ5GaDYBUtcsy7UlPY9Gdyv1Zs2hd1GjOkZ7WxyPJFHAxjt5MX/nE6DObO1rOjqS04WrzeDOxspU5YOg9qRvR8z2iPyl4AWvytDgiKMGUEMpwm9z1OqwMYFB7yCWL38gLKJzXE98XFaMl02nNiLVSSyGr3ipq59/01mp65HndAcOI/gzrISOojSlHQxZSlpHQQpTBCFLT+uHeqSpqgY8pQHwegBQRZUlRV4jSek3+nX84xZBRm2ZcEMVAHIUmPDgItRnJUB/cLHNc2FNuUVEPRVV0SDcvSNEPi9bah6IalVikeH0Fn+Igog8cMtHhFkppykxfEW/3/4SFLUlOQBNsSTM5QFE3gRFm0Rcsy7bbIq/bHPET19mcdJOjCHjquqi/ydRBiQtk8ybNDCoNXkb/+hL6f5gnzysQ3qwUioPVuGzGGk4hWmeUJJH6MC2RWeYBWCA8U3eogQAX2UYUHjO4wdfuW6n01Z4K8jL9eNrE1qToYp8njSNNXBAVxyhMSfP9JkuTwSRU4/ync+nzA+TDwNQSqcjwspLrza78Te2m6GRqNQp3QDn9o9rzL2gtSzlXvqnxIEREUvFZ5C/19ns3SPUo+wpVCe8obLk5Dd0WX6Dxz9wXpBgW/fof7kDhofXuzbTMNKjy3vXBdkxdA1a0qzg9qaMnKj4JIYHUaeN//ihgpo4j8ZpWUIZwkv3k4ysn3vyGhaVIxeGlPhR0gBvGBghYwR6aSKY5pjZZM26qdjm5Fuhnp4K2drzbxGMOFshyq/t5zp93udZPHU3w9zntWo6EqwX6mX7szRgjUxucyff4JSOUpgh+Mj83meT9vnKS5dSHKqk01LbmuBGYf5vPS2wo9uVTkzUkl4rrcLuFGX8fGWB2dcLwaubRTRourvDqf0G5DubQMTf25ivaQ1ftg7UsCHWl0nm7Q0Vw3VnmzL0y5E7tI463sJf1i4V1Thhu8K+w2QneHD3nKNc5Xqy10lmhhdHTimE1VjS0NCsNJbYanW+P8MLC7gR5eHi78Yi0PEYYY3d+Bl/b8axvf5oG71d9hvLwsv9CcsUA8bnT71m4+vajCNp2vqXwwjXGjMRI31tm5cApsCsVMdU7gVg16doAsTMmx8tPjFoI6OEDK9Ld5/olF8HIdHEs9yzwG2asNAL36BpIGbv8AOGjhsjEJAAA=',
    PREFIXE: process.env.PREFIX || "#",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254788409105",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    AUTO_REACT: process.env.AUTO_REACTION || "no",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://chat.whatsapp.com/FRgA7K9RSemDbbTuLGEOik",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "⚔️, 👿, 🌎, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "ALPHA-MD active 24/7",
   GREET_MSG: process.env.GREET_MSG || "currently unavailable please try again later 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "yes", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'recording',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
