import { gql } from "@apollo/client";

export const menuQueryPage = gql`
  query getMenuPageQuery {
    getUser {
      discordId
      discordTag
      avatar
    }
    getMutualGuilds {
      included {
        name
        icon
        id
      }
      excluded {
        name
        icon
        id
      }
    }
  }
`;

export const HeaderComponentQuery = gql`
  query getMenuPageQuery {
    getUser {
      discordId
      discordTag
      avatar
    }
  }
`;
export const statsQuery = gql`
  query statsQuery {
    getStats {
      id
      playingTime
      weeklylbcd
      commands
      cleverbotMessages
      logs
      guildCount
    }
  }
`;

export const dashboardPageQuery = gql`
  query getDashboardPageData($guildId: String!) {
    getUser {
      discordId
      discordTag
      avatar
    }
    getGuildConfig(guildId: $guildId) {
      prefix
      welcomechannelid
      id
    }
    getChannels(guildId: $guildId) {
      name
      type
      id
    }
  }
`;
export const channelsWelcomeQuery = gql`
  query getChannels($channelId: String!) {
    getChannels(channelId: $channelId) {
      name
      id
    }
  }
`;
export const MusicDataQuery = gql`
  query getChannels($channelId: String!) {
    getChannels(channelId: $channelId) {
      name
      id
    }
  }
`;
