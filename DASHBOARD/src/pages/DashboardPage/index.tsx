import React from "react";
import { Link as ReachLink } from "react-router-dom";

interface match {
  params: { id: number };
  path: string;
  url: string;
  isExact: boolean;
}

type A = { match: match };

export function DashboardPage({ match }: A) {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <ReachLink to={`${match.params.id}/config`}> go to config </ReachLink>
    </div>
  );
}
