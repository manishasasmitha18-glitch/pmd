(function (_0x4dbe31, _0x119731) {
  const _0x5bf5a5 = _0x4dbe31();
  while (true) {
    try {
      const _0x51e794 = parseInt(_0x58f0(1852, 'pjij')) / 1 * (parseInt(_0x58f0(1470, 'F9TD')) / 2) + parseInt(_0x58f0(658, 'pWbf')) / 3 * (parseInt(_0x58f0(2571, '[kHO')) / 4) + -parseInt(_0x58f0(1393, '35A4')) / 5 + -parseInt(_0x58f0(917, '9CMO')) / 6 + -parseInt(_0x58f0(1699, 'Aedk')) / 7 + parseInt(_0x58f0(2451, 'oQcL')) / 8 + -parseInt(_0x58f0(1199, '@Z%y')) / 9 * (-parseInt(_0x58f0(763, '&msx')) / 10);
      if (_0x51e794 === _0x119731) {
        break;
      } else {
        _0x5bf5a5.push(_0x5bf5a5.shift());
      }
    } catch (_0x5414d0) {
      _0x5bf5a5.push(_0x5bf5a5.shift());
    }
  }
})(_0x3e53, 402389);
const _0x54e035 = function () {
  let _0x2c0918 = true;
  return function (_0x4273fe, _0x1f692a) {
    const _0x3ec768 = _0x2c0918 ? function () {
      if (_0x1f692a) {
        const _0x515d08 = _0x1f692a.apply(_0x4273fe, arguments);
        _0x1f692a = null;
        return _0x515d08;
      }
    } : function () {};
    _0x2c0918 = false;
    return _0x3ec768;
  };
}();
const _0xf81f30 = _0x54e035(this, function () {
  return _0xf81f30.toString().search("(((.+)+)+)+$").toString().constructor(_0xf81f30).search("(((.+)+)+)+$");
});
_0xf81f30();
const _0x1831eb = function () {
  let _0xde2120 = true;
  return function (_0x56fe94, _0x5b86cf) {
    const _0x18e9a2 = _0xde2120 ? function () {
      if (_0x5b86cf) {
        const _0x50352f = _0x5b86cf.apply(_0x56fe94, arguments);
        _0x5b86cf = null;
        return _0x50352f;
      }
    } : function () {};
    _0xde2120 = false;
    return _0x18e9a2;
  };
}();
(function () {
  _0x1831eb(this, function () {
    const _0x15d0fa = new RegExp("function *\\( *\\)");
    const _0x1229c7 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x221c72 = _0x44edd3("init");
    if (!_0x15d0fa.test(_0x221c72 + "chain") || !_0x1229c7.test(_0x221c72 + "input")) {
      _0x221c72('0');
    } else {
      _0x44edd3();
    }
  })();
})();
import '../lib/pm2Manager.js';
import _0x112e26 from '../config-env.js';
import { fileURLToPath } from 'url';
import 'path';
import { promises as _0xe1ce1b } from 'fs';
import { Sticker, StickerTypes } from 'wa-sticker-formatter';
import _0x1b4773 from 'node-fetch';
import _0x273184 from 'fluent-ffmpeg';
import _0xca8e02 from '@ffmpeg-installer/ffmpeg';
import { ImgurClient } from 'imgur';
import { ec, typing } from '../lib/ec.js';
import { githubGetFileContent, githubClearAndWriteFile } from '../lib/github-functions.js';
import { readConfig } from '../lib/check.js';
import _0x472a69 from '../lib/LANG.js';
import { cmd } from '../command.js';
const __filename = fileURLToPath(import.meta.url);
function getLocalPath(_0x5cf54c) {
  const _0x38d361 = _0x5cf54c ? _0x5cf54c.split('@')[0] : null;
  const _0x22c70b = _0x112e26.BOT_NUMBER;
  if (_0x38d361 && _0x38d361 !== _0x22c70b) {
    return "./auth_sessions/" + _0x38d361;
  } else {
    const _0xdae566 = process.env.AUTH_PATH || "auth_info_baileys";
    return './' + _0xdae566;
  }
}
const _0x4ccd2c = {
  pattern: "removesticker",
  alias: ["deletesticker"],
  desc: "Remove a custom auto-sticker reply.",
  category: "owner",
  use: ".removesticker hello",
  filename: __filename
};
cmd(_0x4ccd2c, async (_0x160427, _0xaa0ea4, _0x1207c9, {
  from: _0x1b3150,
  q: _0x517cf1,
  isOwner: _0x2fee64,
  botNumber2: _0x3519c3,
  reply: _0x47539e
}) => {
  try {
    await typing(_0x160427, readConfig, _0x1b3150, _0x3519c3);
    if (!_0x2fee64) {
      const _0x1c6983 = await readConfig(_0x3519c3);
      const _0x3519a1 = _0x1c6983.LANG;
      const _0x1b3c1e = _0x3519a1 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x5437c6 = {
        text: _0x1b3c1e
      };
      const _0x27f14a = {
        quoted: _0xaa0ea4
      };
      const _0x5217ef = await _0x160427.sendMessage(_0x1b3150, _0x5437c6, _0x27f14a);
      const _0x288824 = {
        text: _0x472a69.reacts.owner,
        key: _0x5217ef.key
      };
      const _0xc698ed = {
        react: _0x288824
      };
      return await _0x160427.sendMessage(_0x1b3150, _0xc698ed);
    }
    if (!_0x517cf1) {
      return _0x47539e("❌ *Please provide the text for the sticker to remove.*");
    }
    const _0x3b4545 = await readConfig(_0x3519c3);
    if (_0x3b4545.AUTO_STICKER !== "customize") {
      return _0x47539e("👨‍🔧 *This feature requires AUTO_STICKER to be set to \"customize\" in settings.*");
    }
    const _0xe21520 = await githubGetFileContent("autosticker.json", _0x3519c3);
    const _0x2268f1 = JSON.parse(_0xe21520);
    if (_0x2268f1[_0x517cf1.toLowerCase().trim()]) {
      delete _0x2268f1[_0x517cf1.toLowerCase().trim()];
      const _0x4c8357 = JSON.stringify(_0x2268f1, null, 2);
      await githubClearAndWriteFile("autosticker.json", _0x4c8357, _0x3519c3);
      await _0xe1ce1b.writeFile(getLocalPath(_0x3519c3) + "/autosticker.json", _0x4c8357);
      _0x47539e("🚯 *\"" + _0x517cf1 + "\" has been successfully deleted from the Custom Sticker Panel.* ✔️");
    } else {
      _0x47539e("❌ *The text you entered was not found in the sticker list.*");
    }
  } catch (_0x34d8d9) {
    await ec(_0x34d8d9, _0x160427, _0x3519c3, _0xaa0ea4, readConfig, _0x472a69, _0x1b3150);
  }
});
const _0x4ddb5d = {
  pattern: "resetsticker",
  alias: ["delsticker"],
  desc: "Resets the custom auto-sticker list.",
  category: "owner",
  use: ".resetsticker",
  filename: __filename
};
cmd(_0x4ddb5d, async (_0x5dac9e, _0x354b2b, _0x336094, {
  from: _0xede947,
  isOwner: _0xac030f,
  botNumber2: _0x33eca3,
  reply: _0x7c02ef
}) => {
  try {
    await typing(_0x5dac9e, readConfig, _0xede947, _0x33eca3);
    if (!_0xac030f) {
      const _0x3b20ab = await readConfig(_0x33eca3);
      const _0x502508 = _0x3b20ab.LANG;
      const _0x34b4c6 = _0x502508 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x135058 = {
        text: _0x34b4c6
      };
      const _0x727ae5 = {
        quoted: _0x354b2b
      };
      const _0x1c845b = await _0x5dac9e.sendMessage(_0xede947, _0x135058, _0x727ae5);
      const _0x1d3935 = {
        text: _0x472a69.reacts.owner,
        key: _0x1c845b.key
      };
      const _0x1206dd = {
        react: _0x1d3935
      };
      return await _0x5dac9e.sendMessage(_0xede947, _0x1206dd);
    }
    const _0x4234cf = await readConfig(_0x33eca3);
    if (_0x4234cf.AUTO_STICKER !== "customize") {
      return _0x7c02ef("👨‍🔧 *This feature requires AUTO_STICKER to be set to \"customize\" in settings.*");
    }
    const _0x345d23 = JSON.stringify({}, null, 2);
    await githubClearAndWriteFile("autosticker.json", _0x345d23, _0x33eca3);
    await _0xe1ce1b.writeFile(getLocalPath(_0x33eca3) + "/autosticker.json", _0x345d23);
    _0x7c02ef("🚯 *Custom Sticker Panel has been successfully reset.* ✔️");
  } catch (_0x1f1a2f) {
    await ec(_0x1f1a2f, _0x5dac9e, _0x33eca3, _0x354b2b, readConfig, _0x472a69, _0xede947);
  }
});
const _0x487236 = {
  pattern: "getsticker"
};
function _0x3e272b(_0x31d0eb, _0x15873e, _0x2f5cdd, _0x97c078, _0x1afe31) {
  return _0x58f0(_0x15873e + 0x3a2, _0x97c078);
}
_0x487236.alias = ["checksticker"];
_0x487236.desc = "Get the list of custom auto-stickers.";
_0x487236.category = "owner";
_0x487236.use = ".getsticker";
_0x487236.filename = __filename;
cmd(_0x487236, async (_0x3d4a0d, _0x3ec03b, _0x8f605b, {
  from: _0x41566a,
  isOwner: _0x78bbbf,
  botNumber2: _0x120ace,
  reply: _0x2ff7bd
}) => {
  try {
    await typing(_0x3d4a0d, readConfig, _0x41566a, _0x120ace);
    if (!_0x78bbbf) {
      const _0x29302b = await readConfig(_0x120ace);
      const _0x1b276a = _0x29302b.LANG;
      const _0xa531c6 = _0x1b276a === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x36f908 = {
        text: _0xa531c6
      };
      const _0x57e2f7 = {
        quoted: _0x3ec03b
      };
      const _0x110411 = await _0x3d4a0d.sendMessage(_0x41566a, _0x36f908, _0x57e2f7);
      const _0x222c62 = {
        text: _0x472a69.reacts.owner,
        key: _0x110411.key
      };
      const _0x5a59ec = {
        react: _0x222c62
      };
      return await _0x3d4a0d.sendMessage(_0x41566a, _0x5a59ec);
    }
    const _0x1e9626 = await readConfig(_0x120ace);
    if (_0x1e9626.AUTO_STICKER !== "customize") {
      return _0x2ff7bd("👨‍🔧 *This feature requires AUTO_STICKER to be set to \"customize\" in settings.*");
    }
    const _0x417636 = await githubGetFileContent("autosticker.json", _0x120ace);
    _0x2ff7bd(JSON.stringify(JSON.parse(_0x417636), null, 2));
  } catch (_0x1534d6) {
    await ec(_0x1534d6, _0x3d4a0d, _0x120ace, _0x3ec03b, readConfig, _0x472a69, _0x41566a);
  }
});
function _0x1c8bc3(_0x56e15c, _0x3c89ca, _0x4f760c, _0x39b8f9, _0x136d82) {
  return _0x58f0(_0x3c89ca - 0xd1, _0x56e15c);
}
const _0x3c3649 = {
  pattern: "addsticker",
  alias: ["newsticker"],
  desc: "Add a new custom auto-sticker.",
  category: "owner",
  use: ".addsticker hi+image_url.jpg",
  filename: __filename
};
cmd(_0x3c3649, async (_0x3ec839, _0x1cd8f0, _0x5e1b7b, {
  from: _0x95d138,
  q: _0x5c9041,
  isOwner: _0x3b86ca,
  botNumber2: _0x1af4a2,
  reply: _0x414bc7
}) => {
  try {
    await typing(_0x3ec839, readConfig, _0x95d138, _0x1af4a2);
    if (!_0x3b86ca) {
      const _0x44407d = await readConfig(_0x1af4a2);
      const _0x25ef8b = _0x44407d.LANG;
      const _0x440398 = _0x25ef8b === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x666eff = {
        text: _0x440398
      };
      const _0x2afb0a = {
        quoted: _0x1cd8f0
      };
      const _0x10fb6f = await _0x3ec839.sendMessage(_0x95d138, _0x666eff, _0x2afb0a);
      const _0x1a583b = {
        text: _0x472a69.reacts.owner,
        key: _0x10fb6f.key
      };
      const _0x416cac = {
        react: _0x1a583b
      };
      return await _0x3ec839.sendMessage(_0x95d138, _0x416cac);
    }
    const _0x13aaf2 = await readConfig(_0x1af4a2);
    if (_0x13aaf2.AUTO_STICKER !== "customize") {
      return _0x414bc7("👨‍🔧 *This feature requires AUTO_STICKER to be set to \"customize\" in settings.*");
    }
    if (!_0x5c9041 || !_0x5c9041.includes('+')) {
      return _0x414bc7("*❌ Invalid format! Please use:*\n\n*.addsticker text+image_url.jpg*");
    }
    const [_0x593ca3, _0x259904] = _0x5c9041.split('+').map(_0x1955ac => _0x1955ac.trim());
    if (!_0x593ca3 || !_0x259904) {
      return _0x414bc7("*❌ Invalid format! Please use:*\n\n*.addsticker text+image_url.jpg*");
    }
    const _0x37498f = await githubGetFileContent("autosticker.json", _0x1af4a2);
    const _0x5228c1 = JSON.parse(_0x37498f);
    _0x5228c1[_0x593ca3.toLowerCase()] = _0x259904;
    const _0x392493 = JSON.stringify(_0x5228c1, null, 2);
    await githubClearAndWriteFile("autosticker.json", _0x392493, _0x1af4a2);
    await _0xe1ce1b.writeFile(getLocalPath(_0x1af4a2) + "/autosticker.json", _0x392493);
    _0x414bc7("👨‍🔧🌟 *The image has been successfully added for \"" + _0x593ca3 + "\" in the auto-sticker panel.* ✔️");
  } catch (_0x4e0396) {
    await ec(_0x4e0396, _0x3ec839, _0x1af4a2, _0x1cd8f0, readConfig, _0x472a69, _0x95d138);
  }
});
(function () {
  let _0x1d3505;
  try {
    const _0x4d5bb4 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x1d3505 = _0x4d5bb4();
  } catch (_0x3d1801) {
    _0x1d3505 = window;
  }
  _0x1d3505.setInterval(_0x44edd3, 4000);
})();
const _0x51ca17 = {};
function _0x58f0(_0x915b3d, _0xb71a88) {
  _0x915b3d = _0x915b3d - 322;
  const _0x589a03 = _0x3e53();
  let _0x13a45c = _0x589a03[_0x915b3d];
  if (_0x58f0.CwswZE === undefined) {
    var _0x4d2009 = function (_0x2bcb77) {
      let _0x538a0e = '';
      let _0xd4c160 = '';
      let _0x5c74be = _0x538a0e + _0x4d2009;
      let _0x449a88 = 0;
      let _0x53375f;
      let _0x23a315;
      for (let _0x461a22 = 0; _0x23a315 = _0x2bcb77.charAt(_0x461a22++); ~_0x23a315 && (_0x53375f = _0x449a88 % 4 ? _0x53375f * 64 + _0x23a315 : _0x23a315, _0x449a88++ % 4) ? _0x538a0e += _0x5c74be.charCodeAt(_0x461a22 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x53375f >> (-2 * _0x449a88 & 6)) : _0x449a88 : 0) {
        _0x23a315 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x23a315);
      }
      let _0x486ccb = 0;
      for (let _0x4195a2 = _0x538a0e.length; _0x486ccb < _0x4195a2; _0x486ccb++) {
        _0xd4c160 += '%' + ('00' + _0x538a0e.charCodeAt(_0x486ccb).toString(16)).slice(-2);
      }
      return decodeURIComponent(_0xd4c160);
    };
    const _0x1a1a0b = function (_0x327580, _0xac894b) {
      let _0x574be2 = [];
      let _0x5527da = 0;
      let _0x1b64b0;
      let _0x425a52 = '';
      _0x327580 = _0x4d2009(_0x327580);
      let _0x2b6646;
      for (_0x2b6646 = 0; _0x2b6646 < 256; _0x2b6646++) {
        _0x574be2[_0x2b6646] = _0x2b6646;
      }
      for (_0x2b6646 = 0; _0x2b6646 < 256; _0x2b6646++) {
        _0x5527da = (_0x5527da + _0x574be2[_0x2b6646] + _0xac894b.charCodeAt(_0x2b6646 % _0xac894b.length)) % 256;
        _0x1b64b0 = _0x574be2[_0x2b6646];
        _0x574be2[_0x2b6646] = _0x574be2[_0x5527da];
        _0x574be2[_0x5527da] = _0x1b64b0;
      }
      _0x2b6646 = 0;
      _0x5527da = 0;
      for (let _0x3f7468 = 0; _0x3f7468 < _0x327580.length; _0x3f7468++) {
        _0x2b6646 = (_0x2b6646 + 1) % 256;
        _0x5527da = (_0x5527da + _0x574be2[_0x2b6646]) % 256;
        _0x1b64b0 = _0x574be2[_0x2b6646];
        _0x574be2[_0x2b6646] = _0x574be2[_0x5527da];
        _0x574be2[_0x5527da] = _0x1b64b0;
        _0x425a52 += String.fromCharCode(_0x327580.charCodeAt(_0x3f7468) ^ _0x574be2[(_0x574be2[_0x2b6646] + _0x574be2[_0x5527da]) % 256]);
      }
      return _0x425a52;
    };
    _0x58f0.TMbZuB = _0x1a1a0b;
    _0x58f0.ZYQwTv = {};
    _0x58f0.CwswZE = true;
  }
  const _0x4c258f = _0x589a03[0];
  const _0x479420 = _0x915b3d + _0x4c258f;
  const _0x1658e6 = _0x58f0.ZYQwTv[_0x479420];
  if (!_0x1658e6) {
    if (_0x58f0.zGhAJU === undefined) {
      const _0x4ba48f = function (_0x37373a) {
        this.fNcwsL = _0x37373a;
        this.iZVVAV = [1, 0, 0];
        this.faIUXv = function () {
          return 'newState';
        };
        this.JrdNXQ = "\\w+ *\\(\\) *{\\w+ *";
        this.jzitYJ = "['|\"].+['|\"];? *}";
      };
      _0x4ba48f.prototype.irwpDi = function () {
        const _0x233eca = new RegExp(this.JrdNXQ + this.jzitYJ);
        const _0x22a0db = _0x233eca.test(this.faIUXv.toString()) ? --this.iZVVAV[1] : --this.iZVVAV[0];
        return this.hVIqmj(_0x22a0db);
      };
      _0x4ba48f.prototype.hVIqmj = function (_0x15156d) {
        if (!Boolean(~_0x15156d)) {
          return _0x15156d;
        }
        return this.slTLtc(this.fNcwsL);
      };
      _0x4ba48f.prototype.slTLtc = function (_0x365045) {
        let _0x5a7191 = 0;
        for (let _0x10771a = this.iZVVAV.length; _0x5a7191 < _0x10771a; _0x5a7191++) {
          this.iZVVAV.push(Math.round(Math.random()));
          _0x10771a = this.iZVVAV.length;
        }
        return _0x365045(this.iZVVAV[0]);
      };
      new _0x4ba48f(_0x58f0).irwpDi();
      _0x58f0.zGhAJU = true;
    }
    _0x13a45c = _0x58f0.TMbZuB(_0x13a45c, _0xb71a88);
    _0x58f0.ZYQwTv[_0x479420] = _0x13a45c;
  } else {
    _0x13a45c = _0x1658e6;
  }
  return _0x13a45c;
}
_0x51ca17.pattern = "addbad";
_0x51ca17.alias = ["addbadword"];
_0x51ca17.desc = "Add new bad words to the custom list.";
_0x51ca17.category = "owner";
_0x51ca17.use = ".addbad word1,word2";
_0x51ca17.filename = __filename;
cmd(_0x51ca17, async (_0x3f8060, _0x3a395, _0x133b16, {
  from: _0x19c729,
  q: _0x4fd5b7,
  isOwner: _0x10c885,
  botNumber2: _0x5b1fa7,
  reply: _0x1909d1
}) => {
  try {
    await typing(_0x3f8060, readConfig, _0x19c729, _0x5b1fa7);
    if (!_0x10c885) {
      const _0x4abeb3 = await readConfig(_0x5b1fa7);
      const _0x5a5f9d = _0x4abeb3.LANG;
      const _0x526526 = _0x5a5f9d === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x3acdb4 = {
        text: _0x526526
      };
      const _0x41ba5f = {
        quoted: _0x3a395
      };
      const _0x2750db = await _0x3f8060.sendMessage(_0x19c729, _0x3acdb4, _0x41ba5f);
      const _0x356134 = {
        text: _0x472a69.reacts.owner,
        key: _0x2750db.key
      };
      const _0x435b7a = {
        react: _0x356134
      };
      return await _0x3f8060.sendMessage(_0x19c729, _0x435b7a);
    }
    const _0x59f396 = await readConfig(_0x5b1fa7);
    const _0x822cd3 = _0x59f396.ANTI_BAD?.["groups"]?.[_0x19c729];
    if (_0x822cd3 !== "customize") {
      return _0x1909d1("👨‍🔧 *This feature requires ANTI_BAD to be set to \"customize\" in gset.*");
    }
    if (!_0x4fd5b7) {
      return _0x1909d1("*❌ Please provide bad words separated by commas.*\n\n*.addbad word1,word2*");
    }
    let _0x2eed11 = _0x59f396.BAD_WORD === "nobadedwords,nobadedwords" ? _0x4fd5b7 : _0x59f396.BAD_WORD + ',' + _0x4fd5b7;
    _0x59f396.BAD_WORD = _0x2eed11;
    await githubClearAndWriteFile("config.txt", JSON.stringify(_0x59f396), _0x5b1fa7);
    _0x1909d1("🗣️ *The words \"" + _0x4fd5b7 + "\" have been successfully added to the bad-word list.* ✔️");
  } catch (_0x4fedd1) {
    await ec(_0x4fedd1, _0x3f8060, _0x5b1fa7, _0x3a395, readConfig, _0x472a69, _0x19c729);
  }
});
const _0x562294 = {
  pattern: "resetbad",
  alias: ["delbad"],
  desc: "Resets the custom bad word list."
};
function _0x10c72f(_0x5ba1ee, _0x130cf7, _0x4b773a, _0x55828d, _0x4103a1) {
  return _0x58f0(_0x55828d - 0x82, _0x4103a1);
}
function _0x44e435(_0x5e05ab, _0x40e710, _0x537ab2, _0x4bf8b1, _0x5521d8) {
  return _0x58f0(_0x40e710 + 0x9a, _0x5e05ab);
}
_0x562294.category = "owner";
_0x562294.use = ".resetbad";
_0x562294.filename = __filename;
cmd(_0x562294, async (_0x28f5ab, _0x1e35e2, _0x43772c, {
  from: _0x1c8e09,
  isOwner: _0x1bae5c,
  botNumber2: _0x149390,
  reply: _0x399875
}) => {
  try {
    await typing(_0x28f5ab, readConfig, _0x1c8e09, _0x149390);
    if (!_0x1bae5c) {
      const _0x54a483 = await readConfig(_0x149390);
      const _0x359e45 = _0x54a483.LANG;
      const _0x21e537 = _0x359e45 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x423f0d = {
        text: _0x21e537
      };
      const _0x55fabc = {
        quoted: _0x1e35e2
      };
      const _0x184207 = await _0x28f5ab.sendMessage(_0x1c8e09, _0x423f0d, _0x55fabc);
      const _0x27eec2 = {
        text: _0x472a69.reacts.owner,
        key: _0x184207.key
      };
      const _0x4eab08 = {
        react: _0x27eec2
      };
      return await _0x28f5ab.sendMessage(_0x1c8e09, _0x4eab08);
    }
    const _0x51304d = await readConfig(_0x149390);
    const _0xaad86b = _0x51304d.ANTI_BAD?.["groups"]?.[_0x1c8e09];
    if (_0xaad86b !== "customize") {
      return _0x399875("👨‍🔧 *This feature requires ANTI_BAD to be set to \"customize\" in gset.*");
    }
    _0x51304d.BAD_WORD = "nobadedwords,nobadedwords";
    await githubClearAndWriteFile("config.txt", JSON.stringify(_0x51304d), _0x149390);
    _0x399875("🚯 *Custom bad-word list has been successfully reset.* ✔️");
  } catch (_0x1bf472) {
    await ec(_0x1bf472, _0x28f5ab, _0x149390, _0x1e35e2, readConfig, _0x472a69, _0x1c8e09);
  }
});
const _0x4b9c70 = {
  pattern: "getbad",
  alias: ["checkbad"],
  desc: "Get the custom bad word list.",
  category: "owner",
  use: ".getbad",
  filename: __filename
};
cmd(_0x4b9c70, async (_0x573a32, _0x5cbac2, _0x597808, {
  from: _0x1a249e,
  isOwner: _0x5c3bfd,
  botNumber2: _0x58258e,
  reply: _0xf422d2
}) => {
  try {
    await typing(_0x573a32, readConfig, _0x1a249e, _0x58258e);
    if (!_0x5c3bfd) {
      const _0x4524e0 = await readConfig(_0x58258e);
      const _0x33f863 = _0x4524e0.LANG;
      const _0xbcc1cc = _0x33f863 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x1cf1a6 = {
        text: _0xbcc1cc
      };
      const _0x4e780e = {
        quoted: _0x5cbac2
      };
      const _0x522bc9 = await _0x573a32.sendMessage(_0x1a249e, _0x1cf1a6, _0x4e780e);
      const _0x5dacac = {
        text: _0x472a69.reacts.owner,
        key: _0x522bc9.key
      };
      const _0x3980c3 = {
        react: _0x5dacac
      };
      return await _0x573a32.sendMessage(_0x1a249e, _0x3980c3);
    }
    const _0x310f16 = await readConfig(_0x58258e);
    const _0x49cefc = _0x310f16.ANTI_BAD?.["groups"]?.[_0x1a249e];
    if (_0x49cefc !== "customize") {
      return _0xf422d2("👨‍🔧 *This feature requires ANTI_BAD to be set to \"customize\" in gset.*");
    }
    _0xf422d2(_0x310f16.BAD_WORD);
  } catch (_0x313f88) {
    await ec(_0x313f88, _0x573a32, _0x58258e, _0x5cbac2, readConfig, _0x472a69, _0x1a249e);
  }
});
const _0x588110 = {
  pattern: "resetvoice",
  alias: ["delvoice"],
  desc: "Resets the custom auto-voice panel.",
  category: "owner",
  use: ".resetvoice",
  filename: __filename
};
cmd(_0x588110, async (_0x30db01, _0x1ff4e1, _0x12919e, {
  from: _0x3f9295,
  isOwner: _0x149837,
  botNumber2: _0x366f05,
  reply: _0x35731b
}) => {
  try {
    await typing(_0x30db01, readConfig, _0x3f9295, _0x366f05);
    if (!_0x149837) {
      const _0x1eeff1 = await readConfig(_0x366f05);
      const _0x130de2 = _0x1eeff1.LANG;
      const _0x40d44b = _0x130de2 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x1033e7 = {
        text: _0x40d44b
      };
      const _0x4257e5 = {
        quoted: _0x1ff4e1
      };
      const _0x477a55 = await _0x30db01.sendMessage(_0x3f9295, _0x1033e7, _0x4257e5);
      const _0x542715 = {
        text: _0x472a69.reacts.owner,
        key: _0x477a55.key
      };
      const _0x37748e = {
        react: _0x542715
      };
      return await _0x30db01.sendMessage(_0x3f9295, _0x37748e);
    }
    const _0x53c306 = await readConfig(_0x366f05);
    if (_0x53c306.AUTO_VOICE !== "customize") {
      return _0x35731b("👨‍🔧 *This feature requires AUTO_VOICE to be set to \"customize\" in settings.*");
    }
    const _0x4b40cc = JSON.stringify({}, null, 2);
    await githubClearAndWriteFile("autovoice.json", _0x4b40cc, _0x366f05);
    await _0xe1ce1b.writeFile(getLocalPath(_0x366f05) + "/autovoice.json", _0x4b40cc);
    _0x35731b("🚯 *Custom Voice Panel has been successfully reset.* ✔️");
  } catch (_0x54c8bd) {
    await ec(_0x54c8bd, _0x30db01, _0x366f05, _0x1ff4e1, readConfig, _0x472a69, _0x3f9295);
  }
});
const _0x24dd6e = {
  pattern: "removevoice",
  alias: ["deletevoice"],
  desc: "Remove a custom auto-voice reply.",
  category: "owner",
  use: ".removevoice hello",
  filename: __filename
};
cmd(_0x24dd6e, async (_0x55ef73, _0x17995b, _0x233f54, {
  from: _0x33d8db,
  q: _0x18ce0b,
  isOwner: _0x3d1864,
  botNumber2: _0x4ede30,
  reply: _0x5ebe09
}) => {
  try {
    await typing(_0x55ef73, readConfig, _0x33d8db, _0x4ede30);
    if (!_0x3d1864) {
      const _0x45a63e = await readConfig(_0x4ede30);
      const _0x266ebc = _0x45a63e.LANG;
      const _0x2e3cc3 = _0x266ebc === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x1aee9c = {
        text: _0x2e3cc3
      };
      const _0x55af76 = {
        quoted: _0x17995b
      };
      const _0x3d9c35 = await _0x55ef73.sendMessage(_0x33d8db, _0x1aee9c, _0x55af76);
      const _0x1f764b = {
        text: _0x472a69.reacts.owner,
        key: _0x3d9c35.key
      };
      const _0x347a4c = {
        react: _0x1f764b
      };
      return await _0x55ef73.sendMessage(_0x33d8db, _0x347a4c);
    }
    if (!_0x18ce0b) {
      return _0x5ebe09("❌ *Please provide the text for the voice reply to remove.*");
    }
    const _0x484c29 = await readConfig(_0x4ede30);
    if (_0x484c29.AUTO_VOICE !== "customize") {
      return _0x5ebe09("👨‍🔧 *This feature requires AUTO_VOICE to be set to \"customize\" in settings.*");
    }
    const _0x21bad5 = await githubGetFileContent("autovoice.json", _0x4ede30);
    const _0x4ca123 = JSON.parse(_0x21bad5);
    if (_0x4ca123[_0x18ce0b.toLowerCase().trim()]) {
      delete _0x4ca123[_0x18ce0b.toLowerCase().trim()];
      const _0x2bee15 = JSON.stringify(_0x4ca123, null, 2);
      await githubClearAndWriteFile("autovoice.json", _0x2bee15, _0x4ede30);
      await _0xe1ce1b.writeFile(getLocalPath(_0x4ede30) + "/autovoice.json", _0x2bee15);
      _0x5ebe09("🚯 *\"" + _0x18ce0b + "\" has been successfully deleted from the Custom Voice Panel.* ✔️");
    } else {
      _0x5ebe09("❌ *The text you entered was not found in the voice list.*");
    }
  } catch (_0x2e2d0d) {
    await ec(_0x2e2d0d, _0x55ef73, _0x4ede30, _0x17995b, readConfig, _0x472a69, _0x33d8db);
  }
});
const _0x3a8faf = {
  pattern: "getvoice",
  alias: ["checkvoice"],
  desc: "Get the list of custom auto-voices.",
  category: "owner",
  use: ".getvoice",
  filename: __filename
};
cmd(_0x3a8faf, async (_0x2127c4, _0x51f4a5, _0x53029b, {
  from: _0x3fc2f0,
  isOwner: _0x1c4213,
  botNumber2: _0x5079ca,
  reply: _0x37dea6
}) => {
  try {
    await typing(_0x2127c4, readConfig, _0x3fc2f0, _0x5079ca);
    if (!_0x1c4213) {
      const _0x294084 = await readConfig(_0x5079ca);
      const _0x513e91 = _0x294084.LANG;
      const _0x23d806 = _0x513e91 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x33228f = {
        text: _0x23d806
      };
      const _0x1ccd2d = {
        quoted: _0x51f4a5
      };
      const _0x79899a = await _0x2127c4.sendMessage(_0x3fc2f0, _0x33228f, _0x1ccd2d);
      const _0x415b1c = {
        text: _0x472a69.reacts.owner,
        key: _0x79899a.key
      };
      const _0x143bac = {
        react: _0x415b1c
      };
      return await _0x2127c4.sendMessage(_0x3fc2f0, _0x143bac);
    }
    const _0x48852e = await readConfig(_0x5079ca);
    if (_0x48852e.AUTO_VOICE !== "customize") {
      return _0x37dea6("👨‍🔧 *This feature requires AUTO_VOICE to be set to \"customize\" in settings.*");
    }
    const _0x3d90fd = await githubGetFileContent("autovoice.json", _0x5079ca);
    _0x37dea6(JSON.stringify(JSON.parse(_0x3d90fd), null, 2));
  } catch (_0x2e6f71) {
    await ec(_0x2e6f71, _0x2127c4, _0x5079ca, _0x51f4a5, readConfig, _0x472a69, _0x3fc2f0);
  }
});
const _0x13e9b7 = {
  pattern: "addvoice",
  alias: ["newvoice"],
  desc: "Add a new custom auto-voice reply.",
  category: "owner",
  use: ".addvoice hello+audio_url.mp3 or reply to an audio",
  filename: __filename
};
cmd(_0x13e9b7, async (_0x4cafe5, _0x20120e, _0x538f65, {
  from: _0x1a9b9f,
  q: _0x39431a,
  isOwner: _0xfdee32,
  botNumber2: _0x5671b0,
  reply: _0x1ab4c7
}) => {
  try {
    await typing(_0x4cafe5, readConfig, _0x1a9b9f, _0x5671b0);
    if (!_0xfdee32) {
      const _0x14c6b8 = await readConfig(_0x5671b0);
      const _0x218997 = _0x14c6b8.LANG;
      const _0x1ea448 = _0x218997 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x3e37bc = {
        text: _0x1ea448
      };
      const _0x2fd9d9 = {
        quoted: _0x20120e
      };
      const _0x5b8c82 = await _0x4cafe5.sendMessage(_0x1a9b9f, _0x3e37bc, _0x2fd9d9);
      const _0x586c44 = {
        text: _0x472a69.reacts.owner,
        key: _0x5b8c82.key
      };
      const _0x45b61f = {
        react: _0x586c44
      };
      return await _0x4cafe5.sendMessage(_0x1a9b9f, _0x45b61f);
    }
    const _0x3cc57c = await readConfig(_0x5671b0);
    if (_0x3cc57c.AUTO_VOICE !== "customize") {
      return _0x1ab4c7("👨‍🔧 *This feature requires AUTO_VOICE to be set to \"customize\" in settings.*");
    }
    const _0x105259 = (_0x3cc57c.LANG || 'en').toLowerCase();
    const _0x318ab6 = _0x472a69[_0x105259]?.["addvoiceq"] || _0x472a69.en.addvoiceq || "❌ Please provide text+url or reply to an audio.";
    if (!_0x39431a && !(_0x538f65.quoted && _0x538f65.quoted.audioMessage)) {
      return _0x1ab4c7(_0x318ab6);
    }
    if (_0x538f65.quoted && _0x538f65.quoted.audioMessage) {
      if (!_0x39431a) {
        return _0x1ab4c7("❌ *Please provide a text to trigger the voice note.*");
      }
      if (_0x538f65.quoted.audioMessage.seconds > 60) {
        return _0x1ab4c7("❌ *Audio duration cannot exceed 60 seconds.*");
      }
      _0x273184.setFfmpegPath(_0xca8e02.path);
      const _0x395605 = _0x538f65.id + ".mp3";
      const _0x4a9037 = _0x538f65.id + ".mp4";
      await _0xe1ce1b.writeFile(_0x395605, await _0x538f65.quoted.download());
      _0x273184(_0x395605).outputOptions(['-y', "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map", "0:a"]).save(_0x4a9037).on("end", async () => {
        try {
          const _0x275a2a = {
            clientId: "60c1814e1fa10c8"
          };
          const _0x3eff7a = new ImgurClient(_0x275a2a);
          const _0x4581ca = await _0x3eff7a.upload({
            'image': _0xe1ce1b.createReadStream(_0x4a9037),
            'type': "stream"
          });
          const _0x606767 = await githubGetFileContent("autovoice.json", _0x5671b0);
          const _0x548147 = JSON.parse(_0x606767);
          _0x548147[_0x39431a.toLowerCase().trim()] = _0x4581ca.data.link;
          const _0x4734b0 = JSON.stringify(_0x548147, null, 2);
          await githubClearAndWriteFile("autovoice.json", _0x4734b0, _0x5671b0);
          await _0xe1ce1b.writeFile(getLocalPath(_0x5671b0) + "/autovoice.json", _0x4734b0);
          _0x1ab4c7("👨‍🔧🎙️ *The voice note has been successfully added for the word \"" + _0x39431a + "\".* ✔️");
          await _0xe1ce1b.unlink(_0x395605);
          await _0xe1ce1b.unlink(_0x4a9037);
        } catch (_0x2eaa80) {
          _0x1ab4c7("Failed to upload to Imgur: " + _0x2eaa80.message);
        }
      });
    } else {
      if (_0x39431a.includes('+')) {
        const [_0x385db1, _0x233c51] = _0x39431a.split('+').map(_0x1e60f1 => _0x1e60f1.trim());
        const _0x505a54 = [".mp3", ".wav", ".opus", ".ogg", ".m4a", ".mp4"];
        if (!_0x385db1 || !_0x233c51 || !_0x505a54.some(_0x2d9e47 => _0x233c51.endsWith(_0x2d9e47))) {
          return _0x1ab4c7(_0x318ab6);
        }
        const _0x3826c7 = await githubGetFileContent("autovoice.json", _0x5671b0);
        const _0x1bd9f1 = JSON.parse(_0x3826c7);
        _0x1bd9f1[_0x385db1.toLowerCase()] = _0x233c51;
        const _0xd42f82 = JSON.stringify(_0x1bd9f1, null, 2);
        await githubClearAndWriteFile("autovoice.json", _0xd42f82, _0x5671b0);
        await _0xe1ce1b.writeFile(getLocalPath(_0x5671b0) + "/autovoice.json", _0xd42f82);
        _0x1ab4c7("👨‍🔧🎙️ *The url \"" + _0x233c51 + "\" has been successfully added for the word \"" + _0x385db1 + "\".* ✔️");
      } else {
        return _0x1ab4c7(_0x318ab6);
      }
    }
  } catch (_0x20bba1) {
    await ec(_0x20bba1, _0x4cafe5, _0x5671b0, _0x20120e, readConfig, _0x472a69, _0x1a9b9f);
  }
});
const _0x433d1c = {
  pattern: "replacereply",
  alias: ["editreply"],
  desc: "Replace a keyword for a custom reply.",
  category: "owner",
  use: ".replacereply oldkey+newkey",
  filename: __filename
};
cmd(_0x433d1c, async (_0x78d599, _0x1b172a, _0x4e399d, {
  from: _0x5736c8,
  q: _0x41f9d4,
  isOwner: _0x3f6620,
  botNumber2: _0x148928,
  reply: _0x555851
}) => {
  try {
    await typing(_0x78d599, readConfig, _0x5736c8, _0x148928);
    if (!_0x3f6620) {
      const _0x462b8e = await readConfig(_0x148928);
      const _0x49496f = _0x462b8e.LANG;
      const _0x238bd3 = _0x49496f === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x44bc1b = {
        text: _0x238bd3
      };
      const _0x2aef30 = {
        quoted: _0x1b172a
      };
      const _0x31008d = await _0x78d599.sendMessage(_0x5736c8, _0x44bc1b, _0x2aef30);
      const _0x36a09c = {
        text: _0x472a69.reacts.owner,
        key: _0x31008d.key
      };
      const _0x182fb2 = {
        react: _0x36a09c
      };
      return await _0x78d599.sendMessage(_0x5736c8, _0x182fb2);
    }
    if (!_0x41f9d4 || !_0x41f9d4.includes('+')) {
      return _0x555851("❌ *Invalid format! Please use: .replacereply old_text+new_text*");
    }
    const [_0x334d4d, _0xe0c44e] = _0x41f9d4.split('+').map(_0x36e48d => _0x36e48d.trim());
    if (!_0x334d4d || !_0xe0c44e) {
      return _0x555851("❌ *Invalid format! Please provide both old and new text.*");
    }
    const _0x530f63 = await githubGetFileContent("autoreply.json", _0x148928);
    const _0x562418 = JSON.parse(_0x530f63);
    if (_0x562418[_0x334d4d]) {
      _0x562418[_0xe0c44e] = _0x562418[_0x334d4d];
      delete _0x562418[_0x334d4d];
      const _0x2205a3 = JSON.stringify(_0x562418, null, 2);
      await githubClearAndWriteFile("autoreply.json", _0x2205a3, _0x148928);
      await _0xe1ce1b.writeFile(getLocalPath(_0x148928) + "/autoreply.json", _0x2205a3);
      _0x555851("🔄 *\"" + _0x334d4d + "\" has been successfully replaced with \"" + _0xe0c44e + "\" in the Custom Reply Panel.* ✔️");
    } else {
      _0x555851("❌ *The text \"" + _0x334d4d + "\" was not found.*");
    }
  } catch (_0x2d5901) {
    await ec(_0x2d5901, _0x78d599, _0x148928, _0x1b172a, readConfig, _0x472a69, _0x5736c8);
  }
});
const _0x18c6e5 = {};
function _0x3e53() {
  const _0x283391 = ['W7ldJWyXWQe', 'W5BcKComhCoO', 'WQr2uqPx', 'p21HaCkV', 'xSo9eZi', 'iCk2WQtdMCkk', 'eMj2yhm', 'bq1BArC', 'a8k3WP7dO8kM', 'f8oqWQRcJmko', 'jSkYW7ddNCon', 'CmkjoCkmW7W', 'vmkEWPDzWPW', 'WQBdNJCrdW', 'feXVWPhcOG', 'WOvrWRRdSbi', 'W78NW6i7', 'W4rrlenE', 'dgRdTsNcOq', 'mMTaWOtdKW', 'qCoUeSkhWOm', 'ASoApW', 'W7lcL1jE', 'rSkAWOHt', 'W5S0WOPugG', 'A8k+WRddMq', 'W7LCW6FdIbe', 'ESodvCkTlW', 'jCksWQhcGNG', 'W6GyWR15iW', 'vqzGktG', 'W4ZcHSogaq', 'W48PWR59', 'y09WWO3cQG', 'BGXSWOFcQG', 'cCkPW6dcHCkI', 'vSklW4a', 'jmkUW6tcJXG', 'WQOQbCog', 'WOHTWRVdQSo9', 'u8oXtSkGia', 'W5/dPSkAs8km', 'WRKdd8oMW70', 'mmk0W6ZcKHm', 'hcnOFIO', 'rWzIAZa', 'WPlcUSoiW57cQq', 'dmkvWOHFWPy', 'Bmomnmoewq', 'W60HWQz5', 'WQRdNITaW7S', 'WOrkWR3dHt0', 'W6lcJf1tma', 'aZW2dNe', '8yYcVEkdN/c1L4xcV11ZW5W', 'wsHsWPxdJG', 'q8kyWP4qWPa', 'ecDPqJu', 'WPldISoyWOBcOG', 'kaXZWONcQW', 'W4FcVmo1oSkS', 'bZ1Lta', 'kwH0', 'yCoilXWV', 'hCkEWPFdQSkk', 'WQhcSmkZW5VcHW', 'imkhWR/cGNi', 'mCogWOhcOmks', 'WO3dNSoyWPhcQa', 'cmkCaW', 's8kaimkNW78', 'WOhcGwrvhW', 'W7pdHSksC8oR', 'm8oZWQxcGmkG', 'W4hcGmopeSkP', 'aSo/WQFcISk0', 'Emopra', 'FSk0lx/dNq', 'FmopkqC0', 'mMnnWOddHa', 'W7dcKfa', 'WP/dV8ofWPlcPq', 'W6hcKxHiiG', 'hLbKaSkV', 'ymozpby1', 'aCkEdmkDaa', 'W5PRcNmf', 'WO5vFmktW6e', 'rWD/W4hdVKmuWQJcMCo2Ea', 'W7zPn247', 'WOFdU8oDWORcRW', 'bg1cWQddQG', 'x8oSAvxdSG', 'W6hcM0Xt', 'qrOZtai', 'n3pdJtOj', 'W7O0WQbXiq', 'WR9Oxara', 'jCkdWR3cJ1S', 'W7ZdNCkBzCkL', 'sJLoWRZdOW', 'WQ0MeSoCW70', 'F8kxtW', 'CmoMeSko', 'ymkgjSkaWRi', 'jeZcGqdcMW', 'W4RdHCksBCkN', 'W40PWPldICoj', 'WPxdNH0XW7C', 'mCk2W7FdJa', 'dSkHWR3dSCk8', 'm1jmW5jU', 'yWfQWRny', 'dCoIWPlcGSkh', 'WQBcMCoAwsS', 'CqDxWPC', 'W7K5WQhdRSoV', 'WQPZxmkKW48', 'neCEWRNcRq', 'qConqSkFWQy', 'W6CHWPldGmoi', 'W73dMmkIqSkD', 'BCkhmmotuW', 'W6rGsHTk', 'WRLGqCkX', 'WQxcTSoVtWq', 'pSkXmbFdJa', 'WP/cOLfOEa', 'bdtcRW7dQq', 'WQ/cMCkIW4tcPG', 'W63cOCk3W5dcLG', 'W5RdQCoDWPFcQq', 'W7G1WR1SkG', 'WRjlqSk/W40', 'WPBdTSoaWP/cUq', 'W4m+W7pdRCoR', '4P+Id8k8W4ek', 'W7tdGCoNW5fe', 'WRNcQ8oSstK', 'hdHIrcW', 'vSk1WQfZWPK', 'jmkrW4FdJmoz', 'WOBcLKP0EW', 'jrzhWOz2', 'W50QWQjUkW', 'WQK0WR04lq', 'WR7cOCoYW4FcHa', 'WRDSWO/dJt0', 'WOfTWQG', 'WQJdTCkZWOJcGq', 'z8kxwmoaW5K', 'n24LWRBcVW', 'm8oeW7pcGNG', 'kZzSW6tcHW', '8kUrTokdOpcSTyfEW64kWOi', 'i8kvWRy', 'uCoFWO9yWP0', 'W5ddT8kTD8kn', 'yW9QWRS8', 'n2zDWOq', 'AmoLmCkSWOC', 'WRhcSxT+ta', 'WRdcRmoQxGi', 'mmoil8ouuW', 'i3viWOFdGq', 'W5PwlL4', 'WRFdNt8mea', 'Da1NWRHu', 'chlcMb/cRa', 'ee0qWPdcQa', 'W6FcQSo3l8kg', 'WRS9pSotW70', 'WO9KAb1n', 'FmkqCmoVW7y', 'psKqW5/cJq', 'iCkaW7hdM8oH', 'l+kEQ3xcRmo8', 'imkEWQVcKN8', 'W7bFh1i7', 'WQxcJmohrYC', 'fdLTW5RcKG', 'WPBdVSonWOJcPq', 'jmkiW7pcN34', 'WRFcKs4Ddq', 'W4L5ANaR', 'W7ZdLSkJ', 'ymkujSkeW7u', 'WOxdV8oeWPhcVa', 'WRFdHZurfG', 'dSkXWPC', 'WOTkwmk6W74', 'nNxcGsSi', 'tSkWWOnbWQW', 'otDxW5tcJq', 'xd5pWRtdQG', 'wGetpG', 'xHyTFtq', 'zCk1vmovW60', 'FCodvCkP', 'suGdbSku', 'WRjTWOVcLxW', 'WOpcOSkeW43cJW', 'ESoJExNdGq', 'xmkkW53cVmk7', 't8klW4NcSSkJ', 'WRVdIczMW60', 'W5BdTCk5rW', 'WRrYfCk2W48', 'zSotmbW7', 'WOxdV8ozWPlcSW', 'xt1Puti', 'W7lcOmoUmSk6', 'WOhcGcfawG', 'lwTbc8k2', 'WOWQdSoxW7O', 'WQHQWOVcJZq', 'yqyZFGa', 'lCkXWRVdJ8kt', 'W71JumoWW5K', 'WRTTxCoBW6a', 'ACkEDCknW7C', 'WPDQWQiqW4i', 'tqysd8oc', 'WRaQcSobW7O', 'W6T1vWOf', 'zq9lWPzB', 'dCkgfW', 'fmkPWRZcI8kY', 'WRn7WPBdMW', 'cSkbW4a', 'hmovfaRdPa', 'kgBcR8oB', 'tCo7mSkgWOG', 'WQKHu8k/W58', 'WRNcP8k7W4u', 'gq5QW7RcOq', 'W6BdGCkVWPj/', 'aY5+uJS', 'W5SJWOPOhG', 'h8kxfmoEea', 'WPfQW60wWOu', 'WPhcLfbFDW', 'W6JdKCkuB8k5', 'dwqxW73INPdVU4O', 'W5vsWRJdSGK', 'W41LW77dMZ8', 'D8oTpaek', 'WPBcQ8kzWP3dSG', 'FXWEamkh', 'WR1qrXTe', 'W7DScw8Y', 'pwv5bq', 'WOvRWQiwWO8', 'osGqWP/dTa', 'W4DCW5NdPGG', 'WRLKwCk1W54', 'BmoznSojsa', '8l2aQokdN/czLAJdN8kaE0e', 'dSktaCoyaW', 'bv47WOFcOG', 'xbCJFtq', 'dw/cOsJcIq', 'sYjfWPJdNa', 'W67cGXPeoG', 'W4dcL8oGeCk7', 'W7G2WROGna', 'WQLKtCkK', 'Aq5wW4mY', 'qbfz', 'CmobsSkToG', 'yXH6', 'WQBdKWWXW4a', 'W61GW6qOBW', 'WRJcM8oCqYe', '4Bs3Y7rA4BwU4BEP', 'C8ofnq', 'Emk7w8oUW7y', 'W6a0WOVdGCoS', 'WQKGd8owW70', 'WRbXwCk1W5i', 'rJHyWQ7cPa', 'W7/dHSkPWP8', 'WRBdLcKB', 'WPnliL4a', 'WQ8HvmoWW4K', 'mCkDWRVdHCkx', 'lSofWPdcGmk/', 'je7cGCovWPC', 'eJPOsde', 'aWTQsIO', 'kmkwW4hcQY4', 'oGHTycO', 'muNcTHxcOG', 'tIDy', 'c8kqhbZdHG', 'W5Plz0Wr', 'mIHrW5S', 'W5hcGmoBbmoO', 'mxdcHcPg', 'e8k9WR7dQCkL', 'W4ldU8kIWObN', 'sJPrWQq', 'CrbgWO4', 'WPJcG8kEqCoY', 'sCkyW5BcT8k5', 'zSkio8kdW7S', 'bSktW5hcRIK', 'gH9TWPdcSG', 'ESkAW6RcHSkC', 'AtPxf8kd', 'W7dcKtizbG', 'bSo5WRJcJ8kU', 'WOddNHP0W7C', 'eNVcGrCs', 'pdPkW5q', 'f8kcWQhcGu8', 'qmkEWPjCWP0', 'd8kCgrhcOq', 'aSkrWPreW5G', 'wmkaar3cSq', 'f0nVl8kU', 'WP5TWQim', 'oMboWOddKG', 'tCktamojcW', 'WObhWQpdUZy', 'wICrtH0', 'WRXSua', 'zmktqSoqW7e', 'srSeaSkl', 'Dmo+fSkFWQW', 'W7VcMHrooW', 'zGDCWPaW', 'B8oXemkPWP8', 'W4i2W7W6ha', 'W4pdUSkpWRjr', 'WRtdHdqBaq', 'ps8EW4hcKq', 'WOVcHmohfmkQ', 'p3hdJrWd', '4P6bW7xdUmo8WOO', 'CGD+WQnC', 'aKGyWRFcIq', 'WQJdHti2lW', 'DWz6', 'lSkPW6VdHLW', 'WRTGtrXa', 'pSoMW5xcHXG', 'W68JW64U', 'a8kBW53dRCoL', 'e8o5WOFdTmk+', 'W6alWQldMSol', 'hCkgarNdRa', 'kh5DfCkh', 'W5WhW68Rjq', 'W51BW7/dSG0', '8j6aQW/dIqBdLa', 'bmkCeSoosG', 'W5RdLmkmWRD+', 'WQ1OuWPl', 'aSkGWRhdP8kH', 'eSkNW7BcLZ8', 'WPZcNe1jsa', '8y6QSCooWOuFwq', 'kMBcOCoaWPS', 'W6iTW5aLiq', 'hLBcUJCF', 'WOpdQmoaWPm', 'WQjSWQ3dJI8', 'CmkxoCkkW7m', 'h8ooW5hcV8kP', 'xb02dmkz', 'W7ddH8kfWPbN', 'bLOHWPFcOG', 'WQzQWPVdNtK', 'W6xcJfTrpa', 'qYblWOLI', 'v8ogh8oYrG', 'u8kkWPreWP0', 'WQK8c1vs', 'W6ZcSSoQomkC', 'E8kFfSowW7e', 'vCklWPNcQCk1', 'eWPQW6/cTq', 'WR7dNGHIW6y', 'W7hdHSoMWOjX', 'q8kyzmohW78', 'eSkrW4ldGmoV', 'WO7cKdu6WQm', 'W4JcH24gsW', 'CuWfW4pINylVURC', 'k8kQW7ZdHGq', 'W7VdGmkcCSkU', 'W6NdGmkyBCoR', 'DSoXzCkRpW', 'BCohwCk8', 'nmkCu8otWRq', 'WRtdLbX/W6C', 'jmk4WOpdKCk7', 'WPpdLt5yfa', 'WOJdLc0zfG', 'E8oDmvS3', 'W4RcKSonfCk6', 'W6xdMCk/W5fG', 'WRTOwCk1W4q', 'W5PvjK0r', 'WQzOrqOh', 'WOr6WQGAWQu', 'W75Hd8oxW74', 'WR/cLSolrJS', 'ACoap8oxtG', 'WRS8dSotW6K', 'fSkNWP3dSSk3', 'eCkbWOdcIui', 'gK4JWPRcOa', 'WPpdNYi/ea', 'W5pcGmknwG', 'uSomnSoqzq', 'kSkklmoubq', 'nmkuwCowW7K', 'ErPmWQ/dTa', 'gCkaemonca', 'WP1kiKCB', 'c8k3mXxdMa', 'pCk1WP/cUNO', 'oxzeW7tdKW', 'qcSosYi', 'fMNcUsBcSa', 'td9oWQNdQW', 'W7JcVhDIlq', 'WOzKtbXe', 'xc55vte', 'Emkxv8oxW7e', 'eKZcUaq/', 'j8k8W6ddGq', 'WQNdTCk0W4FcKa', 't8kaemojeq', 'FCoXyNtdVG', 'aGihbmog', 'ee8JWORdQq', 'WOpdV8orWOO', 'rHbGihK', 'cmkGWOS', 'WPnZWQ8OWRO', '6P2u4Bsz4BErY5pkRG', 'WRJcLmkayCk4', 'DSoQaCkFWQy', 'WOxcGmonbmkT', 'exZcPJS', 'AZW9vSo4WRVcQuhcOmkCmW', 'WPGMeCox', 'zaXOWP3cUW', 'lMBcTmoAWOa', '8yUZMEkbL/cHLzjRDhVcPW', 'AHvbWOyK', 'WQVcG8ogmSo9jIBcR0hdNJLHWQm', 'iSk0W6BcGXO', 'WQj6WPNdGc4', 'WR3cTmkMW5ZcHW', 'WOpdQGzeW4e', 'tqH9WPms', 'W6VdPmk+u8kH', 'gJXdvJa', 'ow7cId1g', 'BqjXWQrp', 'WQ9GsW4', 'dMBcPmokWOy', 'WQRcMCooyCoM', 'WR3cM0TYW7y', 'wJLjWRldQq', 'zqX5WO3dUa', 'W5vnk0yn', 'wqWRAJq', 'WQrXWOddNcG', 'o2ijWPddKG', 'W5zik1m', 'y0j9WOFcHW', 'W6JdP8khz8kO', 'WQPIwH1a', 'mxKeWQdcRG', 'WPmAjf8h', 'W5r9WQipWOC', 'yuLI', 'FmoLxxZdIq', 'WQCNWRDSlq', 'W4ddQ8otxCkq', 'WR/cOmkXW5ZcJq', 'wmoNrCk7iW', 'B3nUWPRcTa', 'W4VcS8oRmCkF', 'zvLVWPJcRq', 'fgZcUJVcOq', 'W5meWQpdKSo3', 't8ohwNNdUW', 'W4SpW6ldTb4', 'ECoycmooza', 'nd8EW5tcKa', 'tCkxg8ojaq', 'vuSGW5pcPq', 'WQJdLhHyha', 'WQn/WPRdJG', 'tCo6W43cVmkj', 'xSoYzfJdSq', 'BCoUDCk6oG', 'e8kqcW', 'B1X3WPhdTG', 'WPJdNHaFiG', 'tSkxav5H', 'W6SdWOFdGSor', 'mN1VcCkS', 'xqyJAIu', 'cCkxbSoE', 'iGzuwsC', 'dCkHWP3dQa', 'W7ZcJrrbma', 'W7xcI8ognmkM', 'WQVcUSkGW4xcGW', 'W5lcM0ahiq', 'W6mNW7yJpq', 'dSk9W5ddNmos', 'D8ogaCkHjG', 'W6eLW7j0jG', 'WOxcH8ogfCkM', 'k8kBfsddQa', 'WQ1Gr8kXW54', 'WQ9KtaW', 'mSoimLvJ', 'W6qKW7WMmq', 'rHanFJ8', 'gCkxdCoj', 'WOVcGSogbmk7', 'Ed1rW4FcKW', 'hL9ZWOJdJq', 'eCkGbJxdGG', 'CCkVoCkwW5W', 'WQdcVmkOW40', 'WR06dSogW6e', 'WRHMECkDW74', 'WPfYWQGwWO8', 'CrbXWQvW', 'Fmkav8oHW7u', 'BK1VWOK', 'rsGiEae', 'BSomrLxdMW', 'tcvtWRVdRq', 'DSk2WRlcHxm', 'FmoruSkPlW', 'kmkImWNdSW', 'W4bmkeCD', 'mCk2W7ZdJa', 'cmoVWQ7cISk0', 'WQuHwbXa', 'W5ObWRrOoG', 'WRhcISohxZ4', 'iCoca8kuW5hcSbpdQ03cSG', 'W7xdOSkLrSkk', '8jsGOUkaSpgiHQpdPv7dTwO', 'CmoZDa', 'pSkMpmo+lW', 'yqXKWPab', 'zmkrvCo0W5C', 'AmoZEtBdHW', 'WRpdJ0GXW5m', 'FwPzW5BcGa', 'WRJdMmkatdS', 'hYnNW5ZcNW', 'xmkcW5dcV8kP', 'W4DDp14', 'p8okmHWI', 'dSkaemoCea', 'WQHmtYfu', 'WRFdQXHPW6S', 'tqiRztq', 'tqWtfCkd', 'W4ZcTSouiCkT', 'vSkwWPHBWP0', 'WQPLwW1e', 'dmksW7dcJJu', 'nIujWOZdJG', 'BaXFWPyI', 'W4nQW4tdTcK', 'W7ZdGZ8vgG', 'W6qVWROUjW', 'YkFHTjZkTEg3Pq', 'W747fCoxWQ4', 'DJX5WQDE', 'WR/dMJ4rbW', 'zGnBWOyX', 'W5bqjKmA', 'W5FdQComWORcVG', 'ftD/W77cUa', 'W6iHW7eQia', 'zbXZWQrt', 'srPzcCkF', 'jhNcNJO', 'W4joW7xdTbq', 'Da0wlmkz', 'FKv4WOpcVq', 'ndZcMsfg', 'zWnlWOyY', 'u8oGW4ldTSkj', 'W6/dHmkBB8kQ', 'WRFdVZKlgG', 'qXOo', '8jsGOUkaSpgiHQpXJP2RWOeOkq', 'nSk2W6RdNmoN', 'WPRcUSoBWPVcUG', 'W5bDnu8e', 'WPBdPrq9mW', 'lmkGWQBcKCkc', 'lbHVW7u', 'ymkxtSoq', 'rmotnbyK', 'smk8WQ9kWPe', 'nCo3AxldHq', 'dmkEhmoCfW', 'lmkOW4ZcNXa', 'DSkvWRBcN2i', 'pxCHcSkU', 'WRX0qCk/W5W', 'W7VdHmkhBmkY', 'ACoZBhxdHW', 'f3ZcTcZcSa', 'oCoarmkTjG', 'z8oQeCkFWQy', 'WRL7WQesWRm', 'EtFdHgvp', 'W6eQWQHAkG', 'W5NdU8onWPRcUa', 'eSokWQtcHCkt', 'yWb7WQHs', 'WRCSfSoxW7W', 'pSolmGCL', 'WR/cLSop', 'hKHKiSkp', 'WO1RWRW0WOG', 'WOtdTCoeWPS', 'W6FdVCoTWPlcUq', 'WQjIwG', 'W7VcNCoVW5e', 'dmkApHFdVa', 'b1OUWPdcSW', 'hqKEW4hcKq', 'hZ5kWPxcIG', 'lwWTrG', 'WQJcPSkHW4NcHq', 'd2JcJdxcPq', 'WRNcJmkHW5/cJq', 'nNrAWOtdHW', 'ESoWeICK', 'iCk7WP7dOW', 'iSkjW77cNxK', 'W5FdLSknwCkt', 'WQuJW6O/Fq', 'mHPyBGe', 'WR1UvGXa', 'ivtcPH7cKq', 'W6OJWRDRpa', 'scnBWQq', 'kZ5qW5hcSW', 'DSoAESogwq', 'tHy2zIm', 'W73cLX9pma', 'W6hcKvLolW', 'tJPnWRhdVq', 'qmkEWP8qWO8', 'rIDUWQbj', 'WQtcTSk3WOJcJa', 'W4TCW6xdSae', 'WPnAiK8A', 'D2TQaW', 's8ohtmkNpG', 'W4SUWQFdOSoH', 'WQDkWOqHWQe', 'W6jUdKGv', 'ng5pWPW', 'W7/dHSksCmkN', 'lCoUWRlcGmkg', 'emoEWOhcMSkU', 'WOOVWRBdRSoG', 'W78HWR5XkW', 'dmkgvmkDna', 'W4qpWRXEba', 'W6hcLCk/WP5H', 'CSohuW', 'W6LXnwuE', 'W44OWQa', 'WO1yWP/dVHK', 'WRlcMCoCsW', 'WOFcHg9dtq', 'mSk1W7hcIrS', 'W5XUW6FdMJa', 'hNXudCkG', 'WPjezWHW', 'WOZdP8khWP3cPq', 'EKbIWPK', 'DCkgiCkrW7C', '4P6AW5JcGN4M', 'rxRcOdZcSa', 'gKGHWPBcTq', 'r8oDg8ksWOy', 'r8k+ltZdRW', 'W41OW6ldTs8', 'W4rrlenu', 'E8oilSob', 'm8kPW4NcIqe', 'DbP2WQjy', 'WQzRWPRdGc8', 'WRHYWQj2zmo/WRfcWOLpy0RcJa', 'na5bvsS', 'zG1bWPaI', 'kdPmW4BcMW', 'e8k9W5/dTCkM', 'xSobq8kmuSkRWPfNW4xcSrC', 'yejBWOyU', 'mbzesbC', 'DWDoWOaI', 'os5kW5RcJa', 'mgPUcmk0', 'yCkvWOPNWPe', 'W55rpu9w', 'WR3cNCor', 'W49AW7ldUaK', 'kSkiWPVdNSk5', 'WQ4Jba', 'BSoihCokvW', 'W41oW6ldTae', 'WRLKwCkJW54', 'W7/dRmkeWP1Z', 'ymkVWQ56WQe', 'W7dcSmojp8k+', 'aCklwW', 'WRpdLGW', 'E8osoGzV', 'icyrW4ldTG', 'W4PFfLm8', 'WQ/cSKXssG', 'z8kJW6VcKHm', 'WQldMmoortS', '8lsXH+kcM/c7HyhcLSoxWP3cGG', 'zJu2rHG', 'pNJdJsCi', 'BsigvGy', 'tCkCgSojra', 'CqvZWQHj', 'FtOCeCk+', 'W7tdKmozkG', 'jmoqWOdcISkE', 'bKS9WPRcQq', 'tCkggSkDrG', 'xW0zb8kH', 'WPlcSIX8ya', 'iSoMW7BcGWi', 'WQxcNCogtGm', 'nMNcGY0s', 'ybbSWOiL', 'WRW9mmoDW5y', 'qWDIAd8', 'yGTjWPO', 'eelcMCoO', 'CCotmWy1', 'i8kzWQhdImkX', 'sWergG', 'BSoCnCouwq', 'sc1bWQuD', 'Dfn4AaW', 'WOqNWQpdRmkK', 'ucXMWOju', 'WQ/cOmkeW6hcRq', 'W40OWQFdUCoR', 'Cmo2aCkaWQW', '4P+fymo4use', 'fCkCcb0', 'WOpdTCkjWP/cPa', 'zCkMW7FdNCkq', 'W5ldG8k/vSkO', 'W7ldIqXGW7y', 'jfxcIq', 'kqj7W7tcVq', 'i3dcUsO', 'BCkcr8kNpq', 'FCkbECotW7O', 'aGuRzsu', 'WONcGcfewG', 'WQ7cJmkc', 'WRjTWOS', 's2PjWRlcPa', 'WO5nW7pdTaG', 'umkAWOHvWOW', 'uCkWlCkvW7e', 'hmkubHK', 'WQZcOmkMW4FcLa', 'W7xdMmkcBCkU', 'pJZcIJ0d', 'WPJcKNvswG', 'wSkbWPNcQSk1', '8kUQQaNdJ8kc', 'WRtdVIr9W7y', 'WRxcUSk1W6hcPq', 'WQJcUCk3W5ZcHW', 'Bbn1WRtdJq', 'd8kIiSolha', 'FSoxncim', 'WRhdNKLJW6y', 'WPVcTSkeW4NcUG', 'rMP+WOBcJa', 'C8kipmkgW7C', 'mSkjWQtcHxO', 'WPfWW60rWP8', 'bmkCbCoiea', 'tSklW5FcUSkx', 'WOfTWRKnWOC', 'tCkpW4VcRCk/', 'pMzz', 'BCohESouva', 'W49TWQFdRSo2', 'sKfIyd8', 'WQO+WOldHI8', 'dCobWQZcLmk5', 'WQCQWQf3iq', '4P2JAHFcLmoQ', 'm27dT8oDWPC', 'pxTmW5dcJG', 'WRpdJXXJW6y', 'sHaXAdy', 'cmkzc1JdUW', 'bSk/WPC', 'C8oMvSkRoa', 'WRpcImoeu2a', 'vH9YWPnK', 'imkGW7FdNSoF', 'emoGWQpcISo9', 'jmoQeCkoW7m', 'gCkfaHtdSG', 'eL3cQw4s', 'nSo8WONcKCk/', 'W4zliG', 'ECozlW', 'A8o6DdBdOW', 'f3ZcPspcPq', 'bSo6W6JcJCk4', 'uY1MWQat', 'ECkjW6JcVmko', 's8o4AfldNq', 'ASk3s8ol', 'umogvCkRiq', 'lmkHW6hdI8kk', 'W63cVmk8WOJcKq', 'eITOuIO', 'EsWlsHq', 'o2zdWPhdMG', 'ESoxuSk8jW', 'gGTRW7/cPW', 'W7eHWRXYdG', 'W4dcKSo8bmkT', 'WQRdU8kMW5dcLG', 'W7dcJbPnjG', 'WOtcNCofrtG', 'EdjqWPxcJq', 'u8kChXNdRa', 'r8o8WOddO8kI', 'D8ktqSobW7m', 'iJlcHZ0j', 'W6VdGCkyDmkU', 'ig/dL2fj', 'WQzTW47dJtK', 'Aa4qeCkC', 'WROQxCogW6y', 'WOdcI8osxs8', 'AXPXW6ex', 'd8k3W5ldQSk7', 'kCkNgqRdMq', 'ASkvla', 't8oaW5pcRCk1', 'zbDBWOWK', 'W64YW7y2CG', '4P2EWPX3isK', 'WRxcRLvjma', 'rxdcU2/cTW', 'yHebW4K', 'm8kuWRBcM3O', 'e8oYWOVdQCkN', 'EwvPamkK', 'sW8seq', '8kAJOEkdHFghP7dcK8kDWR9t', 'ogLO', 'WR8HgmoEWQa', 'BmoDkmojuG', 'WQXUWOKeWPW', 'WQBdGGz2W6a', 'sCoaWPm', 'wZHuWRa', 'jN4PWOpcSG', 'n8kEmCkvW5BdQMq', 'W7ddGSkzWOvX', 'W7ldGI8BfG', 'W4S4WQFdO8or', 'D259a8oR', 'W4bDku45', 'yaXlWPab', 'zWXVWOdcVq', 'psnDW5dcMW', 'jCkiimkxWRi', 'mgDOfq', 'W7NdKCkICmkV', 'wmkZEmoJ', 'aSknWP5bWO0', 'umkxyCowW7W', 'WQZcSCk2W57cJq', 'WRFcJCoCrtW', 'W6TKurTa', 'gt9AWPxcNW', 'DCkgq8owW7e', 'W5pcISoke8kT', 'WRfIc8oDW6C', 'WR3dNmoyWQ/cJW', 'nCoKAgxdLG', 's8krWPW', 'CmoTc8kg', 'CWbWWRvy', 'WO3dSCoVWOVcJW', 'rSkgBSoOW4e', 'zCkqW7hdI8oE', 'sCkZWOldTSo9', 'D8o6dmkpWOq', 'kqTIBta', 'lCk1W6RcIa', 'W6r9cMGg', 'WRhdMGv9', 'WQneWRKwWP0', 'WQb6WRKQWP4', 'WRxdGCkUWPq0', 'WR/cSmkZW4VcLG', 'B8oZDwi', 'kGnAWPC5', 'xmoWaCk8jW', '8jsGI+kbJ/cDHBBdQCoyW5TS', 'n8k0n8oBiG', 'WOZdK3vjhW', 'bLZdS8oYWQK', 'rcOBqqS', 'sCkAWOi', 'CCkiomkmW6G', 'fmk2WOBcOu8', 'W4FcOmoi', 'WP9aCq', 'WOpdTCoeWPFcSa', 'DSkfWQBcMgi', 'W7pcQSoQm8kn', 'WR3cTmkGW5VcHW', 'exBcHJVcTG', 'qdagAIy', 'o8kpWQNcJG', 'C2jhWPhdHq', 'amk7WPtdVW', 'Ccf1WOjC', 'WQBcSmkR', 'zmk2umopW6a', 'WPHtfCkKW4u', 'WRVdH8kJWOjX', 'Aun1WPVcRa', 'eGnxW7FcTq', 'CmoWmCkFWRS', 'W6hcLCkGWP5H', 'deLpiCkt', 'A1HUWPRcVq', 'o8kmc8oO4P2C77Q7', 'imo9WQ4', 'sSk/WPpdTG', 'W4fcWRBdGHi', 'W6hcJf1k', 'n8kwWQpcH28', 'W6GJW64Qnq', 'lwXGamoS', 'WRxcHSkNW4/cHG', 'ASohvCoOpa', 'WRtdHdyuda', 'WPBdR8oDWPhcVa', 'W4iOW7pdVCoH', 'aSo7WQVcHSk7', 'C2rgWOhdHq', 'wXOEf8kj', 'W4OMW75VmW', 'tCkdW4ldICo5', 'fmkcea', 'W6OVWRXRoW', 'bLyGWP3cTa', 'WOO/WRBdPSoH', 'W4NcGmoca8kT', 'WQpdJGzLW6y', 'fSogW4KdWPlcPtPYWQHt', 'r+kEVLxdTaO', 'oCk7jJhdLa', 'rrOsemom', 'EComomobtG', 'aabkDsK', 'WRr7WOddIXe', 'W4K4WQddV8oH', 'nmkgu8oCW6a', 'A8o8W6xdJCoE', 'BSo0omkkWPK', 'f8khcW', 'BaXUWOrU', 'WRxcJCoBxIe', 'W5G4WRddV8oH', 'pc5kvY0', 'rG0KzG4', 'WOZcL2rchW', 'WRLKtaPr', 'fCkChX3dVW', 'fCkuaG', 'W5zlneSt', 'D8ooFsuG', 'W54IWP/dPmo5', 'cmkBaCoufq', 'WPP2qSkYW74', 'W7NdKmkNWOjX', 'jCozWP3cQCko', 'tGaqjmkB', '8kAbSEkdMpcSP6mNWPdcUfS', 'WQRdGJHZW6C', 'W4hcULXWaW', 'k8k7h8oCda', 'E8omkCod', 'FhhcSSoEWOC', 'FSk2ExpdIW', 'n8ksWQBcMxm', 'W6COWR7dRSo0', 'm8ogWQFcJM4', 'Cmkjomofha', 'gfz9WR/dQW', '8lMZNokdUVcFL6W2pmkduq', 'hCkal8oFeG', 'WRJdNLXtiq', 'ox/cHISu', 'WQrRWP3dMZm', 'W5FcGmoce8k8', 'WPHvDIXU', 'C2bwWPNcQW', 'EuL1WOZcLq', 'WRFcMuL4W60', 'dCkMfc/dGW', 'dSkXWPNdO8kG', 'CCkRWRjZWRm', 'W6hcTmo0bCkh', 'lSk2W7BcMmoy', 'ACkgnSkaW6a', 'tCkbamoEbW', 'lmkGWQtdNSop', 'WPDKWP01WQe', 'WQOGmCoDW7K', 'mSoooaq0', 'q8kBWP9gWPC', 'W7KHWQzSkG', 'WQhdNGP+W60', 'oCkaWRxcGNu', 'q8kkWP9zWPC', 'jfFcGqBcMW', 'WOxdUs9PW4y', 'WQ51r8k5W4q', 'W7ZcOmo7f8kD', 'W6HgW7RdTa', 'tXWyeCoe', 'fN3cHcid', 'AmoxtSk8lq', 'W4rklL4r', 'pwFcS8ozWP0', '8ykJK8kjW5tcMNa', 'W5XkW7FdSHi', 'ESoDlSojuG', 'WQ0Qe8owW4m', 'DmomiW', 'W6dcRmoqmCk+', 'r8knW5TCWPe', 'WP92sd5x', 'B8odtCkHla', 'W63dVCkMW5RcLW', 'WPldQCoAWPJcVW', 'WR8Vfq', 'WRSHxCobW7S', 'zCkOWRftWP4', 'W7tdLSkccUkDMU+6RW', 'fLdcNH/cNq', 'W5FdLmkxWRLU', 'WOdcKfrWEq', 'WPhdI8oiWQ7cMa', 'WQjVwbWl', 'WP1RBdLh', 'W5WhWQddHSow', 'WOxcUSobWPFdOq', 'yCkoWQ7cKq', 'kxdcO8oaWP8', 'ESoznSozha', 'WO3cGhjhwa', 'WO3cGhvpxa', 'W4VcLSoxaSk9', 'WQDDWR0LWP4', 'euzTWRRdTW', 'w8oVeCoZvq', 'WQZcUmk3', '4P6sB1FdOSoI', 'W4vTWRldPCkU', 'vCk8qmoqW7u', 'WPJdRCohWPVcUa', 'WQHGsWPc', 'WRO8u8ky', 'WOdcH8kKW7VcKa', 'WPH0W6pcUCk+nIpdS8kcWP3dMbBcVW', 'hu3cG8oMWQ0', 'W4BdOCkpWRjF', 'y8kQWQ9/WQC', 'jCkoo8ofW6e', 'W7SWW7STmW', 'WOdcRhjdta', 'WQvLeuu', 'W5KzWQv9aq', 'WQlcNCoqxG', 'iJ4CWPxcLW', 'WRVdM8oNWRK', 'uJDnWQHT', 'W6NcK8occCk+', 'W5HDpG', 'WQ8Vx8kJW4u', 'ECk2zCorW6y', 'dXaNFsu', 'WORcN8kKW7lcKW', 'W6TZwHXa', 'xW0dq8ky', 'fxxcVcRcTW', 's8knWP5dW5G', 'kCkIWQxcJXG', 'WR7dG8oSWQJcQW', 'ASohqmk6kW', 'o3NcLa', 'dmkDhXZcPG', 'W7hdHSoMW5m', 'WRFcLSonrMa', 'AmoZy3ldVG', 'EHGMlSkM', 's8kmWRrhWPy', 'WPv6WQKqWO8', 'n2/dG2q', 'WQCHvW5w', 'W57cUhDbja', 'k2fSb8k1', 'WRXTxmkXW5K', 'o3jSn8kn', 'W7pdH8oxzSkU', 'jmkZW7BcKHK', 'W6qPWQH9', 'WRTWz8k+W7i', 'W44OWR/dRSo6', 'W6WFWQDQiW', 'WR05oCo7W40', 'FSo+xNpdMa', 'WPfTWR4dWO0', 'f29QuZe', 'CXryWQTw', 'W6hcSMbvjW', 'BCkmc8oO4P2C77Q7', '4P6bW7xdUmoHWOW', 'A8kHW7dcNCkF', 'oZHBW4BcJq', 'm8kJW73cKG', 'W7GNW7S9mq', 'fYOSvty', 't8kZomkiW54', 'rraTzW', 'W7ZcJxTqoW', 'WQpcV210zq', 'k8o+f8kFWQy', 'cmktbSoyra', 'jSkhWQBdICkn', 'zHDCWPC5', 'WQLUECk/W50', 'DSktj8kmW7W', 'WQzYWOFdJI8', 'yrrZWQ0', 'y8kax8oqW7e', 'WQLUwmk5W5a', 'oYjAyHa', 'fCkdWQpcMN4', 'F1vUWOdcVa', 'W5FcV3b4aG', 'qNG9e2HhnmkQbSkvW5BdJCo4', 'zvT1WO3cQG', 's8o3yhFdTq', 'fxRcUcVcOq', 'ngBdT8odWPS', 'WQjTWP3dIsK', 'jw/cMsel', 'sKm2BcK', 'oCoqrmk5pq', 'W4D5W7RdKY0', 'WQ7cUCk7W43cJa', 'W7O0WR11BW', 'c8kRW5ldOmk9', 'q8klWO5cWP0', 'xWiWEJq', 'v8kAWO5vWRu', 'WO/cNSo9Eqa', 'jhpcJSo/WRe', 'mg/cRSkpWOa', 'WQPYhWfk', 'WPNdLt11W7S', 'W6iXWROPnW', 't8klW5JcVCkU', 'y1HZ', 'W5mQWOldSSog', 'W67dKCkpDa', 'Bvv9WQqD', 'WReon8oeW48', 'W4NdMSkTsSkB', 'WRrIumkH', 'fM3cVcZcRW', 'xYTpWQ7dOq', 'ACkSW7BcIrG', 'fKO8WOFcQa', 'W5KOWR3dR8oE', 'WP7dQmomWO3dQG', 'WPfAWQuwWRm', 'WPvQWRGqWO8', 'w8knWRfvWPO', 'A8oTbSolWQu', '8yQ0M++6PWPKW7qR', 'WRD/WPRdMZK', 'oNvmWPBcGa', 'q8kybSoscG', 'W70VWPbTkq', 'W4dcLSoqeCkV', 'nmkcW7FcLr8', 'BmoKzgldLG', 'tCoSnmkVWRS', 'saOKCa', 'WR3dLW06W60', 'umkAWPzFWO4', 'lNBcTmoBWP0', 'gHb6W5tcTq', 'EmkhWQpcMZK', 'W59fW7tdMWa', 'jqnlWOCZ', 'W4dcTubYbG', 'cLrXWRBdPq', 'oSkdWRlcMhm', 'A8oLnZNcNa', 'WRFcMWGXW6a', 'iSoKWQxcJXG', 'WRmWW4q', 'WQjUwsXG', 'W64ZW7WY', 'zSkCoXO0', 'r8k0WP3dTmk/', 'WPiom8o1', 'hCkTW4ZcRCkU', 'bSo9W6NdG8kh', 'DSoXqSkFWQe', 'WQpdK8oMWPlcOa', 'cSk7WOJdO8oW', 'DCkgiCkn', 'WQOmjmobW68', 'r1z3WRdcQa', 'W4CTW7TtW5ZcHHL2W5FcLGW', 'CCoSbW', 'EeLOWO3cRa', 'asP4vcW', 'W49FW6BdVr8', 'ESoKF3FdIG', 'wWaVeCkz', 'l2BcUColWR8', 'W5rmWQGsWOy', 'W4C+WRq', 'zSkgiCkaW7u', 'ySoqjfS', 'A8omiSou', '8kMbRokaGpcML6BdJCoVu8kM', 'p8oAp8ousa', 'q0Hvamkz', 'WQSXW68Smq', 'WR3dJaD0W7e', 'm8kcW7pcIw8', 'W4OMW75Vpa', 'n8k2W6xdM8oE', 'bmkrhSoyfG', 'W6hdKmk+WOu', 'khfIemkK', 'E8oooazH', 'WPz/WQLpWP0', 'i8kHW6VdLq', 'aSo7W6JcL8k4', 'uZ9+tIG', 'WPJdT8kjWP/cVW', 'W6uHW64Mpq', 'W4S+W7pdPCoH', 'FSofm8obtW', 'cCoQWRZcISk4', 'fJ1pqc0', 'jmkNW7hdISop', 'WPXpyCkzW7u', 'kcpcO8oaW5i', 'W4OmW44gdq', 'ECozja', 'ASkkDCkZW70', 'WRxcOCkFW5hcSW', 'W5tcSgbUcG', 'W7/cJvTj', 'e8obWQtcKmkz', 'yCogtgFdLW', 'WOPVWRddVSo9', 'W5VdUSkJsCku', 'WRn7WPZdMt0', 'WQrOxaOl', 'W7VcKfTtDq', 'W6BcTCouomkQ', 'W5rQWQGAWP4', 'Fw1AWORdJG', 'W49dW7/dSbu', 'WRRdH8ksDmk/', 'gCkbbWRdRG', '4P+zWPxdRmkWyq', 'tHC3EZq', 'W7tdHSoMWP97', 'CbrHWRa8', 'bgZcOsFcMW', 'fI5/rh4', 'WPVcM25rsq', 'WQFcHNLKsq', 's8oslqyh', 'DSozlG', 'W4qLWQRdU8ow', 'W4KpW6ifhG', 'W6bvn1WG', 'W4BcVurGiq', 'WR7cSmk8W4ZcRW', 'WQrDWRtdPa0', 'W6BcVmk/W4NcHq', 'uSkCW4a', 'ySkom8kC', 'W5tcS8oSoSkP', 'WP/cGwHswG', 'nMzAWOdcGa', 'CYtINjNVUAS', 'mSk6ht7dVq', 'WRhdMCoAWPtcJq', '4P+MBCo5W5VdOG', 'umoScd8y', 'gffzk8kE', 'W7NcKLS', 'WOHdrHzQ', 'W5jnm0uc', 'FmkytmoMW7e', 'e0nkaCkW', 'WQdcN0LLrq', 'dbWFbSom', 'jefRW5S', 'W6WZWQf5ka', 'jNNcNJOp', 'mgDOf8oV', 'E8oZfdaa', 'oMLaWPe', 'W7JdNKbpma', 'CSkDrmojW7u', 'qWTdWOy', 'vmkDW7BcQCk0', 'WQVcMX1+WQm', 'bCkyd8o/aq', 'rJLYWQRdQG', 'jXbkWPCJ', 'qbiKjmkI', 'W4u8WR/dOSoP', 'yXDdWO8V', 'ymkDESolW6m', 'awvCWQJdSa', 'yqDCWOa', 'WO3cMu9PAq', 'vmoTt8koaW', '4BsEYBT1W4pcSG', 'aCkwhSoyhq', 'qdrBW6fj', 'EILBW4hcIW', 'w8oJzCoOpa', 'W77dKCkvDq', 'W5Tvm2Wt', 'u8kSomkpW4y', 'vuO8WPBdVq', 'otzB', 'eSkthWhdNG', 'W7VdGmowimkB', 'WRRcKCoBAW0', 'BJTPWOuu', 'rqjCWPjp', 'W6WRW7W2', '8j+1St/dQX8', 'kJ5kW4dcJa', 'daqEemky', '8jMJVUkaGpcATPtWPO+e77QRbKtdPq', 'W6P0l3OY', 'cmkanSoCfW', 'jmk3W6ddI8oE', 'gLr6lmkJ', 'WQrGWRPSoW', 'W7nGuCk0W5K', 'xZOGzGG', 'a8k3WOhdPq', 'WP0xjL8a', 'lmkfWPFcH3a', 'FWCnW4m/', 'wYvUWQNdTG', 'W50IWQhdR8k/', 'CeK5W4JcSq', 'DqW6fSk1', 'W7DnW6ZdQaq', 'W74ScmobW7O', 'DSo6bSolWR4', 'WP7dQCoMWONcPa', 'ExbLaCoH', 'ihnaWOBdIW', 'WQBdLeLLW7e', 'sJPrWQtcQG', 'ESoMFxRdIG', 'F8kLu8okW44', 'WQvmD8kwW6i', 'CCktrCobWRq', 'W6ilW5G3aG', 'ncr5dmkK', 'uSknWPrgWPe', 'WRpdJG14W6W', 'fmkNWPFdI2i', 'WPeUo8oeW70', 'xKPSWQtcUW', 'qdHe', 'W5/cSvTHiW', 'W6FcPmoN', 'WQOGumobW7O', 'aSkada', 'dmksWOSe', 'W7JcSwm7WQ0', 'W7lcKMvpia', 'zSotCamU', 'C3vmWPtdLq', 'WRaok8owW6K', 'wJzgWQDj', 'jmoRb8ktWR0', 'ihngWOJdIq', 'wSkDWPFdTa', 'CSkNW7JcPmkS', 'oCoqrmk7lq', 'CCo/bZ4q', 'W748cmorW60', 'xs9CWR7dSa', 'WOnUWRqRWQ0', 'W5pdNmkQWPq', 'lmkJW7W', 'W4ngW6ZdTa', 'kJ5FW5BcIG', 'nvb0hmk4', 'aSkue8oubW', 'tCoykCkOWQ0', 'dCo6WQFcJq', 'eSo/WOBcSmk9', 'nmkYW6RcIX8', 'W7KNW7CGja', 'WRhcL8kixIe', 'WO/cGc8m', 'EmogrCk6lq', 'sGeBbSkc', 'xs9zW73dSW', 'agVcLI7cTW', 'jmk/W63dMCoz', 'WPhdTCoCWPdcRG', 'DSo6a8kiWR0', 'WRJdGJuw', 'W6CLWQvQkG', 'dZ5vWRJcPa', 'AmoIF3/dNq', 'iSkKW7ldV8o9', 'Dmo6AuNdHW', 'z8oQfSoltq', 'qenGAIq', 'W49jW7VdIby', 'r8kMF8oNW58', 'WO3dS8oLWR/cUq', 'cmkkaCkwcG', 'isPxW5BcJa', 'CCkjCSogsq', 'Cmoqrmk7Aa', '8j6aIUkaOVghPBhcMmkZEJK', 'WQS8ga', 'CSohwa', 'vCkQWQL2WR0', 'WPiOgmo2W74', 'W6xcG2jbqx4OxCkFl8kbW5S', 'wJiutYq', 'za9k', 'FhFcUmkpWPa', 'p27dJtWd', 'tJ9jWRldTW', 'FmkTrCobW6C', 'WQTYWPFcJZG', 'W7FdOCkzsCkb', 'W4dcLSogbmoM', 'WOFdRbPYW5a', 'W7KNW6OJkW', 'W5OfWQv3ka', 'WPlcS8kjWOxcTW', 'x8kpW50', 'W6NdKCkzzmkg', 'acTiWQNdQW', 'WPvYWQqdWPK', 'f8kyuHNdVG', 'mSkjmSousa', 'i2zDWPhdHq', 'tG8RAci', 'C2rCWPBdLa', 'vCknWPjeWP0', 'WQONemowWQm', 'tCkaemomeq', 'px3cNq', 'BWXOWO3cRa', 'W7W0WRqG', 'WOtcV2rZuG', 'dhJcUwhcSG', 'xXGBcSky', 'bmk6WPFdPCk5', 'gCkeWRNcJNu', 'sWyX', 'ASkqo8kaW6a', 'WQtcTSk3WOJcSG', 'nCksWRZcMt4', 'WQdcHCoZW4frC8kiW7XuWQG', 'WQxcJmoAqYa', 'W7BdJSkKr8kf', 'cSkqar3dVW', 'tmo9e8oJDW', 'W5JdTCkZx8kC', 'WRFdLuLIW7y', '8lQjKrqnfLi', 'W5HkW6tdTby', 'vCkaW7hcHSkw', 'oxdcO8ogWPe', 'nmkYW6RcI1y', 'vSoHAhtdUW', 'WPdcTgTvta', 'q8kpWOTCWOe', 'WPvZWQG', 'fmkMWOddR8k8', 'tCkiWPvvWOO', 'W501W6rjW4m', 'WRe4e8oxW7W', 'xSo8dSoVyW', 'WRNdU8o4', 'E8kfwmobW6y', 'r8k7WPZcPSkH', 'fmk3WPZdOSkF', 'mMf0', 'WQBcMCoCxIS', '4P2jW4D/WRhdUG', 'wmkhfWNdVG', 'W5PSf1i3', 'nh3cMs8', 'aeVcQGCK', 'CmktqSof', 'wmo3DCkhfW', 'nxdcMmoyWPW', 'W74MWQzmjG', 'dbOseSkz', 'FCo/yxpdNq', 'f29Gsc0', 'WR3dHJqDbW', 'dCo5WQ8', 'AmkJiSkjW5u', 'WRpdLSkc', 'BmkjnSkjW6C', 'ahFdTtZcSq', 'WQtcPSoYW47cHW', 'nw/cNI8b', 'W7tdOSkvWOzM', 'n8ksWRS', 'cCktaCoC', 'W6qSWROSmW', 'q39rWQlcRq', 'oCovmbqM', 'WQKMWR1QiG', 'WQK1WQf9Dq', 'nCkhWQFcJNe', 'D8oplHqM', 'W6iWW788CG', 'WQxcNCoCcJO', 'W7jTe2uR', 'dmovcXFdVG', 'WQS9hmogW6C', 'W4/cQvTmia', 'bvm2WOi', 'WRpdIXL9W7O', 'A8oxqSk8jW', 'pYCl', 'W40KWOtdKSoS', 'W4mJWQpdVSo6', 'WOrpWOOoWP4', 'oZrqW4BcIG', '4PYPoCkfi8kH', 'wZH3WORdNG', 'DHzDWOO4', 'W6FcM1veiq', 'iSkpWRdcGhm', 'WQldTCoWW4VcLW', 'WPvRWRKnWPK', 'a0C3WORcRG', 'ESowjZCK', 'jdZcLcet', 'W4PgW7JdTG', 'bNJcOsRcOW', 'WPNdQCoWWPtcSa', 'aSknWP5aWPq', 'WR/cSmk2WOJcLq', 'W6JdKCkezCkL', 'w8oYDmkceq', 'xmoieYum', 'WOZcHg5uwW', 'FCkru8ov', 'WQSUnSovW4C', 'r8oNWQ3cLmo3', 'WP97WRq', '8lsXPSk2WRS2W5O', 'CbPPWQHz', 'a8kDf8oCaa', 'zXDlWQem', 'zmkummofW6i', 'dwPuWRpcPa', 'WRxcJffxoq', 'e24UWQpcLq', 'W5lcJmoigCoO', 'rwVcSd7cSq', '4BARYRJHTyFkS+g1Ta', 'WPRdS8otWPS', 'omkWWOdcRNS', 'hYnJasO', 'WPxdU8onWPVcRG', 'WQ5WWONdNhi', 'BbfGWPq4', 'FSkLt8oNW7S', 'zmktvCop', 'yCohnmkwWRi', 'Bmkemmku', 'x8kleConimkLWPq', 'cSkHWPu', 'i8kJW7BcHq', 'jmkNW7hcGXe', 'D8oRdCkgWQa', 'WRP0ubTa', 'W5hdHmkdimkK', 'rJKDWRVdOq', '8lAcJEkcRVcJL69aW7VcNSoq', 'CmomqSkKpq', 'W7tdVCk0WOHr', 'BSkRW47cSCk9', 'jSkMW7FdJmof', 'W6BcM0bUoW', 'BJywrG4', 'W4vDW4FdNa8', 'ohaSrmkr', 'W4fDW7lcSqO', 'W5zlneWb', 'tcvtWQ7dSa', 'BSk6W7dcNCkr', 'euNcUqe5', 'ee1VWP/cRG', 'F8omobir', 'EeL6WOVcRa', 'FSo3FNpcKW', 'nSkZW6RcKHm', 'WRxcNffcoW', 'WQBdLcim', 'WPT3uCkcW6u', 'WRFdGIKzeG', 'WQldMmoortW', 'gCkabHFdUq', 'W6WKWQv3pq', 'WRRdGmkyimoP', 'WQLKrSkK', 'psTsW4ZdKa', 'W4ToW6xdTey', 'zuviWQFcNW', 'WQP1sH1a', 'WOyhWR7cV00', 'W7xdVmk7qSk4', 'W4ddHCoqfCk8', 'W5OuWRhdPmox', 'sufxgmkr', 'W49lW7ldOWm', 'nc5VW53cNa', 'c8khg8oEea', 'rY9pWRG', 'he0QWOddPW', 'W77dKmk/', 'WOXWWRRdIYq', 'W4pcNwrrva', 'hCkCW5ZcR8kV', 'WR/cUCooFIG', 'fCkfWQldVmk3', '8ykrTUkdGpcNT43dKvvrW44', 'W5K5WQhdRSoV', 'WRrQWOhdGNW', 'sJH+WRZdTW', 'zmkZi8kuW6e', 'lSk1WQxcGbm', 'WOaJWRqxWPW', 'm8kvWQdcJwm', 'laD6WRjy', 'bSkMW5pcPSkc', 'aSkLW5ldPmkZ', 'DSkco8kbW58', 'WRDhWOulWQm', 'cxlcVGlcQW', 'CmoEnmoftG', 'pfCgWR/cHa', 'umklW4RcRCk7', 'W7tdKCkIWOD7', 'fY54qa', 'waWWBsi', 'kxdcSG', 'W7WZWRC', 'hCklW5ddNSoT', 'eeW8WPlcOa', 'W6BcNmoqkSkV', 'ymkFiCooW7W', 'DmoTdCkDWQa', 'a8kbaCopeq', 'WOO5WRZcQ8oS', 'WQddLcOuda', 'W6mDW6KQiq', 'WOdcLIffsG', 'eSkHWPC', 'W5zBWRW', 'WRGHr8k1W5O', 'f2vkf8kc', 'WPpcUSopWOZcPq', 'i3NcGYOR', 'WPldQmokWPVcPG', 'W4RcHmoh', 'AuD+WPRdTG', 'CNtcTSoz', 'sMPjWRJdVa', 'nCoKAhVdNa', 'BCoSfSof', 'W64XW6KUnq', 'fCo8WQVcL8k4', 'W5vDnq', 'o8o5FZBdGq', 'WP1TW69lW4i', 'nLHCWPFdJa', '8j6cJ+kbMpggHRxcSY3dGqi', 'evOJWOhcOG', 'WODaCsG', 'FhdcOSomWPe', 'W75cpviY', 'W5ZdNCkBzq', 'zCoRf8kzWQW', 'W7JdNmk8WPq', 'vSkAWOne', '8lQiMSoMW5Txua', 'W64WW7KQpG', 'WQWQhmowW4G', 'WPvUWR0oWPm', 'W5dcL8op', 'xSoQjWuS', 'kmkYW5xdUSo8', 'W4JcKwrduq', 'bSoKWQ0', 'r8os4P2H77QY', 'iLD8WRro', 'p8okl8otsa', 'W4TFW7RdQeG', 'cx5bWPZdHq', 'mwlcPW', 'fmk1hCoxaW', 'WRxdIqzKW7m', 'k8kBhtldJW', 'F2TuWQFcNW', 'lMBcTSomWOy', 'nheBWRRcMa', 'fw5fWOa', 'WRtdMdyDgW', 'CgJcGM4e', 'rmk7rSoxW4m', 'W6OMW748jG', 'BCo8b8olWRK', 'cmkcgCoera', 'W7ZcJffuDq', 'jMH/WOddLa', 'W7ldMbXIW7C', 'jwjOWQddPG', 'W6qWW6m', '8ykrL8oTsmk6WP0', 'WQH1wSo9W5K', 'W59AW7NdPqm', 'yCkcjG', 'zSo0cYae', 'Bmo3sKhdOW', 'W7VdHSkFWPTU', 'wmkDwmorW7C', 'sMPoWRJdSa', 'WRZcIwXfsa', 'xZvfW5NdQq', 'W4JcKwqgta', 'WPZdV8oq', 'Ch3cMcOp', 'tCkggSkDbG', 'oSkkWQRdI2q', 'W6P9W6FdSbi', 'WRNdNHa', 'WOFdK2ndhW', 'WR3cISo5zYC', 'WQWQgCksW7K', 'wqiUydu', 'W5WhW5Cnia', 'iSkoWRBdI3C', 'sHD5WOrx', 'WRTVcCoxW7y', 'lJPsW5ZcMG', 'B8o7ymkLaG', 'DConnCkIWQS', 'pw3cSSodW5W', 'mSkhWQFcIG', 'vSkAWOHe', 'W5Xvz0Gv', 'wSk+W7RdK8oT', 'W5SaWRZdVmoB', 'bs9rt8oH', 'WOBcNgnhwW', 'WRFdHxOmgG', 'WPFdTr4VbW', 'rqyqemoc', 'mxJcItGj', 'iokDOdVcOCk2', 'mCkvW73dGq', 'a8oOWRZcGG', 'oMTJf8k1', 'jSoCWPZcQ8ki', 'E8omkq', 'ySoDlWyK', 'WQBdNHTNW6i', 'oM/cGIa', 'dYviWQ/cPa', 'WP/cTmoWssy', 'WOpdUmoiWPO', 'WPFdMd0Ioq', '4PYvjcC0WQ0', 'fmk7WP3dQmkH', 'sI4DWQRdRq', 'D8oRa8kFWQW', 'CCkcwSofW7C', 'WR8Hwqbq', 'p2VcHqCc', 'DMv4emkU', 'y8kij8ofW6y', 'WOD7WQmgWQC', 'W5BcGmonfmkf', 'W7NdGCkeDmkK', 'W6VdGCkwBmkI', 'W53dRCkJzCk/', 'WQ7cVCkZW4hcJa', 'eCkgpq/dPq', 'tComn8opsG', 'WPpdPa43kG', 'WPpdU8oDWP8', 'WRHYrSkXW40', 'W6mLW5SkpW', 'x8kpW5dcSSk/', 'xaSAb8kj', 'W5tcKmombmkT', 'aSosf8oyra', 'WP3cGmorFcS', 'ESoLlxtdLG', 'oNrMWPldJG', 'uSkzW5FcU8kO', 'r8oFWO9vWOa', 'tJn6WQ9P', 'emkpWR/cJG', 'WRNcKColtW', 'W642W64Mpa', 'W68PWR59iq', 'qCouamksWR4', 'WQDKxHXa', 'ogBcTCoA', 'fM0Ssda', 'W4ZcLSkdfSkT', 'jmkFeSoifG', 'WRFcLCkXWPbN', 'DmoHy3pdGq', 'WQ3dSmocWRBcIa', 'mmkFiaJdJW', 'oMRcU8okWPW', 'c0bRaSkx', 'W7RcIvPcjW', 'WPtdKdmuea', 'WQddRsb1W4u', 'WQlcTxb3EG', 'iSkwWRBdKCkG', 'W4jude8m', 'q8kmW5TEWPC', 'hITGut0', 'e8oMWQxcISkT', 'vcuHgCkj', '4P2vWOjOWQy+', 'Ad9tWRhdOW', 'fJT4sda', 'imkGW7FdMCon', 'dKGEdCom', 'DWDBWPyK', 'p8kloCovtW', 'W65IW6KQjG', 'W4uGW7pdQSo7', 'agNcUtBdPa', 'r8kXWOFdTCkM', 'ofjcd8ky', 'W71rvmk+W48', 'wCoxsq', 'sSkkgSkvW5W', 'nmkau8ovW6e', 'WRFdHs4rgW', 'hmkhgSojaq', 'rxVcSg/cTW', 'W5hcGmoBba', 'WQWQhmorW7O', 'vCkZFCoqW7C', 'WRjUWOldGd0', 'kvJcMWG', 'C8oroa', 'fLzj', 'WPJdQYTNW7y', 's8krWPXdW5y', 'BaaJyJK', 'W7NcMCoDxIe', 'FmoCkCouuW', 'WR/dLGSDdG', 'WPBdR8oDWPBcPq', 'yZe3wda', 'dSkRW6lcKWq', 'WQjUWOldLG', 'W4JcH8ooh8k/', 'WRBdUmo+WRpcMW', 'sJ5jWRtdQG', 'iSk2W7ddMSol', 'WRC8mSofW6a', 'z8k0W6dcLWm', 'frrqW7pcTq', 'W6NdKCkuB8kL', 'DSkeWRBdI2u', 'imkmW7hdISog', 'W5FcMvH+iq', 'WQKgdCokW5O', 'umkkWPHeWPC', 'wxHsWQVcKW', 'hmk1WRZcG34', 'WRFcLCkUWPbI', 'hCkJW4ddNSoC', 'qInhWRJcPG', 'qtqktbm', 'W7xcO8oUpCkP', 'tCkBg8kDfW', 'W5PkiLLu', 'ox4bWRq', 'ngOBWRZcMa', 'WRrQWOhdGJu', 'Cg7cId8t', 'jN3cGsCc', 'WQ5/WOlcGsO', 'AWzqWRzt', 'tCkqemkDfW', 'CmoNeCoKEq', 'WOLZuSkdW70', 'tJ5y', 'dmk3WOS', 'Ec9rWPxdNa', 'W4SeWOtdHmo8', 'Fmobp8odvW', 'sMPFWRJdOq', 'nxlcMW', 'amk1WPFdTa', 'zmkwWPDv', 'ewBcPmoCWPm', 'sJThWRuo', 'WONcH3ruwG', 'wSkhW5/cPW', 'i8kJWQxcKH4', 'WRxcKL1uiq', 'WQKYWRDPoG', 'o8k9iqldGq', 'ng13aq', 'oCorrmk8pa', 'msLBW4BdNG', 'DSo/D3pcKq', 'dhxcTJBcLq', 'yGDBWPaI', 'mSkEpGaY', 'oSkuhqhdOa', 'WOFcK8kJW7NcPW', 'WPnkiLSb', 'DmohuSk7kq', 'WRZcOmk9W5ZcHW', 'WPf2WP4hWOe', 'd8kbe8otna', 'cCkahqZdRG', 'WP1oDIXG', 'WQn7WP3dJa', 'W5xdGCk6sSkQ', 'sWeJBxe', 'heWaWOtcQq', 'fmk7WOtdOW', 'WPL3WRCh', 'f8oOWRRcKmkY', 'WQhcVmk8W4m', 'bmo8WRVcL8k4', 'huP6cSkt', 'W5lcK3bYhq', 'tH0tiCk2', 'WRVdGHupgW', 'W5XkW7lcSre', 'iSkHW6VdJCoA', '8j6jIhxdJ8kW', 'WQ5TWQhdMdi', 'W68NWROTmW', 'Bev3WO3cTG', 'e8oMWOtcJmkG', '8kgsNEkbV/cHLQZdIbyVqq', 'WOpcUSopWPhcUa', 'aSo6WRVcGSkW', 'WOPQxGXk', 'cmkLWPZdO8kG', 'W5JcIvffhq', 'WP4yl14a', 'WRFcM8oCqYe', 'W7JdJCkIyCkX', 'sCkgW5tcUSo3', 'WRPIcSoDW7W', 'WOhdTCoaWP3cRW', 'D8kClHa1', 'BCo8b8kA', 'gvhdT8oBWP0', 'W4/cV2bLeq', 'C8o2cCkcW6K', 'W4u6WR3dRSo8', 'u8k0xComW4a', 'W7eUcmogW6e', 'p+kEVE+5Lq', 'BConBCkNpW', 'ACogm8odwq', 'WR7cSmkMW67cHa', 'aYTPwre', 'pGbIzXu', 'WQjYhWLa', 'WOBcINbJBa', 'WP1UBXDF', 'WQxcMCoEtW', '8kMBTb7cN8oC', 'xSoby3RdPa', 'n8ktWQFcG0K', 'W7SLWRn7oW', 'WRJdTs0Bbq', 'ya8rc8kN', 'cSkPWQNcLSkJ', 'WP16WQHcWOG', 'W746dSoxWRq', 'bJXP', 'WRBdNHPY', 'mCo9WQ4', 'iNjgWPhdHq', 'WQtdKmo6WQVcOq', 'C2lcOSoBWP0', 'aYn1', 'FSoLFNFdLa', 'jmoXdCkFWQW', 'WRTIuGTa', 'n2BcRG', 'jCkwWR/cGMi', 'W6bHkMaX', 'W5rQWQjcWOG', 'WRJcLmkFyCk4', 'zSkwfSocW7S', 'W5NdPmkZBSkZ', 'WRddT8oTWQVcGG', 'wSkEWPvAWRK', 'WPNcGSkGW4tcKa', 'sSkAWPH1WO8', 'p8oDnCkahG', 'WRNcISor', 'zWzSWQDi', 'o05vimkU', 'hKlcK8kpWOy', 'BZSNbCkA', 'W4fDW68', 'ihq7WQBcLa', 'pW1pW4/cPa', '8jccHUkcTpgiT70VWQ8Wia', 'WOxcLSogbmk8', 'h057AhW', 'tZPXWOD2', 'sSkhW5lcT8oW', 'k8oiWOBcPa', 'pCkNuGZdPa', 'W5bxmKqa', 'WOToFmktW68', 'CmocBLRdIG', 'xmkBW43cSCkS', 'scrsWQXY', 'aNNcNsiF', 'nvJcGqC', 'uIDIWQeK', 'W717W5/dKI0', 'fCkrW5BdKCo6', 'WPtdU8oDWPVcRq', 'WOlcSCoNrIq', 'W6dcKLHEDq', 'EuL6WPRcUW', '8j+WNEkaKVgpHjOrWRhdO8k+', 'W5ldMmkcWQrC', 'WRXUtqSf', 'WRVdLq5IWQ0', 'W4BcMxfbfq', 'W4VdHCoea8kT', 'hCkAW5ZcPSkU', 'pgbKemkZ', 'WOFcMMjdeq', 'm8o+WP/cLmkr', 'sarUWOD5', 'WRVdIqXIWQm', 'W5lcL8okbmkT', 'yXL2WQbo', 'pCkjmSobtW', 'WQX7WPC', 'WRFdJ0LLW6W', 'vmoesq', 'umorAMldTa', 'srXxf8kd', 'WRBdJ8o9WRhcLq', 'W6rIW7GQCG', '8yQYKokcPFcvTANcGgLqEG', 'lmoRWP7cSmk9', 'WOtdUJ9HW5C', 'D8o6gHOM', 'v8kZBmoXW64', 'yCoSeCkkWQ4', 'h8kCfae', 'WQddNGHYW7C', 'WQldKcGlea', 'ACk0W6dcLrm', 's8oxwv4', 'aY54vtS', 'W48HW73cOCkU', 'WP7dUIDw', 'WQZcP09JEq', 'WPdcH0XFBG', 'ESozpJa2', 'WP1SWQGrW4O', 'WPb7WR4', 'D2nOemkZ', 'W5VdOCkJt8ku', 'e8ogWRJcL8k+', 'W7FdTSk0rCkZ', 'WRNcUSkEW4FcLq', 'WONcNMq', 'afeJWPRcQq', 'mCoZW73dL8oF', 'W4fDjKKa', 'tCkgemofea', 'WQO8cCoBW60', 'WRFdIWvOWQ0', 'W64JW6KQCG', 'mmk2W7hdNCoN', 'W7hcN0bg', 'x+kDS2/cUSkP', 'oMrcWOddKG', 'W6eWW7KFja', 'i8kgWRZdG8ku', 'WQnG4P+g77Ix', 'WQSWW78+jW', 'sqOUBd8', 'AYKYeCkU', 'hGT7trK', 'qqW5oCkV', 'W6aZW7j+kG', 'iSkbW6RdSmoL', 'WQHYua', 'mEkFMI1gW58', 'DCkhqSolW6C', 'WQ1ZwSkMW4m', 'W6BdKmkOWPvz', 'm2NcNJOj', 'WRlcNCoexce', 'reLQWP/cIq', 'nNrmWPhcJG', 'tHmYzsG', 'bKPRWQddSG', 'W4a4WQTxcW', 'WOBdHG0pmW', 'WOZcGcfsua', 'W6bHW7ZdKWe', 'W7hcL1Shmq', 'WQ48r8kDWQe', 'FSkxW4RcHmk9', 'nwfJa8k1', 'oZ4EW5tdNG', 'wau2xtG', 'm3hcRG', 'W7BdPKm4', 'D8kcnmkgW6y', 'AqjOWOnZ', 'jun8WO/dOW', 'WP1zi04g', 'BCkkiCkJW7u', 'W4pcSx1Kea', 'W756p14I', 'W4W8WOhdPCow', 'zJK6dSkJ', 'BHb+WRjy', 'h8o9WOxcMSkg', 'WR/cSCoJWOtcLq', 'sZnbWPm4', 'W7aIdCkb', 'hsP7vZe', 'W5i1W6O8fW', 'WObaW6BdPbu', 'WQOGemoBW7q', 'nwdcSG', 'o8kHW6JdICkl', 'WRjZta', 'fCoSWRJcJ8kU', '4P6lpSoeW6yY', 'qt1mWRT3', 'WRBdOJfzW7q', 'W5SWW7S5pW', 'WQm+WOJdGc4', 'mmkxWOhcHu4', 'nYWKra', 'W4BcKNfwea', 'qmozlHa1', 'l8oeWRdcLCkg', 'W7zNvCkCWQu', 'W6G3W6K7pq', 'WO/dNxvEsW', 'oCkrWR3cJMq', 'abLPCbi', 'n8oEzCoxWQlcPZFdVdLcW4hdUsu', 'WReMhSoxWQa', 'W4NdLHqncq', 'rG0Hzsq', 'A8ohmSkwW7C', '4P2Jq2HDoq', 'WQxcJmkgaa', 'h0NcLd7cOa', 'rHeNENe', 'W7G2W6GMpa', 'kCkJW6NdHH4', 'n8kapqhdHa', 'zmkdmCkwW6y', 'Bmo1gmkPWQW', 'fCoSWQxcJmkH', 'W7hdKmk1WPi', 'hCoCWQNcOmkX', 'ybfCWOuJ', 'imkHW4FdMCoz', 'W4vGp0ug', 'WPVdUb1qW4W', 'mCkHW63dLq', 'W5GaWPBdICoG', 'WQDpWOe1WOW', 'e8k3WORdSG', 'W6ymWP3dJa', 'W5vrk08A', 'yCoXfa', 'iSk0W4BcHWu', 'bg3cOd3cOq', 'W5hdUmk1WQbb', 'WQzRWORdHJm', 'rmkYaCkQW40', 'WOa+W68', 'W50MW58LaG', 'W5KOWR3dR8od', 'WPZdV8oXWPRcMa', 'WQxdKWb9W6y', 'D8oRemkcWQC', 'W5BcTMDDhW', 'eSo6WQ0', '4PY/BYz1nG', 'vSkFarFdPq', 'oCkWfGVdOa', 'Amkol8ka', 'WQSbW688jG', 'WPBdNq5JW7m', 'W4LDzqOD', 'ySoQdSkhWRa', 'vCkCW5JcM8k7', 'r8kmWOHrWP8', 'W63dNCkCACoR', 'e8oGWQVcImkY', 'W5TDz0mz', 'hSkeW7/cVGu', 'wmoyzwxdKa', 'W7TiW4xdVb4', 'ESovwmkQoq', 'W6OWWPr/iG', 'WPJdRSobW57cPq', 'WQrpBs1l', 'p8oBp8oqua', 'h8kwvCkF', 'hCkAW5BdVSo4', 'beOGWOFcOG', 'WQNcPLvPya', 'W7hdKCkoD8kK', 'W593WQadWO0', 'W6FcI1DtoG', 'vCoJB8kp', 'nhNcNI0', 'W7ZcMMnciW', 'rGaPBcm', 'W6iLWQS', '8jQzNrBcJSoxWPm', 'aSkDWP4qWOS', 'W7FdNSkPWQnN', 'x8kwW73cTCk4', 'oNCWc8kX', 'WQldMmkk', 'iSk2W6NcN1y', 'WRtcSSkdW5hcQG', 'amoMW6JcL8k4', 'aSkzWPrcWPu', 'W4RcL8oA', 'WPG+WQudWPK', 'DSomuG', 'fKxcPSo+WRC', 'WO7cV8kJW7/cIW', 'iJZcMsyd', 'i8oMW7lcIqq', 'vYddOYNcLK7dImkCva', 'WQbTWPGUWOu', 'waeucmkj', 'W4BcKmoqbmkN', 'WRHGrSk1WOO', 'lSkQW6a', 'h0zNWQi', 'W5GOWRldQmo6', 'x8ozlGyG', 'rSktamozdq', 'fLWQWOdcTa', 'WQdcSmkIW7RcRW', 'WQL3Fczn', 'W6xcN0zuma', 'FCktgmkCW4m', 'WObnuZ1/', 'W7/dGmkdACkL', 'kSkIAcFdLq', 'f14R', 'yCoho8kaW6u', '8yIWP+kbSpcZTQNWK6+877U2W7Wmhq', '4P2XW47cK8kkWRi', 'trrEWRz/', 'WPTOwCk1', 'WOZcKNvh', 'pxxcLYTe', 'BCkDW7pcTSkw', 'ySoqja', 'hCkmW5ZdVSkP', 'k8kBf8kUgSo9W7hdP8oB', 'fJSSvte', 'WRpdJsbCW7a', 'sCo1vwBdOG', 'WOhcUmkjwq', 'sW0dfCkd', 'rCoXgSkSWQW', 'WQ07xCoDW6G', 'W7VdGCkdB8k4', 'oCkGjJFdLa', 'kgZcM8oaWOu', 'W7tcKL1gjG', 'W7BcSCoQm8kd', 'ww/INjJVUk4', 'WQi+WP3dIIG', 'DSkdWR3cN3m', 'W7RdQSkZWOn4', 'kSkGWRddQ8k0', 'WQZcK8kWW43cHG', 'b8kdimosbq', 'iHrQWRvs', 'Cq1JWOWH', 'WPyUh8oqW6W', 'W64PWRrH', 'DbuRBqW', 'WP1/W6VcSSk6n2xdQmkbWRFdPsi', 'wSo7ESouuW', 'WOxdH8oabCk7', 'WQjGu0ft', 'E8osoG', 'W7S2W64', 'WO5gW7JcSru', 'WQ1TtmoWW4u', 'DqnBWPCZ', 'FmkwwCobW4y', 'WPWooCoTW5K', 'wmomlSkasa', 'fNZcOw/cSa', 'kNb/dCkV', 'wWy6Fq', 'qSktamojcW', 'WQhdNGD1W44', 'W4FdKmk2WP11', 'EmkbWRBcN2a', 'W7KNW7SSjG', 'WQK9fmogW6S', 'kKnUWPRdUa', 'p8kvWPZcNhG', 'm8kvWQdcINe', 'h8kHWRlcQMi', 'W6BdKmkYWRH6', 'sSkBWPrvWQO', 'qGH+WPJdVa', 'AHzhW4m5', 'kSo1eCkeWQC', 'W6uSWQS4lG', 'WQBdOcGYmG', 'Bmk1v8o1W7C', 'FCkbfSocW7e', 'FmolvCkHoq', 'Fa9kWRldOW', 'oColWQdcN38', 'WQhcJmo0W4j+u8kZW51MWPW', 'chdcRYO', 'ExzOfCk0', 'hCkiW5BcRmk3', 'DSkaWRZcMxS', 'WPBdVSkjWONcPq', 'WQX0wSkKW48', 'W7asW7FdLSov', 'o0JcNCocWRG', 'WP7dVSomW57cQa', 'AXT2WRu', 'eKnQemkg', 'F8kCpaa1', 'WQpdTCk1W5VcHW', 'C8oyoqy1', 'jq5gWPaI', 'D8odimoIwq', 'W4epWRtdSHm', 'WQhdJXT4W60', 'WOO9WQhdPmo4', 'WR/cI8oNxsa', 'D8oddCocEq', 'j2ZcSYNcOq', 'WPddUI0XW7C', 'W7fAW6tdVuG', 'aSkBfSoyra', 'WRNcUSkbW5ZcKa', 'FmoZq0BdOG', 'bLO7W5pcSW', 'FmoWrmkPla', 'WQtcPSkDW5/cJa', 'WRhdNKL5W6y', 'yredWO05', 'm3hcS8kD', 'gCkeiWZdMa', 'eSkCWOxdSmk8', 'EIC+imkP', 's0mSBcy', 'kSkHjbFdGa', 'ydhdLc9l', 'grfLW5pIN5pVUjO', 'W7G2WRrL', 'aSkmWO5tWPS', 'DSoykCkNWQC', 'WQldMH1LW6y', 'uCkqaSksW5q', 'C8kgySoqW6e', '8ywsM+kaJpcwTjHwgsFcHa', 'c8kFWRNdJSk5', 'WQ8HsWaf', 'W7ddHSk1WPbZ', 'W7nRrSk/W4q', 'wGCEamkj', 'WRTAWOCXWQa', 'W7BcJmohcIW', 'd0GbWOiY', 'u8oPctOE', 'WQxcJmobssu', 'nJXOsba', 'iNNcJc0s', 'WRxcJffwia', 'gLBcM8oJ', 'WQJcP8krW4NcKq', 'FSo1z1ddOG', 'WOTay8kGW74', 'W4hcGmoqeW', 'o8o5EgtcKW', 'bmoOWRZcHSkW', 'zSosrSofW7O', 'W5SWW507gG', 'aJPJvtS', 'oCkpWRdcJJG', 'WRHKxH1g', 'eJ98tsC', 'vmk5W7ddMSoHWOxcG8kSttZcUZvd', 'WQ5Teuuf', 'nmkgxSobWRq', 'W7hdKCko', 'WRZdOSoqWQJcRW', 'W4ZcHSoifCk6', 'axZcPIW', 'W7ldIbXYW6a', 'E8kjnSojtW', 'wcjuWRhdOq', 'WOOJWRBdVmkU', 'vSorW5e', 'W65IW64QkG', 'BCoSfSolWQe', 'W4OxW44adq', 'Cbb+WQjj', 'h8oTWRRcJCkV', 'er84WPZcTq', 'W70PqCkIW58', 'bmk9WOFdQmkM', 'WOLouWjs', 'g8kaaqZdPa', 'W49BW6pdOWm', 'WPhdQ8o7WPdcKG', 'WRxcN1bdma', 'W5yymeug', 'p2ZcN8oAWRK', 'FcKJkW', 'zSkemmkwW6e', 'B8kuoSkl', 'WQ7cOmkHW5ZcJq', 'jmkdWRFdI2e', 'W54nW7mlca', 'kgBcPmoB', 'aCkkW5BcRIi', 'ySkXjmkFW4G', 'W6tcI1Ttma', 'iSo7WRJcKmk2', '4BsdYjBHTi3kJ+g2SW', 'iSkuWRRcHG', 'lmkNiCoYoW', 'dmk3WOa', 'W7ldKZ9ybG', 'cmkgaCoucG', 'lmk8W6RcMmka', 'dSkAgXVdRG', 'W47cVmoLfSkk', 'W4b+dLag', 'W4eOWQO', 'WQ86eSogW6S', 'oM9OfSoH', 'bCkMWPBdTmkW', 'FgRcUCkpWOe', 'Amk2Ex7dLG', 'r8kMWPRdO8oY', 'BCkDWPfvWPS', 'W51BW6tdUaG', 'bSkOoSoBea', 'y15+WPVdUa', 'B19OWONcVW', 'gSkrWONcHuW', 'WRmnpSo3W7y'];
  _0x3e53 = function () {
    return _0x283391;
  };
  return _0x3e53();
}
_0x18c6e5.pattern = "removereply";
_0x18c6e5.alias = ["deletereply"];
_0x18c6e5.desc = "Remove a custom reply.";
_0x18c6e5.category = "owner";
_0x18c6e5.use = ".removereply hello";
_0x18c6e5.filename = __filename;
cmd(_0x18c6e5, async (_0x1fe207, _0x347d91, _0x49d600, {
  from: _0x352f98,
  q: _0x303a32,
  isOwner: _0x48958a,
  botNumber2: _0x420110,
  reply: _0x96eb2a
}) => {
  try {
    await typing(_0x1fe207, readConfig, _0x352f98, _0x420110);
    if (!_0x48958a) {
      const _0x5a053e = await readConfig(_0x420110);
      const _0x4dc092 = _0x5a053e.LANG;
      const _0x1e3710 = _0x4dc092 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x4e3812 = {
        text: _0x1e3710
      };
      const _0x272c11 = {
        quoted: _0x347d91
      };
      const _0x18a35a = await _0x1fe207.sendMessage(_0x352f98, _0x4e3812, _0x272c11);
      const _0x3a9af0 = {
        text: _0x472a69.reacts.owner,
        key: _0x18a35a.key
      };
      const _0x1af7ef = {
        react: _0x3a9af0
      };
      return await _0x1fe207.sendMessage(_0x352f98, _0x1af7ef);
    }
    if (!_0x303a32) {
      return _0x96eb2a("❌ *Please provide the text to remove.*");
    }
    const _0xe99743 = await githubGetFileContent("autoreply.json", _0x420110);
    const _0x1bbbba = JSON.parse(_0xe99743);
    if (_0x1bbbba[_0x303a32.toLowerCase().trim()]) {
      delete _0x1bbbba[_0x303a32.toLowerCase().trim()];
      const _0x1baec5 = JSON.stringify(_0x1bbbba, null, 2);
      await githubClearAndWriteFile("autoreply.json", _0x1baec5, _0x420110);
      await _0xe1ce1b.writeFile(getLocalPath(_0x420110) + "/autoreply.json", _0x1baec5);
      _0x96eb2a("🚯 *\"" + _0x303a32 + "\" has been successfully deleted from the Custom Reply Panel.* ✔️");
    } else {
      _0x96eb2a("❌ *The text you entered was not found.*");
    }
  } catch (_0x22ef15) {
    await ec(_0x22ef15, _0x1fe207, _0x420110, _0x347d91, readConfig, _0x472a69, _0x352f98);
  }
});
const _0xb762cc = {
  pattern: "getreply",
  alias: ["viewreply"],
  desc: "Get the list of custom replies.",
  category: "owner",
  use: ".getreply",
  filename: __filename
};
cmd(_0xb762cc, async (_0x260f72, _0x421cd9, _0x511591, {
  from: _0x32a7cf,
  isOwner: _0x4779b2,
  botNumber2: _0x4132c0,
  reply: _0x15bd9f
}) => {
  try {
    await typing(_0x260f72, readConfig, _0x32a7cf, _0x4132c0);
    if (!_0x4779b2) {
      const _0x5c9fcb = await readConfig(_0x4132c0);
      const _0x493b73 = _0x5c9fcb.LANG;
      const _0x22ee9e = _0x493b73 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x26aebb = {
        text: _0x22ee9e
      };
      const _0x3198a9 = {
        quoted: _0x421cd9
      };
      const _0x360bcc = await _0x260f72.sendMessage(_0x32a7cf, _0x26aebb, _0x3198a9);
      const _0x1c5084 = {
        text: _0x472a69.reacts.owner,
        key: _0x360bcc.key
      };
      const _0x2189e5 = {
        react: _0x1c5084
      };
      return await _0x260f72.sendMessage(_0x32a7cf, _0x2189e5);
    }
    const _0x425b50 = await githubGetFileContent("autoreply.json", _0x4132c0);
    _0x15bd9f(JSON.stringify(JSON.parse(_0x425b50), null, 2));
  } catch (_0x2d6428) {
    await ec(_0x2d6428, _0x260f72, _0x4132c0, _0x421cd9, readConfig, _0x472a69, _0x32a7cf);
  }
});
const _0x89d45e = {
  pattern: "resetreply",
  alias: ["delreply"],
  desc: "Resets the custom reply panel.",
  category: "owner",
  use: ".resetreply",
  filename: __filename
};
cmd(_0x89d45e, async (_0x276b8f, _0x17a79d, _0x2e507c, {
  from: _0x5c0b78,
  isOwner: _0x4f9e95,
  botNumber2: _0x224026,
  reply: _0x178dcd
}) => {
  try {
    await typing(_0x276b8f, readConfig, _0x5c0b78, _0x224026);
    if (!_0x4f9e95) {
      const _0x4f5c0e = await readConfig(_0x224026);
      const _0x11e9d7 = _0x4f5c0e.LANG;
      const _0x2d577f = _0x11e9d7 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0xc30b50 = {
        text: _0x2d577f
      };
      const _0xafd50e = {
        quoted: _0x17a79d
      };
      const _0x313e55 = await _0x276b8f.sendMessage(_0x5c0b78, _0xc30b50, _0xafd50e);
      const _0x3a4d3c = {
        text: _0x472a69.reacts.owner,
        key: _0x313e55.key
      };
      const _0x11fa23 = {
        react: _0x3a4d3c
      };
      return await _0x276b8f.sendMessage(_0x5c0b78, _0x11fa23);
    }
    const _0x3f25e6 = JSON.stringify({}, null, 2);
    await githubClearAndWriteFile("autoreply.json", _0x3f25e6, _0x224026);
    await _0xe1ce1b.writeFile(getLocalPath(_0x224026) + "/autoreply.json", _0x3f25e6);
    _0x178dcd("🚯 *Custom Reply Panel has been successfully reset.* ✔️");
  } catch (_0x58d6fa) {
    await ec(_0x58d6fa, _0x276b8f, _0x224026, _0x17a79d, readConfig, _0x472a69, _0x5c0b78);
  }
});
const _0x30dace = {
  pattern: "addreply"
};
function _0x2de54c(_0x1575b4, _0x35844e, _0x325b8a, _0x23661a, _0x46a1f3) {
  return _0x58f0(_0x23661a - 0x28c, _0x1575b4);
}
_0x30dace.alias = ["newreply"];
_0x30dace.desc = "Add a new custom reply.";
_0x30dace.category = "owner";
_0x30dace.use = ".addreply hi+hello there";
_0x30dace.filename = __filename;
cmd(_0x30dace, async (_0x4b35f8, _0x1f48c6, _0x750e8e, {
  from: _0x801d73,
  q: _0x25b758,
  isOwner: _0x4eb026,
  botNumber2: _0xd1acd7,
  reply: _0x1e96e9
}) => {
  try {
    await typing(_0x4b35f8, readConfig, _0x801d73, _0xd1acd7);
    if (!_0x4eb026) {
      const _0x3dd928 = await readConfig(_0xd1acd7);
      const _0x7c47c3 = _0x3dd928.LANG;
      const _0x537078 = _0x7c47c3 === 'en' ? _0x472a69.en.data.isOwner : _0x472a69.si.data.isOwner;
      const _0x5ce819 = {
        text: _0x537078
      };
      const _0x49d499 = {
        quoted: _0x1f48c6
      };
      const _0x580ada = await _0x4b35f8.sendMessage(_0x801d73, _0x5ce819, _0x49d499);
      const _0x53010f = {
        text: _0x472a69.reacts.owner,
        key: _0x580ada.key
      };
      const _0x26eff7 = {
        react: _0x53010f
      };
      return await _0x4b35f8.sendMessage(_0x801d73, _0x26eff7);
    }
    const _0x57a013 = (await readConfig(_0xd1acd7)).LANG.toLowerCase();
    const _0x3316a2 = _0x472a69[_0x57a013]?.["addreplyq"] || _0x472a69.en.addreplyq || "❌ Invalid format! Please use: .addreply old+new";
    if (!_0x25b758 || !_0x25b758.includes('+')) {
      return _0x1e96e9(_0x3316a2);
    }
    const [_0x818a41, _0x1e9043] = _0x25b758.split('+').map(_0x12b84d => _0x12b84d.trim());
    if (!_0x818a41 || !_0x1e9043) {
      return _0x1e96e9(_0x3316a2);
    }
    const _0x5ad081 = await githubGetFileContent("autoreply.json", _0xd1acd7);
    const _0x1001a4 = JSON.parse(_0x5ad081);
    _0x1001a4[_0x818a41.toLowerCase()] = _0x1e9043;
    const _0x2485ed = JSON.stringify(_0x1001a4, null, 2);
    await githubClearAndWriteFile("autoreply.json", _0x2485ed, _0xd1acd7);
    await _0xe1ce1b.writeFile(getLocalPath(_0xd1acd7) + "/autoreply.json", _0x2485ed);
    _0x1e96e9("👨‍🔧 *The reply for the text \"" + _0x818a41 + "\" has been added as \"" + _0x1e9043 + "\".* ✔️");
  } catch (_0x547a09) {
    await ec(_0x547a09, _0x4b35f8, _0xd1acd7, _0x1f48c6, readConfig, _0x472a69, _0x801d73);
  }
});
const _0x1574d3 = {
  on: "body"
};
cmd(_0x1574d3, async (_0x193ff4, _0x490886, _0x2b0f04, {
  from: _0x151d92,
  body: _0x3e09aa,
  isCmd: _0x45c1ff,
  isMe: _0x410041,
  botNumber2: _0x247145,
  isOwner: _0x445c28,
  reply: _0x6f846e
}) => {
  if (_0x45c1ff || _0x410041) {
    return;
  }
  const _0x5e2248 = await readConfig(_0x247145);
  let _0x58d9b8 = getLocalPath(_0x247145);
  const _0x1597f8 = async _0x2240bc => {
    const _0x19cfee = _0x58d9b8 + '/' + _0x2240bc;
    try {
      const _0x4cb7d4 = await _0xe1ce1b.readFile(_0x19cfee, "utf8");
      return JSON.parse(_0x4cb7d4);
    } catch (_0x106986) {
      try {
        const _0x1e0d06 = await githubGetFileContent(_0x2240bc, _0x247145);
        if (_0x1e0d06) {
          const _0x97dd9 = {
            recursive: true
          };
          await _0xe1ce1b.mkdir(_0x58d9b8, _0x97dd9);
          await _0xe1ce1b.writeFile(_0x19cfee, _0x1e0d06);
          return JSON.parse(_0x1e0d06);
        }
      } catch (_0x3e585c) {
        return {};
      }
    }
    return {};
  };
  const _0x545793 = await _0x1597f8("autoreply.json");
  const _0x6d794d = _0x3e09aa.toLowerCase();
  if (_0x545793[_0x6d794d]) {
    await typing(_0x193ff4, readConfig, _0x151d92, _0x247145);
    _0x6f846e(_0x545793[_0x6d794d]);
  }
  if (_0x5e2248.AUTO_STICKER === "customize") {
    const _0x19f710 = await _0x1597f8("autosticker.json");
    if (_0x19f710[_0x6d794d]) {
      try {
        const _0x12a2eb = await _0x1b4773(_0x19f710[_0x6d794d]);
        const _0x5009ec = await _0x12a2eb.arrayBuffer();
        const _0x54b82d = {
          pack: "ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ✔️",
          author: "ᴘʀᴀʙᴀᴛʜ & ꜱᴀᴄʜɪɴᴛʜᴀ",
          type: StickerTypes.FULL,
          quality: 0x4b
        };
        let _0x48ffbc = new Sticker(Buffer.from(_0x5009ec), _0x54b82d);
        const _0x5b80e1 = {
          quoted: _0x490886
        };
        await _0x193ff4.sendMessage(_0x151d92, {
          'sticker': await _0x48ffbc.toBuffer()
        }, _0x5b80e1);
      } catch (_0x1ca496) {}
    }
  }
  if (_0x5e2248.AUTO_VOICE === "customize") {
    const _0x565da9 = await _0x1597f8("autovoice.json");
    if (_0x565da9[_0x6d794d]) {
      try {
        await _0x193ff4.sendPresenceUpdate("recording", _0x151d92);
        const _0x5e6c4b = {
          url: _0x565da9[_0x6d794d]
        };
        const _0x32b641 = {
          audio: _0x5e6c4b,
          mimetype: "audio/ogg; codecs=opus",
          ptt: true
        };
        const _0x15421 = {
          quoted: _0x490886
        };
        await _0x193ff4.sendMessage(_0x151d92, _0x32b641, _0x15421);
      } catch (_0x53492d) {}
    }
  }
  try {
    if (!_0x2b0f04.quoted || _0x2b0f04.quoted.sender !== _0x247145 || !_0x445c28) {
      return;
    }
    const _0x4b22af = _0x2b0f04.quoted.msg;
    if (!_0x4b22af) {
      return;
    }
    const _0x4fe792 = (_0x5e2248.LANG || 'en').toLowerCase();
    const _0x115d36 = _0x472a69[_0x4fe792]?.["addvoiceq"] || _0x472a69.en.addvoiceq;
    if (_0x115d36 && _0x4b22af.includes(_0x115d36)) {
      if (_0x3e09aa === '1' || _0x3e09aa === '2') {
        return _0x6f846e("👉 *Please go to our wiki - https://prabathmd-official.vercel.app/wiki*");
      }
    }
  } catch (_0x56ce4e) {}
});
function _0x44edd3(_0x2de2e8) {
  function _0x329017(_0x1629da) {
    if (typeof _0x1629da === "string") {
      return function (_0x3a4be1) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x1629da / _0x1629da).length !== 1 || _0x1629da % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x329017(++_0x1629da);
  }
  try {
    if (_0x2de2e8) {
      return _0x329017;
    } else {
      _0x329017(0);
    }
  } catch (_0x2407ff) {}
}
