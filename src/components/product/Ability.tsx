import classes from "@/styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import imgSrc from "@/assets/images/invoice.png";
import Image from "next/image";

const Ability: React.FC<{}> = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col xs={12} md={{span: 5, offset: 1}}>
          <h2 className={classes.subtitle}>
            Give your software the ability of e-invoicing
          </h2>
          <p className={`${classes.text} text-center text-md-start pt-4`}>
            Never worry about local or international regulations, formats or
            syntaxes regarding invoices. Connect to local tax authorities &
            global e-invoicing networks and stay compliant - forever.
          </p>
        </Col>
        <Col xs={12} md={{span: 4, offset: 2}}>
          <Image src={imgSrc} alt="e-invoice" className="img-fluid" style={{width: "50%"}} />
        </Col>
      </Row>
    </Container>
  );
};

export default Ability;
