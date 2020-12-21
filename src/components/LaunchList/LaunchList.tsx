import React, { FC } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import { LaunchesQuery } from "../../generated/graphql";
import "./styles.css";
import Logo from '../../assets/logo.png';
interface Props {
  data: LaunchesQuery;
}

export const LaunchList: FC<Props> = ({ data }) => {
  return (
    <Container>
      <Row>
        {!!data.launches &&
          data.launches
            .filter((launch) => launch?.links?.flickr_images?.length)
            .map((launch, ind) => (
              <Col md={4} key={ind}>
                <Link to={`/launch/${launch?.flight_number}`}>
                <Card className="launch-card mt-3">
                  <CardHeader className="p-0">
                    {!!launch?.links &&
                    !!launch.links.flickr_images &&
                    launch?.links.flickr_images[0] ? navigator.onLine ?  
                      <img
                        src={launch?.links.flickr_images[0] && launch?.links.flickr_images[0]}
                        alt="img"
                        className="launch-image"
                      />
                      : 
                      <img
                      src={Logo}
                      alt="img"
                      className="launch-image"
                    />
                     : null }
                    {/* <img src={launch?.links} alt=""/>
              {launch?.mission_name} */}
                  </CardHeader>
                  <CardBody className="text-white h3 text-center">
                    {launch?.mission_name}
                  </CardBody>
                </Card>
                </Link>
              </Col>
            ))}
      </Row>
    </Container>
    // <ol className={`LaunchList`}>
    //   {!!data.launches &&
    //     data.launches.map((launch, ind) => (
    //       <li
    //         key={ind}
    //         className={`LaunchList__item`}
    //         onClick={() => handleIdChange(launch?.flight_number!)}
    //       >
    //         {launch?.mission_name} - {launch?.launch_year}
    //       </li>
    //     ))}
    // </ol>
  );
};
