import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { DashboardMenu } from "../../../components";
import { dashboardPageQuery } from "../../../graphql/queries";
import {
  updateGuildPrefixMutation,
  updateChannelsWelcome,
} from "../../../graphql/mutations";

interface match {
  path: string;
  url: string;
  isExact: boolean;
  params: { id: string };
}
interface history {
  lenght: number;
  action: string;
  location: {
    pathname: string;
    search: string;
    hash: string & number;
    key: string;
  };
}

type A = { history: history; match: match };

export function DashboardConfigPage({ history, match }: A) {
  const { loading, error, data } = useQuery(dashboardPageQuery, {
    variables: { guildId: match.params.id },
  });
  const [updatePrefix] = useMutation(updateGuildPrefixMutation);
  const [updateChannels] = useMutation(updateChannelsWelcome);

  const updateGuildPrefixParent = async (prefix: any) => {
    if (prefix.prefix) {
      const response = await updatePrefix({
        variables: {
          guildId: match.params.id,
          prefix: prefix.prefix,
        },
      });
      return <h1>A</h1>;
    }
  };
  const getChannels = async (channelId: any) => {
    if (channelId.LogsChannel) {
      const response = await updateChannels({
        variables: {
          channelId: channelId.LogsChannel,
          guildId: match.params.id,
        },
      });
      return <h1>A</h1>;
    }
  };

  if (error) {
    console.log(error);
  }

  if (!loading) {
    const getGuildConfig = data;
    const getUser = data;
    return (
      <div>
        <DashboardMenu
          user={getUser}
          config={getGuildConfig}
          updatePrefix={updateGuildPrefixParent}
          updateChannelsWelcome={getChannels}
        />
      </div>
    );
  }
  return <h1>Loading...</h1>;
}
