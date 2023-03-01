import classes from "@/styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { adjustableList } from "./icons";
import AdjustableCard from "../UI/AdjustableCard";

const Adjustable: React.FC<{}> = () => {
  return (
    <Container>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} className="text-center">
          <Container>
            <Row>
              <Col>
                <h2 className={classes.subtitle}>Adjustable to your needs</h2>
                <p className={`${classes.text}`}>
                  Different levels of integrations to provide compliant
                  invoicing for SaaS, ERsP, <br /> accounting softwares or
                  enterprises and global suppliers.
                </p>
              </Col>
            </Row>
            <Row>
              {adjustableList.map((item) => {
                return (
                  <Col
                    xs={12}
                    md={4}
                    className="gap-2"
                    key={Math.random().toString()}
                  >
                    <AdjustableCard
                      key={Math.random().toString()}
                      icon={item.icon}
                      title={item.title}
                      text={item.text}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Adjustable;
