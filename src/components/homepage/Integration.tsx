import { TypeAnimation } from "react-type-animation";
import classes from "@/styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Integration: React.FC<{}> = () => {
  return (
    <Container className="my-5">
      <Row className="py-5">
        <Col
          xs={12}
          md={{ span: 5, offset: 1 }}
          className={classes["code-container"]}
        >
          <TypeAnimation
            sequence={[
              "const add: require('ddd')\n\n",
              "const add: require('ddd')\n\n await ddd.newInvoice({\n\n",
              "const add: require('ddd')\n\n await ddd.newInvoice({\n\n {\n\n",
            ]}
            repeat={Infinity}
          />
        </Col>
        <Col xs={12} md={{span: 4, offset: 1}}>
          <span className={classes.category}>Designed for developers</span>
          <h2 className={classes.subtitle}>Powerful and easy integration</h2>
          <p>
            We worked hard to give you the most powerful solution with as little
            integration trouble as possible.Explore whole API documentation and
            get up and running in hours.
          </p>
          <button className={classes.btn}>Read the docs</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Integration;
