import classes from "@/styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import stepsImg from "@/assets/images/steps.png";
import Image from "next/image";

const steps = [
  "Read the documentation",
  "Register as a service provider",
  "Create your own API key and start testing in a sandbox",
  "Switch to production when ready to start e-invoicing",
];

const GetStarted: React.FC<{}> = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center py-5">
        <Col xs={{span: 10, offset: 1}} md={{span: 4, offset: 1}}>
          <Image src={stepsImg} alt="Four steps of integration" className="img-fluid" />
        </Col>
        <Col xs={12} md={{span: 5, offset: 1}} className="mt-5 mt-md-0">
          <span className={classes.category}>Get up and running in minutes</span>
          <h2 className={classes.subtitle}>How to get started?</h2>
          <p className={`${classes.text} text-center text-md-start`}>
            Connecting your software to e-invoicing API is a simple process.
          </p>
          <ol className={`${classes.text} text-start px-3`}>
            {steps.map((step, index) => {
              return <li key={`get-started-${index}`}>{step}</li>;
            })}
          </ol>
          <div>
            <button className={`${classes.btn} mb-3 mb-md-0 me-0 me-md-4`}>Start for free</button>
            <button className={classes.btn}>Read the docs</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetStarted;
