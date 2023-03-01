import classes from "@/styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import imgSrc from "@/assets/images/hiddenImg.png";
import Image from "next/image";

const Hidden: React.FC<{}> = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center py-5">
        <Col xs={{span: 10, offset: 1}} md={{span: 4, offset: 1}}>
          <Image src={imgSrc} alt="Completely hidden behind your UI" className="img-fluid" />
        </Col>
        <Col xs={12} md={{span: 5, offset: 1}}>
          <h2 className={classes.subtitle}>Completely hidden behind your UI</h2>
          <p className={`${classes.text} text-center text-md-start pt-4`}>
            Your customers will never leave your solution, so you maintain the
            whole user experience journey. This allows you to focus on what you
            are best at and leave the boring part to us.
          </p>
          <p className={`${classes.text} text-center text-md-start`}>
            We will provide you with the management module, where you can take
            care of invoices for you or your clients if neccessary.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hidden;
