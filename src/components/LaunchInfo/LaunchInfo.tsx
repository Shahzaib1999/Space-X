import { FC } from "react";
import { Container, Row, Col, Badge } from "reactstrap";

import { LaunchInfoQuery } from "../../generated/graphql";
import "./styles.css";

interface Props {
  data: LaunchInfoQuery;
}

export const LaunchInfo: FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>;
  }

  return (
    <Container className="text-white mt-5">
      <div>
        <span>Flight {data.launch.launch_site?.site_name}: </span>
        {data.launch.launch_success ? (
          <Badge color="success">Success</Badge>
        ) : (
          <Badge color="danger">Failed</Badge>
        )}
      </div>
      <h1>
        {data.launch.mission_name}
        {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
      </h1>
      <p>{data.launch.details}</p>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <Row>
          {data.launch.links.flickr_images.map((image) =>
            image ? (
              <Col md={6}>
                <img
                  src={image}
                  className="LaunchProfile__image mt-3"
                  key={image}
                  alt="img"
                  width={300}
                />
              </Col>
            ) : null
          )}
        </Row>
      )}
    </Container>
  );
};
