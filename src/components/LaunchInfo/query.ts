import gql from "graphql-tag";

const LAUNCHES_QUERY = gql`
  query Launche($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      launch_year
    }
  }
`;
