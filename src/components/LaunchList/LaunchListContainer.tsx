import React from "react";

import { LaunchesQuery, useLaunchesQuery } from "../../generated/graphql";
import { Loader } from "../Loader/Loader";
import { LaunchList } from "./LaunchList";

export const LaunchListContainer = () => {
  const { data, error, loading } = useLaunchesQuery();

  if (loading) {
    return <Loader />;
  }

  if (error || !data) {
    return <h3>Error</h3>;
  }

  return <LaunchList data={data} />;
};
