import { gql } from "@apollo/client";
export const updateGuildPrefixMutation = gql`
  mutation UpdateGuildPrefix($guildId: String!, $prefix: String!) {
    updateGuildPrefix(guildId: $guildId, prefix: $prefix) {
      prefix
      id
    }
  }
`;

export const updateChannelsWelcome = gql`
  mutation updateWelcomeChannel($channelId: String!, $guildId: String!) {
    updateWelcomeChannel(guildId: $guildId, channelId: $channelId) {
      id
    }
  }
`;
