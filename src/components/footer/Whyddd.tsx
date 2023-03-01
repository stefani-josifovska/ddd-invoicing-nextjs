import WhyCard from "../UI/WhyCard";
import classes from "@/styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Whyddd: React.FC<{}> = () => {
  return (
    <Container className="my-5">
      <Row className="pt-5">
        <Col xs={{ span: 10, offset: 1 }}>
          <span className={classes.category}>Why DDD invoicing</span>
          <h2 className={`${classes.subtitle} mb-4`}>
            Strong technology <br />
            foundation
          </h2>
        </Col>
      </Row>
      <Row className="d-flex align-items-stretch pb-5">
        <Col xs={{ span: 10, offset: 1 }} className="d-flex gap-4 flex-column flex-md-row">
          {/* <Col xs={12} md={3}> */}
          <WhyCard title="Experience">
            <span className={classes["orange-span"]}>35 years</span> of
            experience in the field of business informatics has led our team to
            develop an easy, powerful solution with{" "}
            <span className={classes["orange-span"]}>direct integration.</span>
          </WhyCard>
          {/* </Col>
        <Col xs={12} md={3}> */}
          <WhyCard title="Faster">
            Experience flawless connectivity{" "}
            <span className={classes["orange-span"]}>
              without any further maintenance.&nbsp;
            </span>
            Send globally,{" "}
            <span className={classes["orange-span"]}>
              without worrying about syntaxes
            </span>{" "}
            in the blink of an eye.
          </WhyCard>
          {/* </Col>
        <Col xs={12} md={3}> */}
          <WhyCard title="Secure">
            256bit encrypting algorithms and advanced hashing are making
            sure&nbsp;
            <span className={classes["orange-span"]}>
              your data is being transferred without any security issues.
            </span>
          </WhyCard>
          {/* </Col>
        <Col xs={12} md={3}> */}
          <WhyCard title="Reliable">
            Our solution is build on{" "}
            <span className={classes["orange-span"]}>
              powerful back-end development platform&nbsp;
            </span>{" "}
            responsible for projects of private & government nature.
          </WhyCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Whyddd;
