import classes from "@/styles/Home.module.scss";
import Card from "../UI/FeaturesCard";
import { Container, Row, Col } from "react-bootstrap";

const Features: React.FC<{}> = () => {
  return (
    <Container className="mt-5">
      <Row className="pt-5">
        <Col xs={12} md={{ span: 10, offset: 1 }} className="mb-4">
          <span className={classes.category}>Features</span>
          <h2 className={classes.subtitle}>Ensured compliance - forever</h2>
        </Col>
      </Row>
      <Row className="d-flex align-items-stretch justify-content-between gap-4">
        <Col xs={12} md={{ span: 10, offset: 1 }} className="d-flex gap-4 flex-column flex-md-row">
          <Card
            title="Compliance & Tax"
            subtitle="E-invoices & real-time reporting"
            paragraphs={[
              "Easily comply and distribute e-invoices globally.",
              "Give us invoice data and we will make sure to distribute in correct local format.",
            ]}
          />
          <Card
            title="Easy Integration"
            subtitle="From developers for developers"
            paragraphs={[
              "Completely hidden behind your UI, we quietly take care for all your/your clients invoices.",
              "Built with developers in mind the integrations is done in hours.",
            ]}
          />
          <Card
            title="Connectivity"
            subtitle="Instant communication"
            paragraphs={[
              "Send to local tax authorities, clients, PEPPOL and more.",
              "Never worry about standards, tax rates, VAT, rounding errors, validations, calculations again.",
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
