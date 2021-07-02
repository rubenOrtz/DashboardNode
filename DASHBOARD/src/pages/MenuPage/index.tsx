import React from "react";
import { getGuilds, getUserDetails } from "../../utils/api";
import { MenuComponent } from "../../components";
import { useQuery } from "@apollo/client";
import { menuQueryPage } from "../../graphql/queries";

export function MenuPage({}) {
  const { loading, error, data } = useQuery(menuQueryPage);

  if (error) {
    console.log(error);
  }
  if (!loading && !error) {
    console.log(data);
    const { getMutualGuilds } = data;
    return (
      <div>
        <h1>Menu Page</h1>
        <MenuComponent guilds={getMutualGuilds} />
      </div>
    );
  }
  return <h1>Loading....</h1>;
}
