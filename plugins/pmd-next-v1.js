(function (_0x13dbae, _0x43e02b) {
  const _0x29b082 = _0x13dbae();
  while (true) {
    try {
      const _0x1bea88 = -parseInt(_0x238c(540, 'DfY4')) / 1 + parseInt(_0x238c(742, ']dti')) / 2 * (-parseInt(_0x238c(2882, 'a2SO')) / 3) + -parseInt(_0x238c(3098, 'tHs[')) / 4 + -parseInt(_0x238c(761, 'r@rX')) / 5 + parseInt(_0x238c(1120, 'zL#k')) / 6 + -parseInt(_0x238c(2242, 'dmZP')) / 7 + -parseInt(_0x238c(1779, '7vXa')) / 8 * (-parseInt(_0x238c(4159, 'zu(Z')) / 9);
      if (_0x1bea88 === _0x43e02b) {
        break;
      } else {
        _0x29b082.push(_0x29b082.shift());
      }
    } catch (_0x1db0ec) {
      _0x29b082.push(_0x29b082.shift());
    }
  }
})(_0x481a, 601945);
const _0x4a9da6 = function () {
  let _0x5d2205 = true;
  return function (_0x539c52, _0x52ad0f) {
    const _0x49fc88 = _0x5d2205 ? function () {
      if (_0x52ad0f) {
        const _0x403c0e = _0x52ad0f.apply(_0x539c52, arguments);
        _0x52ad0f = null;
        return _0x403c0e;
      }
    } : function () {};
    _0x5d2205 = false;
    return _0x49fc88;
  };
}();
const _0x40a85b = _0x4a9da6(this, function () {
  return _0x40a85b.toString().search("(((.+)+)+)+$").toString().constructor(_0x40a85b).search("(((.+)+)+)+$");
});
_0x40a85b();
const _0xa90d15 = function () {
  let _0x3e2f22 = true;
  return function (_0x12b08a, _0xe9bd5e) {
    const _0x16055c = _0x3e2f22 ? function () {
      if (_0xe9bd5e) {
        const _0x1b0f05 = _0xe9bd5e.apply(_0x12b08a, arguments);
        _0xe9bd5e = null;
        return _0x1b0f05;
      }
    } : function () {};
    _0x3e2f22 = false;
    return _0x16055c;
  };
}();
(function () {
  _0xa90d15(this, function () {
    const _0x1462b1 = {
      LFgiC: "PRABATH-MD"
    };
    _0x1462b1.yYqek = " • ᴘʀᴀʙᴀᴛʜ-ᴍᴅ • ";
    const _0x249497 = new RegExp("function *\\( *\\)");
    const _0x30b9aa = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x419026 = _0x16c8f3("init");
    if (!_0x249497.test(_0x419026 + "chain") || !_0x30b9aa.test(_0x419026 + "input")) {
      _0x419026('0');
    } else {
      _0x16c8f3();
    }
  })();
})();
import '../lib/systemRenderApi.js';
import '@whiskeysockets/baileys';
import _0x408d3e from 'node-fetch';
import * as _0x438f12 from '../lib/apkdl.js';
import { ec, typing } from '../lib/ec.js';
import { imgurl } from '../lib/img2url.js';
import '../lib/readOwnerData.js';
import { readConfig } from '../lib/check.js';
import _0x55ee9d from '../lib/LANG.js';
import { cmd } from '../command.js';
import { getFileSize, fetchJson, sleep } from '../lib/functions.js';
import { fileURLToPath } from 'url';
import 'path';
import 'path';
const __filename = fileURLToPath(import.meta.url);
import _0x298d66 from 'axios';
import * as _0x54304c from 'cheerio';
async function bf(_0x1a85ae) {
  try {
    const _0xe79a66 = await readConfig(_0x1a85ae);
    const _0x292602 = {
      botName: _0xe79a66.BOT_NAME,
      footer: _0xe79a66.BOT_FOOTER
    };
    return _0x292602;
  } catch (_0x4837bc) {
    const _0x196baf = {
      botName: "PRABATH-MD",
      footer: " • ᴘʀᴀʙᴀᴛʜ-ᴍᴅ • "
    };
    return _0x196baf;
  }
}
const _0x33fa4b = {
  pattern: "pair",
  alias: ["paircode", "requestpair"],
  desc: "request pair code for create bot",
  category: "main",
  use: "<requestpair>",
  filename: __filename
};
cmd(_0x33fa4b, async (_0x51615a, _0x24fe24, _0x194ea1, {
  from: _0x1edb11,
  l: _0x3c2e72,
  quoted: _0xc9db95,
  body: _0x112ca4,
  isCmd: _0x567b9d,
  command: _0x589e5f,
  args: _0x3a464f,
  q: _0x1c93be,
  isGroup: _0x34cd60,
  sender: _0x407a59,
  senderNumber: _0x330e51,
  botNumber2: _0x4195d5,
  botNumber: _0x185f70,
  pushname: _0x449408,
  isMe: _0x2040a6,
  isOwner: _0x3697af,
  groupMetadata: _0x1686ec,
  groupName: _0x4e322f,
  participants: _0x4b9c2e,
  groupAdmins: _0x5b5282,
  isBotAdmins: _0x2e9e83,
  isAdmins: _0x283ac1,
  reply: _0x259082
}) => {
  try {
    await typing(_0x51615a, readConfig, _0x1edb11);
    let _0x5c1882;
    if (_0x1c93be) {
      _0x5c1882 = _0x1c93be.replace(/[^0-9]/g, '');
    } else {
      if (_0x194ea1.quoted && _0x194ea1.key.remoteJid) {
        _0x5c1882 = _0x194ea1.key.remoteJid.split('@')[0];
      } else {
        _0x5c1882 = _0x330e51;
      }
    }
    const _0x591053 = "https://prabath-md-pair-web-v2-slk.koyeb.app/code?number=" + _0x5c1882;
    const {
      data: _0x206fd4
    } = await _0x298d66.get(_0x591053);
    await _0x259082("This is your pair code.\n\n\t*PAIR-CODE:* " + _0x206fd4.code + "\n\n*Request:* " + _0x5c1882);
    setTimeout(() => {
      const _0x117ce4 = {
        iunZr: "play"
      };
      _0x117ce4.fFRAq = "wmplay";
      _0x259082("⏱️ *Pairing code request timed out*");
    }, 120000);
  } catch (_0x43a00a) {
    console.error("Pair Code Generation Error:", _0x43a00a);
    _0x259082("❌ *Error generating pair code. Please try again later or go to official website: prabathmd-official.vercel.app* ");
  }
});
const _0x54c2d8 = {
  pattern: "mathstep",
  desc: "Get step-by-step solutions for math problems.",
  category: "mathtool",
  use: ".mathstep <equation>",
  filename: __filename
};
cmd(_0x54c2d8, async (_0x169fcb, _0x252fc8, _0x56a1b0, {
  from: _0x479723,
  q: _0x2f75f3,
  reply: _0x582d14
}) => {
  try {
    if (!_0x2f75f3) {
      return _0x582d14("❌ *Please provide a math equation to solve.*");
    }
    await typing(_0x169fcb, readConfig, _0x479723);
    const _0x4a92dd = encodeURIComponent(_0x2f75f3);
    const _0x5e5b51 = "https://mathsolver.microsoft.com/en/solve-problem/" + _0x4a92dd;
    const _0x253c01 = await _0x298d66.get(_0x5e5b51);
    const _0x38c4e4 = _0x253c01.data;
    const _0x38facc = _0x54304c.load(_0x38c4e4);
    let _0x37bdc0 = '';
    _0x38facc(".Step_step__B9mau").each((_0x46a50e, _0x44ef26) => {
      const _0x2b671f = _0x38facc(_0x44ef26).find(".Step_stepExpression__99EXI.Step_stepStart__TFXZC > .hidden").text().trim().replace(/\\left|\\right/g, '');
      const _0x808c41 = _0x38facc(_0x44ef26).find(".Step_stepPreviewContent__scxab .hidden").text().trim().replace(/\\left|\\right/g, '');
      _0x37bdc0 += "\n*Step " + (_0x46a50e + 1) + ":*\n\n" + _0x2b671f + "\n\n" + _0x808c41 + "\n";
    });
    const _0x32f71f = _0x38facc(".Answer_resultsAnswer__alKN5 > .hidden").map((_0x235b9a, _0x5cafc7) => _0x38facc(_0x5cafc7).text().trim().replace(/\\left|\\right/g, '')).get().join(" , ");
    const _0x3f30f2 = _0x38facc(".Answer_card__M9PzT.Answer_m__PN_fJ > .Answer_cardHeader__SMoDC").text().trim();
    if (!_0x32f71f) {
      return _0x582d14("We can't solve that type of equation or it may contain an error.");
    }
    const _0x3e8856 = _0x2f75f3 + "\n\n*Result :* " + _0x32f71f + "\n\n*" + _0x3f30f2 + "*\n" + _0x37bdc0;
    _0x582d14(_0x3e8856);
  } catch (_0x3c7096) {
    console.error(_0x3c7096);
    _0x582d14("An error occurred while trying to solve the equation.");
  }
});
const _0x2ce350 = {
  pattern: "math",
  desc: "Solve a math equation.",
  category: "mathtool",
  use: ".math <equation>",
  filename: __filename
};
cmd(_0x2ce350, async (_0x3fcc76, _0x4e41e1, _0x21fdcd, {
  from: _0x5e614b,
  q: _0x43d9ce,
  reply: _0x478882
}) => {
  try {
    if (!_0x43d9ce) {
      return _0x478882("❌ *Please provide a math equation to solve.*");
    }
    await typing(_0x3fcc76, readConfig, _0x5e614b);
    const _0x562961 = encodeURIComponent(_0x43d9ce);
    const _0x389032 = "https://mathsolver.microsoft.com/en/solve-problem/" + _0x562961;
    const _0x366669 = await _0x298d66.get(_0x389032);
    const _0x140aff = _0x366669.data;
    const _0x4307c7 = _0x54304c.load(_0x140aff);
    const _0x356460 = _0x4307c7(".Answer_resultsAnswer__alKN5 > .hidden").map((_0x2cc351, _0x4290a8) => _0x4307c7(_0x4290a8).text().trim()).get().join(" , ");
    const _0x21d3d1 = _0x4307c7(".Answer_card__M9PzT.Answer_m__PN_fJ > .Answer_cardHeader__SMoDC").text().trim();
    const _0x5b2ba6 = _0x4307c7(".Step_stepExpression__99EXI.Step_stepStart__TFXZC > .hidden").map((_0x3f3ede, _0x302957) => _0x4307c7(_0x302957).text().trim().replace(/\\left|\\right/g, '')).get().join("\n\n");
    if (!_0x356460) {
      return _0x478882("We can't solve that type of equation or it may contain an error.");
    }
    _0x478882(_0x43d9ce + "\n\n*Result :* " + _0x356460 + "\n\n*" + _0x21d3d1 + "*\n\n*Steps :*\n\n" + _0x5b2ba6);
  } catch (_0x4085da) {
    console.error(_0x4085da);
    _0x478882("An error occurred while trying to solve the equation.");
  }
});
const _0x20f69e = {
  pattern: "getpp",
  alias: ["downpp", "gpp", "getprofile", "dpp"]
};
function _0x54f956(_0x5014e2, _0x17461f, _0x6baa8d, _0x36e941, _0x246374) {
  return _0x238c(_0x246374 - 0x15a, _0x17461f);
}
_0x20f69e.desc = "download pp";
_0x20f69e.category = "owner";
_0x20f69e.use = ".dpp <number | reply | mention>";
_0x20f69e.filename = __filename;
cmd(_0x20f69e, async (_0xb08943, _0x10a83a, _0x13edc0, {
  from: _0x47108b,
  q: _0x512d6c,
  isOwner: _0x5474c0,
  reply: _0x28d5b1,
  botNumber2: _0x554857
}) => {
  try {
    await typing(_0xb08943, readConfig, _0x47108b);
    const {
      botName: _0x553c6c,
      footer: _0x4dd7bd
    } = await bf(_0x554857);
    if (!_0x5474c0) {
      const _0x512630 = await readConfig(_0x554857);
      const _0x3821ed = _0x512630.LANG;
      const _0xe76981 = {
        text: _0x55ee9d[_0x3821ed].data.isOwner
      };
      const _0x5f050a = {
        quoted: _0x10a83a
      };
      const _0x2aac8c = await _0xb08943.sendMessage(_0x47108b, _0xe76981, _0x5f050a);
      const _0x44f8a0 = {
        text: _0x55ee9d.reacts.owner,
        key: _0x2aac8c.key
      };
      const _0x50d141 = {
        react: _0x44f8a0
      };
      return await _0xb08943.sendMessage(_0x47108b, _0x50d141);
    }
    let _0x3b3e72;
    if (_0x13edc0.mentionedJid && _0x13edc0.mentionedJid[0]) {
      _0x3b3e72 = _0x13edc0.mentionedJid[0];
    } else {
      if (_0x13edc0.quoted) {
        _0x3b3e72 = _0x13edc0.quoted.sender;
      } else {
        if (_0x512d6c) {
          let _0x344124 = _0x512d6c.replace(/[^0-9@.a-zA-Z-]/g, '');
          if (_0x344124.includes("@s.whatsapp.net") || _0x344124.includes("@g.us") || _0x344124.includes("@newsletter")) {
            _0x3b3e72 = _0x344124;
          } else {
            _0x3b3e72 = _0x344124 + "@s.whatsapp.net";
          }
        } else {
          _0x3b3e72 = _0x47108b;
        }
      }
    }
    try {
      var _0x1fcb2f = await _0xb08943.profilePictureUrl(_0x3b3e72, "image");
    } catch (_0x5ebd93) {
      return _0x28d5b1("🚫 *Profile picture not found!* \n(Either the user has no profile photo, or it is privacy restricted).");
    }
    const _0x5f460f = {
      url: _0x1fcb2f
    };
    const _0x49315b = {
      image: _0x5f460f,
      caption: _0x4dd7bd
    };
    const _0x55602a = {
      quoted: _0x10a83a
    };
    return await _0xb08943.sendMessage(_0x47108b, _0x49315b, _0x55602a);
  } catch (_0x5ea4b7) {
    console.error(_0x5ea4b7);
    _0x28d5b1("❌ An error occurred while fetching the profile picture.");
  }
});
const _0x452b87 = {
  pattern: "logo",
  alias: ["ephoto360"],
  desc: "create logo",
  category: "main",
  use: ".logo hi",
  filename: __filename
};
cmd(_0x452b87, async (_0x47230b, _0x1cb56b, _0x22e4fc, {
  from: _0x11692e,
  q: _0x3b28cc,
  reply: _0x211018,
  botNumber2: _0x43ce0e
}) => {
  await typing(_0x47230b, readConfig, _0x11692e);
  const {
    botName: _0x5595f2,
    footer: _0x3b7e9c
  } = await bf(_0x43ce0e);
  if (!_0x3b28cc && _0x22e4fc.quoted && _0x22e4fc.quoted.msg) {
    _0x3b28cc = _0x22e4fc.quoted.msg;
  } else {
    if (!_0x3b28cc) {
      const _0x457969 = await readConfig(_0x43ce0e);
      const _0x1f4ed5 = _0x457969.LANG;
      const _0x115b09 = {
        text: _0x55ee9d[_0x1f4ed5].logoq
      };
      const _0x4ea482 = {
        quoted: _0x1cb56b
      };
      const _0x449d41 = await _0x47230b.sendMessage(_0x11692e, _0x115b09, _0x4ea482);
      const _0x5e9e13 = {
        text: _0x55ee9d.reacts.Notq,
        key: _0x449d41.key
      };
      const _0x3c4c2d = {
        react: _0x5e9e13
      };
      return await _0x47230b.sendMessage(_0x11692e, _0x3c4c2d);
    }
  }
  let _0x1c6bed = await fetchJson("https://prabath-api-scrappers.vercel.app/api/textlogosearch");
  let _0x38d3f2 = _0x1c6bed.data.map((_0x192a24, _0x11dec3) => '*' + (_0x11dec3 + 1) + ".* " + _0x192a24.title).join("\n\n");
  let _0x1b83b2 = "🎆 *" + _0x5595f2 + " LOGO MENU* 🎆\n\n" + '`' + "Total logo:" + '`' + " " + _0x1c6bed.data.length + "\n\n" + '`' + "Text:" + '`' + " " + _0x3b28cc + "\n\n" + _0x38d3f2;
  _0x211018(_0x1b83b2);
});
const _0x446fac = {
  pattern: "edit",
  alias: ["editimage"],
  desc: "create logo from image",
  category: "main",
  use: ".edit",
  filename: __filename
};
cmd(_0x446fac, async (_0x4c9a9b, _0x5081c9, _0x2e2977, {
  from: _0x32b2de,
  reply: _0x3c6934,
  botNumber2: _0x418a96
}) => {
  await typing(_0x4c9a9b, readConfig, _0x32b2de);
  const {
    botName: _0x441aba,
    footer: _0x201f75
  } = await bf(_0x418a96);
  if (_0x2e2977.type === "imageMessage" || _0x2e2977.quoted && _0x2e2977.quoted.type === "imageMessage") {
    let _0x5113ab = _0x2e2977.quoted ? await _0x2e2977.quoted.download() : await _0x2e2977.download();
    let _0x3dfed7 = await imgurl(_0x5113ab);
    let _0x5b0a82 = await fetchJson("https://prabath-api-scrappers.vercel.app/api/imglogosearch");
    let _0x149ead = _0x5b0a82.data.map((_0xb94429, _0x5e5500) => '*' + (_0x5e5500 + 1) + ".* " + _0xb94429.title).join("\n\n");
    let _0x24deb4 = "🎆 *" + _0x441aba + " IMG EDIT MENU* 🎆\n\n" + '`' + "Total logo styles:" + '`' + " " + _0x5b0a82.data.length + "\n\n" + '`' + "img:" + '`' + " " + _0x3dfed7 + "\n\n" + _0x149ead;
    _0x3c6934(_0x24deb4);
  } else {
    const _0x5ed0f8 = await readConfig(_0x418a96);
    const _0x2b4c59 = _0x5ed0f8.LANG;
    const _0x55ac85 = {
      text: _0x55ee9d[_0x2b4c59].removebgq
    };
    const _0x23c6ff = {
      quoted: _0x5081c9
    };
    const _0x258ba7 = await _0x4c9a9b.sendMessage(_0x32b2de, _0x55ac85, _0x23c6ff);
    const _0x14bd59 = {
      text: '❓',
      key: _0x258ba7.key
    };
    const _0x58c442 = {
      react: _0x14bd59
    };
    return await _0x4c9a9b.sendMessage(_0x32b2de, _0x58c442);
  }
});
function getMenuText(_0x42c773, _0x279240) {
  const _0x272f7f = _0x42c773.split("\n");
  const _0x19f677 = new RegExp("^\\*" + _0x279240 + "\\.\\*\\s(.+)$");
  const _0x2b64a9 = _0x272f7f.find(_0x2b98cb => _0x19f677.test(_0x2b98cb));
  return _0x2b64a9 ? _0x2b64a9.match(_0x19f677)[1] : null;
}
const _0x6ec72f = {
  on: "body"
};
cmd(_0x6ec72f, async (_0x31c239, _0x574ece, _0x4d7d95, {
  from: _0x21ef18,
  body: _0x4b456d,
  botNumber2: _0x29a816
}) => {
  if (!_0x4d7d95.quoted || _0x4d7d95.quoted.sender !== _0x29a816 || !_0x4d7d95.quoted.msg || typeof _0x4d7d95.quoted.msg !== "string") {
    return;
  }
  const {
    botName: _0x4d812a,
    footer: _0x1c3df7
  } = await bf(_0x29a816);
  const _0x6adcd7 = _0x4d7d95.quoted.msg;
  if (_0x6adcd7.includes('*' + _0x4d812a + " LOGO MENU*")) {
    const _0x5e0145 = parseInt(_0x4b456d.trim());
    if (isNaN(_0x5e0145)) {
      return;
    }
    const _0x37712b = {
      text: '🔄',
      key: _0x574ece.key
    };
    const _0x433b68 = {
      react: _0x37712b
    };
    await _0x31c239.sendMessage(_0x21ef18, _0x433b68);
    const _0x39070 = getMenuText(_0x6adcd7, _0x5e0145);
    if (_0x39070) {
      let _0x3151f3 = await fetchJson("https://prabath-api-scrappers.vercel.app/api/textlogosearch");
      const _0x776a9c = _0x3151f3.data.find(_0x5a940a => _0x5a940a.title === _0x39070);
      if (!_0x776a9c) {
        return;
      }
      const _0x5e4538 = _0x4d7d95.quoted.msg.match(/Text:`\s*(.+)/);
      const _0x987c15 = _0x5e4538 ? _0x5e4538[1].trim() : null;
      if (!_0x987c15) {
        return;
      }
      let _0x8bad89 = await fetchJson("https://prabath-api-scrappers.vercel.app/api/logomade?url=" + _0x776a9c.link + "&text=" + _0x987c15 + "&text2=" + _0x987c15 + "&tt=true");
      const _0x3efa88 = {
        text: '⬆️',
        key: _0x574ece.key
      };
      const _0x5818a9 = {
        react: _0x3efa88
      };
      await _0x31c239.sendMessage(_0x21ef18, _0x5818a9);
      const _0x5429ad = {
        url: _0x8bad89.data.image
      };
      const _0x2fd6b1 = {
        image: _0x5429ad,
        caption: "`" + _0x39070 + '`' + "\n\n" + _0x1c3df7
      };
      const _0x3e42f0 = {
        quoted: _0x574ece
      };
      await _0x31c239.sendMessage(_0x21ef18, _0x2fd6b1, _0x3e42f0);
      const _0x515d60 = {
        text: '✔️',
        key: _0x574ece.key
      };
      const _0x17c6a4 = {
        react: _0x515d60
      };
      return await _0x31c239.sendMessage(_0x21ef18, _0x17c6a4);
    }
  }
});
const _0x42d00b = {};
function _0x567162(_0x5e4907, _0x39029f, _0x4d3813, _0xbeb604, _0x40fbb7) {
  return _0x238c(_0x39029f + 0x2f0, _0x4d3813);
}
_0x42d00b.on = "body";
cmd(_0x42d00b, async (_0x4b19cc, _0xc087cc, _0x36cd2e, {
  from: _0x9e8e5c,
  body: _0x1e17e3,
  botNumber2: _0x4119a8
}) => {
  if (!_0x36cd2e.quoted || _0x36cd2e.quoted.sender !== _0x4119a8 || !_0x36cd2e.quoted.msg || typeof _0x36cd2e.quoted.msg !== "string") {
    return;
  }
  const {
    botName: _0x46b2b5,
    footer: _0x1ff0e1
  } = await bf(_0x4119a8);
  const _0x193a69 = _0x36cd2e.quoted.msg;
  if (_0x193a69.includes('*' + _0x46b2b5 + " IMG EDIT MENU*")) {
    const _0x2fb6ef = parseInt(_0x1e17e3.trim());
    if (isNaN(_0x2fb6ef)) {
      return;
    }
    const _0x24f2f5 = {
      text: '🔄',
      key: _0xc087cc.key
    };
    const _0x1a4d92 = {
      react: _0x24f2f5
    };
    await _0x4b19cc.sendMessage(_0x9e8e5c, _0x1a4d92);
    const _0xe61af6 = getMenuText(_0x193a69, _0x2fb6ef);
    if (_0xe61af6) {
      let _0x4bae3b = await fetchJson("https://prabath-api-scrappers.vercel.app/api/imglogosearch");
      const _0x962176 = _0x4bae3b.data.find(_0x5e639e => _0x5e639e.title === _0xe61af6);
      if (!_0x962176) {
        return;
      }
      const _0x36d833 = _0x36cd2e.quoted.msg.match(/img:`\s*(.+)/);
      const _0xab9cd8 = _0x36d833 ? _0x36d833[1].trim() : null;
      if (!_0xab9cd8) {
        return;
      }
      let _0x4b4dc4 = await fetchJson("https://prabath-ytdl-scrapper.koyeb.app/api/madeimg?pageurl=" + _0x962176.link + "&imgurl=" + _0xab9cd8);
      const _0x47055f = {
        text: '⬆️',
        key: _0xc087cc.key
      };
      const _0x21136a = {
        react: _0x47055f
      };
      await _0x4b19cc.sendMessage(_0x9e8e5c, _0x21136a);
      if (_0x4b4dc4.data.image.endsWith(".mp4")) {
        const _0x31f053 = {
          url: _0x4b4dc4.data.image
        };
        const _0x4e13f3 = {
          video: _0x31f053,
          caption: "`" + _0xe61af6 + '`' + "\n\n" + _0x1ff0e1,
          gifPlayback: true,
          ptv: false
        };
        await _0x4b19cc.sendMessage(_0x9e8e5c, _0x4e13f3);
      } else {
        const _0x51f830 = {
          url: _0x4b4dc4.data.image
        };
        const _0x183f32 = {
          image: _0x51f830,
          caption: "`" + _0xe61af6 + '`' + "\n\n" + _0x1ff0e1
        };
        const _0x19b9b7 = {
          quoted: _0xc087cc
        };
        await _0x4b19cc.sendMessage(_0x9e8e5c, _0x183f32, _0x19b9b7);
      }
      const _0x38f30d = {
        text: '✔️',
        key: _0xc087cc.key
      };
      const _0x2b54b7 = {
        react: _0x38f30d
      };
      return await _0x4b19cc.sendMessage(_0x9e8e5c, _0x2b54b7);
    }
  }
});
const _0x59effd = {
  pattern: "tgvideo",
  alias: ["televideo"],
  desc: "download telegram videos",
  category: "download",
  use: ".tgvideo url",
  filename: __filename
};
cmd(_0x59effd, async (_0x4faad0, _0x115b1d, _0x4ef6c1, {
  from: _0x39f514,
  q: _0x2b185b,
  botNumber2: _0x21dc68,
  reply: _0x470437
}) => {
  try {
    const {
      botName: _0x4874f1,
      footer: _0x4ae1d0
    } = await bf(_0x21dc68);
    await typing(_0x4faad0, readConfig, _0x39f514);
    if (!_0x2b185b && _0x4ef6c1.quoted && _0x4ef6c1.quoted.msg) {
      _0x2b185b = _0x4ef6c1.quoted.msg;
    } else {
      if (!_0x2b185b) {
        return _0x470437("❌ *Please provide the Telegram video link.*");
      }
    }
    const _0x59bd5e = {
      text: '⬇️',
      key: _0x115b1d.key
    };
    const _0x1df593 = {
      react: _0x59bd5e
    };
    await _0x4faad0.sendMessage(_0x39f514, _0x1df593);
    let _0x33fe0f = await fetchJson("https://prabath-api-scrappers.vercel.app/api/tgvideo?url=" + _0x2b185b);
    const _0x288b15 = await getFileSize(_0x33fe0f.data.dl_link);
    let _0x2cf1d5 = 0;
    if (_0x288b15.includes('GB')) {
      _0x2cf1d5 = parseFloat(_0x288b15) * 1024;
    } else {
      if (_0x288b15.includes('MB')) {
        _0x2cf1d5 = parseFloat(_0x288b15);
      }
    }
    const _0x3949e0 = await readConfig(_0x21dc68);
    if (_0x2cf1d5 >= _0x3949e0.MAX_SIZE) {
      const _0xd7d5d6 = {
        text: _0x55ee9d[_0x3949e0.LANG].maxsize
      };
      const _0x3de280 = {
        quoted: _0x115b1d
      };
      const _0xd791ff = await _0x4faad0.sendMessage(_0x39f514, _0xd7d5d6, _0x3de280);
      const _0x1101da = {
        text: _0x55ee9d.reacts.err,
        key: _0xd791ff.key
      };
      const _0x5c8b3d = {
        react: _0x1101da
      };
      return await _0x4faad0.sendMessage(_0x39f514, _0x5c8b3d);
    }
    const _0x37e6f9 = {
      text: '⬆️',
      key: _0x115b1d.key
    };
    const _0x36569d = {
      react: _0x37e6f9
    };
    await _0x4faad0.sendMessage(_0x39f514, _0x36569d);
    const _0x3de327 = {
      'mimetype': "video/mp4",
      'fileName': _0x33fe0f.data.title + ".mp4",
      'caption': _0x4ae1d0
    };
    if (_0x2cf1d5 < 90) {
      const _0x58523d = {
        url: _0x33fe0f.data.dl_link
      };
      const _0x218bb1 = {
        'video': _0x58523d,
        ..._0x3de327
      };
      const _0x55afeb = {
        quoted: _0x115b1d
      };
      await _0x4faad0.sendMessage(_0x39f514, _0x218bb1, _0x55afeb);
    } else {
      const _0x19a9fb = {
        url: _0x33fe0f.data.dl_link
      };
      const _0x1f4d4d = {
        'document': _0x19a9fb,
        ..._0x3de327
      };
      const _0x2e1cea = {
        quoted: _0x115b1d
      };
      await _0x4faad0.sendMessage(_0x39f514, _0x1f4d4d, _0x2e1cea);
    }
    const _0x2240e3 = {
      text: '✔️',
      key: _0x115b1d.key
    };
    const _0x5c8cc1 = {
      react: _0x2240e3
    };
    return await _0x4faad0.sendMessage(_0x39f514, _0x5c8cc1);
  } catch (_0x5cb25a) {
    await ec(_0x5cb25a, _0x4faad0, _0x21dc68, _0x115b1d, readConfig, _0x55ee9d, _0x39f514);
  }
});
(function () {
  let _0x49d348;
  try {
    const _0x40ed7a = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x49d348 = _0x40ed7a();
  } catch (_0x1b2733) {
    _0x49d348 = window;
  }
  _0x49d348.setInterval(_0x16c8f3, 4000);
})();
const _0x2964d3 = {
  pattern: "tiktoksearch",
  alias: ["ttsearch"]
};
function _0x1faeeb(_0x101de2, _0x2b5bb2, _0x4cec89, _0x1cab9c, _0x5d8281) {
  return _0x238c(_0x101de2 + 0x151, _0x2b5bb2);
}
_0x2964d3.desc = "search tiktok videos";
_0x2964d3.category = "search";
_0x2964d3.use = ".ttsearch cat";
_0x2964d3.filename = __filename;
cmd(_0x2964d3, async (_0x5df4f4, _0x9456bd, _0x545e3f, {
  from: _0x1ba46c,
  q: _0x3efb4c,
  reply: _0x5067c3,
  botNumber2: _0xe66cc3
}) => {
  await typing(_0x5df4f4, readConfig, _0x1ba46c);
  const {
    botName: _0x5d29b2,
    footer: _0x262506
  } = await bf(_0xe66cc3);
  if (!_0x3efb4c && _0x545e3f.quoted && _0x545e3f.quoted.msg) {
    _0x3efb4c = _0x545e3f.quoted.msg;
  } else {
    if (!_0x3efb4c) {
      return _0x5067c3("❌ *Please provide a search term.*");
    }
  }
  let _0x5bae69 = await fetchJson("https://prabath-api-scrappers.vercel.app/api/ttsearch?q=" + _0x3efb4c + "&pages=20");
  const _0x337e11 = {
    text: "⏳ *Found " + _0x5bae69.data.length + " videos. Sending them one by one...*"
  };
  const _0x20b747 = {
    quoted: _0x9456bd
  };
  let _0x3accca = await _0x5df4f4.sendMessage(_0x1ba46c, _0x337e11, _0x20b747);
  for (const _0x58ca7b of _0x5bae69.data) {
    if (_0x58ca7b.play) {
      const _0x3461ee = {
        url: _0x58ca7b.play
      };
      const _0x26f2b6 = {
        video: _0x3461ee,
        caption: _0x58ca7b.title || _0x262506
      };
      const _0x17b499 = {
        quoted: _0x9456bd
      };
      await _0x5df4f4.sendMessage(_0x1ba46c, _0x26f2b6, _0x17b499);
      await sleep(1500);
    }
  }
  const _0x9a2f27 = {
    "delete": _0x3accca.key
  };
  return await _0x5df4f4.sendMessage(_0x545e3f.chat, _0x9a2f27);
});
const _0x137b2f = {
  pattern: "imagine",
  alias: ["aiimage"],
  desc: "generate images with ai",
  category: 'ai',
  use: ".imagine cat",
  filename: __filename
};
function _0x2cf6c3(_0x2b60f5, _0x14a855, _0x129ebc, _0x31601b, _0x9e350b) {
  return _0x238c(_0x129ebc + 0x27f, _0x9e350b);
}
cmd(_0x137b2f, async (_0x149742, _0x5622c4, _0x4646d6, {
  from: _0x4434b5,
  q: _0x8f7b16,
  reply: _0x39f79f,
  botNumber2: _0x2315f4
}) => {
  await typing(_0x149742, readConfig, _0x4434b5);
  const {
    botName: _0x5e113f,
    footer: _0x43554b
  } = await bf(_0x2315f4);
  if (!_0x8f7b16 && _0x4646d6.quoted && _0x4646d6.quoted.msg) {
    _0x8f7b16 = _0x4646d6.quoted.msg;
  } else {
    if (!_0x8f7b16) {
      return _0x39f79f("❌ *Please provide a text prompt.*");
    }
  }
  const _0x4cdd66 = {
    text: "⏳ *Generating 10 AI images. Please wait, this might take some time...*"
  };
  const _0x430512 = {
    quoted: _0x5622c4
  };
  let _0x15aae8 = await _0x149742.sendMessage(_0x4434b5, _0x4cdd66, _0x430512);
  for (let _0x2cac11 = 0; _0x2cac11 < 10; _0x2cac11++) {
    try {
      let _0x1aa41c = await fetchJson("https://prabath-ytdl-scrapper.koyeb.app/api/blaxbox?q=" + _0x8f7b16 + "&imagine=true");
      if (_0x1aa41c?.["imageUrls"]?.[0]) {
        const _0x415c34 = {
          quoted: _0x5622c4
        };
        await _0x149742.sendMessage(_0x4434b5, {
          'image': {
            'url': _0x1aa41c.imageUrls[0].trim()
          },
          'caption': "*Prompt:* " + _0x8f7b16 + "\n*Image:* " + (_0x2cac11 + 1) + "/10\n\n" + _0x43554b
        }, _0x415c34);
        await sleep(1500);
      }
    } catch (_0x1a3093) {
      console.error("Failed to generate image " + (_0x2cac11 + 1) + ':', _0x1a3093);
      _0x39f79f("Failed to generate image " + (_0x2cac11 + 1) + '.');
    }
  }
  const _0x1c3e2c = {
    "delete": _0x15aae8.key
  };
  return await _0x149742.sendMessage(_0x4646d6.chat, _0x1c3e2c);
});
function isValidDecimalNumber(_0x2952e4) {
  const _0x688bf8 = /^\d+\.\d+$/;
  return _0x688bf8.test(_0x2952e4);
}
const _0x55fff6 = {
  pattern: "findtiktok",
  alias: ["searchtiktok", "stiktok", "ftiktok"],
  use: ".findtiktok text",
  desc: "Search and get details from tiktok.",
  category: "search",
  filename: __filename
};
cmd(_0x55fff6, async (_0x5fb596, _0x30c0f1, _0x29ca2c, {
  from: _0x2265ab,
  q: _0x494bf6,
  reply: _0x543e8e,
  botNumber2: _0x4e674c
}) => {
  try {
    await typing(_0x5fb596, readConfig, _0x2265ab);
    const {
      botName: _0x194f81,
      footer: _0x36a6ba
    } = await bf(_0x4e674c);
    if (!_0x494bf6 && _0x29ca2c.quoted?.["msg"]) {
      _0x494bf6 = _0x29ca2c.quoted.msg;
    } else {
      if (!_0x494bf6) {
        const _0x56f2ce = await readConfig(_0x4e674c);
        const _0x30fd79 = _0x56f2ce.LANG;
        const _0xe7f7 = {
          text: _0x55ee9d[_0x30fd79].findtiktokq
        };
        const _0x1bdd55 = {
          quoted: _0x30c0f1
        };
        const _0x513bac = await _0x5fb596.sendMessage(_0x2265ab, _0xe7f7, _0x1bdd55);
        const _0x3dcf50 = {
          text: _0x55ee9d.reacts.Notq,
          key: _0x513bac.key
        };
        const _0x465c2c = {
          react: _0x3dcf50
        };
        return await _0x5fb596.sendMessage(_0x2265ab, _0x465c2c);
      }
    }
    let _0x1b3231 = await fetchJson("https://prabath-api-scrappers.vercel.app/api/ttsearch?q=" + _0x494bf6 + "&pages=100");
    let _0x549aa9 = "🔥 *" + _0x194f81 + " TIKTOK SEARCH* 🔥\n\n";
    _0x1b3231.data.forEach((_0x40ca9f, _0x3e0dbe) => {
      let _0x18454b = _0x3e0dbe + 1 + '.1';
      let _0x10779c = _0x3e0dbe + 1 + '.2';
      let _0x3f4945 = _0x3e0dbe + 1 + '.3';
      _0x549aa9 += "> *[" + (_0x3e0dbe + 1) + "]* " + _0x40ca9f.title + "\n\n*Url -* " + _0x40ca9f.play + "\n*" + _0x18454b + " Without WaterMark*\n*" + _0x10779c + " With WaterMark*\n*" + _0x3f4945 + " Audio*\n\n  ━━━━━━━━━━━━━━━━━━━━━━━  \n\n";
    });
    await _0x543e8e(_0x549aa9);
  } catch (_0x510e18) {
    await ec(_0x510e18, _0x5fb596, _0x4e674c, _0x30c0f1, readConfig, _0x55ee9d, _0x2265ab);
  }
});
const _0x137314 = {};
function _0x238c(_0x4ad547, _0x5e73a1) {
  _0x4ad547 = _0x4ad547 - 494;
  const _0x23d096 = _0x481a();
  let _0x5325a9 = _0x23d096[_0x4ad547];
  if (_0x238c.WlysdI === undefined) {
    var _0x2ad29a = function (_0x3625a5) {
      let _0x4dd4fe = '';
      let _0x51f13c = '';
      let _0x2431f3 = _0x4dd4fe + _0x2ad29a;
      let _0x21259b = 0;
      let _0x4b8b40;
      let _0x29d91;
      for (let _0x105671 = 0; _0x29d91 = _0x3625a5.charAt(_0x105671++); ~_0x29d91 && (_0x4b8b40 = _0x21259b % 4 ? _0x4b8b40 * 64 + _0x29d91 : _0x29d91, _0x21259b++ % 4) ? _0x4dd4fe += _0x2431f3.charCodeAt(_0x105671 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x4b8b40 >> (-2 * _0x21259b & 6)) : _0x21259b : 0) {
        _0x29d91 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x29d91);
      }
      let _0xe41df5 = 0;
      for (let _0x5e5fd7 = _0x4dd4fe.length; _0xe41df5 < _0x5e5fd7; _0xe41df5++) {
        _0x51f13c += '%' + ('00' + _0x4dd4fe.charCodeAt(_0xe41df5).toString(16)).slice(-2);
      }
      return decodeURIComponent(_0x51f13c);
    };
    const _0x55cd89 = function (_0x59b1d4, _0x44f532) {
      let _0x5338f9 = [];
      let _0x112acf = 0;
      let _0x5a6608;
      let _0xdfff55 = '';
      _0x59b1d4 = _0x2ad29a(_0x59b1d4);
      let _0x3ed121;
      for (_0x3ed121 = 0; _0x3ed121 < 256; _0x3ed121++) {
        _0x5338f9[_0x3ed121] = _0x3ed121;
      }
      for (_0x3ed121 = 0; _0x3ed121 < 256; _0x3ed121++) {
        _0x112acf = (_0x112acf + _0x5338f9[_0x3ed121] + _0x44f532.charCodeAt(_0x3ed121 % _0x44f532.length)) % 256;
        _0x5a6608 = _0x5338f9[_0x3ed121];
        _0x5338f9[_0x3ed121] = _0x5338f9[_0x112acf];
        _0x5338f9[_0x112acf] = _0x5a6608;
      }
      _0x3ed121 = 0;
      _0x112acf = 0;
      for (let _0x6cbd6a = 0; _0x6cbd6a < _0x59b1d4.length; _0x6cbd6a++) {
        _0x3ed121 = (_0x3ed121 + 1) % 256;
        _0x112acf = (_0x112acf + _0x5338f9[_0x3ed121]) % 256;
        _0x5a6608 = _0x5338f9[_0x3ed121];
        _0x5338f9[_0x3ed121] = _0x5338f9[_0x112acf];
        _0x5338f9[_0x112acf] = _0x5a6608;
        _0xdfff55 += String.fromCharCode(_0x59b1d4.charCodeAt(_0x6cbd6a) ^ _0x5338f9[(_0x5338f9[_0x3ed121] + _0x5338f9[_0x112acf]) % 256]);
      }
      return _0xdfff55;
    };
    _0x238c.yAxIYh = _0x55cd89;
    _0x238c.lLMMqJ = {};
    _0x238c.WlysdI = true;
  }
  const _0x480872 = _0x23d096[0];
  const _0x443198 = _0x4ad547 + _0x480872;
  const _0x59a096 = _0x238c.lLMMqJ[_0x443198];
  if (!_0x59a096) {
    if (_0x238c.CYrXEM === undefined) {
      const _0x261695 = function (_0x1de989) {
        this.jzWByg = _0x1de989;
        this.LDdeEf = [1, 0, 0];
        this.FcESpA = function () {
          return 'newState';
        };
        this.knLrXC = "\\w+ *\\(\\) *{\\w+ *";
        this.abjorQ = "['|\"].+['|\"];? *}";
      };
      _0x261695.prototype.MDSDfi = function () {
        const _0x379be6 = new RegExp(this.knLrXC + this.abjorQ);
        const _0x1d3a8d = _0x379be6.test(this.FcESpA.toString()) ? --this.LDdeEf[1] : --this.LDdeEf[0];
        return this.urOnMf(_0x1d3a8d);
      };
      _0x261695.prototype.urOnMf = function (_0x2183f2) {
        if (!Boolean(~_0x2183f2)) {
          return _0x2183f2;
        }
        return this.carIQq(this.jzWByg);
      };
      _0x261695.prototype.carIQq = function (_0x3e9173) {
        let _0x333824 = 0;
        for (let _0x5206c7 = this.LDdeEf.length; _0x333824 < _0x5206c7; _0x333824++) {
          this.LDdeEf.push(Math.round(Math.random()));
          _0x5206c7 = this.LDdeEf.length;
        }
        return _0x3e9173(this.LDdeEf[0]);
      };
      new _0x261695(_0x238c).MDSDfi();
      _0x238c.CYrXEM = true;
    }
    _0x5325a9 = _0x238c.yAxIYh(_0x5325a9, _0x5e73a1);
    _0x238c.lLMMqJ[_0x443198] = _0x5325a9;
  } else {
    _0x5325a9 = _0x59a096;
  }
  return _0x5325a9;
}
_0x137314.on = "body";
cmd(_0x137314, async (_0xf02464, _0x44eacd, _0x154cde, {
  from: _0x5ae7d4,
  body: _0x2a661e,
  botNumber2: _0x22eef8,
  reply: _0x3fb087
}) => {
  if (!_0x154cde.quoted || _0x154cde.quoted.sender !== _0x22eef8 || !_0x154cde.quoted.msg) {
    return;
  }
  const {
    botName: _0x582b84,
    footer: _0x1b95c2
  } = await bf(_0x22eef8);
  const _0x4644ef = _0x154cde.quoted.conversation || _0x154cde.quoted.extendedTextMessage?.["text"];
  if (!_0x4644ef || !_0x4644ef.includes("🔥 *" + _0x582b84 + " TIKTOK SEARCH* 🔥")) {
    return;
  }
  try {
    if (!isValidDecimalNumber(_0x2a661e)) {
      return;
    }
    const _0x507e5f = _0x4644ef.match(/(https?:\/\/[^\s]+)/g);
    if (!_0x507e5f) {
      return await _0x3fb087("I've got an error while fetching URLs!");
    }
    const _0x3297ee = parseInt(_0x2a661e.split('.')[0]) - 1;
    const _0x2ac6ea = parseInt(_0x2a661e.split('.')[1]);
    if (_0x3297ee >= 0 && _0x3297ee < _0x507e5f.length && _0x2ac6ea > 0 && _0x2ac6ea <= 3) {
      let _0x132663 = _0x507e5f[_0x3297ee];
      if (_0x2ac6ea === 2) {
        _0x132663 = _0x132663.replace("play", "wmplay").trim();
      } else {
        if (_0x2ac6ea === 3) {
          _0x132663 = _0x132663.replace("mp4", "mp3").replace("media/play", "music").trim();
        }
      }
      if (_0x132663.includes(".mp4")) {
        const _0x355cbe = {
          url: _0x132663
        };
        const _0xf69378 = {
          video: _0x355cbe,
          mimetype: "video/mp4",
          caption: _0x1b95c2
        };
        const _0x1cacbc = {
          quoted: _0x44eacd
        };
        await _0xf02464.sendMessage(_0x5ae7d4, _0xf69378, _0x1cacbc);
      } else {
        if (_0x132663.includes(".mp3")) {
          const _0x5c1b12 = {
            url: _0x132663
          };
          const _0x39f168 = {
            audio: _0x5c1b12,
            mimetype: "audio/mpeg"
          };
          const _0x515ab0 = {
            quoted: _0x44eacd
          };
          await _0xf02464.sendMessage(_0x5ae7d4, _0x39f168, _0x515ab0);
        }
      }
    }
  } catch (_0x1cc397) {
    await ec(_0x1cc397, _0xf02464, _0x22eef8, _0x44eacd, readConfig, _0x55ee9d, _0x5ae7d4);
  }
});
const _0x559ca5 = {
  pattern: "downurl",
  alias: ["downloadurl", "directdownload", "durl", "downlink", 'dl', "dlink"],
  use: ".downurl <url> | <jid>",
  desc: "Download direct files using URLs.",
  category: "download",
  filename: __filename
};
cmd(_0x559ca5, async (_0x5616d9, _0xb1002e, _0x2cb2b8, {
  from: _0x1d85f5,
  q: _0x157d9f,
  reply: _0x1755bf,
  botNumber2: _0x57de0a
}) => {
  const _0xf90524 = _0xc473fb => {
    const _0x437b0c = {
      "image/jpeg": "jpg",
      "image/png": "png",
      "image/webp": "webp",
      "image/gif": "gif",
      "image/heic": "heic",
      "image/heif": "heif",
      "image/bmp": "bmp",
      "image/tiff": "tiff",
      "video/mp4": "mp4",
      "video/3gpp": "3gp",
      "video/quicktime": "mov",
      "video/x-matroska": "mkv",
      "video/webm": "webm",
      "video/avi": "avi",
      "audio/mpeg": "mp3",
      "audio/mp4": "m4a",
      "audio/aac": "aac",
      "audio/ogg": "ogg",
      "audio/opus": "opus",
      "audio/wav": "wav",
      "audio/x-ms-wma": "wma",
      "audio/x-flac": "flac",
      "audio/webm": "webm",
      "application/pdf": "pdf",
      "application/zip": "zip",
      "application/x-zip-compressed": "zip",
      "application/x-rar-compressed": "rar",
      "application/x-7z-compressed": '7z',
      "application/msword": "doc",
      "application/vnd.ms-excel": "xls",
      "application/vnd.ms-powerpoint": "ppt",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
      "text/plain": "txt",
      "text/csv": "csv",
      "text/html": "html",
      "application/json": "json",
      "application/xml": "xml",
      "application/x-tgsticker": "tgs",
      "application/x-lottie+json": "lottie",
      "application/octet-stream": "bin",
      "application/vnd.android.package-archive": "apk",
      "application/x-sharedlib": 'so',
      "application/x-executable": "exe"
    };
    return _0x437b0c[_0xc473fb] || null;
  };
  const _0x5813d9 = _0x237aab => {
    const _0x4ea94a = {
      jpg: "image/jpeg",
      png: "image/png",
      webp: "image/webp",
      gif: "image/gif",
      heic: "image/heic",
      heif: "image/heif",
      bmp: "image/bmp",
      tiff: "image/tiff",
      mp4: "video/mp4",
      "3gp": "video/3gpp",
      mov: "video/quicktime",
      mkv: "video/x-matroska",
      webm: "video/webm",
      avi: "video/avi",
      mp3: "audio/mpeg",
      m4a: "audio/mp4",
      aac: "audio/aac",
      ogg: "audio/ogg",
      opus: "audio/opus",
      wav: "audio/wav",
      wma: "audio/x-ms-wma",
      flac: "audio/x-flac",
      pdf: "application/pdf",
      zip: "application/zip",
      rar: "application/x-rar-compressed",
      '7z': "application/x-7z-compressed",
      doc: "application/msword",
      xls: "application/vnd.ms-excel",
      ppt: "application/vnd.ms-powerpoint",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      txt: "text/plain",
      csv: "text/csv",
      html: "text/html",
      json: "application/json",
      xml: "application/xml",
      tgs: "application/x-tgsticker",
      lottie: "application/x-lottie+json",
      bin: "application/octet-stream",
      apk: "application/vnd.android.package-archive",
      so: "application/x-sharedlib",
      exe: "application/x-executable"
    };
    return _0x4ea94a[_0x237aab.toLowerCase()] || "application/octet-stream";
  };
  function _0x208e6d(_0x3fa717) {
    const _0x49ab62 = _0x3fa717 / 1048576;
    if (_0x49ab62 > 1024) {
      const _0x6c7772 = _0x49ab62 / 1024;
      return _0x6c7772.toFixed(2) + " GB";
    } else {
      return _0x49ab62.toFixed(2) + " MB";
    }
  }
  let _0x212f09;
  try {
    const {
      botName: _0x6818d9,
      footer: _0x5d59e9
    } = await bf(_0x57de0a);
    if (!_0x157d9f) {
      return _0x1755bf("❌ *Please provide at least one valid direct URL.*");
    }
    const {
      isGroup: _0x476b2d
    } = _0x2cb2b8;
    let _0x274df4 = _0x157d9f.replace(/https?:\/\//g, " https://");
    _0x274df4 = _0x274df4.replace(/[,]/g, " ");
    _0x274df4 = _0x274df4.replace(/\s+/g, " ");
    _0x274df4 = _0x274df4.trim();
    const _0xa70387 = /(https?:\/\/[^\s"'<>()]+)/g;
    const _0x18da5b = _0x274df4.match(_0xa70387) || [];
    const _0x4c6784 = [...new Set(_0x18da5b)];
    const _0x580a4f = _0x157d9f.trim().split(/\s*\|\s*/);
    const _0xedd49d = _0x580a4f[_0x580a4f.length - 1];
    const _0x3e756c = _0xedd49d.includes('@') ? _0xedd49d : _0x1d85f5;
    if (_0x4c6784.length === 0) {
      return _0x1755bf("❌ *No valid URLs found in your message.*");
    }
    const _0x1f1743 = {
      text: "⏳ *Validating 0 of " + _0x4c6784.length + " link(s)...*"
    };
    const _0x1b47c3 = {
      quoted: _0xb1002e
    };
    _0x212f09 = await _0x5616d9.sendMessage(_0x1d85f5, _0x1f1743, _0x1b47c3);
    const _0x28c884 = [];
    const _0x454431 = [];
    let _0x1349c9 = 0;
    for (const _0x725b2c of _0x4c6784) {
      _0x1349c9++;
      if (!_0x476b2d) {
        const _0x190a90 = {
          quoted: _0xb1002e
        };
        await _0x5616d9.sendMessage(_0x1d85f5, {
          'text': "⏳ *Validating " + _0x1349c9 + " of " + _0x4c6784.length + " link(s)...*\n\n> " + _0x725b2c.slice(0, 50) + "...",
          'edit': _0x212f09.key
        }, _0x190a90);
      }
      try {
        const _0x540bd7 = await _0x408d3e(_0x725b2c, {
          'method': "HEAD"
        });
        if (!_0x540bd7.ok) {
          const _0x4c8dc6 = {
            url: _0x725b2c,
            reason: "Link failed (Status: " + _0x540bd7.status + ')'
          };
          _0x454431.push(_0x4c8dc6);
          continue;
        }
        const _0x36aca7 = Number(_0x540bd7.headers.get("content-length"));
        if (!_0x36aca7 || _0x36aca7 <= 0) {
          const _0x1846b6 = {
            url: _0x725b2c,
            reason: "Could not determine file size"
          };
          _0x454431.push(_0x1846b6);
          continue;
        }
        if (_0x36aca7 > 2147483648) {
          _0x454431.push({
            'url': _0x725b2c,
            'reason': "File is too large (" + _0x208e6d(_0x36aca7) + ')'
          });
          continue;
        }
        const _0x385a4d = _0x540bd7.headers.get("content-type") || "application/octet-stream";
        const _0xf486f7 = _0x540bd7.headers.get("content-disposition");
        let _0x190f54 = "downloaded-file";
        if (_0xf486f7 && _0xf486f7.includes("filename=")) {
          const _0x5a7489 = _0xf486f7.match(/filename="?([^"]+)"?/);
          if (_0x5a7489) {
            _0x190f54 = _0x5a7489[1];
          }
        } else {
          try {
            const _0x5f0345 = new URL(_0x725b2c);
            const _0x403e5c = _0x5f0345.pathname;
            if (_0x403e5c && _0x403e5c !== '/') {
              _0x190f54 = _0x403e5c.split('/').pop();
            }
          } catch {}
        }
        let _0x321e6f = _0x190f54.split('.').pop()?.["toLowerCase"]();
        let _0x59318b = _0x5813d9(_0x321e6f || '');
        if (!_0x321e6f || _0x59318b === "application/octet-stream") {
          _0x59318b = _0x385a4d;
          let _0x46b8d0 = _0xf90524(_0x59318b);
          if (_0x46b8d0 && !_0x190f54.endsWith(_0x46b8d0)) {
            _0x190f54 = _0x190f54 + '.' + _0x46b8d0;
            _0x321e6f = _0x46b8d0;
          }
        }
        const _0x51cc18 = ["jpg", "jpeg", "png", "gif", "bmp"];
        const _0x22229b = ["mp4", "mov", "mkv", "avi", "3gp", "webm"];
        let _0x32b682 = "document";
        if (_0x51cc18.includes(_0x321e6f)) {
          _0x32b682 = "image";
        } else if (_0x22229b.includes(_0x321e6f)) {
          _0x32b682 = "video";
        }
        const _0x233f11 = {
          url: _0x725b2c,
          jid: _0x3e756c,
          fileName: _0x190f54,
          mimeType: _0x59318b,
          contentLength: _0x36aca7,
          sendType: _0x32b682,
          fileExt: _0x321e6f
        };
        _0x28c884.push(_0x233f11);
      } catch (_0x13573c) {
        console.error(_0x13573c);
        const _0x423fad = {
          url: _0x725b2c,
          reason: "Validation error (" + _0x13573c.message + ')'
        };
        _0x454431.push(_0x423fad);
      }
    }
    let _0x15e373 = "*Validation Complete* ✔️\n\n" + ("*Total Links Found:* " + _0x4c6784.length + "\n") + ("*Valid Files to Download:* " + _0x28c884.length + "\n") + ("*Skipped Files:* " + _0x454431.length + "\n");
    if (_0x454431.length > 0) {
      _0x15e373 += "\n*Skipped File Details:*\n" + _0x454431.map(_0xc6bd94 => "> " + _0xc6bd94.url + " \n(Reason: " + _0xc6bd94.reason + ')').join("\n\n");
    }
    const _0x33f2ba = {
      text: _0x15e373,
      edit: _0x212f09.key
    };
    const _0x1a3156 = {
      quoted: _0xb1002e
    };
    await _0x5616d9.sendMessage(_0x1d85f5, _0x33f2ba, _0x1a3156);
    if (_0x28c884.length === 0) {
      await sleep(10000);
      const _0x1b3eee = {
        "delete": _0x212f09.key
      };
      await _0x5616d9.sendMessage(_0x1d85f5, _0x1b3eee);
      return;
    }
    let _0x35ad9e = 0;
    for (const _0x3f0556 of _0x28c884) {
      _0x35ad9e++;
      const _0x5f1aff = _0x208e6d(_0x3f0556.contentLength);
      if (!_0x476b2d) {
        const _0x10b2e2 = {
          text: "⬇️ *Downloading file " + _0x35ad9e + " of " + _0x28c884.length + "...*\n\n*File:* " + _0x3f0556.fileName + " *[" + _0x5f1aff + ']*',
          edit: _0x212f09.key
        };
        const _0x55b869 = {
          quoted: _0xb1002e
        };
        await _0x5616d9.sendMessage(_0x1d85f5, _0x10b2e2, _0x55b869);
        const _0x8f354f = {
          text: "⬆️ *Uploading file " + _0x35ad9e + " of " + _0x28c884.length + "...*\n\n*File:* " + _0x3f0556.fileName + " *[" + _0x5f1aff + ']*',
          edit: _0x212f09.key
        };
        const _0x4d5de9 = {
          quoted: _0xb1002e
        };
        await _0x5616d9.sendMessage(_0x1d85f5, _0x8f354f, _0x4d5de9);
      } else {
        if (_0x476b2d && _0x35ad9e === 1) {
          const _0x554aca = {
            text: "⬇️⬆️ *Downloading & Uploading " + _0x28c884.length + " file(s)...*\n\n(This may take a while in groups. Message will update when complete.)",
            edit: _0x212f09.key
          };
          const _0x40ad9a = {
            quoted: _0xb1002e
          };
          await _0x5616d9.sendMessage(_0x1d85f5, _0x554aca, _0x40ad9a);
        }
      }
      try {
        const _0x21942c = {
          caption: "> " + _0x3f0556.fileName + "\n\n" + _0x5d59e9,
          mimetype: _0x3f0556.mimeType,
          fileName: _0x3f0556.fileName
        };
        if (_0x3f0556.sendType === "image") {
          const _0x443b99 = {
            url: _0x3f0556.url
          };
          _0x21942c.image = _0x443b99;
        } else {
          if (_0x3f0556.sendType === "video") {
            const _0x759a9 = {
              url: _0x3f0556.url
            };
            _0x21942c.document = _0x759a9;
          } else {
            const _0x1f77e2 = {
              url: _0x3f0556.url
            };
            _0x21942c.document = _0x1f77e2;
          }
        }
        const _0x839dcc = {
          quoted: _0xb1002e
        };
        await _0x5616d9.sendMessage(_0x3f0556.jid, _0x21942c, _0x839dcc);
      } catch (_0x551bd4) {
        await _0x1755bf("❌ *Failed to send file:* " + _0x3f0556.fileName + "\n(Error: " + _0x551bd4.message + ')');
      } finally {
        await sleep(2600);
      }
    }
    const _0x5bd90d = {
      text: "✔️ *All " + _0x28c884.length + " files have been sent successfully.* ✔️",
      edit: _0x212f09.key
    };
    await _0x5616d9.sendMessage(_0x1d85f5, _0x5bd90d);
    _0x2cb2b8.react('✔️');
    await sleep(4000);
    const _0x6edd51 = {
      "delete": _0x212f09.key
    };
    await _0x5616d9.sendMessage(_0x1d85f5, _0x6edd51);
  } catch (_0x1f54c6) {
    console.error(_0x1f54c6);
    const _0x47c1d2 = "❌ *An error occurred:* " + _0x1f54c6.message;
    if (_0x212f09) {
      const _0x2f1d26 = {
        text: _0x47c1d2,
        edit: _0x212f09.key
      };
      const _0x199847 = {
        quoted: _0xb1002e
      };
      await _0x5616d9.sendMessage(_0x1d85f5, _0x2f1d26, _0x199847);
      await sleep(10000);
      const _0x35b9e1 = {
        "delete": _0x212f09.key
      };
      await _0x5616d9.sendMessage(_0x1d85f5, _0x35b9e1);
    } else {
      _0x1755bf(_0x47c1d2);
    }
  }
});
const _0x5b9763 = {
  pattern: "findapk",
  alias: ["searchapk"],
  use: ".findapk whatsapp",
  desc: "Search and get details from playstore.",
  category: "search",
  filename: __filename
};
function _0xb4939d(_0x3cd25c, _0x234ef6, _0x5ca866, _0x1aa2fb, _0xf5930c) {
  return _0x238c(_0x5ca866 + 0x23a, _0x1aa2fb);
}
cmd(_0x5b9763, async (_0x2c1359, _0x2a6d86, _0x134360, {
  from: _0x1dc69a,
  q: _0x488e2b,
  reply: _0x123b67,
  botNumber2: _0x344e07
}) => {
  try {
    await typing(_0x2c1359, readConfig, _0x1dc69a);
    const _0xd977b2 = await readConfig(_0x344e07);
    const {
      botName: _0x525433,
      footer: _0x4b8843
    } = await bf(_0x344e07);
    if (!_0x488e2b && _0x134360.quoted?.["msg"]) {
      _0x488e2b = _0x134360.quoted.msg;
    } else {
      if (!_0x488e2b) {
        const _0x4caba9 = {
          text: _0x55ee9d[_0xd977b2.LANG].findapkq
        };
        const _0x1557c0 = {
          quoted: _0x2a6d86
        };
        const _0x45729a = await _0x2c1359.sendMessage(_0x1dc69a, _0x4caba9, _0x1557c0);
        const _0x4fe693 = {
          text: _0x55ee9d.reacts.Notq,
          key: _0x45729a.key
        };
        const _0x5a1b85 = {
          react: _0x4fe693
        };
        return await _0x2c1359.sendMessage(_0x1dc69a, _0x5a1b85);
      }
    }
    let _0x144abc;
    if (_0x488e2b.startsWith("https://play.google.com/store/apps/details?id=")) {
      const _0x2362ad = new URL(_0x488e2b).searchParams.get('id');
      _0x144abc = await _0x438f12.search(_0x2362ad);
    } else {
      _0x144abc = await _0x438f12.search(_0x488e2b);
    }
    if (!_0x144abc || _0x144abc.length < 1) {
      const _0x49bf66 = {
        text: "*Application not found* ❗"
      };
      const _0x29223f = {
        quoted: _0x2a6d86
      };
      return await _0x2c1359.sendMessage(_0x1dc69a, _0x49bf66, _0x29223f);
    }
    const _0x17bcdb = _0x144abc.map((_0xa85cf0, _0x17d9ae) => {
      return "*No: " + (_0x17d9ae + 1) + "*\n*🫧 " + _0xa85cf0.name + "*\n⚡ " + _0xa85cf0.id + "\n";
    }).join("\n");
    const _0x14a9de = '*' + _0x525433 + " APK SEARCH*\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n\n_*All Applications:*_\n\n" + _0x17bcdb;
    const _0x3b9201 = {
      text: _0x14a9de
    };
    const _0x2bbc15 = {
      quoted: _0x2a6d86
    };
    await _0x2c1359.sendMessage(_0x1dc69a, _0x3b9201, _0x2bbc15);
  } catch (_0xf07b59) {
    console.log(_0xf07b59);
    await ec(_0xf07b59, _0x2c1359, _0x344e07, _0x2a6d86, readConfig, _0x55ee9d, _0x1dc69a);
  }
});
function _0x481a() {
  const _0x18bb92 = ['WQK4WRPiaW', 'W7O1frFdRW', 'W5RcQCk0W50z', 'WRhdLSoZW4K', 'hmoFmSkhnW', 'WP8/eHxdOW', 'amo9l8kgBW', 'WRnErCkgxa', 'B8obkSkhWQy', 'jmk8la', 'WPL1ECkowq', 'Dt/cQG', 'DSkhW4DP', 'W54NW7VcHmoa', 'W516WPFcHxe', 'y8orqsVcKa', 'l8kMCgtcNq', 'D8oSW4NcKdO', '4P6tgWhcR0C', 'lX/dNq', 'gwhcHmoQW78', 'WQK8WRTefW', 'tCoFx0D6', 'WRCkohye', 'AmoHreK', 'WQa3WPtdPmoO', 'WRKUxHxdRW', 'W7JdQSokWP44', 'DCk3WPtdMSkH', 'WO9Qw8k2ua', 'lSk8WR5b', 'WO5ZW5tdQmk3', 'B8k+fNC8', 'hSonW6/dOcW', 'aZVcJSkIW6y', 'W7vTWPBdVq', 'WO1otSklhW', 'WQD9WQRcN8oO', 'AdShW4qP', 'WRPVWQVcUCox', 'W4BcR8kR', 'xmoSf8k5WO8', 'jmoIxvbG', 'W5fmWQjrhG', 'WPzHWOzOAG', 'WRVcK8o+W47dIW', 'Amo7bfr8', 'DmkRWRhdOSk/', 'W7ngWPq', 'k8oQtvH7', 'uJHtiwe', 'g8odjW', 'WPWzWOz9ea', 'WRLiWRNdGmoD', 'ss4rWQNcRW', 'W5ebW4hcKJG', 'WPZdQCou', 'qmkWWRxdTXq', 'WPCBeSoDt8o/CmoAW7D9W7pcPSkt', 'rfpdI8kkW5m', 'WOhdOSkSCSkv', 'W4xcNmknW6K7', 'WRvyWRxcUmoD', 'W53cR8k6Emka', 'ACoIwvi', 'W6bszq4', 'WR/dGCoPW7FcVG', 'W51AWPFcIr0', 'WP0NmxCx', 'zCo0WR7dTee', 'WQbvWOW', 'WRb0WRX/rG', 'pCk1vW', 'n2NdQ8oRw3CiWQBdICo6WQ9jW5G', 'WQffWOnytq', 'CSoHqsZcMq', 'WRRcL8kQohO', 'WQ54W50vEa', 'mmoSh2Ce', 'kmkVe3Cf', 'WRzurCobaG', 'A8k/WR5m', 'WQnvWPP/cG', 'D8kAiMvd', 'WOlcP8k4BSoj', 'afZcVSoIWRS', 'WRvirmkp', 'zdXyWRhcUa', 'WOdcP8kRFSkt', 'W456W5ldR8kS', 'jmoSr0P7', 'WPiBWQXMfa', 'pNxcNSoUWQi', 'DSoPWRxdTh4', 'W7nqWPFcHvW', 'C8o4g2Ok', 'FYDHe1y', 'p8oHnLmI', 'W4ddKmkhW6LR', 'WRNcI8k9kq', 'BdZcV8o5gq', 'edpdI8kNbq', 'W73dQSkfWPGW', 'W59qBG', 'FCk1WRddU30', 'jSoZwuOG', 'WR59WOVdUmoF', 'WPfNW5O', 'BeNdSCkOW6C', 'WRPLW5eB', 'W7LgWOFcHv4', 'yLtdLSk9W64', 'W5b6WRHKea', 'xmoRdCk7WOm', 'vSohpSkapG', 'WQTuBCkiua', 'F8o2WRxdO8kP', 'BYydW4Wd', 'zSoMWRjsW4m', 'heFcVZxdGG', 'ySk7WQnmW4K', 'p8o0hZC', 'WOBdTSoqW67cQa', 'WQeknxae', 'W4VdVmo3WO8P', 'AZj3WQRcLG', 'W7JdQmkmDmkl', 'kSoXW6RdTfG', 'pfdcUComWPm', 'umkvr017', 'd8osCu5n', 'WQ1EsSkcxa', 'BCkhW4D/WQK', 'p8oHobaQ', 'ECo5WRFdPmkM', 't8o6j8kwWQe', 'W67dVSkxW6Gh', 'WRf0C1/dPW', 'WP/cQ8kkdL8', 'AcpcVq', 'W6vfxCk9lG', 'k8kOvwJcOa', 'W5PVW6TGbG', 'xvZcTW', 'WOFdP8ksW60I', 'qKNdNSkZW7e', 'D8kxkxK', 'ymkYW7nsW4u', 'WQzPW5Cp', 'W71aWP7cIvm', 'l8kflMTw', 'kSk2W4dcIHe', 'uCkrwW', 'WRBdISkXW47cJG', 'W6rHWRlcJ2u', 'WRfQWOVcKq', 'WPfku3tdIa', 'WPecWP1Rha', 'D8knWQZdPJS', 'W6O2WPhcSCou', 'WPfrl8oEeq', 'DSo4bM8a', 'W7LpWR7cQN4', 'WRrdWQjTxa', 'W57cRCkTW4m', 'WPhcTSkLB8op', 'hL8L', 'W41svCkJha', 'AYblW4Cv', 'WO5hqCkdeG', 'W4SGW7BcGa', 'WQCgnW', 'WQvvWPPVqq', 'W6NdTCoa', 'dZPyWRy', 'CSk6WRBdV8k/', 'r8kuteC', 'W6StW5VcImoD', 'WQm1iaxdTa', 'rmoutxJcGa', 'pCkHivKV', 'eSoAWQ3dO2i', 'oSkIwN/cSq', 'WRzvta', 'fCoAW7FcPgzJWR7cMKOBECoSW4dcMa', 'ENinW44s', 'b8o1fSkTqq', 'WOvFW6tdLCk+', 'WPf/vMFdVa', 'WQeqW4a', 'WOldRmkKEmkt', 'WOpdKmkDW6u5', 'pSoje8kdhW', 'qSkmx3y4', 'WQvlWRZcISo5', '8k2nGrS2', 'WRz9Cey', 'jmoXWQ8', 'WQj5yKldOa', 'CCk+mLWK', 'rCkwWQxcSdW', 'xSoliLq2', '4PAj4PAz4PAK4PEP4Pwq', 'WP7cPCkhjh0', 'W54IW6/cGCow', 'gxVcPCo7WQm', 'WR9TW5DnoW', 'BmkLWRzeW6O', 'y8obkmk7WOu', 'W4SjW47cKra', 'k8kMt3xcQG', 'tgddVmk7W4m', 'nmkRkeKs', 'WOe8cNSX', 'uCk1W4bfWOm', 'WP/cO8kTEmoh', 'W4xdHCkEW60', 'W4ZcUSkVW5KS', 'CCk+WRy', 'W7fuWRtcUM4', 'zJ/cTmkQhq', 'WPzyW5FdLCkt', 'udHdWQpdRG', 'WQHTW7JdQmkD', 'rSkqE8kP', 'ymkQWQDjW48', 'WRG+WQXAaa', 'naddLmkJha', 'W5nnvCkwvq', 'WRjVW5Wezq', 'uqf7dKO', 'vZvyWRZcPq', 'rsvu', 'ecfNb0i', 'rJ1ofNq', 'cmkIeSoHsW', 'kSovWRJdHwS', 'ACotlCkpWQ4', 'FSoplmooWQy', 'WQ3dNSo9W5RcHa', 'j8ocbmkoAW', 'WO/dRmk1W6hcSa', 'WQZdSSoAW77cQG', 'lSopW6dcUVcOSRq', 'W7j6WPJcTgG', 'WQZcVCksnNG', 'W5VcUSoUW40G', 'nSkkvmoK', 'FCoSfLeg', 'W7DzFrJdLW', 'ef9Jc0C', 'umoEcxLY', 'oYpdM8kOoW', 'DmkaCfWp', 'vmkTW69d', 'W5aBW5VcMmo7', 'FCkOWQBdQhS', 'W4zrtsZdVa', 'eCoDmmkvpW', 'yCkAWRddOJS', 'r8oDBsRcVa', 'C8kxjw1R', 'BCk8Ewmf', 'AmoZWQZdPLG', 'WRGwWOHKha', 'WP5WWPdcQ8kq', 'CslcS8k0', 'tIffW5yp', 'W6Son3ec', 'WPjkoa', 'ySk8WQ3dQCka', 'fSkqECkulW', 'WQ0QW5qmza', 'EehdLSkYga', 'WRT0eGhdTG', 'jSkQDa', 'BCoKWQvoW4q', 'lCkGsx3cQa', 'AdONW48V', 'W4bjv8kreG', 'y8kto31p', 'W5JcRmk6W4iS', 'xSkgdYGq', 'nmk9m1WH', 'WPWYmG', 'dmoXe8kPFW', 'W6SckJGv', 'WQ1VW5Whxa', 'vgtdU8kYWPC', 'W5JdG8kF', 'iSkMjvGY', 'kCkJla', 'WPrXWPjPsq', 'b8oWaSkOvW', 'WRxdSSoUWOhIRyNVU6W', 'WQaBoN0z', 'EaBdMmkKdG', 'WRyJWPb0W7G', 'uc9EWQBcQq', 'u8krxv17', 'zJhcRSkWbG', 'dCojW6NcU3C', 'WPf5W4K', 'W6ZdVmoaWOy', 'WOq4WP9JW4C', 'ESkbWOtdISkd', 'hMdcHmoMWR8', 'WQhdNmoDW5pcNa', 'W71gWOu', 'qmk0FvP8', 'WPP/WR3cICof', 'vmkXW6Ld', 'DCkJWQ3dRNm', 'u2ddS8kUW5q', 'WRv9AKi', 't8oEsfLU', 'WOajWOPgpW', 'qmoHemkP', 'WPCbW5ddGq', 'WRL+W5O', 'h8kFbZFcMq', 'iH/dLmkSha', 'WO8ont/dJa', 'tCkYW6PeWP4', 'jSoUta', 'w8kKtxX6', 'zCoCzsCm', 'WRT+W5mkFq', 'W4r8WQrXeG', 'W7zqW5pcN1G', 'WQaDgNqd', 'WR5vWOz4tq', 'WRzdW4H4sW', 's8kgW6FdKmkw', 'WQeQmeez', 'W4zBvmkeha', 'ueFcUYldJG', 'WOvSWP3dOSo6', 'WPqBia', 'zmo8hxue', 'WR8eWO9sW6C', 'jWldLmkMsa', 'dNVcMmo7WRq', 'raRcV8kCbW', 'WQ83AHVdUG', 'aCoana', 'W7dcLmoUW7Gk', 'jCoezN9M', 'amoOWQldQ0G', 's8kdWQq', 'jCkPmW', 'WRtcICk/nNW', 'WR9/iZZdIa', 't8kvr05Q', 'WPBcP8k5', 'WQrXWOZcMmol', 'ymkgFu5m', 'uCkeWOBdRe4', 'WPKhcmkvcq', 'omkGi1eZ', 'WQTcw8keca', 'W7iUW4lcKd4', 'W5G9W47cN8oN', 'BSkDDq', 'CCkOWQddTM8', 'k8kJxLXT', 'DcGzW4Si', 'WOXSW47dSmk7', 'WPzQWRLAva', 'WRjOFL/dVq', 'WQLdW6qMxa', 'W6VdUCorWOe+', 'yh0eW4it', 'yWrVgMC', 'W6H2W6mj', 'W7eBWPrhW70', 'WRPEWPH5ua', 'iSk7leK1', 'W7rYsJxcJG', 'W7rDAszcD1vdWOGTgCo/WQi', 'FmkdxuXU', 'amkIwNJcOa', 'm8oMuu0', 'jtBcS8k1da', 'hbRdOCkqpq', 'txmB', 'WOpcM8k4uSk+', 'W6ZcUmobWOeJ', 's8kHWRFdMfC', 'rmkDyvOb', 'ySkpjSodWRO', 'BYxcO8kUlG', 'WR0/WQW', 'W4PBb8krfa', 'wfVcMspdGW', 'W7JdRCowWOa', '4P2aWOb0WR7cPq', 'uSkXWOPXW7i', 'AJ7cV8k9iW', 'c8oScmkKga', 'W6y7WQzBfW', 'WQCzWPLPW5C', 'WRrSW7vdgG', 'WQP6WOe', 'W4GBW4NcQmoI', 'DdhcJ8k+mW', '4PEb4PA44PwA4PsJ4Pw9', 'B8o2w2iI', 'DrbhegC', 'uJHbWRZcOq', 'ytxcTCo5ha', 'mCkoWQRdUCkL', 'WO4uWPnQuW', 'fSkFj8kCpG', 'WPtcH8kKs8kb', 'ECk4WRhdQmkP', 'WO3dTSkX', 'WR5bWPZdJe4', 'W67dSCojWO0F', 'ACoXa1Kg', 'qaf/', 'WQ9QW5NcPmkq', 'WOzwB8kotq', 'p8oGtfu', 'WRLJW5q', 'WRTKW4yczq', 'EqhdGCkWdq', 'tthdSW', 'CSoYnKGl', 'i8obW7TLW4K', 'umkvsfT9', 'mCoMw1PQ', 'WO8FlCoeea', 'EmoTaM8', 'WPnQWOldN8oe', 'ASkVWQLHW4y', 'W63dQSoxWOCJ', 'emkifuCQ', 'vSobBbBcRq', 'k8kZWRddQue', '4PAT4Pw14PAAmv8', 'WQv9WRtcT8o7', 'kCkSurrQ', 'B8k9fNG7', 'd8oOb8kMxq', 'dmkbxeb9', '4Q2/77Q/4Q2x77U9ESoTlG', 'EmoNEwxcSq', 'WRbVW7WWzW', 'WRmkk3yv', 'yCkco2vp', 'W5fSWQLW', 'uCovwMFcLa', 'v8khWQ7dTbm', 'ESkzFxHi', 'AtSn', 'nCkNWRpdSZC', 'WQnSWRddUCoO', 'W4/cS8kVW5i', 'aNxcKSkVWQu', 'W77dSCobWO0+', 'WQ3cQmkQh1i', 'zeFdTSkqW5W', 'WO3dRSo9WPL/W5nhwfZdGxDXW7y', 'q8o2ua/cUq', 'x8kVW6m', 'W5iZW6VcHCoB', 'qColW6ddQYm', 'kCkYx3xcQG', 'sSoIW69EW4O', 'C8kJWRO', 'W5W6W77cHmob', 'W6bJWQPYea', 'CmkYWRFdQMK', 'dmoaamkRaa', 'sCkfnmkdfCkuaWm', 'mMFcGSoQWQe', 'WPftWRNcOmoQ', 'ECkRWQy', 'W4ZcUSkGW48Q', 'WQLRWPhcKSol', 'WRbTFuldRa', 'aSkLeSkUga', 'm8o3cSkY', 'bNhcJW', 'W70JW4eL4PEB', 'DJ4yW5K', 'mmo/cNCg', 'W79bWPRcG1m', 'WQXOyfpdUG', 'WOLjWQ7dQCoK', 'WPrLW4xdSmkl', 'WRbAWOpcIvm', 'W5LqWP3cIu8', '4OYW77IxmHZdMCkJ', 'W5tcUSk8', 'W4TiW43dS8k2', 'rSoUo8k7WOG', 'Bmk/W7ngW48', 'W7lcNmoZphG', 'rmkFxLmW', 'W5zIrSkhka', 'WRq1WO/dPSoP', 'W5epW5lcMI4', 'gxhcJSo7', 'WQaCkNqx', 'WPPbErtcIW', 'DfVcKcVdUa', 'omkOWQZdRJO', 'emkXW7zFWO8', 'uqfG', 'FSofp8kDWQy', 'g8orjCkBnq', 'bCoQcmk1xq', 'W7DSttNdKq', 'qZXfWRNcRW', 'WQ1pW5RdQSkz', 'W4tdUSkqW5uO', 'W71YteVdNq', 'W4DfErhdHq', 'W5XLWQ4Leq', 'W5/dG8kwW6vR', 'WORcRSk5zq', 'WO1dqSkoxG', 'Dmk3WQFdVSkA', 'vCoDjLDf', 'fCkqomkFoW', 'eSoGhSk1', 'imkekMvp', 'W5jhBa8', 'ymkWrdWI', 'DCk4WRFdRa', 'vxBdHCkuW5q', 'CclcTG', 'c8knWRddPs0', 'WOtdISoAW53cOq', 'WR0HWQXhbW', 'WRZcLmk1', 'WRpdPCojW6JcGa', 'WQvXWPFcRa', 'BadcMmkHmW', 'W4/cR8k6', 'WQ91WQhcVCoh', 'WQjSWO3cQmod', 'emkVW7uaWPO', 'WOyRoqVdQG', 'l1RdKmoZoG', 'WQv5zLC', 'WRT7WPq', 'cxJcQCoJWRG', 'uSklWQtdTte', 'm8oRse0V', 'zCkdWQ/dNZK', 'CCo0cG', 'W5SdW47cGtG', 'iZNcT8k+ha', 'rmkbWQDkW6C', 'W6uBmxWd', 'WRL9WPFcVmov', 'n8o/WQi', 'pmkalNHt', 'WQ8SgmoYna', 'WQiuWOLbW6i', 'k8kZWRlcRum', 'j8kQg2JcRq', 'W4KzW4/cGtG', 'WReuu8omra', 'FSkQWQldUq', 'x8kFW67dSZe', 'WPCklCoabG', 'W4ldTSkfW4Gz', 'W4XeuCkawW', 'sCorwZpcGa', 'WQHZWP3cNCkF', 'uCorqsNdLq', 'WQT7WPlcUCox', 'W7XUWPldS8oX', 'ymkSWQBdVSk5', 'W6rVWPBcQSou', 'rSoija', 'W6NdQSkiWOS+', 'W4TpBSkatwhdLMb3W6FcSG', 'W5ywW7tcTCoQ', 'WPbbW7uWyW', 'WQHltmksyW', 'DmkBlw8', 'WPjSW5pdP8kx', 'kM3cG8oCWRS', 'W6DTASkQgG', 'lmoVWQZdHKq', 'W5uVW6VcLGO', 'lSoQuweL', 'W7jstSkIpG', 'WP8vW50', 'zSkjB35Y', 'WQufWPzKW58', 'WP50WR/cJCo/', 'W4XEtSkpoa', 'W4vqFqu', 'W6hdT8olW4H7', 'mwpdR8oHxxWiWQNdRCoMWQnfW4W', 'WRVcJCkWnq', 't8k1yx0n', 'a2FcGCoQWQm', 'WR0IWQPiW7a', 'WQ9xtSkvtq', 'WO1EWRBcVG', 'iCowWR/dRNa', 'CtxcQCkT', 'vSkcrq', 'W79fWOpcGfq', 'ASkJWQldUw4', 'WQP6E8kPya', 'o1ZdKmkYga', 'WPJcLmkek08', 'hdHaWQxcOq', 'uCkWW6i', 'omkRwMu', 'WP4DmSoreG', 'WQGopNbq', 'WOldGmkgW6GO', 'WQHfWQJdMmoi', 'uCozxcVcKa', 'WOOvWRTJgG', 'W53cKSkAW6i+', 'WRfuWPlcJW', 'W782WPvtW6u', 'WRDiFxRdVa', 'zCotFmohW6e', 'yCkKWRDz', 'xu7cRsNdJW', '4P6TkCkxW5pcTG', 'jCkRoeK', 'k8knc1SN', 'agtdGG', 's8kXW6m', 'DZ3cU8kTgG', 'WRytoIBdNG', 'ytxcQq', 'W4VdHmkDW6i/', 'WRq/fX7dPq', 'vmk/BevC', 'W6GcptGa', 'WQbpW6JdUCk2', 'WOG4WO7cNmkF', 'WO4lnSoeea', 'WRqnmGddRG', 'W5aMW6VcHmok', 'W5aazrtdLW', 'vhFdU8kX', 'tdHFWRFcTa', 'WPj5W5hdQSkU', 'twtdOG', 'W6PCpMua', 'W6xdG8khW7yy', 'W6npcCkqca', 'FSkwWPtdVKG', 'WRPOW5NdHq', 'W7W8W7dcMcO', 'v0/cPW', 'W5XukrddHq', 'WPblw3VdOG', 'W4JdGSkhW7eQ', 'W5/dLmksW6i/', 'cmoDWPldN2i', 'iSkRiu8L', 'DYtcHCkgpq', 'D3JcMCkhaq', 'W4Dnvmkg', 'k8kOvwRcOa', 'k8kTseL/', 'W5ObW5a', 'W5NdMmkyW7uK', 'k8kZWRZdRLu', 'WPCTWQP1W7W', 'WO4jWOnzpW', 'DslcTCkVaa', 'nCo2sK1G', 'ECk8vwqH', 'bmowWPVdJv0', 'A8knWPXMW4u', 'BcpcLCkUbW', 'WRvQWOldUa', 'v8kxWQZdPh4', 'vSovxa7cMW', 'qWrNfLa', 'dXRdNSkRiq', 'WOdcSmkZE8kD', 'cSo4yvXu', 'WQXSWP8', 'W5r9WRHKbW', 'emkYW7riWPK', 'BConoW', 'W7JdKSoHW5xdHG', 'W5lcVSk3WOS7', 'W5tcUSk3', 'omk1vhhcTq', 'FtZcQq', 'WPdcPCkgdKO', 'jSoZwvvM', 'W7W1W6pcUbG', '4O+Y77UeW7mkW7ddTa', 'stjF', 'h3hcH8o6WRq', 'tCkvbWCW', 'WOz9W5u', 'WOHVWPxcLmoA', 'Bd3cU8k+da', 'BmkJWRVdRJu', 'CSk4WRFdPmkI', 'ymopoCkbWRG', 'W4FcS8k9W5m', 'WQ54W50aDa', 'smkCWPHmW7m', 'W6hdTSoc', 'oCkYvgJcOa', 'cgFcHCoUWRy', 'W5yaW5tcNX4', 'p8kkWRFdQmk9', 'z8kxpW', 'WPL5WPtcUCot', 'WO0nomoeha', 'W5jDsmkrhG', 'W7/dUCot', 'W5H6WQW', 'WRvVW4S', 'BCkbla', 'WQbVWOJcLCow', 'W4SNW7BcNYW', 'WQzdWO0', 'xSoWb0uQ', 'WR8kwGNdGq', 'WRTZsMddQa', 'W5D1uWJdVG', 'DCk8W6pdRmk5', 'W4tdHCk6W4aU', 'DJxcU8kRcG', 'CmkOcKrj', 'WQiOhW', '4Bw4YkNHTzhHT6NlHG', 'vCohpmkt', 'WRG0fHxdJa', 'W5/dRSkEW54u', 'BCoKWRLtW48', 'Bmk4qNKM', 'j8kdvMxcOW', 'tSkaw0XT', 'W5bmBbRdLG', 'W5NdNSk1W6GZ', 'omozta', 'WReFpLOd', 'DmktWQ7dKtG', 'WRfQD0xdUG', 'W4RdQ8kbW7yp', 'W6rCWOm', 'W7xWS6A0WRBdOq', 'a8kLmSkKva', 'CtNcRSk1da', 'WRLVWPRdRSoR', 'WR/cI8k6ka', 'cmkQc8kYtW', 'W4ifxCkKvG', 'WQ8Fmmocvq', 'W4BdNSkkW6qP', 'ue/cScBdNG', 'WRW1cHtdPa', 'rajHnwK', 'fmocx3vH', 'f8o5yfja', 'W5jSWQvGbq', 'WQdcSCkSFmkM', 'W5HSWQvXhG', 'WRCkogyF', 'WQHEsCkm', 'W5tdMSksW5iC', 'ySkUWPpdGSk/', 'WObXW5JcNmon', 'umodtq', 'WR0FWOj/sW', 'WOldLSkAW6C', 'WPFdOSkOEmkc', 'WPq3pmofmq', 'tmk2W5LYWR4', 'WQncWOD6tq', 'W5TurrJdIG', 'tmkJW7q', 'WRJdKSoLW5/cGW', 'jr3cN8kxpa', 'WRKdWO9qW6e', 'A8kYWPfXW6i', 'WROJWQ9ahW', 'WQTaitHh', 's8kbrMCC', 'WPRdHmoNW47cKG', 'vbr4', 'WOFdV8oxW7hcRq', 'ASoKW6FdRva', 'W4GiW7JcGbu', 'W7bXWRT3eG', 'mmoElq', 'FCoUfSk5WR0', 'zSk7WOXtW5q', 'cu7cVSoMWQq', 'DSkYWQRdTxq', 'WOhcRSkJFSkc', 'W71qwFcJUAhdIq', 'W5VcUSk9', 'i8oplCkNAa', 's0/cVde', 'ySk4qNG6', 'W7pcRCkJW5S9', 'WRzurq', 'Dmk4WRddQmoT', 'WQ83AHVdVq', 'vhZdOSk5WPC', 'WQu4vf/dPq', 'WRXSWQbAuW', 'lCk1Eh3cTG', 'W4vbrmkmgG', 'amovzw57', 'DmkPWQldVNm', 'q8kMWQxdVJy', 'CCoSc2Ok', 'WRXXWP3cVCoF', 'WP9RW50SDG', 'W4bju8kaha', 'WQu1f8ohjq', 'W6BcSmkmW4G', 'WP7cRCkTCG', 'z8kLvMW', 'WRn6WPxcLSol', 'CbPCWONcKa', 'iCo5W6RdOre', 'WPrmWQlcRmoj', 'WQhdLSoPW4JcHW', 'W44iW4BcMSoj', 'nmkGna', 'WRj6WPBcNCoY', 'WPWFlCoveG', 'WQ5QAW', 'W7bFrmkqpW', 'WPvUWQ5XvW', 'W4vpFG', 'BCojmSkDW6C', 'BmkPrhqM', 'WRn3WPBdRmoG', 'W6C4WQbpfq', 'W5b5WOrUbW', 'W5bgWR5Iea', 'hxJcL8oMWR8', 'tCkPELjM', 'W6pdNSkhW7a', 'WRTEW6xdQCkx', 'WRldLSo/W5NcMq', 'b8oZdW', 'W5r5WRTPhG', 'WQvAWRVcVmou', 'W7hcTSkMW60a', 'W5rqErhdJq', 'W67cKmk9W64P', 'WO9PWQlcICoj', 'WPuBW43cLa', 'eb1KbuW', 'WP/cJ8kVW4GK', 's8kvWOBdUdC', 'WQisWP8', 'uCovudm', 'W5dcRCk3', 'iSoHmmkDWR4', 'm8kvoW', 'FstdKmkUaq', 'q8kBew5v', 'nmotWOpdT2q', 'BetdNmkB', 'z8onfmkuWQe', 'WO0loSoegG', 'lUg3HUg3LGdIGOi', 'vuJdOSkAW7m', 'omkJWRVdRMG', 'vbqRfKS', 'WRD9ybJdPa', '4PEC4PEL4PEF4Pwqoq', 'WO0Bomotaq', 'W53cTCkVF8kx', 'WROCcCoQbG', 'kmoXeXK', 'l8k1wxy6', 'qCo9ytpcKq', 'WQzVWOG', 'b8oXa8oHuq', 'wh3cUYldMW', 'h8kAiK0', 'rbr4fG', 'WOXOW4xdSmkZ', 'y8opmG', 'WPVcRmkPCCks', '4P2VW5adExi', 'fmoI8l6UQ8oGrG', 't8ksWRbmW6C', 'WQxdKSoLW4JcJG', 'veVcRctdJG', 'W4fED8oyha', 'mmkJjq', 'W5JcUSkGW449', 'tsJcK8o+WQq', 'jt7dLSkRcG', 'W41YW7ZcN8ok', 'WPT5WRLGba', 'zCkOxxRcRa', 'dN3cL8oJW78', 'nmoLWOldRLa', 'E8kiWOf2W68', 'v8kewKX/', 'FtXno2K', 'WQxcICkY', 'rSorwdpcNa', 'F0NcPHtdRa', 'EIacW4W', 'zCkbogHb', 'jSkZfMJcVa', 'WQ5RW5JcN8oq', 'aZVcGmoHWRu', 'W4JdGSkaW6aS', 'W7v3WOFcVW', 'WQX6WPBcJCow', 'W4ddKmkuW6rR', 'WOz5ymkSwW', 'imoVWRNdOvy', 'WRjSWPNcNSoA', 'WQL3WP3cVCkE', 'WQTIW5pdOCk1', 'WQhdLSoPW4JdHa', 'WR0IW6hcQmo6', 'lmkcuKJcRa', 'WRSKWPS', 'ySk8WQldV8kU', 'wmk+y0yt', 'W7v7WOFdOSkQ', 'WRv8W5FdRSo0', 'WOyXhH/dRW', 'lSk4rNH6', 'ts5BWRRcIW', 'DG5HWP/cLa', 'mb3dHCoIcq', 'WRVcJCkYnhC', 'E8ksEMCh', 'vMZdTSk5W5G', 'W6vVWPZcUSoD', 'v8k2WQzaWOS', 'z8kDogXh', 'wsCdW48R', 'W5SaBa/dLG', 'yJxcRSkPgq', 'W6PrWR3dUmow', 'dghcKSoMWR4', 'xv/cUIJdHq', 'wMZdOG', 'WPCoW43cHq', 'kCo5WQtdP0u', 'W6FcGSkIWO7dM2tcTgFcISo6WRVdRbS', 'WO8MW4VdRCk+', 'imoOWQFdRb8', 'qMpcL8o5', 'W5JdGSkw', 'vg3dS8kOWPC', 'qHXQfLa', 'WRr+WOZcKmoq', 'vSkgWP/dJXm', 'W40pu8ofca', 'vYrenuy', 'W6pdRSohWQOy', 'W6BcT8oFWOeH', 'WQPLW5LdzW', 'W6zZWP5Plq', 'CYvgWORcJq', 'c8kzgfCl', 'W6r+WPdcTSou', 'WPfrkCoueW', 'qclcQmk2gW', 'WP/cSSk4Emku', 'W7RdHSk3W5ue', 'rX/cJSkgjW', 'q3dcHSo/W7e', 'WOpdGCkbW6q4', 'WQ8WWOddLmom', 'C8o7pg0c', 'WP9wWRHwva', 'isFdQCk4oG', 'W401W6pcOXK', 'jbFdN8kMpa', 'uCkfsL1X', 'WR0FWP5Iqa', 'FSoflSkcWQG', 'WQrTWQFcMSoE', 'WQTpnMDq', 'W77dVCklW4i', 's31fWRxcUa', 'W4ldGSoDWQey', 'vXnIdve', 'jSkZfNdcOa', 'W7DwWPZcGG', 'WRHTWPRcRmoF', 'mmkJEKZcSa', 'WRjfWOXLsW', 'qsHvWRNcRW', 'W7GIxHZdTq', 'wmoai8kDpa', 'xbZcQCk6bG', 'WObTW5JdQSk3', 's8knWQW', 'W7zPC8kSeW', 'sCkeWR96W7i', 'W7vcyhrD', 'WPCnW5BcNa', 'fmklW6HBWOS', 'vSo/ESkZWPi', 'CsJcRG', 'CCoTb24b', 'iCoYy39E', 'WRPCWO0Sua', 'fSo3d8k3wq', 'BSkKWRTgW7q', 'WQFdNmoJWPZcHa', 'WQ04pXZcQq', 'D8kkWORdNtG', 'WOq6l1SG', 'ncRdOSkVjW', 'W43cVSk8', 'fmk7mwuQ', 'W6vPzGVdGq', 'nSoVWQpdRLy', 'qmodwYBcKG', 'WQrRyvFdRG', 'WRCfWPb3W7C', 'smkNW7roWO8', 'AmkSweSN', 'iCk8WQ7dPuu', 'vgddOmkQW5y', 'aMBcJW', 'WRzpc8kmsq', 'W5ddV8kIW4O9', 'WOriWR9kAa', 'WRVcNmo+W5/cNW', 'WQDvWPT4', 'W6tdQ8kfWO4J', 'WRm/aa', 'W44bW4NcGCoa', 'emo7FN9d', 'B8o2tJWM', 'WRvXDfa', 'BCoVW6pcRH8', 'mHBcKCk1aa', 'W4fgWRHcgG', 'WRPtWOL4tq', 'dtTyWRZcPq', 'A8kJWQ3dVLC', 'tmkCx0W+', 'WRj1z8kXza', 'lCkJuMJcRa', 'uCovudpdMG', 'oSk0j08T', 'W57cQ8k9W4O/', '4PEG4Psi4PA84PAc4PEB', 'WOPOWQRcN8op', 'y8oiqXxcNW', 'vCk2qNa5', 'WRaVWQXf', 'W5unW5tcLJu', 'ACocrtFcHW', 'ASkYq1Km', 'WQmPWRa', 'W4ZdGCkAWQ4M', 'WOFcU+kzKSkH', 'B8kJWQhdTW', 'zCk8WRddUq', 'WQtcNCkqj2G', 'W4tdP8kLW6Wc', 'BcLjWPJcLq', 'W6GPWRTBha', 'W4WfW5tcMtG', 'W5aplmozfG', 'wSkTW6vyWOC', 'nmoLWQpdQva', 'W6hILjNILjpILlFILOG', 'cxhcMSoQWQu', 'WR4wWP8aW7y', 'qmkuCW', 'ymoRagaa', 'emoepmkE', 'i8ooye1R', 'fSo0iSkNsG', 'D8ovc3qR', 'WQmcWPHuW70', 'yIS7W5y0', 'W6XqWPlcJ0K', 'WOuasdtcHa', 'fmovp8kvlG', 'WOpcRSk4ASkp', 'WRPMW60pEa', 'W4ZdGCkdW60I', 'qCoXjvCZ', 'qCoutsK', 'rmkvxq', 'v8kWE1Su', 'WQ16W54kzq', 'DZrYa3q', 'WPewWPfHgG', 'W7ZdSmoeWPXX', 'WOjRWR3cVSoJ', 'lCkMWQanW5a', 'iCkQwNVcOa', 'WRPXqSkf', 'iCkVku9M', 'imk8WR7dQvW', 'EmknWQ7dVSk+', 'ESoTgMSI', 'WRLYWPtcN8oq', 'uCoFoNKj', 'W5G3W6S', 'scxdPSk5W4u', 'B0/cVZpdIq', 'WPv3yaNdJa', 'WPVcJSkbCCkr', 'dgtcHSoJWRG', 'WRL7WOpdOSoQ', 'xvRcRI3dGW', 'W54fW4ZcKdm', 'W63dRmkiWPSL', 'lCkMWQanW4u', 'emkCiM8I', 'W48JWP0', 'vvJcTY/dJq', 'tmoeqa', 'W4GnW5tcGtG', 'WRbPW4ykFG', 'sCkdrKC', 'W6XQWQZcV3a', 'jsFcS8k1bq', 'W5ZcVSk6W4iG', 'bCo1wJxcMG', 'WOmLagmy', 'WR9OW5mxEq', 'WRm/bXddRW', 'W7JdQmorWPa', 'amoIc8kwtq', 'WRuAkN0', 'rgRdSq', 'WQj5zLpdRG', 'W4zSWQvHeG', 'rsXeWRhcTa', 'txVcKmkV', 'FCk0WRhdTwG', 'oSkIsMNcOa', 'WQPpp2CF', 'W4X8WR/cOmok', 'W7v7WOhdOG', 'W45UD8kRmq', 'W5aOW77cMmoh', 'iSoqlmklWRO', 'DCk8WRa', 'WQv+WOZcMa', 'BSk4WRq', 'WPddUSoJW5xcPq', 'WQ5/WO/dV8kQ', 'CSk+WRXuW4u', 'EmofjSkA', 'W5XNWQHPaG', 'W7hcMSkVWQPR', 'W73cTmkYnhG', '8y26S8ozW7ldOmk9', 'W4jks8ka', 'c8kix3xcIq', 'u3hdOSk0W5y', 'yL3dMmkqW4q', 'WQqVfbddKW', 'WRGBWP4aW6y', 'pSoZta', 'eCozqunI', 'tudcV8oeWOu', 'i8oIxvG', 'W4ZcQ8kVW5K7', 'tayJW4um', 'WPpcT8kUDmki', 'z8k/fNhcPa', 'xdSfW7uo', 'oCkvCv7cRa', 'jCkehdG', 'vgddQSkO', 'W5bJWP5Cpq', 'DmokqqdcSa', 'WQD2WPBcNq', 'z8khyv5K', 'WQqooG', 'kJJcV8kWcG', 'k8oGuwTB', 'WPnWW5tdRCk9', 'WOPSW4q', 'bCogiCkRwG', 'FNiyW44l', 'WPLoW507wW', 'WOfjWQpcNCoN', 'WQfrWPb5Aq', 'W7HxWOlcNMW', 'WRykn3e9', 'WQOKWPG', 'W6iqWOS', 'nSoPc8kWna', 'xJHIo3i', 'tmkTWOBdKHm', 'WQLkWOdcQmoi', 'CmkSwwuW', 'W6ZdVCowWOS', 'WQjGW6FdPmkP', 'pmkUvxVdPq', 'WPhcOCk/B8kv', 'WP/cNSkXe3m', 'WOXGW5ddPSkU', 'WQbmWORcVmo/', 'W6v0wZBdNa', 'umkhWRJdPhe', 'WRabptrA', 'n8o5WQVdO0u', 'tWldSgRcGW', 'z8k0vhdcSW', '4PwX4Pwi4PwY4PE94PA1', 'WPf4W6aqwG', 'WRi6WPBdPCoH', 'umkhWRJdPh4', 'lmoZWQtdRv0', 'WRDKW5epza', 'W7T6wG7dJG', 'WQP0WPa', 'WR86WPVdOSo2', 'CSk2WQFdQa', 'u8kEtG', 'W587k8ocgG', 'WR4EWP8oW6i', 'vb58de8', 'WQOQW4ycEG', 'WQLXzfm', 'pmk4WRpdPmoG', '8kASG0BdQW', 'zConoCou', 'tSkagG', 'WQqfWP4aW7W', 'nSolWQpdTfK', 'W6CvW57cGSo2', 'umocra', '4P6jt3nqaG', 'WQ9kyNddUq', 'qmorwYldLq', 'CSkjwLTV', 'umkvcv1S', 'aSkDmSkDnW', 'W7nXWPPNgW', 'rqnN', 'WRBcGCkS', 'WR1/WOm', 'WPCBomouea', 'B8kgW4jkWOK', 'WPmBn8oxaq', 'W61nsmkDeq', 'ECoycSkyWPm', 'pCoXWQBdPL4', 'WPTbEq3cIW', 'WQq/W7mdEq', 'xCkVWOpdQI8', 'bmoSWPNdLgu', 'W67dMmkPW6y4', 'EmoTg3mw', 'WOvPWOpdRSo1', 'WQ9UWOpcRSoM', 'sCoFssm', 'tSkJW7jzWO8', 'CmkNW5XLWOq', 'qmknWQpdQa', 'iSoXw1z9', 'WQ8Kl3e+', 'WPvOWQi', 'WO18WO7cT8oj', 'WPNcOCkthNG', 'W7S5WPqA', 'WQNcGCkMjty', 'W69SWOJcI8oA', 'WQhcNCk7', 'eSokWOFdP34', 'W7fww8ov', 'W4fiEHldIa', 'Dmo1a2Ol', 'hCosFmkeAa', 'WRPiWQpcLSoz', 'nSo4nmkImG', 'W4VdMmkFW6qL', 'l0pcRSoFWR4', 'WPWFlCozgG', 'gwZcGG', 'WPCFWPr2W7u', 'sYafW7eD', 'DstcQSk/da', 'WQmZhb/cUa', 'EmozlSklW6K', 'WOjdWO/cHs8', 'WRmAWOS', 'W7NcVSkNW4CQ', 'WR9zWP3dICoa', 'W5b7WRLQbq', 'bCoQaSkKbW', 'rsvfWRxcRG', 'E8kQW5beWRG', 'WPyxlK89', 'WPCYWRfqW54', 'rCknWOfnW6e', 'zCoKfSk7WQO', 'W6P1WPdcV8oy', 'sSkjy29p', 'B8k9hdhINii', 'pmkVkvm', 'WRv3xLNdVG', 'WOXjrSkg', 'WO8pjG3dLG', 'WRfnW57cILe', 'WP/dMmoHW4xcGa', 'W4WJW4RcNmo/', 'dmoijq', 'WOb5W5y', 'W5zfqSkldW', 'fmkCmveJ', 'WQGUWOPfW7K', 'WRuTebBdVa', 'WQusW5TxW7O', 'WQmgnxbq', 'bCoKeSkOvW', 'WO3cJ8otWQ8k', 'WQWcohiv', 'iSoTxq', 'WQLRWPxcLq', 'WQerWPjHW7K', 'ACopyCkBWRS', 'bmkVWOxdNGS', 'gxVcSmoMWQK', 'WQDGW5hdPSo6', 'lCoQs27cQG', 'rZjcWRxcOq', 'oCk6lve', 'WPqDWRBcNK8', 'WPnSW5ZdOmkU', 'cSo4yvTd', 'z8ofjW', 'pCoQwq', 'WRXAx8kirW', 'W5aLW7RcN8oF', 'rmorsW', 'W7PNWOBcI3C', 'hCoriSkxEG', 'WOXmW4usrG', 'W5arpSox', 'ghNcK8oHWQu', 'kSoci8kWua', 'W78dWO9tW7C', 'sSkFrW', 'W7jqWP3cI0K', 'W5KyW5pcLc0', 'nHddKmk2aa', 'WQfVWRDTsa', 'B0VcSYddIq', 'WQ8WWO7cL8oB', 'DZ/cQmo3', 'rSkXW7XVWQi', 'ASovmmknWR0', 'WQ59WPxcVCoe', 'ASoRWQ/dOLW', 'W5xdHCk+W6q4', 'WQy2WPJcQmoa', 'WQ5MW5mkFW', 'FSkJmaK', 'W75cEqZdNG', 'W7zuWOhcIvK', 'uINcQmkogq', 'y8o8awCO', 'lJ0zWOeo', 'W7PSWPBdP8oS', 'W4JdKSkhWQeE', '8kskV8owWQxcGCkQ', 'rdeFW4Ws', 'W4WEW4NcMa', 'dwRdTmk6W54', 'W6Pms8kZha', 'E8ofpmkd', 'tJXCWRu', 'W4xdNCoRWR17', 'W7v1rmoBca', 'W4xdOCksW7mQ', 'ySkLW7nfW5i', 'imoYWR4', 's8oQamkNuq', 'Ab/cQSk+dW', 'rmobjwCM', 'WOu8f8oHgG', 'BSkRzKe8', 'WRS4WRTahq', 'zSk3WQ/dOSkS', 'ACoSa20V', 'FSk2fY4x', 'u8kFWOfRW5G', 'W65NW5xcLmoE', 'rCkpWQu', 'x8krWRpdQgK', 'qSkCqeHT', 'WQPjWODMCG', 'pmkLnG', 'axVcKq', 'jSo9WR7dQv4', 'mmk+mfeV', 'WRyUfLhdRW', 'z8oHubLG', 'W4bOWR9Sga', 'xSkJW63dIGe', 'W7a1W6BcHbq', 'WRv7WOhdNSoj', 'W5SgW7NcNcW', 'WOXqWRtdN8o0', 'W7HfWOLbaq', 'lSkxBhJcLW', 'W5WdW5FcMZe', 'WOjMW5pdSmkU', 'W4zGWRfG', 'jmkOt2JcRa', 'WPjlW7WK', 'W6v1WONdRa', 'W5VcKSkhW58R', 'q2tdPSk1W5G', 'W4fjFrhdGq', 'WRG4WP7cT8kq', 'rCk0i0Td', 'WOn8BSkUlW', 'rCk8WRVdUCo3', 'W4ZdG8oEW6iK', 'x8kGW6DzWOi', 'WQq5arddTG', 'WRDQWPVdRSoX', 'umoTW74aWO8', 'jCote8kcsG', 'Fmk4WRm', 'WRvTWPhcLa', 'WRv6WOdcJCkq', 'W79CWPRcGvW', 's8klW4bSWO0', 'vmkqWQ/dPJC', 'WOjHW5ZdQSk0', 'a8oHd8k1', 'WOL4WPpcM8o+', 'W7xdLmo0W4JdIW', 'WRCmmq', 'WPKxnCovoW', 'omkPWQddUw8', 'WP1+ymkorG', 'WRWFpa', 'WRCkkxKr', 'rSoGhSk1sG', 'WRtcL8o8Ede', 'W7aAWPNcN1i', 'qNVcHSo6WQi', 'mGddG8kTgG', 'ECkDWPPmW5K', 'd8oQcmkSva', 'WOuui8oXlW', 'W4VcTSk6W4CQ', 'WPbCWPtdICoK', 'W5XLWQ9UlW', 'e8ovka', 'DSk4FNyt', 'xCkHW7nFWPG', 'W7LqWP3cIu8', 'W7fTD8kSpG', 'x8oJW7mkW7W', 'imoNwNlcOq', 'BCoulCkpWRK', 'W5W6W77cMq', 'WQnWWOZcT8oE', 'emo5WO7dKhu', 'sSkTW5vzWPG', 'W5yGWR/cJSoa', 'WOf2D0hdUG', 'stbqWRFcPq', 's8kFWOj1W6S', 'W4jyv8kjeG', 'W7JdUCorWOa/', 'uY1DWRNcTa', 'FSofm8kbWR8', 'x8oBhuKY', 'r8koWRJdHJ8', '4BsGYPZHTPlHT4FiQW', 'sb14', 'DHyGW4m+', 'W6fZWPhcL8ou', 'WOj6W4S', 'u2ZdQmk5', 'hCoaaSkgoW', 'yZNcTmk9ca', 'WRGAWPPhW7C', 'W49MW43dPSk0', 'tmkxruWW', 'DbuCWP3cHa', 'W7aAWOxcGLK', 'W57cSSkR', 'nmkHeMGf', 'vdHjWQq', 'WR4fWP8', 'W7hcS8kHW6mf', 'v8kPC0P1', 'WRiLiWBcUq', 'W57cQSkQW4iG', 'Bmk4x38', 'WPLtWPXHuq', 'WOtcQ8kUEmki', 'cmorwc7dMa', 'tmoEt2C', 'WQ7cKmo+ixG', 'WQ4KkSoQlW', 'WO0DmCkpba', 'W4K3W63cJSok', 'WOBcP8kYAq', 'AcddQq', 'WQ19FfhdVq', 'zCo1oCkcWOi', 'nbpdHCkRbW', 'FCkQW7NcP8oh', 'zSozCIdcHG', 'omk1uMRcPa', 'WOmLkLKD', 'W4e1W5hcKdy', 'W5vyW4e', 't0/cScxdPW', 'WRusWOG', 'W7nLW5qfEa', 'EvlcRJpdJW', 'pCo2cwum', 'CSk8whuy', 'W7a8W5lcSI8', 'iSonp8kAWQe', 'WQzDWO1Iua', 'W6hdTSogWOqK', 'mGhdGSkJdW', 'o8kJfxuc', 'WR7dLSoO', 'hNFcHmoUWQe', 'qbb/fKy', 'hmkWW6nzWP8', 'smknWQhdTa', 'W61CWONcIq', 'W6qYW7pdKSko', 'WRddLmoJW53cHG', 'W7K1aXtdQa', 'tSkDp3G', 'smkvua', 'DmkVWRtdVIK', 'y8kDcMvm', 'cmohrsy', 'j8kRmL4J', 'WRPVW4e', 'vSortYi', 'imkIuNO', 'WPzOW4S', 'nCkPWQxdVhm', 'FtSrW4q', 'ECooo8k0WRG', 'W58immouea', 'tSkEaG', 'WQqUarJdPq', 'rSkHW6nb', 'fCorjCkrmG', 'WQqFkxKj', 'lCkto2al', 'CbnUWRBcIG', 'umk4FevY', 'rSkExuHQ', 'WPSfWQXHaW', 'WQDvWPb4cW', 'o8k2F03cNq', 'qCo1qrpcNa', 'WQmZfrC', 'DmkQWRddRmkQ', 'jmklfNCr', 'WRf/WO4', 'WRn0W5FdP8oK', 'WQ57WP0', 'WOlcTSkOuCkp', 'cSoyts7cLG', 'W5Teva', 'gCoExsRcLW', 's3BdT8k9W4u', 'txRcG8oIWRm', 'WRv4WO7cKmoB', 'W5rvBrtdIW', 'y8oWg2zF', 'ySkbyfn5', 'WRaBmhOE', 'WRr5WOpdOSoQ', 'EmkamCkaWQW', 'nSo3a8k3uq', 'Dmk1W6pdVgG', 'WP4okCoCha', 'oKtcOmoBWPS', 'WQTVWPJdV8oG', 'WO57W4q', 'qSoBn2Ka', 'hxxcGSo7WRq', 'W5ebW4xcKx0', 'WR59WOhcRmkF', 'BSkAwhL2', 'WPhcJmk1aL8', 'h8oZk8kJnq', 'W483W7VdJCoP', 'B8kUWR1hW5q', 'emkTW7ziWOq', 'WRlcImkOndK', 'WRJcGmk3jq', 'nbFdLCkTcW', 'p2qYW4inbHWP', 'WQ9/W50xDa', 'WOldNmkdW6qS', 'ACoxhCkbWQC', 'WQ/dTCo8W6xcNq', 'E8o8fG', 'W7KQartdTq', 'WRj7yfFdUq', 'EeZcVmkpW4m', 'W5ffEH4', 'W7jBsSkYga', 'W5PsCa', 'qXrLbM4', 'W5CMW7lcGq', 'WRBdOCoEW5lcPa', 'WRhdLSoIW58', 'WP9OWOxdPmo3', 'W4btBa', 'WRTTWPBcRmov', 'rclcOmk4aW', 'WOhcQSkVEmkt', 'jSo5WQ7dR1i', 'fCoShmkK', 'tfRcUZpcHa', 'WPFcRmoNWOvH', 'rmoxtwFdJW', 'WQ5/WO/dVW', 'WRP0WPJcOq', 'E8kFqK5m', 'WRqFWR9PW5y', 'dG5fWRxcSa', 'WOzzWRFcNW', 'W4rfWO5Qlq', 'W40FEea', 'p8oZh2yc', 'WRddGmoIW53cJa', 'hmoFmG', 'W5C3W7BcJG', 'AmkiW4HoWPS', 'yCkhl2bj', 'uZHv', 'WPv8W4/dPSo0', 'dCoGhW', 'yCksWOBdNxG', 'W54+W7BcJmoC', 'W6FdRmorWOe0', 'WRVdGmoLW47cNG', 'W4OZW43cQGi', 'qanKauy', 'WRi+gGu', 'WOBdVCoEW77cSq', 'W5CMW6VcNCoC', 'W4zfzXNdQq', 'W7ZdSCokWOy', 'W7e2WO5eW7S', 'uGHUcLK', 'WQPcW4CREG', 'tsxdVCkYW5i', 'WPFcO8k5Emoh', 'cxVcGCoHWR0', 'nSoUau02', 'ySkOWRHbW4C', 'W73dTCoaWOyL', 'umkhWRJdPa', 'W5jUW40', 'h8kcAvlcKq', 'vshcTmkydW', 'y8khWOhdHY4', 'DCoTqNar', 'WPnbWRBcICoD', 'aSoXWPZdIvm', 'imoQWRddTMC', 'WQf9WOa', 'WOlcO8k+ACkc', 'WRtcImk7iIm', 'EJChW4qr', 'W50EW5lcMI8', 'WOLuWPFdGwuoWRCZW68QWQ1sWRX9', 'WPv/WQjHeG', 'W65VD1tdPa', 'WQ1wsSkvwW', 'WQb8yv7dRa', 'zJfHWOhcQq', 'W61TW4i', 'iNZcK8o6WOC', 'WQ4BnN5E', 'WQuyWOzefW', 'WQryWOfGqq', 'W6TyWPBcGKK', 'W5ZcSSk4Emku', 'WQmsWPPtW70', 'WQn1WPJcV8ov', 'AHbjWPFcHq', 'yajQd1y', 'W5VdMmkxW6qK', 'W6PCWOFcGfG', 'BSkVWQFdV3u', 'xCkwWQNdLL0', 'zCkSWRhdQmky', 'WRGgWQTpW5q', 'WQbQCv7cQq', 'WRuBWQrmW7S', 'W7ngWOfOqq', 'yCk2sM5p', 'o8o54P+x77QcW4FdQa', 'WP02tHZdLq', 'WOpcP8kCECkn', 'l8oKWRldLwe', 'zmo8f3C', 'pmkIsgG', 'WOlcSmkLA8ko', 'q8oAcmk7WOS', 'WPHbWPpcLSok', 'oCoKW7XqW5i', 'WR9yWOnnW74', 'WOVcJCktg1G', 'eCkYW6Hk', 'WOzUW5JdSq', 'W7GIxHFdQG', 'nSoFjCkd', 'wmkUW6Do', 'ySk2wgiH', 'zCoAbfuW', 'r8k1WRFdV2O', 'WOTTWQBdP8oF', 'WQ5YW5JcJCox', 'vSk6W5bmWQi', 'W4hdNSku', 'DCkGt1nt', 'WQ5ormkvtq', 'c8oftLbm', 'AmkGWQZdP8kB', 'ASk6WOnpW6y', 'W5eismkgga', 'cCoJd8kTxq', 'dNVcMmo8WQu', 'WPy7ksBdLW', 'bhNcL8oOWRq', 'iSoMBHzV', 'urXU', 'WQDwr8khrW', 'FmktWRVdR8kj', 'qComh1Ke', 'W5HqoG', 'WPNcP8kZ', 'tIxdOCk5W5K', 'WPXCWR7cVSoQ', 'sNddU8kLW6e', 'W6pdVCoC', 'W7OCW4RcPmo+', 'rmoftc7cMG', 'WRT5W4ecDG', 'mCkyWPpdHSoT', 'W5DmW5pcMJe', 'WOvWWO/cL8ot', 'WQ4yW4RcJra', 'b8oPd8kGsW', 'WP5hkW/dJa', 'BXWYW7iH', 'wKBcVYi', 'A8ofkG', 'WO9SC0ddGG', 'aCo3yLb/', 'WRvWDXBdRa', 'F8o2bmkJWOa', '4P+5acmTW4G', 'oCk6ne01', 'udXyWQldOa', 'mtRcQSkLWO0', 'W7TgWOdcJvO', 'WPialNqB', 'tmoDssdcKa', 'tsFcQmkqiW', 'WRZcKCk6ohy', 'WPTnWRVcGSot', 'WO5iW5mqzq', 'AJSfW4zh', 'W4K3WRhdHW', 'jmoxWONdQNa', 'WRz5E0lcPq', 'WPOnkSoreG', 'BmkBW4PpWOK', 'W74vW5lcQSo9', 'WR5BWP4', 'BSk+uq', 'ACoooSkDWP4', 'WO5GW5NcRCkQ', 'B8kRWQi', 'rSkaEL1/', 'nCoWrxPo', 'W4JdRCoLCmkg', 'W7W0W6pcKYu', 'WQT4W54', 'DmkkpW', 'cCoXeSkOxq', 'W73cGSk3pxW', 'W5uFW4C', 'WRCqWOXLvG', 'AmkqwMJcOa', 'W75MW5SnEG', 'rILyWRVcTa', 'ymkUWPhdJfa', 'WOnAWRpcLSor', 'WQDFWQ5Lxa', 'zmk/aN1c', 'W7WjW5tcLdq', 'E8kNWRFdV30', 'W5hdT8oNWOS', 'i8oMwG', 'AJDlW5up', 'AmkPWOpdLbO', 'WQfuWRDtAq', 'nmoPWQxdTfq', 'vHPJo2C', 'lSk5qwSm', 'u07cHWVdSG', 'rxddOmkWWOO', 'W5hdUmk6WOS8', 'WQFdLSoWW5/cNW', 't8oGsXpcHq', 'WRiLW5FdLG', 'WQTEu8kv', 'CfNdSa', 'mSkVnfqP', 'c8kkWQxdUt0', 'WOtcK8k6oxu', 'Amk4W7nMW48', 'yCkglNTR', 'WPxcPSkCg24', 'WRbIWPf8xa', '4OY5omotWO7dKq', 'WQealNSC', 'CSkxkMPs', 'W7fcWPBcNK0', 'zSkLWQDbW5q', 'atRcL8o/WQe', 'BCovoSkhWQy', 'C8kcj2bs', 'C8oQgq', 'ov3dGCkMdG', 'WRFdNSoH', 'W5qjW4pcGtG', 'WRtcJSkMACk3', 'dMdcMCo9W7K', 'WRfXWQreta', 'W4D3WPxcGgO', 'dhJcN8oUWQi', 'WRzzW6VdL8kq', 'rdjsWQxcRq', 'rffKdey', 'v8kcrLP1', 'kSkEyvRcSa', 'WRzaWRBdQSov', 'y8k2WRhcRCkQ', 'qSkaw0r6', 'WRzxWRPqW6i', 'WQmgnxa+', 'W5n6Dmk0fW', 'ySkPWRjuW4G', 'dmo2e8k/fq', 'zCoRaW', 'WQH1C1hdRa', 'WRDQW4m', 'uMddOSkWW5y', 'WP/cRCkBeg8', 'W5RcRmk9W4OO', 'zCoooq', 'WRf2Dq', 'WRXprmktaa', 'WPuDWR9nW4u', 'W5Tgsmkgpa', 'WQacWPruW7C', 'iSkRlLKl', 'FGLac08', 'ECkRWOxdRuW', 'WRbCrmkstq', 'oX3dLG', 'nh1eW5ev', 'rWmmW5uI', 'W5XoBf3dHW', 'uSk+WPRdUem', 'aa1DWRxcOq', 'WQKOWQbhfa', 'WOLSW5tdPq', 'WR5BWR9LzG', 'y8k8WQldVSkI', 'WOnHzLpdUG', 'mCo8fmkwsa', 'jMBcPCojWRy', 'z8oMw0TG', 'W5LMWQLtfa', 'WRD2W5NdR8oQ', 'rXXQ', 'W7xdO8o9W5NcIG', 'p8oHobaJ', 'amoUwvDd', 'WOnfW7hdRmkC', 'W7TmzJxdRG', 'WRJcKCkupha', 'WRxcJmkaF8kR', 'W71qWOdcN1S', 'uSkkBMzY', 'CCo4bqRcSq', 'W73cM8k5WPldGa', 'WRzLW4ympq', '8y2vQCoPaW', 'WQ7cGCk/i3O', 'WQjQWPxcNmor', 'mHZdHCkJha', 'CZDSa0y', 'W6PdAa/dGa', 'WRzvqSkv', 'qSk/WR91W6K', 'W6JcUSoUW4GU', 'WQq4yL/dQG', 'DsdcV8k9sq', 'WPWBWRLDmq', 'vmkqWQ/dTJC', 'lX/dNCkKbW', 'AdGLmvC', 'hSoOcSkNvW', 'WRy6WRVdOSoR', 'dSkFt093', 'ACkFkM5d', 'W47dLmkjW5uI', 'WQLRWOZcICom', 'qar4cG', 'DmkDb2zr', 'WPjvFCkVzq', 'nfZcNmo2WRK', 'W5ZcUSkQW4qS', 'W5mkW7BcMCoi', 'WRDFWP9Isa', 'DCkRx3W', 'wmoHluS8', 'uvRdQG', 'W7NdS8k8W6mZ', 'WQqFkxKz', 'WQ57WQ/cLSoi', 'WQ1plxac', 'aCkFDhtcIW', 'W4a1W5NdSVcZKkO', 'WP7cJ8k2g2a', 'WR9dW5DLqa', 'y8ozrcldLq', 'W5bHWP3cVfi', 'CtxcOSkT', 'W5fmybpdJW', 'WPjRWRNdOCox', 'WRWwWOntW7S', 'WQ4SW47dIq', 'ACoUwqO', 'zZ4oWOet', 'CCkUWRjdW5q', 'hmo1WP7dKwC', 'zCksyfnU', 'WRJdICk/i3O', 'umkYw388', 'wbrQbKy', 'WRachtZdIa', 'CSkWWRxdIhS', 'WRH9WPtcT8oe', 'fCo2d8kUvG', 'W47cQSkHW58Q', 'WRL/WPpdPmoM', 'WQyolxax', 'oSk6kvaJ', 'WQ0UWQ5y', 'W519WR91ba', 'W4GZW6K', 'WPNcP8k4', 'dhFcNCoUWRy', 'BSkGWOrjW6i', 'W59MWQjR', 'W6igWRfVtSo3WPtcVq', 'WOSBn8oekG', 'umkarubQ', 'sWBcJCkibG', 'hSkgW6LAWOq', 'CSk2WQq', 'W54dW4/cGtG', 'W7xcH8kxW6yD', 'WPyln8oQbW', 'zetdQSkgW7O', '4P2SFrVcGmkS', 'jSkIsx3cSq', 'gIhdVSkskG', 'wutcQG', 'WQXkD1ZdPq', 'vruRfuS', 'WRu1fWG', 'iwemW5ex', 'W54KW7y', 'WPlcSmkOW40M', 'wfhdTSkjW5m', 'B8k4w3q', 'W4XAxG', 'BConrGmV', 'W5aKW7BcH8oS', 'W5HmjXNdIW', 'W5eAnSohgW', 'W74hWPvh', 'u3tdLSknW68', 'WRTeWPX8vW', 'W6rQWOH3oW', 'WQ0+WRS', 'WQDxWPS', 't0VcUsq', 'W714WOvVjq', 'WRrvWPW', 'W4fSWRnX', 'mGRdM8kAhW', 'smkBWPddPW0', 'W4f7xCkkfG', 'W5KEWO3cLJi', 'WRf/W4zdrG', 'FdCkW4it', 'W7LWuW', 'W4tdGSorWQHJ', 'W6uJogye', 'WOXzuSkmga', 'W7rrwmkorG', 'W4XjqW', 'WOzSW5pdPSkO', 'WO0tomoebG', 'CCk8rgj7', 'l8oMqf8', 'WOhcOCk4Fmkx', 'WQqCnNTk', 'jCkMt3/cRq', 'WODGW5pdP8kU', 'F0hcTGVdKW', 'AmkHxMJcPG', 'l8ovCCkroW', 'eSoPWQJdMvm', 'WPC9WOHSW78', 'zmk3u2m0', 'vXqXsam', 'W4tdNmksW6yU', 'WQTXWPpcMmoj', 'WQXLW59dzq', 'W4THWPVcRLW', 'EX8VW5aE', 'W45ju8kgeW', 'W5KvW5pcGti', 'bSoMuwTE', 'txBdTq', 'xL59deC', 'DCk1WQq', 'FSo9t2um', 'kSoItLX8', 'WQLeW7qeEq', 'WODGW5pdPW', 'W4eoiW', 'ASk0WQBdVJO', 'W6uJWQ9pgG', 'W6LWv8ktmG', '4P2SjCotWRlcLW', 'sJrv', 'WRZdNSoWW5VcJG', 'W5KpW5tcNdi', 'pSkOkveJ', 'zmkxzqmS', 'b0eZvbfdWQdcQtGNWQL8oG', 'rCksWRddVdC', 'WR55WRZcQ3i', 'WP4lpCozgG', 'd3xdVmk7', 'W5PnjHJdIG', 'WR5xqSkawW', 't3ZcVYVdNW', 'DCoYWQi', 'WRvRFvpdJG', 'WOCnhsddHa', 'WPDWvhFdVW', 'WRtcISk3jq', 'WQr5yvpcQq', 'WQWDmhSx', 'zSkVWRPu', 'WRDLW5XdoW', 'W6ThWP8', 'CmkpWOtdGbK', 'WO8TfCo6la', 'W4WjW4tdNhm', 'WPKJWQP1W5K', 'r8ozrG', 'qCkvWOpdVZa', 'zcdcQSk1aa', 'WQ4KW5Wgzq', 'WO8JW6S', 'WRjJW5Wi', 'C8krW4L9WQG', 'WRuyWPG', 'w8oKbLqQ', 'WPnSW43dR8k7', 'oSkEvNhcSW', 'W47dLmkxW64O', 'DYio', 'uCkJW6jyWPG', 'nSo5W6RdTem', 'WR/dNmo4W5i', 'bhVcMmo8W6S', 'oGlcHq', 'W5VcVSk6W4O', 'CCk6lX01', 'BmkhWQniW6i', 'jGFdNSk2dq', 'zZHfW7dcSW', 'WRWKWOHHW4y', 'smodtW', 'WRqeWOHbW7u', 'W6ldRSotWROW', 'WQpcHSkmsSkH', 'qCkhWOldUvW', 'WR9RW5e', 'WPyFW5dcHZG', 'W4njBrJdIW', 'jSo3qfzH', 'At/cU8k9uW', 'W73cI8k4Cq', 'k8kkxxGL', 'BCkfW49VWPS', 'WQPjrW', 'DZxcRSkSgW', 'W6T8DSkWma', 'WQvkW6xdOSk3', 'eGddQCk0kG', 'W5j9CmkFpG', 'W6zMzbJdIa', 'tXq+W5Sl', 'e0lcUYJdJa', 'x8oplLec', 'k8oHc8khca', 'WRHnzNZdHW', 'WOCDWR1mW6G', 'W5hcNSkbW4aB', 'W4DokqNdJa', 'WOOtpmoEaq', 'a3ZcS8oaWPq', 'WPDJW6GUsq', 'WObRW5ZdT8kY', 'eCooFfvx', 'FmkVWQldMSkS', 'kCkBWQfpW40', 'W6zgrcxdNG', 'eSoSamkN', 'vmoNys7cPG', 'iCoJbSkGkW', 'WOBcP8kYACoi', 'C8kJj3PH', 'W5frtSklha', 'W5HSWPHclW', 'W4ZdMmkFW7jL', 'WQ4ycItdQq', 'WRauWO9jW70', 'lSo5WRm', 'W4/cKCoDW6KI', 'W6K+W4/cNCoR', 'W5ZcVSk6W44O', 'cCknauOc', 'W4W3W7hcICoI', 'W49OW43dS8o1', 'WOWkk8ozfG', 'tCkOEvmY', 'jSkckM5d', 'W47dMmksW61L', 'W57dLmkhW4GL', 'zSkhjwPs', 'E8kBWPPLW5a', 'W77cJSk/W6KU', 'W5VcUSoUW4PV', 'WRL1WPNdUmoX', 'hCoECCkrnq', 'WQrzrL3dUW', 'W4/cMSkmW7m8', 'WRVcNmoPWPhcJG', 't3ldVmk5W4u', 'lCo9etW', 'W4ddGSku', 'eSkFAwZcVq', 'mSocc8kSEG', 'WQqfWPC', 'W64nW4ZcNdK', 'jCk0xa', 'h3hcHSoJWRa', 'Bc4q', 'CCkPWQ3dT3y', 'W53dNSkd', 'WPK6hSozaG', 'WRHstq', 'WPeHWRTKjG', 'WQxdL8o3', 'DmkHWQy', 'W7bLW4igFW', 'WO8pcmo0nW', 'W5fTWQ5R', 'W5zbzre', 'W7OvW5VcV0K', 'lmkQvwm0', 'lSoWWPVdJ3m', 'W5PSy8kghG', 'W7PqWOa', 'W4SeW4xcKcK', 'EdSpW4qi', 'WPvGW4NdR8k/', 'W6PZWRFcU24', 'W5JdG8kbW6qV', 'FmkJWRddUq', '4Psc4PEk4PEs4PsHWOa', 'WRWLWQDouW', 'W5NdMCkwWQe7', 'WRahWOTmW7S', 'WRddI8oLW5NcHq', 'WQDXFLpdHW', 'gCk0W6RcQM0', 'W51eWOPgmW', 'qCkmWQtdOWK', 'WQH0WOZcLSou', 'b8k9BuNcHW', 'ASk8ra', 'xSkYWPNdICkV', 'rxBdOCk9W5a', 'W5iHW7G', 'hmorjCkt', 'DCktWPRdL8kp', 'WRtdISk/W5VcHa', 'wmoFi8osmW', 'vmkYW6nk', 'WQXRDq', 'WRyEhuqO', 'WQbOWP4', 'd8o5b8k3fW', 'WRLYWPq', 'pSo6rLnz', 'WPSBlCorha', 'u8oztclcMG', 'W7hdQmoa', 'b8kWtw7cVa', 'rbz9c0C', 'ugNdS8k1W5K', 'WR5lw8knqq', 'W4RcKmkOW48l', 'i8kRu2uG', 'tCkpWQhdTZS', '4PsL4PEJ4PEb4PAr4PwF', 'WRrxWPDpW7u', 'WQmsWPPdW6y', 'urXUxW', 'WRPbW6GAvW', 'WOpdNmkaWQW7', 'W4WaAHldIG', 'W5pdV8kpW5S/', 'mSo2cmk6ia', 'WOmId8k3hG', 'q8ocnmklWQO', 'B8o2tNW5', 'WO8MW4xcRSkO', 'WPBdMSolW5VcMa', 'W4jbW4pcMJa', 'WRPjwCkowG', 'jSo9WR7dPvy', 'WQTNW5Cnzq', 'WPSBkG', 'fCoFjW', 'lhVdS8oYqa', 'omo4W6pcTfS', '4O6vWQvmWPDz', 'BmkJWRVdRG', 'WReDefC1', 'FYCeW5uc', 'W7JdImoG', 'bxxcGSo8WRa', 'xmkVrG', 'W74DWOTfW7u', 'WOSxlCoCea', 'y2ddH8k5W40', 'WRKQW4ylDa', 'W4ajW4pcGcK', 'W4pcNSkdW6uT', 'W4RdMmkv', 'W5SZW6VcJa', 'mmo9WR7dQv4', 'DmkwkfPF', 'x8omlgG/', 'y8kOWPNdQcC', 'W5LfFqNdGq', 'WRq7aWxdRW', 'WRJdGmo2', 'Cbf4WOFcHG', '8lI0KmotW4y', 'W7eUb0ZdSG', 'WQ0TWRPmuW', 'WP3cSSk/BG', 'zSkrzvTA', 'W4hdLmkDW6y/', 'uqrVc0W', 'W7xdNmo3WPW', 'CSkQWRu', 'C2JcRW7dNW', 'W61pWP99eq', 'CCkKWQeaW48', 'zmo8f3Cj', '4P6np8osWQNdKW', 'W63dQmonWOCL', 'zmkQrxaY', 'kCk3s3dcRa', 'W78yWOTfW7W', 'W5XnAbRdGq', 'v8ohmmke', 'W7hWOR29kSky', 'WRBdGSogW6tcUG', 'AmkUWQO', 'W6Ockse', 'jrFdGCkUcq', 'W73dRSo2a3W', 'WONcMmonWPFdIW', 'W7HAWOhcQvW', 'sCkQW69bWO8', 'ymkkaMC', 'WR9PWOtdQSoI', 'imowWQpdPa', 'W6PpWPdcRmoy', 'W5qfW4i', 'ymofzmoeW6K', 've/cTYi', 'zZ8kW4yc', 'W6PErmkpaW', 'W6xdOmkbW6Wr', 'WRWqWOrLsG', 'BCoun8kbWQC', 'WRqAnMev', 'vvVcJI7dRa', 'ueVcPIpdHq', 'BmkeWP9sW7y', 'qCoZnmkPWR0', 'n8o4WO7dLfC', 'CKFcLZFdKa', 'W600W5pcOCoL', 'wCkAW618WPi', 'WPu9WQLwW5e', 'CSo2c3O', 'W5lcS8oGW48G', 'WQXiWQ/cOCoO', 'DCkpWPRdM8kP', 'W45Bqa', 'fSkfjLua', 'WP9EWR7dN8kL', 'WPeMW7JcM8og', 'W7pILlhIL6NILi3ILku', 'oXFdN8kLha', 'WRRdLmo+W4/cJG', 'W7pcI8kUnhC', 'xCoCwZ8', 'W7RdG8o9W53cKG', 'WR59WOhcRa', 'aSkiB2BcGW', 'WQb7zL/dPW', 'Fd8kW5uu', 'WQJcLCklce0', 'Dmkxoh0', 'WRykn3eK', 'WRq7bXJdQq', 'WQeHWQHofG', 'W4RcRCkI', 'W7ZdQSomWOu', '8j+KIo+7Na', 'AmoqgSknWOi', 'sSortclcKq', 'W7D2uW', 'W5BcRCoUW4GG', 'ySoudNeo', 'W5K5W7FcTmoR', 'Amonmq', 'umk3W6TpWO8', 'WQP9AW', 'W7X7WPRcM2W', 'WQKkfMCG', 'EmosmCkDWQi', 'EHfLWR3cKW', 'W5Dnv8kwwW', 'WQX/WOxdQmoG', 'jCoGAG', 'W7TuWPdcHa', 'W65hWPZcMLq', 'W4S9WR/cGSoj', 'cxxcGSoU', 'WR4knCoLpa', 'W5rgWOPMeq', 'CCkNW64', 'cCoXa8kWkG', 'W7PqWOdcJW', 'WRHJW54gmq', 'tmkNW7jyWPG', 'ASk4qhf9', 'WR8HWQG', 'dJbbW6q', 'WQtdHSoWW4JcGG', 'WQCckq', 'Bmk4qNKH', 'rYbHngO', 'WPVcR8kRESkc', 'WRRcGCkQ', 'pmkOsxNdQG', 'WRBdOCoOW4ZcKW', 'lCkJg2VcRq', 'zmofFsVcUq', 'WQTSWPZdUmoz', 'y8k0WQldUCk+', 'WRpdI8kXmM0', 'lCk1sxpcTW', 'zCkIWR1e', 'W4Thu8kkvW', 'W65fWOFcLa', 'WQBdLSo/W5JcPG', 'dMBcK8oUWQu', 'D8k/WQbfW4e', 'W61qWPC', 'zdpcSCk4dG', 'W41KWQDJga', 'WPGJpZpdOG', 'ESojoSklWQy', 'W5zdW4/cLIK', 'gCoejmkbya', 'W57dGCkCW7iI', '4PA04PsH4Psi4Pw84PAL', 'Amk2WRC', 'WRDKWPipCa', 'WQihWPDjW6y', 'hSk1W65eWOy', 'zMNdGSknW54', 'WQ59W5NcUCkq', 'sSkNW75z', 'W4bju8kmfa', 'hxxcLCoKWRa', 'WPFcM8ot', 'mCk2WQddRSk4', 'jSoZWQtdS0u', 'Bmo2yr/cHa', 'W5fSWR9KhG', 'xWnV', 'WPirlW', 'dNhcKSoGWRi', 'W55fCa', 'WOqbExac', 'mmkSlfG', 'acNcSG', 'WRHVWP0', 'cSotoConkW', 'ESkhW7D7WOm', 'W5K7W7pcImob', 'fmoWbCk1vW', 't8kKWO/dLvG', 'ChldVSkmW6m', 'W5rfrG', 'W57dLmkDW6ug', 'qbr5eq0', 'WRekkZuF', 'ACkTbXmf', 'yCk9WQu', 'ucKlW7RdOa', 'rSorxc7cMG', 'vCkxWQ/dPdS', 'dNldVCkUW5m', 'kCo6a3T7', 'qCovccBcGq', 'vmofrZpcKa', 'tCkpWPFdTv8', 'W5S6W5JcOSog', 'W47dGSkf', 'WRZcLmkUpxa', 'kCoZWR7dTfG', 'WQOjltSt', 'W4feqSkiva', 'WR9NW5C', 'ymkKWRDfWO4', 'xGy5W6OF', 'WRyQaX3dRW', 'WOWBn8ouoa', 'WOVdRSo5WPT3WOKgrw7dMvO', 'W4fGv8kIpq', '4P2OW4lcGCo+FG', 'rwhdU8kO', 'WODGW5hdPSk0', 'WRzdWPTTqW', 'Dmkhq1HK', 'W63dLSoDW7q4', 'WOb9W5JdSCkx', 'WR96W4ipEa', 'qCkqtclcGq', 'fSoNEh5h', 'mmk+mfe/', 'W7RdVCovWOqW', 'W5NdNmo3WRaG', 'WPZcRSklgLi', 'cSkdWQ7dTcW', 'chRcGSoUWQu', 'ySk+WRDjW48', 'z8kWWQFdQmkI', 'ySo8dM4', 'FcScW48a', 'W4vlEa', 'tr9+WRpcMq', 'pSkQi1Oi', 'kCkJrKSV', 'vSkVWQhdOJu', 'xuBcTYddMq', 'WRJcLSkSpMS', 'W55ftGVdTa', 'W5zQCmkYhG', 'WPD5FL/dRq', 'W7SvWQFcIve', 'zConp8kjWQW', 'WPfuW4lcQ8k7', 'o8kIvxJcIa', 'WRzcWPPJvG', 'uGxcPMZdHG', 'WQ8Pn8oHnW', 'j8kRmHmR', 'FutcRtBdJW', 'W4JdQ8klWP85', 'ydhcQCk8sq', 'W43cVSk9W4mO', 'DmkaiMq', 'E8oUgmkjWQe', 'iCo9WR7dOq', 'k8oxa8kflW', 'W4tdNSkDWQe/', 'sSkBWRbUW68', 'A8oKqwak', 'iCkIiuq', 'CSkFkN1v', 'WQrIWQHzaW', 'W4pdKmkEW6q', 'W4NdLmkFW6q/', 'wvJdVIFdMa', '4P2SFrVcLSkH', 'WRxdTCkDW58Q', 'WRS/WQbhfa', 'WQ0gmmoFaW', 'g8ovnCkDoq', 'ymkSuNG6', 'csfXnG0', 'W403W6/cGCoo', 'W6VdVCobWOCY', 'r8kdWRtdUte', 'uMdcVa', 'W5KbW4u', 'vSkhWRddVd8', 'eCo3pCkLnW', 'W4OjW4hcMa', 'gxhcJSo7W7e', 'CdP1WOhcTq', 'h8ozn8kInG', 'W4Dns8kadW', 'W5WjWOdcLh0', 'CSk4WRFdQmkQ', 'W4DfAb7dKa', 'F8kOWRBdKxm', 'w8kXW7vmWO0', 'E8ofpmkE', 'W5T6WRXGbq', 'c8odomkDna', 'W57cR8k+W4CM', 'ySoQWQyhWRy', 'imoUWRJdR0m', 'W4PgtSkr', 'WRbjuG', 'WQTCwa', 'W4eaEGJdHW', 'oXVdN8kP', 'WRXLW4yTCa', 'smkWWPFdNmkB', 'FCkNWRddVZO', 'W7bludVdKq', 'FdXlW5up', 'WRZdNSo2W5dcHa', 'WR96W4ipAa', 'W5BcRCoW', 'WPyQdLCf', 'vHHLbG', 'ysuoW5mx', 'WROZhHtdSG', 'W5S3W7dcNG', 'WPBcO8k+Fa', 'cCkrWQZdU3a', 'hghcMCo7WRq', 'WQXptSkrca', 'pGpdOCkTlG', 'dCkJxuXU', 'W5OHWQu', 'WRj9FfldHa', 'CvldPCkXW4C', 'sCkXW5DUWP8', 'W6BcT8oDWOu9', 'cCo3hW', 'WQ1Ew8knsq', 'mCoXWRFdV8k4', 'Dmk0u38H', 'WRv9AKlcPG', 'WRvbWRTyva', 'WPy/cYpdLW', 'WQ53WO7cTSoC', 'WRzEWPW', 'FCoMWRddTxC', 'BJxcOW', 'e8o3cSo/ga', 'cmojxcpcMq', 'W5eHW7hcSZy', 'nGldGCkUaq', 'hmoEpmkWeq', 'W7/IGjKl4BE5YQG', 'W7PMFCkDdG', 'W7uZW6ZcH8oe', 'WPCFWQpcRxq', 'W7DIs8kspG', 'acBdLmkipa', 'c8o2aq', 'c8kEbM3dVW', 'BmkDp31p', 'WQjfWOD4qq', 'WQhdGCo4W5e', 'yt/cUCkSba', 'WPa/W6/dMq', 'WQ4kia', '4Q6R77Q+W5pcQX40', 'q8ozrIm', 'WRSPcIhdRa', 'WRD1WOe', 'W5lcKCkJz8kc', 'ACoOoCk8WRO', 'WPPMWQXI', 'kZ/cQSk8bW', 'WPuUWRbdW4O', 'o8oZhgWl', 'mXpdHCkJ', 'DCo5WRFdOSoT', 'WRRcGCo+Eq', 'heFcUZldMq', 'W4VcUSk2W58', 'z8kUWR0', 'WRv+W5SoDa', 'FH1KkMK', 'hMFcN8oGWR8', 'WQbUEW', 'WPjWWPpdJSot', '4P2jCmoWWOKf', 'a8o3oCkZxq', 'vZ7dLG', 'fxNcMSoPWR4', 'W5/dLmkdW60Q', 'mCk3WRBdOmkV', 'd1RdSa', 'WRjaWPHGtq', 'WR01gH8', 'WOXSW7NdLCkB', 'WROQrW', 'WQtdHSo+W4JcJG', 'W6z6FY3dKW', 'fSomWQJdMLS', 'WOHWW5Wkrq', 'WQ7cGCkWnvq', 'BmkVWQJdRNu', 'WRVcNmoPWPhdNa', 'ACk8fMiW', 'W4ZdNCkAW6a4', 'ACoyoW', 'W50yW4JcQCoo', 'ymk0uW', 'pCoIimkEpW', 'WRv7WPm', 'WQj+WRBdM8oW', 'iSkRmH0U', 'yNjgWOTh', 'C8k8qMqN', 'W7aNW4xcUHu', 'FCk2WPZdQw4', 'W6zsvCkFeW', 'we/cRsi', 'qCkqWRldVYW', 'WO3dUmk+W4zR', 'WQ/cICk/jwO', 'WP8BWPrOW5G', 'W7RdM8o0W5xcJq', 'mmoUW6VcTde', 'WOKyWP5tcG', 'zCoeo8kbWRO', 'W6fVWPhcMSol', 'F8oulSkpWQa', 'WRSyWPjo', 'WPzgWQRdV3u', 'FsykW5uc', 'qmkgWQxdVG', 'imk+ceO1', 'Emosn8kd', 'WRvxWQ5YW54', 'WR3dKSoJW5NcJW', 'W7VdQmojWOeL', 'W7P/WOxdUCoQ', 'A8kIWQvf', 'WQ7cGCo+nhC', 'dSo8iCkLta', 'W4VcUSoUWPfL', 'WQT5W5C', 'W6ZdKCk7ifzxmfK', 'WPiwnNOk', 'WOSBiCoewG', 'WRDvWPTV', 'eSo3d8kS', 'W73dG8kwW7CI', 'W45UW5tdPq', 'ur8Rb1e', 'hveH8kEZUvS', 'FCkRW5XkWPK', 'Amk2kgTe', 'WOb8W5NdQSk1', 'WPjmWR/cLSo6', 'WQbvWOzOAq', 'sWONW7y+', 'WRdcHCk5ndK', 'WOn+WRDQBG', 'WPuynHxdKq', 'wqRcTY/cIG', 'qmkrxubX', 'wSoIW7jcW4O', 'dmoee8kGBG', 'lmkIg33dPq', 'cCofpSkgpW', 'usHEWQtcPq', 'WRBdNmo/W4JcJG', 'iGddNq', 'imoXrKX/', 'W6n+WQDGbq', 'WQrOtuxdVq', 'W79+WRdcHNW', 'yZmB', 'WOX6W5O', 'eCkVW7yz', 'W7XhWO1Usq', 'WOunmbZcIq', 'W6DSBIFdGa', 'CCkQWQTvW60', 'txlcN8oJWRq', 'WPFcSCk5Fmka', 'zCoqC8knWQy', 's1RcUtldOq', 'lCo5bCkDhW', 'W4zYW7ZcGSob', 'tCkxohPh', 'WOGbe000', 'gbRdG8kGpW', 'WRPLW5e', 'zCo3cYjp', 'v8krWQNdVJK', 'WR59WPFcRmoV', 'WPxdT8oXWPeu', 'qwFdS8kOW58', 'WQm1nrJdVG', 'ECo3dg8q', 'stbYWRxcPW', 'WPjSW5ZdSCk5', 'WRTQWOFdP8oS', 'WQ5OWPJdUmoU', 'uw/cKXxdIa', 'zZ/cRSkxca', 'WO1bCvRdJG', 'WPmxoSoraq', 'hNhcL8o9WRi', 'W5DeD8kFhW', 'uCo3hhqa', 'WR4BWO1fWRi', 'fmotp8kLkG', 'WOLeW43dPSkm', 'WRlcJCk6F2K', 'WQbmWO7cNSoZ', 'WRX0WQ3dISol', 'DCkapCkbWQC', 'W7r1WOFdRSoR', 'W5iZW68', 'b8oOaW', 'WQORgG', 'W693yLpdPW', 'WRGZf1/dTG', 'WOVcQSksz8kT', 'WRzvw8kuxa', 'DCoRmgae', 'gCk2CwBcQq', 'WOewWOW', 'WQNcGCkMjq', 'pqldLG', 'W4WvW5dcKa', 'W41mEG', 'xXDIdKy', 'WOH9W5u', 'cN/cHSooWPS', 'y8oQbM0c', 'CSk6E8kGpW', 'aMBcKCozWQC', 'WRJdG8kI', 'WQLYWPldRSoX', 'WQL9WP3cT8ot', 'WPJHTk3HTiXD4Okg', 'iSoiyN15', 'rczhb3O', 'zsycW4Wc', '4P+HWPhdMCorjW', 'tdSAW64Y', 'rCkGC0u2', 'B8kIWRe', 'W7K+W77cPmoR', 'WOjWWONcUSoc', 'uCkvWRldTsS', 'W4JdGSkhWQe/', 'WQPxuCkiyG', 'WRtcH8kSpMO', 'E8kuWRRdQMi', 'c8kAW63dTJi', 'lokcGN7HT7BjIq', 'CCkhjh1d', 'kmoSW7K', 'oCkNnLG', 'bCotrYpcKa', 'W6ZcUmorWODX', 'WR7dT8oxW7VcSq', 'jf/cSmoDWRK', 'WRiyWO5oW6y', '4Pwj4PEg4Ps64PsD4PEe', 'dSoSemkK', 'nmoMcvXH', 'WQbRWPhcLSor', 'W63cUmovWOeY', 'ESkJWQldLLa', 'iCofWQ/dJwS', 'zGrDa3O', 'nCkygwSI', 's8kVW6ndWP4', 'WQ0bleq3', 'WOSBiCoe', 'jSoZwvv2', 'AdhcS8k3', 'y8ktp2bj', 'WRVcH8klgMK', 'WP0heguG', 'nCoCDLHJ', 'W4DSWQPMaW', 'W4VcT8kRW5LV', 'FJ0C', 'vCkvrLyA', 'WQ9/mG', 'q8ozsY7cLa', 'tYPFWRxcSG', 'WROXbq', 'ytxcQCk6', 'WPFcSmkvB8kc', 'WRbrWPXLsW', 'W5XoAHhdKq', 'WQHDtSkkqa', 'nSkhWQ3dQw0', 'W7PlWRLpia', 'WOXpW6iQva', 'tfJcSsZdMG', 'ACkCWRtdUmky', 'kIFcU8kV', 'jtJcSW', 'WRL1hGldSq', 'l8oGb8kMea', 'WQ0XWPNcICop', 'WRyUhIxdLq', 'WOjOW4K', 'WP9JWRhdNmoP', 'C8kQv2u8', 'dmkar04', 'WRz3ctdcQW', 'hSoiWOW', 'jSoHse1N', 'zSkKWQNdUrq', 'ACoUwq0', 'udXfWQtcPq', 'W6HCWPFcIvi', 'g8oFp8kblG', 'WRK9uYtdLa', 'FSkRWRddRSkJ', 'WQS2W5z6W40', 'FCkSbLrU', 'kCoZWQ0', 'icizW4qu', 'pSoPhwyw', 'jmkGjb0', 'nmoZrvb7', 'W63dRmoiWOr/', 'WQ5yWO7cSmoT', 'WQyGWOJcMmoy', '4PEa4Psz4Pst4Ps34PAi', 'qs1bWRZcQq', 'WOejlLOY', 'ac5fWQNcRa', 'ySobFd3cKG', 'W53dHCkf', 'WPLrpgxdVq', 'CSkoWQ/dNMK', 'WPvoWRhcOmoN', 'fCoXb8k1tq', 'W4LEuCk3gG', 'W4ZdLCkaW6KU', 'a8kOb8kZwW', 'gCoNhmk0hq', 'n8o5WQVdRq', 'vSovwMFcNq', 'CCkYyfaJ', 'Bmk0WQRdTW', 'ASo6FslcTG', 'WOjOW4NdQSk1', 'WODGW5hdPSku', 'jrhcISkssq', 'ggBcMG', 'jqBdRSkDpa', 'rZtIN6lVUOa', 'WRTVWPpdOSoQ', 'ycpcQCk4dG', 'WO56EfpdQG', 'pSkzB8oCW7VcSt7dKeebjbhcJG', 'ESkKm1iO', 'AmkUWQpdPa4', 'WOqOo1OJ', 'WQ5VWO3cIG', 'gXRdMSkrlG', 'FSkVWQ/dV3q', 'WRhcGCkWnM0', 'WQ1EsSkm', 'W79gW5pcGLi', 'WPOknmoCwW', 'W5Dnx8kr', 'hN0FWRJcQq', 'WQzRzL/dQG', 'W4ZdHmkxW6GK', 'W5mjW5K', 'W6nBcCkseW', 'ECk2WRpdTNm', 'W4tdN8kqW60+', 'FCk1WQNdH8kh', 'WQBdUColWOWJ', 'WQfvWOLVua', 'umknWPvYW6O', 'xCkJW7jiWO0', 'W5rNW6TGbq', 'WQHVW4aaDa', 'WOldKmkfW6G', 'FtezW4ax', 'WR5WWPZcQSkq', 'W6ZdVCow', 'iXFdICk2', 'gfxcPSohWPK', 'rxpdN8k1W64', 'tmkTwCo7yW', 'zZWiW40s', 'Bmkxjw5s', 'W53cTCkVF8kk', 'fSkFk8kBkG', 'WP/cQ8kNEmkZ', 'WO8MW6r1bq', 'zCoso8knWR0', 'W5TWWRHaba', 'usLjWR/cKa', 'B8kIWRCaW4K', 'Bmk6FeXD', 'rr59WRVcTW', 'DCoRhwWx', 'vLlcPHtdUG', 'WRWeWPW', 'dmoxWQddSeq', 'WRn5W5u', 'W6ldQCk+W4C/', 'WQbOW5xdRmkI', 'WQbQWPZcKmoq', 'WOKBk8otea', 'swVdTCo8WOC', 'WPjaWPRcL8os', 'dCkFwuXW', 'FSkHj1O', 'baVdICkpla', 'WQ0/WRPifa', 'CSoAEX7cSG', 'nmk8a1W1', 'WQzgW7C6rq', 'D8kUWQTu', 'rgddOq', 'W5SMWRmOdq', 'W63dGSoDW7yJ', 'W54IW6/cGCog', 'ACkZWQZdRN8', 'cSkYwhpcKa', 'sSoaxtq', 'nCoSWR7dUa', 'd2tdOSk1WPG', 'WRGyWPvnW74', 'W6jgvmkshG', 'z8kmW5jVWOu', 'WRPEWOTGuq', 'ytXf', 'WQKapG', 'W7q9W43cT8oG', 'WQbTDL/dPG', 'WQLCWQ3cQ8os', 'd8oKrZpcLa', 'W5S9W6JcG8od', 'bmksWQNdSYO', 'FSk0W6pdVCkH', 'W47cQSkVW58M', 'WO1Hs17dIG', 'rSokaWK', 'W57dLmksW7mO', 'WQr6FhJdVG', 'w8oKe1yV', 'WOHTWORcVmok', 'WOLBWOjfxq', 'DmkMWQnmW4e', 'WO3cQmkFceW', 'C8k2rd8', 'W74pW5znW6e', 'WQTjqSkm', 'itmDW4G', 'WQiklq', 'WR0FWPaHeW', 'zSkhi2Xq', 'w3JcVmk/W5G', 'sSkTWQzcWOW', 'WR7cI8kRp20', 'ASoWhW', 't8k3W6LzWO8', 'WRdcNSoWW47cIa', 'WQJcRSk/m0O', 'd23dT8k1W5e', 'ECkZWQFdS3u', 'sCoOfSo1', 'sSkDWR9eW5m', 'AIpcRSkilq', 'WPvPtv3dGG', 'mSkVmeKV', 'CSkckefu', 'WOhcP8kRB8ke', 'WRzFWPNdUmol', 'WPb7WQNcVSo3', 'W6NdRCobWOe+', 'DmoShw8', 'uCofzIVcSa', 'r8kvtx17', 'WQW7WQffaq', 'WQv+WO3dTSot', 'WQz9WO3cRmov', 'uaJcOSkHia', 'c8oUea', 'WQq3WOpcSCoa', 'W5SpFXpdGa', 'WRvzWOrPsG', 'i8kRmfeN', 'rb5yfLe', 'wmohomkgmG', 'WP/cKSkm', 'tSo2t8oVfG', 'WQeIWQPfbG', 'itmkW4i', 'rmoawcVcNa', 'W5aZW7S', 'ACk4WRXo', 'rmoawcVcJa', 'imkElMHv', 'W7G7aXJcQq', 'xb4UW5im', 'ASkMWRrmW48', 'dmoyiSkDnG', 'WPvQWQrHeG', 'WPBcP8k5FG', 'hSoCpSkDka', 'rSk7W4D8WQ8', 'WR94W5el', 'tCoEtWRcSq', 'tCkaxf0W', 'uLNcQJpdNW', 'f8opAgbA', 'zCoPWRRdPfa', 'uvNcTY3dQa', 'rCk6WQNdTaC', 'WQm6WPBdRmoK', 'W4nGWQ9Gga', 'W4JcNSk8W4GU', 'WQODia', 'BstcRSkPgG', '4Q6477UqW67cGqVcJa', 'CCk8bWm', 'W6qGWRHP', 'WQ13eb7dQW', 'o8oNtM/cRa', 'BCk8vwuW', 'mSoWrw9x', 'gSoQEfpcGq', 'D8kZWRFcSa', 'z8kMwN8', 'WPntW5BdKW', 'WOHNW57dR8kV', 'qSkDWQVdUCkE', 'CHjNb1C', 'ACkWqhq', 'bwZcH8oaWRi', 'WOb5W43dR8kZ', 'WPGyWPTIcW', 'W47dGmo/WQTX', 'WODGW5hdPSkF', 'WPvSW4xdTW', 'x8kUW69mWPK', 'zSo3rZdcSW', 'lmo4WQ/dRW', 'AmoqlG', 'uGxcRIxdJa', 'W5TnrmkqdW', 'lCo0fSkLfq', 'kSoMwKPU', 'hCodiSktpq', 'vdj3WRNcUa', 'W4DsWQRcIva', 'ASkZWQy', 'tGRdTG', 'W5P8WR8V', 'W4jCqSofeG', 'tCkNW6DFWOK', 'FmkVebbB', 'vCkNW78', 'qmocwIJcHW', 'FCoRWRpdQhu', 'hXT7b0q', 'rbrZfG', 'WRehExab', 'agFcKq', 'hCoina', 'WOvGW4/dPSk5', 'o8k3v3xcSq', 'EmkPuW', 'nSkkFG', 'WPvyWRu', 'ySkaDSkiWRW', 'zWH5nvm', 'o8o2gweN', 'W4X8WQDRpq', 'uSkgWPPJW5O', 'W5SnW5tcNdi', 'wIinW6S0', 'ESk8WRO', 'WPGTWQbBuW', 'WQjGWQ/cUCo4', 'aMpcK8o9WQe', 'uJHqWRpcTa', 'WQH1D1lcQq', 'qs1AW7dcTW', 'ACkqygyY', 'nCk7jK8p', 'WQT7WO3cSCoE', 'ySkSw3q7', 'WRPDWOLRqq', 'qZXDWRW', 'cLCB8yUOP8oB', 'W5zHWQPSgq', 'W4ldNmoCW6qL', 'WQLVW5ao', 'WOBcRCkmDmkF', 'W4jgWRfrea', 'W5DjtSklwW', 'rCkmzMCE', 'lSoUsf5Q', 'W5dcUmkP', 'W5XNWQdcHxK', 'tuBdMCk/W6a', 'WQHJW5ygFG', 'W5NdLmklW7u', 'WOvMW57dUW', 'uYHDWQtdOa', 'W7XiW4vQsa', 'jmkUxZZcRa', 't3ldVmkWW5G', 'WOOmnq', 'vZVdMCo/WQm', 'WQzJWReeaq', 'oSkxt1xcLG', 'ggBcK8kVWR8', 'WQ1dW4/dOSkI', 'W4DnAaNdLW', 'oSkIvNpcSq', 'W6DSD07dVq', 'xvJcTwVcOa', 'W7b6WQvweq', 'WQj5zL/dPG', 'W43cUSkVW4G7', 'W4ddMmkEW6qF', 'W5r6W6TRga', 'vbrPfW', 'ySk7WQnmW5K', 'WQPVW4Ox', 'W6ftWRFcVSoW', 'W4WjW5JcGq', 'wavMdG', 'WQhdLSoIW4G', 'WR5QWPdcTq', 'WRfTWPFcJ8ow', 'WPv5WRLQeq', 'qSkcbePX', 'W74qWPjg', 'WRvWW5JcISoA', 's8klWQ7dPa', 'WPFcSmk4', 'i8oun8kiWQ8', '4O2EWPhdMCoglG', '4PYx77UeW7mkW6hdUq', 'WOnyvCkegq', 'WO5/W5tdQCkz', 'ySkhW67dGeu', 'iNdcK8obWOK', 'iSofoSkhWR0', 'WQ8pWRn4ha', 'W65YWOJcNmoy', 'vmkdWRtdUda', 'zIyFW5eu', 'W7hcISklW4K6', 'bx3cMmoOW7e', 'W4z5WQDSaW', 'W6C7WQXlaW', 'qSkawuvN', 'WQmAWPPuW6e', 'DSk8WRC', 'kCokmSkeAG', 'WRfDWPBcHvS', 'leBcTCohW7S', 'W7VdNSoIWPhcMW', 'CmkPWQG', 'qSkftubX', 'WPTiWQv2aa', 'WQpcPCkmz8kp', 'zZWBW5qt', 'W6tcUmosWO0Z', 'WQxdKSoLW5tcHq', 'WR9+WP7dVW', 'WR5hWPBcNuG', 'WQBdMSoLW5NdKq', 'yh0DW48d', 'WOWDk8orbq', 'rwtdOCk5WPC', 'pSk1EvtcIW', 'f8oqBeXC', 'tupcN8o7WRK', 'WRnQWPVcJCoq', 'W6nQD0ldVa', 'BCoqlSkcWQa', 'W5iZW6VcJSoh', 'WPOWgYWD', 'mmoVdM8m', 'pbFdIa', 'W57cRCkTW5GQ', 'jSkQ4PU/W44', 'W6LyWOpcGfW', 'WP4Comoehq', 'BCk8whyH', 'W7PbC8k0lq', 'm8oMwK0', 'W4DpE1m', 'W5f+W5pcV3G', 'w18H', 'WPHGWPdcT8og', 'W7y2W5RcHSoO', 'WOZcSSkAhL8', 'x8o1tsNcNa', 'WQ16WPBcNSol', 'CCk0fuji', 'W57cR8k+W4C2', 'WPv7W5tdRG', 'W5pcUSoU', 'W648WQHofG', 'WRv6WOdcJq', 'WOvsWP5uvW', 'WR7cGCk6pNO', 'yY9wWQNcMa', 'WPXZWPVdRSkL', 'itOoW4Ge', 'W5WZW6VcHmoa', 'WQusWOnu', 'vSovrIpcUa', 'xCkJW7zzWOm', 'ru/dU8k4', 't8k4hMXL', 'fSohb8ksqq', 'WQBdKmoJW53cMW', 'W5tcQ8kNFmka', 'WQz6WOW', 'ySkpkmkaWQ0', 'WPpcR8kV', 'WRW/cG', 'Emk0WQldQSkO', 'ymkJWQddR24', 'ySkYWRfbW4m', 'W5rKWQ4', 'bmory1nU', 'WP4mmSkAFW', 'W6hdTCoeWO80', 'WQv6WOZcNmon', 'tmkTW6SnWP4', 'u8oEr0XQ', 'wSkJW7jeWOu', 'W4fHWQ4LbW', 'BSkHWOjsW6G', 'srhcLmkE', 'vvtdM8kLW7K', 'CCkPW5XPWOG', 'WOxdSmoHW5S9', 'wav/eLa', 'W4XRrr7dJa', 'sSkLW7u', 'WReeW4pdPJC', 'WR1aWP14cG', 'vCoutG', 'WQ0IWR1ibW', 'WQJcVSkfWR0H', 'WQu/WQ4', 'WQmgnxaE', 'WQa2WQLIW6i', 'EmkOWPpdOSkl', 'ofVcNSoUWQy', 'W695FfldUW', 'W7rAWPRcGG', 'gCoaiCkEmW', 'WQL5WO3cSCoF', 'WRjdWODIhG', 'WPqTmaBdJa', 'wbrIaq', 'cmocnmkbkq', 'W4S3W6FcMq', 'W7TCWPdcQwq', 'WR4zW5u', 'ymkSWQZdUCkO', 'ENlcHalcIG', 'tCkNW6HjWQC', 'WRWwWO9dW7O', 'u8k3W7veWOK', 'bSoTcvX9', 'DHfcWRlcTG', 'FtCfW4uQ', 'i8oZWQxdTfq', 'WQJcLSkY', 'WQudWOHfW7m', 'WQWJWR5hhW', 'W57dLmkx', 'WPhcO8k+Dmki', 'mCoSEx5R', 'W6XWWP7cN8ow', 'WQisWPveW58', 'xmkpWQZdTJe', 'w8o2kxKZ', 'W6fsA8kMkq', 'WPnQWRNcQSow', 'WRNcHCkQma', 'W73dQSoj', 'WRNcJmkzhNa', 'WP5WyCkesG', 'W7rHWPjrbW', 'CgZdMCk4W6C', 'sdNcSSk3ma', 'bxhcL8oRWRq', 'WRf5E0q', 'WRLfW7acrq', 'WPfArSkeca', 'nCoUWQ/dS0i', 'W5LGWQ9KaW', 'WRBdKSoLW5xcHa', 'W5TUWPneba', 'WPDawxJdMq', '4P+5acm8W4O', 'yCkFlG', 'WQn2WPZdPCoe', 'WQC1aW', 'gmoGseTR', 'WODFWPXTsa', 'rCkjWQxcSd8', 'WOKIWRPEfG', 'ACkgWOzlW4G', 'tZPw', 'WPtcQ8kKECkg', 'WQbiWPRcJmoa', 'hdZcHmoIvG', 'rmoeqsJcMW', 'WRiqd8o+oa', 'W5CnW4tdLtK', 'WPpcSSk6CCko', 'W6RdSCol', 'ySkPWR9f', 'lCoJc8kNla', 'W45KW43cTW', 'WOlcT8k5Dq', 'WPnSW5ZdSmk1', 'W7CUW5lcVWO', 'vb58dfy', 'WQ9PWPi', 'vSoJjCkxkG', 'WRyVfXJdQq', 'W71rWPH8cW', 'uCktqq', 'WRhdLSo/', 'WPCvmSoceG', 'tmkUWRS', 'WRzEzhFdMG', 'WReZhXtdQa', 'FCkQWOFdKhG', 'W4zmC8kheq', 'CCkhdxPM', 'WQ12WPO', 'aNRdMa', 'WRbQWPFcJCoA', 'd8oRbCkTtq', 'cxhcHq', 'W4VdT8kHW4a6', 'i8o1WQBdPv8', 'sSoEccNcMG', 'dNxcGSoMWR4', 'WOBcU8k6Ea', 'u8katfSW', 'WQfrWPO', 'W7fhWOO', 'W7L+rCkVkq', 'uuVcRG', 'WOrOW47dPSo6', 'WQusWP8jWRW', 'WPjSW5pdP8k/', 'W7ldGSkqW7KQ', 'fSkqeSkDnW', 'W5HbWRtcLw8', 'WQfDWPRcSCo9', 'ACkczMPj', 'iCkdCgxcVa', 'kCkRuN3cTG', 'w8oojg82', 'WRtcOmkrjLq', 'EgZcQW7dMq', 'W4zSWQP3fa', 'W5T9WODGgq', 'fSkRlLG0', 'j8k1qG', 'e8oEWQ7dMgm', 'kSoIxveV', 'WOpcT8kLACkc', 'WPTPW5ubvq', 'W45+W5JdOCk3', 'mSoinSkVAq', 'B8kKWRrpW40', 'yCoqBq', 'W4WnEGNdGq', 'WRdcL8k5', 'umkvd1Ht', 'g2BcTmohWP8', 'c8oDstpcNq', 'smovwZtcLa', 'tmkBjwig', 'W5PmFXJcHa', 'WR8TWR8', 'W7iHW7NcHSog', 'l8ogi8k1eW', 'zcxcVSkWbG', 'WQJcL8k7', 'WPOClxaa', 'W73XHPE7', 'WQmQmw0+', 'WPuCgHJdJa', 'WReah3Wi', 'W49IWO19ea', 'cSoECCkgmG', 'qSkssf12', 'W75LW5rd', 'W7nuWOm', 'WRacWP9jW70', 'WP8nlxON', 'tSkuWPldS0O', 'W6vfaG', '4P2cCKhdSqS', 'W7rBWQbhdq', '4P6zWPpcU8oSWOC', 'W63cSCkfWPmS', 'WRe2eHi', 'WPddVSo+W5FcVq', 'W7NdTmoxWP85', 'z8kKWQroW5a', 'W5VdN8kaW7iQ', 'WQ5/WRdcR8o1', 'nCoWWQVdUq', 'WRjuxq', 'WQS/WR8', 'W53dLmkbW7jL', 'W4X3WQVcHLG', 'Amk0v3yW', 'WRvsxSkeEa', 'CtJcV8o5ha', 'qSk2q30X', 'D8kUWQbu', 'W7PRWQ1Mfa', 'WQL/WPNdR8oi', 'W4PfWPxcPM4', 'sSkDse57', 's8kxWRtcSaK', 'W6eoWRu', 'W5KoAa3dLa', 'WPb2FKhdQG', 'W4yis8kkha', 'WRztWPWSCq', 'FCk3rq', 'WRiLWQXvW5u', 'vmkyWPRdHCk9', 'xdPZbhK', 'W6BdP8kNW5GQ', 'bmoerK5j', 'WRaHWOn+nq', 'W5hdSmk2WOyJ', 'E8kNWRFdS3u', 'WPZcPCk+Dq', 'EaxdLmkGga', 'WPdcR8kIW4O2', 'c8o1fmkKsW', 'hIj/b1m', 'W4WMW77cMCok', 'nmoXh8k1', 'WOW6kxCa', 'W5JcNCoafW', 'CmkIWQLf', 'irVdLCkNbW', 'Abq5W6aw', 'WP3dH8ovW53cPq', 'zCkIWR1eW5q', 'zSk4WQbbW4C', 'tY8rWQFcQa', 'WQj+WOJcJCow', 'WRhdLSoI', 'sbDKWQlcGW', 'WPybW5pdMdG', 'lSk0rNqY', 'dSoznCkxnq', 'c8okWP3dKv4', 'E8obkeqR', 'W4zmtSkr', 'WOHKW5ZdPmk/', 'xvRcRI3dKW', 'W7DBWPdcGeG', 'W6pdRmomWOu0', 'rmoXbNbf', 'qSoxttu', 'iCkVneKJ', 'W5Siif0', 'rJhcGSktjW', 'W4vLsmkqlq', 'WQH3FbBdVq', 'yN/dVCkEW50', 'W4hdVmoRWR0J', 'W5fhqCkmfW', 'i8k7WQfpW4i', 'WRW+WQbe', 'W7LqWOFcNe8', 'W4yfrSkxga', 'aSoGfq', 'u8kfwKe', 'ah3cM8oQWQu', 'W5PbBq', 'yCkXW7jiWPO', 'tmoEt2FdHa', 'ymofmmkjWR0', 'C8kxkNTf', 'o8o6csW', 'WQSTWR1mfa', 'CCo9hgSa', 'lmkHWQnfW4C', 'WQXErCkfzq', 'fCorjCkA', 'uatcVZhdMG', 'F8o4cYmv', 'pCo4h2Pi', 'C8kdd1H+', 'zCo3cZLp', 'WPnXWQ3cICoM', 'WQFcM8k6W6WQ', 'cmovi8kbDa', 'W6PhWPZcN1y', 'otRdPSkJkq', 'n8oMi8kova', 'j8kwW7Kj', 'DJXDWR3cMG', 'zmoRbM4', 'W7C2fHddTq', 'W7DPWPtdUCoK', 'W79bWPBdJfq', 'W5nGWQDGoq', 'ySk8WQC', 'WO8MW4xcRSkU', 'W78HWRhcMSoh', 'WQTTWP3cSCoF', 's8kWW6O', 'yctdT8kQhq', 'WQ98WOZcKmoq', 'W5u3n8ogfa', 'cCoZd8kREW', 'WPP/rCkGzq', 'vdHb', 'W5LjAW', 'WRWPWRfD', 'WOFcSmkM', 'W53cO8k6Dmoi', 'bCoNstpcKa', 'rJrFWRq', 'W754W5Csza', 'W5ecW4S', 'g8kqaHW', 'W5ThWOhcG08', 'W71uWOFcHvi', 'rCkae39K', 'W7vMvCk0gq', 'ESk2WRRdQmkV', 'i8oMtw1Q', 'WQ44yvNdPq', 'WRjSW5ZdSCk5', 'EmoGlviN', 'zCk+t3JcQq', 'uCourZdcMW', 'DCkIWRDfW48', 'WR0vWPnkcG', 'DmonmSkiWQy', 'jmoSWRRdRfG', 'W6BcT8otWOy1', 'EshdHCkNga', 'WQxcKmktngO', 'smkRW6jiWOu', 'W4eJW6y', 'v8oFiCkhkq', 'WOi+WP5OW6i', 'W5pcSmk6W58M', 'fSoKd8kZwW', 'pmkVma', 'WRaDnq', 'WPiZW6/cHmkc', 'i8oUj1jM', 'WRTRW4egmq', 'ydvlW7q1', 'WRX1WPJdV8oG', 'W5S3W6W', 'W7L+W7KAqwNcMXBcIN/dLsdcRW', 'WR8ZhrBcPG', 'vSkrxubX', 'W6xdUCov', 'xqr4c0a', 'C8k1WQBdOmoI', 'A8kVWRNdVW', 'i8kTWRzuW4m', 'W7bNW4foDa', 'bSoew35B', 'CCkpnvKV', 'WQFdHSoYW4JcHa', 'W5PoBbNdRG', 'xmkZWRldNCkL', 'W6BcQCk/W6qx', 'vmopnCkjWPS', 'obtcKCkNgq', 'WP4smmorbG', 'ECoTbW', 'u31zWRhcTG', 'smkqe8kllG', 'dtXbWRNdRq', 'WPvOW43dGmkD', 'W6hdR8o3WPK6', 'WQOdl3bq', 'jCkMjr0Z', 'WRBdGmoN', 'WQ0gn3jq', 'lmoXWQVdP1G', 'WPKOWPfimq', 'W5njzrJdIG', 'W7evWP/cHvm', 'WQ83zfJdRq', '4O+ZW5jHt0K', 'rSkTeSkZtq', 'y8osoG', 'W47dMCksW7u', 'i8o2x3T4', 'kmoUivON', 'W45ecCkbfa', 'WRbzWOnwFG', 'W7XTtrNdPq', 'W4pcNSklWQW/', 'W6bPCXJdNq', 'W60uW6JcNmo4', 'BYiBW40o', 'W7RdI8k8W5hcMa', 'v8kwWRldUta', 'FCk8WPpdPmkU', 'iWddMmkV', 'emovomku', 'WPlcPSkSg04', 'DGhcTSkQlG', 'ytFcJmkjkW', 'nwBcTmoTWRG', 'WQXLW4bdDG', 'W6xcUCkaW4qc', 'f20jW6BdSSodWPanW7ekWRGUWP8', 'WQXVW4ipAa', 'WQztWOhcVSoQ', 'WRnxW5viW7S', 'E8kGxvCs', 'wrXQbuy', 'WQbXWP0', 'tv/cStxdJW', 'EmomdSkuWQ0', 'WP8ZWR/cGmoo', 'bmo8a8kPqG', 'WR4XbX7dRq', 'vtfDWQNdRG', 'hSkLgNKK', 'DCoQhgic', 'oCkVmfy', 'v8kvuv0', 'W4OGW7pdJCkt', 'FCovmCkAWQW', 'fCoTgW', 'W7fLW4iwyG', 'kmouWOldRvS', 'k8oSsf0', 'W4uozXJdKa', 'sSonWRJcVsO', 'ySk7WROpW4i', 'WRRdLmo2', 'WQD5WP7cVq', 'lCkPx3xcQW', 'WO4eWPHyW7m', 'zmovtHdcSq', 'wgxcQdxdMW', 'W4GaW4hcJa', 'EmkJW69bWO8', 'A8knuKGL', 'DSkRWOJdLmkm', 'W6uBnJud', 'WQKkngzE', 'tCk2W69gWP4', 'vKtdMSkBW6u', 'WRTbW7KNzW', 'D8kWWQ/dQmkJ', 'd3hdU8k6W5e', 'd1/cOSonWOu', 'W7PJWPJdVSo3', 'W5HbFr7dJa', 'WR5aWPPPvW', 'tCkgeNbb', 'uXb/c0W', 'zmkpWOxdPmkL', 'f8oWcCk1xq', 'WRn9C0xdPG', 'W7jJW6zzaq', 'Bmk9WRPkW6m', 'DcxcU8kTaa', 'W5zmWOJcKYG', 't2ZdTSoYW4C', 'W5zbFrtdIW', 'WQDZWPFcLSon', 'wXrY', 'ymkPrN08', 'WQqcpa', 'WQWTWR1i', 'oSoxgmkWaG', 'WRrFzCkjtq', 'FIaeW5Co', 'A3/cOSo0eW', 'WPFcSCk+pCkt', 'iXRdLmoIdq', 'ydmgW4q', 'WQaBnhLE', 'swJdS8k7W5i', 'BmkQuq', '4P6+W6ldOfJcLq', 'WR5wc8kxqq', 'WPnpW7W2oW', 'D2dcSSk/W5y', 'imk7l0KJ', 'kSo1WQtdTa', 'vCkztuXX', 'hSo9kCkuvW', 'WPb8W5ldT8k/', 'ySk8zKKe', 'lmkQWQnjWO8', 'WQaFcMer', 'WPPcza0', 'W5HFWQRcUuG', 'r8kWWOtdVHq', 'W7LSqZtdJG', 'hmoGuHpdMW', 'WRXurCkxtq', 'cSklWQ3dStK', 'WP95WPddQCob', 'zCkgzNPs', 'uCk3WQBdUSk+', 'nSoigSkBnG', 'sSkNW7yaWOG', 'g8oFpmoDkq', 'dfdcJmofWOG'];
  _0x481a = function () {
    return _0x18bb92;
  };
  return _0x481a();
}
const _0x420d81 = {
  on: "body"
};
cmd(_0x420d81, async (_0x2e3acd, _0x2076b7, _0x4c9662, {
  from: _0x310da8,
  body: _0x5b3bc1,
  botNumber2: _0x597107,
  reply: _0xda6468
}) => {
  if (!_0x4c9662.quoted || _0x4c9662.quoted.sender !== _0x597107 || !_0x4c9662.quoted.msg) {
    return;
  }
  const {
    botName: _0x1135df,
    footer: _0x2102ea
  } = await bf(_0x597107);
  const _0x2d2bf6 = _0x4c9662.quoted.conversation || _0x4c9662.quoted.extendedTextMessage?.["text"];
  if (!_0x2d2bf6 || !_0x2d2bf6.includes('*' + _0x1135df + " APK SEARCH*")) {
    return;
  }
  try {
    const _0x54e9c2 = parseInt(_0x5b3bc1.trim());
    if (isNaN(_0x54e9c2)) {
      return;
    }
    const _0x5b6338 = _0x2d2bf6.split("*No:");
    if (_0x54e9c2 < 1 || _0x54e9c2 >= _0x5b6338.length) {
      return _0xda6468("*Invalid input. Please enter a number from the list.*");
    }
    const _0x13943b = _0x5b6338[_0x54e9c2].trim();
    const _0x49d1f4 = _0x13943b.match(/⚡\s([\w.]+)/);
    if (_0x49d1f4 && _0x49d1f4[1]) {
      const _0x3b9d95 = _0x49d1f4[1];
      const _0x18e089 = await _0x438f12.download(_0x3b9d95);
      if (!_0x18e089) {
        return _0xda6468("Error fetching download details.");
      }
      let _0x23dca3 = "- *📚 Name :* " + _0x18e089.name + "\n- *📦 Package :* " + _0x18e089["package"] + "\n- *⬆️ Last update :* " + _0x18e089.lastup + "\n- *📥 Size :* " + _0x18e089.size;
      const _0x369e70 = {
        url: _0x18e089.icon
      };
      const _0x319099 = {
        image: _0x369e70,
        caption: _0x23dca3
      };
      const _0x19a199 = {
        quoted: _0x2076b7
      };
      await _0x2e3acd.sendMessage(_0x310da8, _0x319099, _0x19a199);
      const _0x584c20 = await readConfig(_0x597107);
      let _0x2137c7 = 0;
      if (_0x18e089.size.includes('GB')) {
        _0x2137c7 = parseFloat(_0x18e089.size) * 1024;
      } else if (_0x18e089.size.includes('MB')) {
        _0x2137c7 = parseFloat(_0x18e089.size);
      }
      if (_0x2137c7 >= _0x584c20.MAX_SIZE) {
        const _0x1feee0 = {
          text: _0x55ee9d[_0x584c20.LANG].maxsize
        };
        const _0x385499 = {
          quoted: _0x2076b7
        };
        const _0x19c01d = await _0x2e3acd.sendMessage(_0x310da8, _0x1feee0, _0x385499);
        const _0x3e9365 = {
          text: _0x55ee9d.reacts.err,
          key: _0x19c01d.key
        };
        const _0x12264e = {
          react: _0x3e9365
        };
        return await _0x2e3acd.sendMessage(_0x310da8, _0x12264e);
      }
      const _0xa95663 = {
        url: _0x18e089.dllink
      };
      const _0x1b272f = {
        quoted: _0x2076b7
      };
      let _0xda1a83 = await _0x2e3acd.sendMessage(_0x310da8, {
        'document': _0xa95663,
        'mimetype': "application/vnd.android.package-archive",
        'fileName': _0x18e089.name + ".apk",
        'caption': _0x2102ea
      }, _0x1b272f);
      const _0x2327fc = {
        text: "🗃️",
        key: _0xda1a83.key
      };
      const _0x2147b2 = {
        react: _0x2327fc
      };
      await _0x2e3acd.sendMessage(_0x310da8, _0x2147b2);
    } else {
      _0xda6468("Error extracting App ID from the selected details.");
    }
  } catch (_0x15ff2f) {
    console.log(_0x15ff2f);
    await ec(_0x15ff2f, _0x2e3acd, _0x597107, _0x2076b7, readConfig, _0x55ee9d, _0x310da8);
  }
});
function formatBytes(_0x155459, _0x2dcdd5 = 2) {
  if (!+_0x155459) {
    return "0 Bytes";
  }
  const _0x47275c = _0x2dcdd5 < 0 ? 0 : _0x2dcdd5;
  const _0x233113 = ["Bytes", 'KB', 'MB', 'GB', 'TB'];
  const _0x22371e = Math.floor(Math.log(_0x155459) / Math.log(1024));
  return parseFloat((_0x155459 / Math.pow(1024, _0x22371e)).toFixed(_0x47275c)) + " " + _0x233113[_0x22371e];
}
function _0x16c8f3(_0x1b7049) {
  function _0x4c44ee(_0x5c9cfc) {
    if (typeof _0x5c9cfc === "string") {
      return function (_0x272881) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x5c9cfc / _0x5c9cfc).length !== 1 || _0x5c9cfc % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x4c44ee(++_0x5c9cfc);
  }
  try {
    if (_0x1b7049) {
      return _0x4c44ee;
    } else {
      _0x4c44ee(0);
    }
  } catch (_0x7bbcf) {}
}
