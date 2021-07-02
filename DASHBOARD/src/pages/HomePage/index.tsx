import React from "react";
import { getGuilds, getUserDetails } from "../../utils/api";
import { useQuery, useSubscription } from "@apollo/client";
import { statsQuery } from "../../graphql/queries";

export function HomePage({}) {

  return(
       <h1>Loading....</h1>
    )
}
