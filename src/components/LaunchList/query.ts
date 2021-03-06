import gql from "graphql-tag";

export const LAUNCHES_QUERY = gql`
  query Launches {
    launches {
      flight_number
      mission_name
      launch_year
      links {
        flickr_images
      }
    }
  }
`;
