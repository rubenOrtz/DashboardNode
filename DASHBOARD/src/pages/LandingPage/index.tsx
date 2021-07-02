import React from "react";
import { HeaderComponent } from "../../components";
import { HeaderComponentQuery } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

export function LandingPage(props: any) {
  const login = () => {
    window.location.href = "http://176.9.111.217:3092/api/auth/discord";
  };
  const { loading, error, data } = useQuery(HeaderComponentQuery);
  if (error) console.log(error);
  if (!loading) {
    const getUser = data;
    console.log(data);
    return (
      <div>
        <HeaderComponent user={getUser} />
      </div>
    );
  }

  return <div>Loading...</div>;
}
