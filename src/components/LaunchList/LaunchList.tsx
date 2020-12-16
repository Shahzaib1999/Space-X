import React, { FC } from "react";

import { LaunchesQuery } from "../../generated/graphql";
import "./styles.css";

export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  data: LaunchesQuery;
}

export const LaunchList: FC<Props> = ({ data, handleIdChange }) => {
  return (
    <ol className={`LaunchList`}>
      {!!data.launches &&
        data.launches.map((launch, ind) => (
          <li
            key={ind}
            className={`LaunchList__item`}
            onClick={() => handleIdChange(launch?.flight_number!)}
          >
            {launch?.mission_name} - {launch?.launch_year}
          </li>
        ))}
    </ol>
  );
};
