import React from "react";
import { getGuilds, getUserDetails } from "../../utils/api";
import { useQuery, useSubscription } from "@apollo/client";
import { statsQuery } from "../../graphql/queries";

export function StatsPage({}) {
  const { loading, error, data } = useSubscription(statsQuery);

  if (error) {
    console.log(error);
  }
  if (!loading && !error) {
    const { id, playingTime } = data.getStats;
    return (
      <div>
        <h1>{id}</h1>
        <h1>{playingTime}</h1>
      </div>
    );
  }
  return <h1>Loading....</h1>;
}
