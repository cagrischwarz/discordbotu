const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
     member.sendMessage('Selam ' + username + '\n **卍 KRALLAR İZ BIRAKIR, SOYTARILAR KISKANIR 卍 **+16 SUNUCUYA DAVETLİSİNİZ.  卍  https://discord.gg/xTQSKUW  卍   -SCHIZOPHRENIC LEGION 卍');
};