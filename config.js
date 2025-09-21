const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0F1VXVvNWZMTy9mZHZmQTF2dHBHeUpwNlB5eDZWVjZzZjk1dHFRbEpIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEJ4OXNnOHZKd2F6VXpOM0tEU1lOVlRzTGsySzNoYS9VcU9ia1Fkd1ZpUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRWIvQlVMQm0zeDlLSkQxTmhNUEVtMW9DVHA4MGRxVVZ6Z2RiL3V3Wms4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUdFBaa3k1bm9QVnNCck1kWXFlMWs1VW8rM1JJbCt5VmV4L092UjIveFdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJaEZyV2F4bEpMZTd4RUg5VWFjQVpuVmoxajlTaVJhdzRnUVBXZUxxbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtmT09XMUluUEVmNEFyNWFSUGZsR25YTGpid3FWb0plZDdVc0NWc2toeEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEphTzZ6TFkxc2xjTXA3aVRmTHd4YjNvbXBFSEVwOVBjSThTUmtwQ0lGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSm10aE0yN3YwdHliVXA0VEhoYkx0ZWRQWDZ2bVZ1TFdBamo5NXl2QktWaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV4MExMbWNPSmI5N3dMaFdYZUxFQk9jZkM4ZkF2UUp0N01FaURESTZpMGpsV3hoWmROVGtza1MvQno3QlNmTUVoMC9aS0VvbzhET3hHc3lPK21SZWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IldJMmhwMTR2OXhHK3RuME9ySmxtZFYwUDlkRm1jOUhpdCtabENuc2ptcEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTk4NzMyMDc0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQwOUYwOTgzNTBCM0MwRTdGMkFDNEMyODUyNTlFNERBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTg0NjQ0NjB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5ODczMjA3NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCRjIwN0IyMjhFNzA4MDBFOThBOEExOTJCQUM2MDM0RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4NDY0NDYxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJISktSM0sxUCIsIm1lIjp7ImlkIjoiOTIzMTk4NzMyMDc0OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoicHJvZmVzc29yIiwibGlkIjoiMjM3NjY2OTQ3ODY2NzQ1OjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQUzAwRDhReFpQQXhnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoU3BuMjM5QWYzaHc0RytVTHJVZEl1MU4xVTN6RUd3RzdTVVd5c1ZtMmlrPSIsImFjY291bnRTaWduYXR1cmUiOiJuTkVwY2dNajNYVE9yZHIzK3FHZytTdnRzSXhjdEFmZXFSM3JYWXpBQ1JOQ0xtV2xFMVJBZCtBN3RmZHJ4NkpnYStoZXdseFB4aUpqeHp4dURwNDlEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSmhVMEdmSEJiU0VUc3JFa2lidTVRTmhCSlhkVGVzcXhwanM1TnRiV0x6K2czYnI1YlRGMFY0Uk9ud2N3YVVNdEFlaUovSEhZWVJUU0RzSmU3RWx1Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxOTg3MzIwNzQ6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZVXFaOXQvUUg5NGNPQnZsQzYxSFNMdFRkVk44eEJzQnUwbEZzckZadG9wIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg0NjQ0NTcsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBNEIifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yr0xau.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923132006659",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗 Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yr0xau.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗*🇵🇰",
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
AUTO_TYPING: process.env.AUTO_TYPING || "false",
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
