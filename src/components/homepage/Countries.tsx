import mapEurope from "@/assets/images/map.png";
import Image from "next/image";
import Logos from "./Logos";
import classes from "@/styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Countries: React.FC<{}> = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center pt-5">
        <Col xs={12} md={{ span: 5, offset: 1 }}>
          <span className={classes.category}>Scale your business</span>
          <h2 className={classes.subtitle}>In 6 countries</h2>
          <p className={`${classes.text} text-center text-md-start`}>
            Instant compliance with the latest regulations in each of the
            countries. Make an invoice and send it. We make sure that everything
            is processed according to the regulations.
          </p>
        </Col>
        <Col xs={12} md={5}>
          <Image
            src={mapEurope}
            alt="Map of European countries"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="mt-4 pb-5">
        <Col
          xs={12}
          md={{ span: 10, offset: 1 }}
          className="d-flex justify-content-center"
        >
          <Logos />
        </Col>
      </Row>
    </Container>
  );
};

export default Countries;
