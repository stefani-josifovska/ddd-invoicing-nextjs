import React from "react";
import classes from "@/styles/FeaturesCard.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Card: React.FC<{
  title: string;
  subtitle: string;
  paragraphs: string[];
}> = ({ title, subtitle, paragraphs }) => {
  return (
    <div
      className={`${classes.container} d-flex flex-column align-items-center py-4 px-3`}
    >
      {/* <Row>
        <Col className="d-flex flex-column align-items-center" xs={12}> */}
          <h3 className={classes.title}>{title}</h3>
          <h4 className={classes.subtitle}>{subtitle}</h4>
          {paragraphs.map((text) => {
            return (
              <p key={Math.random().toString()} className={classes.text}>
                {text}
              </p>
            );
          })}
          <button className={classes.btn}>Read more</button>
        {/* </Col>
      </Row> */}
    </div>
  );
};

export default Card;
