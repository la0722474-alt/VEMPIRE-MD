const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lHUUZ6cGk5VW9lUGpOT3dScXZFVzZsa25ZL1NnOGVoNi9URVRXajNsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFlCYktIeWxjQVBNMC91bVRQVlpMK2R4UDFyQ05ndjZlejlMMzd1amdVST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRER0WXRBRjQva0gwYTdVejNOQS9xQ3lZSnN3amRCNFBKUW41cVl5MTJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIWTVBc2lJY3BWWWZMaTJEV1NaU2ZPWXk3T1RQdUovZEI4d2NQNzhwNUZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1HNGdQZ1hxSlJyZ0VDbW1nelV5R0JWSTlzNERIakNjQUpZT1lBVElCWFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxiSFVkQVJRbWlSd2FLWGphcFBLT0I5bUViV1Zpa2U5Tm16MTdnR2ZLM1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0ZQeGgvQld1MWU4bnZYNUZxZ2dVUE9ONmVjRnZKY3p3SHZlQW80Y08yUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0hWbXFpRFdkUDNRZ3dUYTQ5aDlHNTlZbk92aXMvSkN1cDJuZUxsdnpoUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJLZVZDdXFMTVRDamg1ZVk0Y2NLWjFiQU15QlRuUko5SjBRUkV5SWo2VlQ2eitGSzd6b0hUT0xDays5ajFCR2hmbEw1QjAxeWFxZlowZlNtYTVZNURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJjWnJ0WWpxNTl2OHlGaE93bXhTUENEZXRBbDVoczFYRmZSVGRkWUhRcjBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE0Mjg1NDIwN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzhDMDcxQzA5QTBBNDFFQkYxQzI4NThCMkNERUM2RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MzMyNDQ0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNDI4NTQyMDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNBMTY0QTBBNjQzQzYzODVGQTU1NkExNEVFNDE0QjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODMzMjQ0NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVEQ3NzZOTEQiLCJtZSI6eyJpZCI6IjkyMzE0Mjg1NDIwNzo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg4NjkwOTgyNzc3MDEyOjVAbGlkIiwibmFtZSI6Ik11emFtbWlsLU1E8J+YiCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjZzcnVBRkVKV011TVlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicDNNNk9GWm1jTlFQUVQ1RDlyNDZGVzVHRFVGZ2RTNm8xWVJLS3NvNGlDND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU0tGK3hodUQwUXdsWFZCbVQ3M2ZiVVY2ci9EZEhsMEJsR1lVMFk0eGZBYjQ0ekJlUVZwbW1XZ2hBMlVBWHc3TVR5WXFiNmw3ZThyNTUyaTNlWWpjRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImxraUlGM2R0SVI1NXNmdzRzMGwrMXBsUnlWeWRUN0dWVHpYbWtOTEpFMmVNa0NwV3dlL2Z3QTZSeHBIcjVWSHAzYTBZcU52YU1QL0lobnlGaFVLL0FRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTQyODU0MjA3OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWR6T2poV1puRFVEMEUrUS9hK09oVnVSZzFCWUhVdXFOV0VTaXJLT0lndSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4MzMyNDQyLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUN2cyJ9",
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
