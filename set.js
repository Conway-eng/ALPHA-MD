const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID ||'ALPHA;;;H4sIAAAAAAAAA61V646rNhd9lcp/k9OEW4BII5VLEnIbSAhJSNUfDhgw9zGGhBzllarvHfpin5jMaEZqezqVyi/L2Guvvffay99BXuAKLVELxt9BSXADKeqWtC0RGAO1DgJEQB/4kEIwBnhSn1ETtBfXHQinq9F4V0eQ+KUnuBKX6R7XHLUbtzZfcucJ3PugrM8p9n4EqJ/dhmOZM7eNi0mkh0LinqLapPAa89I82sQnZVlnxAy9J3DvECEmOA8nZYQyRGC6RK0FMfkafe351ApxwV0XjmUJi9Uc2TtF5MU8FuokFNLTQZsi5eQ9c/zX6O9jaO1ZPHfUI46mteRco3ZYXntBZtnVYYOsutgsjMIzbsmDfoXDHPlzH+UU0/bLdTcnwTWylaM7R4l5OM7j+mruvenOk9RthnYDh5I0P07xbLb+GnE/CMLjan+DDjmsY8bkOT0qWjzbvSxPwuQyQKaGy61tMcPqM3GLvGsl+Td1H06jcKhFEr9UxUswvQpF7JdpwK8TJ+LQgGwthbrINPhk8zX6GltLqaFH9a63XZ/92/WyXKlzd5HV67kF46aeF0VvclocjOKDPqQ1+RHLZiZJLaX183qbnRRu5c4oNcWzEb8IqY8medprypfF8bIsuNPFtwvxsiS5K5gpb/eEweS2QhRXCg4Fl50uNlSFmX1TN0+vGSWonftgzNz7gKAQV5RAiov8dU8S+wD6jY08guhrecFVOXAMnjPsM+/FJb/XlrqyOQXTc74b5j1Xbnaj86ZuayGbPIE+KEnhoapCvoErWpB2jaoKhqgC419fO9UlTVBWULTAPhgDVuBFSeKHMjMUfql+vkSQVrAsf84RBX0QkCJbIzCmpEZ98HphyHKypCjaVJIFhRNYTZ4oU3Uo6qORzo40tksxewTd4QxVFGYlGDMiz4vsiGOFe/+/4cFIo5EoKQorc7w+lUR5pCuapEz0ET/UBXX6Yx6cdP+tD3J0pQ8dd9XnmD4IMKmok9dlWkD/XeTvP6HnFXVO7Tb3tG6BCBh/2kaU4jysuszqHBIvwg3SujzAOIBphe594KMGe6jDA9XcVF09uG22h5dIbsxYSWUz7DoYFfnjiCwjiRtxwjdRDkbfeAb53ySREb95EiMLHuIlIWBBV46HhXR3/lbRrjA7zSxj2Ltt1E0Y20dfNBeOJzevdvQuRUSQ/17lM/SSutwVCcp/gJsihgqmPNqwG9bm/XnqqaoVmsNZu/6E+5A4GH//sG2t8Ds8eWMdXPVZB123ujh/UsNYkP8siBx2p4H9x+8hJW0Ykp8mbUURzvOfbBzW5I//QVIVecfgrT0dto8oxGnVuYapiaW41iaLxu6dpdlMWYeKFirgo53vNvEYw714WEleYj9vDeN2qqMtvmXOfDIYSKKf7JSbsaOEQNm6tMXTX4B0XB3GXV49ipk2Ya3TLG1GIQ/h4JyrB5b0DmjlnAbGxNGNmkAqviTPeZYuy1LdrNrNbKs5dL1lhdFlULmWdcT7VWJH+uWpi/aQ1edgfN4kYuxYs5170+Ewu6WznW29LHAI820yDAtx6XhGeTsvMmbzvNjrossR1R0tvCReXg1elU2XiaHBlDELL0O63BP/3cBeDTR9e7jwm7U8RBhg9PoOvLXnH9v4MQ/De/8TxtvL8jeaU/eIwQNjMYmd7VViz4XjVkKqqdZgYHKnyWV9HYpwxDY7af0C7t2glymkQUGybu6yMwR9kMKKKh/z/BcWwXB9kLVKWdoU0ncbAEr3LXkW3P8PRVvDcTEJAAA=',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254781070121",  
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
    GCF: process.env.GROUP_CONTROL || 'yes', 
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
    PM_PERMIT: process.env.PM_PERMIT || 'true',
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
