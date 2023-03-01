import classes from "@/styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import imgSrc from "@/assets/images/puzzle.png";
import Image from "next/image";

const list: string[] = [
  "use of our white label UI",
  "transformation from data to e-invoices",
  "transformation from data to fiscalized invoice",
  "transformation from invoice to e-invoice",
  "preparation of .PDF invoice",
  "distribution to domestic tax auhority portal",
  "distribution to PEPPOL network",
  "distribution over mail",
  "importing from servers to ERP",
  "archiving",
  "and much more...",
];

const SectionTwo: React.FC<{}> = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={{span: 5, offset: 1}}>
          <h2 className={classes.subtitle}>... you do the choosing.</h2>
          <p className={`${classes.text} text-center text-md-start`}>Choose among 20 APIs and create your solution in days.</p>
          <p className={`${classes.text} text-center text-md-start`}>We offer APIs for:</p>
          <ul>
            {list.map((item, index) => {
              return <li key={`api-for-${index}`}>{item}</li>;
            })}
          </ul>
          <button className={classes.btn}>Talk to us</button>
        </Col>
        <Col xs={12} md={{span: 4, offset: 1}}>
          <Image src={imgSrc} alt="Computer" />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionTwo;
