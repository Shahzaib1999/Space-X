import gql from "graphql-tag";

const LAUNCHES_QUERY = gql`
  query Launches {
    launches {
      id
      mission_name
      launch_year
    }
  }
`;
