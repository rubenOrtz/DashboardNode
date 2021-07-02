const CryptoJS = require("crypto-js");
const guild2 = require("../database/schemas/guild");

async function getMutualsGuilds(userGuilds, botGuilds) {
  const { getGuildId } = require("./api");
  // return userGuilds.filter((guild) => botGuilds.find((botGuild) => (botGuild.id === guild.id) && (guild.permissions & 0x20) === 0x20 ))

  const validGuilds = userGuilds.filter(
    (guild) => (guild.permissions & 0x20) === 0x20
  );
  const included = [];
  /* I AM MAKING IT, UNDER CONSTRUCTION */
  /*    const excluded = []
            const excluded2 = validGuilds.filter(async(guildId) => {
                const guild = await getGuildId(guildId.id)
                const findGuild = await guild.id === guildId.id ? included.push(guild) && console.log("match: " + guild.id + " " + guildId.id) : excluded.push(guild);
                if (!findGuild) {
                    console.log(guild.id + " doesnt match to " + guildId.id)
                }
            })
        */
  const excluded = validGuilds.filter((guild) => {
    const findGuild = botGuilds.find((g) => {
      return g.id === guild.id;
    });
    if (findGuild) included.push(findGuild);
    if (!findGuild) return guild;
  });
  console.log(excluded, included);
  return { excluded, included };
}

function encrypt(token) {
  return CryptoJS.AES.encrypt(token, "test");
}

function decrypt(token) {
  return CryptoJS.AES.decrypt(token, "test");
}
module.exports = { getMutualsGuilds, encrypt, decrypt };
