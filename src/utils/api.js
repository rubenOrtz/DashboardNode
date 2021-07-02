const fetch = require("node-fetch");
const OAuth2Credentials = require("../database/schemas/Oauth2Credentials");
const CryptoJS = require("crypto-js");
const { decrypt } = require("./utils");

const TOKEN = process.env.BOT_TOKEN;
async function getBotGuilds() {
  const response = await fetch("http://discord.com/api/v8/users/@me/guilds", {
    method: "GET",
    headers: {
      Authorization: `Bot ${TOKEN}`,
    },
  });
  return response.json();
}
async function getUserGuilds(discordId) {
  const credentials = await OAuth2Credentials.findOne({ discordId });
  if (!credentials) throw new Error("No credentrials");
  const encryptedAccessToken = credentials.get("accessToken");
  const accessToken = decrypt(encryptedAccessToken).toString(CryptoJS.enc.Utf8);
  const response = await fetch("http://discord.com/api/v8/users/@me/guilds", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.json();
}

async function getGuildRoles(guildId) {
  const response = await fetch(
    `http://discord.com/api/v8/guilds/${guildId}/roles`,
    {
      method: "GET",
      headers: {
        Authorization: `Bot ${TOKEN}`,
      },
    }
  );
  return response.json();
}
async function getGuildId(guildId) {
  const response = await fetch(`http://discord.com/api/v8/guilds/${guildId}`, {
    method: "GET",
    headers: {
      Authorization: `Bot ${TOKEN}`,
    },
  });
  return response.json();
}

async function getChannels(guildId) {
  const response = await fetch(
    `http://discord.com/api/v8/guilds/${guildId}/channels`,
    {
      method: "GET",
      headers: {
        Authorization: `Bot ${TOKEN}`,
      },
    }
  );
  return response.json();
}
getChannels("818892387098034247");

module.exports = {
  getBotGuilds,
  getUserGuilds,
  getGuildRoles,
  getGuildId,
  getChannels,
};
