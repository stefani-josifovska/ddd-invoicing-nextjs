import classes from "@/styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import imgSrc from "@/assets/images/pc.png";
import Image from "next/image";

const SectionOne: React.FC<{}> = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col xs={{span: 10, offset: 1}} md={{span: 4, offset: 1}}>
          <Image src={imgSrc} alt="Computer" className="img-fluid" />
        </Col>
        <Col xs={12} md={{span: 5, offset: 1}} className="mt-5 mt-md-0">
          <span className={classes.category}>Let’s get creative</span>
          <h2 className={classes.subtitle}>We did the development ...</h2>
          <p className={`${classes.text} text-center text-md-start`}>
            Pre-prepared APIs from developers for developers. Integrate them in
            minutes and create the exact solution that is including invoicing.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
