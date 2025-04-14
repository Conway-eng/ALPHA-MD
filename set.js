const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61V246jOBD9F792ZsPFBIjU0gIh5NYBEnLprPbBAYeQgCG2gZBR/n1Fp1vT0uzO9krLk2XsU6eqTh1/ByRPGJ7iBvS/g4ImFeK4XfKmwKAPzPJwwBR0QIQ4An1gj63MtwdhV5xMSE+7HNPNaSue0/E2DPkGRvDqo4UeXAu7fgb3DijKfZqEvwCcrG56jHfFSpEQ1IYIedbRvVEEZbIm5OhwMU+QHq2NLXwG9xYRJTQhsV0ccYYpSqe48VBCv0Y/nk4H45leMdkZ6mutClxv5bpM8nu9veg4p/lpWafdp6XwFu0L9B0BMljtrdp0ts4rhEsYzlVRD/OTP5zSIi1HlRfW3cpb1w/6LIkJjsYRJjzhzZfr7s9tTAMqCc3gKBh7GpfZtdxvrgWD+VG+FIGgN3KmShNy/hrx1Kkkpl7OHJkens5yTWPFkNokkU8ovrp6fApsU/JP4er8mbhHP7Ry/i91t2brW92TnQsu5Maqx8R8leHguEcaecmF1S4Ybb1VWZepk3+NvnLWunFAiEM3G32+UBm9Ylg0m27kWBfcs01ndMWNv1biT/QRL+mvWBqLeERytlyU5kBOB2xwrYx0aCTdZhAMlmQazthS1YgtrYqZMmRupZj7k7KonlaqfqvmrnU7mbAY6Qz781X3KZsW7jYxnt8yOuNmHIG+eO8AiuOEcYp4kpN2D/Y6AEXVEocU87fqAhYsVffWvc2eau86LTKsaJEz9VJEkjCBO382b5xg5HqX9PwMOqCgeYgZw9EoYTynzQtmDMWYgf4fb41qc6Y4yzmeJBHoA0mBqiYKqiBK4u/st/qIOENF8RvBHHTAgebZCwZ9TkvcAW8XBEEzJFGXTMXSJEmwxCFUB4oqS5oMoW7abYbZI2iQZJhxlBWgL6oQ9hRdE/V753/iYUmapUAoqEPLtKHQs6DZgwaULdEyLflfeEDh/mcHEHzlDxm3xZfFDjgklPEVKYs0R9GHxj9+ojDMS8KXDQmtdoEp6H/axpwnJGZtZiVBNDwmFbbaPED/gFKG7x0Q4SoJcYsHLi9cEF+y2PeQ5S/T0Y2OJrXfdvCYk8cRXVV6+4Nw+HbQIvwNqsr+217H4TdNOEh6CLXDXpdBW46Hg7R3/lHQl+ok7p/qkCd0J4RcWq5s+WTRRX013kT5UCKmOPqo8h6F57II8jMmv8AtNWPKPWV7uNyyEZ7YwWTAB1snlMT6E+5D4aD//YdrW3nU4m0gHG5HsgfabrVxflJDX/pZDwS1h8GAorBMURvnvQktQoQ5SlLWeo37FCuFMbRf9lN9rzmOMY4NKzbAj6Z9eMFj2Eiwaa7+hk8Ou+jsroz1crdIlrPX4eYMpwUZXVRrttkpcNfkz38D0rozP/UmVtk9V2xt3i7h2vXH9k6LzZt3W4jSK9zFtv/qK6Ffq1Iyy7ZdO2J5k653rh8ctkHsGlySamyPo0ae8MApvdhojeNDPJ+DTXvYCgbT6QtC1UIau2NxeG3Ot7EXj9w5LIOze5pTYm8HwnXyZN8WspOJ0fyW6XEiq3PF3PimNznY0cachIhbNL6wyendpd5cMn1/nZJ3A3lI7ZDgN7N/78K/NeuH6IV75xPE++vxD8Iyd4LI2GpIl1tpuxukxnCVrV7PiWSuC9e67K69sk7EDGMnvIB7O81Fivghp1lrmtkegQ5IEePGj6H92QdUXe+ArDGKYskR/5h1YLSfiwi4/wXyrMH9FQkAAA==',
    PREFIXE: process.env.PREFIX || "/",
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
    ETAT : process.env.PRESENCE || 'typing',
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
