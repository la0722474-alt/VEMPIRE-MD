const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HISSARI-BACHA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01ucm4vdDQ1aW0wQ3RFa20zRkVCYmp4VEVKV2RkUml3MHMyMUhzZEdWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGQ1Sk9EQ3ZZY01saC93QVJObFpOODk2ZzdPcGpTVDc2bFBXRGc3MlFpZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQ3EzKzBNWGhmMDc5Um04NEtkbE5JUUV2MVJqeHNpcVVSaFZaMzhpWjBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxbXFBNGxBMW41SWVVVjl5b3RXeGZ3b2l4eDBWRDlockJEWStLV1FJSmpzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLM1FkL09HenUyN2s5UWxGREcwU3hqa3JPZ1BIOU0xVGZKMDBEYzZQMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRZT0pOaGhvZG5jdXVPVTNLWnRhWTd5dngrQUd2dXM4QWk2SEE0VkYxVHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZsdVQ4M2FvVDY5Z002T3pIeDBaYUpwZFovczlnczkydy9aN1hwbEJIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2c4Q0ZGK3lla3BhQU5jLzFXZkxPRENHTUtFT0JUaTUwZy9OamQrbnUzTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNHTHhqVG9uRlRaZ2ovR0pTdm9ZamRyT255MGtUR2NtLy9wN2lFeDBweGJoS0JLbzdsTzdZeCtTUXh3aVBOSjdrWUJkVFJHRmJIWHFKMSt4bDNhNWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6IlpxNms1U1FmcE40RFdjcUxqUG9KWG5sUE91Y3NZaldIdUpOUUoxclgwTW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkFLQVRFSk5SIiwibWUiOnsiaWQiOiI5MjMxMzIwMDY2NTk6OTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCO4oCO4riU8J2QlfCdkIDwnZCM8J2Qj/CdkIjwnZCR8J2QhOK4lcKgwqDCoFxu4oCOwqDCoMKgwqBcbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI7wk4ap4oCO8J2Qg/CdkIDwnZCN8J2QhvCdkITwnZCR8J2QjvCdkJTwnZCS8JOGqsKgwqDCoFxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbuKAjlxu4oCOXG7igI5cbvCThqnigI7wnZCG8J2QiPCdkJHwnZCLIPCThqpcbuKAjiIsImxpZCI6IjM4MzU4NzU1OTgzOTY6OTZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWEwzdU1ERU5Ha3o4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjYmJVVXBsZDhSSmZsUWRoM2NJV1AwRG5Ba1haUUxqUEpXWlAyV2NlendnPSIsImFjY291bnRTaWduYXR1cmUiOiJsbXhxcFQxWmVFNzYwbm5aTncxZTNXQlo5bzhGdXI4ZUx6cW8yMHpKV2Z0MGVWemFwY1R2TzVLLzcyRTVBam1EcEc4NEY4aDNnZktmSVVyUUlqbW1BZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWXJRV0RvS3hqZC9aY3VxM2RPeHQ5NWZ1TmVZSXd5dEp3NHhtNitKTWtjaGs3dVE5S050cjkyTm42WXZSbEU2YnQ2ZG16Z1IvK0kyZG0xczcxNG1saGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzIwMDY2NTk6OTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEcyMUZLWlhmRVNYNVVIWWQzQ0ZqOUE1d0pGMlVDNHp5Vm1UOWxuSHM4SSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NjE1MjUyLCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY VEMPIRE-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/HLh6pdrC/IMG-20250819-WA0293.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "VEMPIRE-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "VEMPIRE-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923132006659",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "VEMPIRE-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© CREATER VEMPIRE-MD *",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/HLh6pdrC/IMG-20250819-WA0293.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY IM ALIVE NOW  *VEMPIRE-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923132006659",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
