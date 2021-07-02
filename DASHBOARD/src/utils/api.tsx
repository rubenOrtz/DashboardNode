import axios from "axios";
export function getUserDetails() {
  return axios.get("http://176.9.111.217:3092/api/auth", {
    withCredentials: true,
  });
}
export function getGuilds() {
  return axios.get("http://176.9.111.217:3092/api/discord/guilds", {
    withCredentials: true,
  });
}
export function getGuildConfig(guildId: String) {
  return axios.get(
    `http://176.9.111.217:3092/api/discord/guilds/${guildId}/config`,
    {
      withCredentials: true,
    }
  );
}
export function updateGuildPrefix(guildId: String, prefix: String) {
  return axios.put(
    `http://176.9.111.217:3092/api/discord/guilds/${guildId}/prefix`,
    {
      prefix,
    },
    {
      withCredentials: true,
    }
  );
}
type C = { guildId: any; channelId: any; voiceId: any; song: any };
export function searchMusic({ guildId, channelId, voiceId, song }: C) {
  return axios.post(
    `http://176.9.111.217:3092/api/music/search`,
    {
      guildId,
      textChannel: channelId,
      voiceChannel: voiceId,
      song,
    },
    {
      withCredentials: true,
    }
  );
}
export function findUser(data: any) {
  return axios
    .put(
      `http://176.9.111.217:3092/api/music/finduser`,
      {
        data,
      },
      {
        withCredentials: true,
      }
    )
    .catch((err) => {
      return err;
    });
}
export function getQueue(guildId: any) {
  return axios
    .put(
      `http://176.9.111.217:3092/api/music/queue`,
      {
        guildId,
      },
      {
        withCredentials: true,
      }
    )
    .catch((err) => {
      return err;
    });
}
