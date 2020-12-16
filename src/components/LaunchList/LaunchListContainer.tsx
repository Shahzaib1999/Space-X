import React from 'react';

import { LaunchesQuery, useLaunchesQuery } from '../../generated/graphql';
import { LaunchList,OwnProps } from './LaunchList';

export const LaunchListContainer = (props: OwnProps) => {
    const {data,error,loading} = useLaunchesQuery();

    if (loading) {
        return <h3>Loading...</h3>;
    }

    if (error || !data) {
        return <h3>Error</h3>;
    }
    
    return(
        <LaunchList data={data} {...props} />
    );
}