const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA62WW4+iyhqG/0vd6iyB4mjSyeZQiHhCwePKuiihQEQLLEDFSf/3HdruzOzMWr16J+MVQXjr+U7vx3dA87QkI9KA/ndQsPSKK9JeVk1BQB8YdRwTBrogwhUGfeCPJCiv0UxGctYk++OFCo4iQpyPVChf9Mzzp7UgjGcLYf4CXrugqPenNPxE0HZiAw/SROXUbDK0D/ZEV2yXhyVyOtMjmhBr3lOX472SJS/gtVXEKUtpgooDOROGTyPSeDhlX8Mn0+PFYYM4lbRhPn1c3J7L3ABXwmrMVhK5XteaWRSLXF0lX8PfuOurj7z8greWGPBn6AX5pdnF18gbkbsyjw+c652Xx8DinvhlmlASDSNCq7Rqvpx3wRitbp7HFDqwT0LWwZpYcndDzHipUkblQ9pGhzGeyBByXwPPlWT20Mu8N0vhhItydJ5qh7J3wftBvIivl5s2odfrMjjf1Z/BPfbRK9n/k/eR7nGmNImaQlLhdLy01heJ8ZaVzhWH7uYTVx4e9Gbi5xz6Gv4Qche7I0qDWYjupzjym7GbTQIjC6A93bO1tkcOzAK4Xm9/4OOqZp9Rni4tnsttVEvsENysHdbLblmnjCg9rIgTLhayIyazYyxtAoct6k2ZepmRjSYTF3fmMpUCuJs64hVdBx722KbYybr+8hZRRpphBPr8axcwkqRlxXCV5vTtHuwCHF19EjJSvWUXOI5vPtzh4r6MDiN/FzZoOdiKvYiNOshwVjN5l/SOd62A+fAFdEHB8pCUJYmctKxy1kxIWeKElKD/51uh2pgZOecVcdOo7SZJVHhVhZIG4X/KP24HXJW4KP6gpAJdELP8PCGgX7GadMHbC1DSdUnTIBIQb9oq0hDPIwRlBBVBsTSxjfD8PDRIz6Ss8LkAfV4RRZFTNF597f4eDtsyNF3mTMjrSOSQZaoCZyHZlizDVFWIPucQuN/FIYuciVTN4nlBEEzOlkxNsTlkQEGzLKgpn3OIyu/iUE1N5aFsK5rN8VAVRAFynAGRDJHNSwh+ziFJv4vD4m2kWQaUbNtGgmbovIUMBEXNsGWV541/5firCyi5V097aYcC8l0Qp6yslrQuTjmOPrzn408chnlNK7+hodleEAb6P90mVZXSpGwjqylm4SG9ErONA/RjfCrJaxdE5JqGpNUD1FzsYnoc+3qDp2PxMaU3w9PbyTrk9PlILHF7Xua1bwLm5G9iKMbf9hJUv8mytsdEJBGPFdCm4+ns7Tv/aDTInzkd3t/IDLlQywOt42fJmG/CRn8zi6dDEEaijyzvcZjVRZBnhH5mYNzmcLQW66TjKyLejXDvcDSW5qPG4k+6T+cB/e8/tqmZR62eyfuK7swF0FarPeeXbujL/K8NQXH7NFjSjOY32h70XoVWIiIVTk9lq+6Ob3WJDDS9YImpg4GOEt1M2jR/VO3DpJ8uSESD1+lYppP5lo09kXNX2g0n5/y0XWlTvbJXIiHXRccz85e/EQF9wFaX1UPnRpTkR+XBFx0lO7oP7AhpLx9ukvNuvlQEYYEtljTu8BaEu9gc+o62e4gNtuzAyXq7kaysl4NLzQ+Ws9vk8LBaR//onv85jAb1cre858K5Seg95ML4Ltqp6E3pamsUsccmq121G9dLee/H24K7pPNa0tQKnapmWiXxcD8/rDxReJTqSmnGVnzamvPn+nhbX6f3z4b03dmfvRan5G0Lv1fhX6v1o+251+5PGu97/R9ay9jUejR3m07xQINR8+hMzVUcDnL34q7tOJiPFyviUMbFx9sFvLbzXJxwFefsDPoA04jlaQS64ITLSv8xuX+3LIQuODd6UfgVrj4GHujtb3DqgNf/AoryIvCyCgAA',
    PREFIXE: process.env.PREFIX || "#",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254748387615",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    AUTO_REACT: process.env.AUTO_REACTION || "no",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://chat.whatsapp.com/FRgA7K9RSemDbbTuLGEOik",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "⚔️, 👿, 🌎, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "EMINEM-MD active 24/7",
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
    CAPTION : process.env.CAPTION || "EMINEM-MD",
    BOT : process.env.BOT_NAME || 'EMINEM_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
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
