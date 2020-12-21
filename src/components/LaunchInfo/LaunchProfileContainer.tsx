import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useLaunchInfoQuery } from "../../generated/graphql";
import { Loader } from "../Loader/Loader";
import { LaunchInfo } from "./LaunchInfo";

interface ParamTypes {
  id: string;
}

export const LaunchInfoContainer = () => {
  const { id } = useParams<ParamTypes>();
  const { data, error, loading,refetch } = useLaunchInfoQuery({
    variables: { id: String(id) },
  });

  useEffect(() => {
    refetch();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h3>Error</h3>;
  }

  if (!data) {
    return <h3>Select a flight</h3>;
  }

  return <LaunchInfo data={data} />;
};
