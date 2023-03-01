import SolutionCard from "../UI/SolutionCard";
import classes from "@/styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Solution: React.FC<{}> = () => {
  return (
    <Container className="mt-5">
      <Row className="pt-5">
        <Col xs={12} md={{ span: 10, offset: 1 }}>
          <SolutionCard
            title="Global e-invoicing API integration"
            paragraph="From e-invoice creation & distribution, secure storage to white label UI embedding options."
            list={[
              "e-Invoice from data",
              "global distribution",
              "management",
              "10 year cloud storage",
              "embedded white label UI",
              "automated workflows",
            ]}
          />
        </Col>
      </Row>
      <Row className="pb-5">
        <Link
          href={"/build-custom-invoicing-solution-api"}
          className={`text-center mt-3 ${classes.text}`}
        >
          <span className="text-black">BUILD YOUR OWN</span> - Use our powerful
          APIs to build you next e-invoicing solution with lightning speed.
        </Link>
      </Row>
    </Container>
  );
};

export default Solution;
