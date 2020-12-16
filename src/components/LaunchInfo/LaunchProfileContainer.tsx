import React, { useEffect } from "react";

import { useLaunchInfoQuery } from "../../generated/graphql";
import { LaunchInfo } from "./LaunchInfo";

interface OwnProps {
  id: number;
}

export const LaunchInfoContainer = ({ id }: OwnProps) => {
  console.log('id',id);
  
  const { data, error, loading,refetch } = useLaunchInfoQuery({
    variables: { id: String(id) },
  });

  useEffect(() => {
    refetch();
  }, [id]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error</h3>;
  }

  if (!data) {
    return <h3>Select a flight</h3>;
  }
  console.log(data);

  return <LaunchInfo data={data} />;
};
