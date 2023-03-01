import classes from "@/styles/SolutionCard.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const SolutionCard: React.FC<{
  title: string;
  paragraph: string;
  list: string[];
}> = ({ title, paragraph, list }) => {
  return (
    <Container className={`${classes.container} pt-4`}>
      <Row className="d-flex align-items-center">
        <Col
          xs={12}
          md={8}
          className={`py-4 px-5 pb-0 ${classes["text-alignment"]}`}
        >
          <span className={classes.category}>Solution</span>
          <h2 className={classes.subtitle}>{title}</h2>
          <p className={classes.description}>{paragraph}</p>
        </Col>
        <Col xs={12} md={4} className={`${classes.text} text-start d-flex flex-column align-items-center`}>
          <span className="text-black">Choose what you need:</span>
          <ul className="mt-3">
            {list.map((item) => {
              return <li key={Math.random().toString()}>{item}</li>;
            })}
          </ul>
        </Col>
      </Row>
      <Row className="my-3 mx-4">
        <button className={classes.btn}>See the solution</button>
      </Row>
      <Row className={`${classes["container-blue"]} mt-4`}>
        <Col>
          <p className="text-center py-3">
            For SaaS, ERPs, ISVs, accounting softwares, global suppliers etc.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SolutionCard;
