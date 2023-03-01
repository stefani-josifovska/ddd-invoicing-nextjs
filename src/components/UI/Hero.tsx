import classes from "@/styles/Hero.module.scss";
import Image from "next/image";
import heroImg from "@/assets/images/mainBanner.png";
import mobileHeroImg from "@/assets/images/mobile_hero.png";
// import heroImgMobile from "@/assets/images/"
import { Container, Row, Col } from "react-bootstrap";
import useWindowSize from "@/hooks/useWindowSize";

const Hero: React.FC<{ title: string; text: string; picture: boolean }> = ({
  title,
  text,
  picture,
}) => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : undefined;

  return (
    <Container className="text-white py-5 mb-5">
      <Row className="d-flex align-items-center pt-5">
        <Col xs={12} md={{ span: 5, offset: 1 }}>
          <h1 className={`${classes.title} mb-3`}>{title}</h1>
          <p className={`${classes.text} mb-4`}>{text}</p>
          <Container className="d-flex d-md-block gap-3 justify-content-center">
            <Row className="w-100">
              <Col className="p-0">
                <button
                  className={`${classes["contact-btn"]} w-100 me-0 me-md-4 mb-3 mb-md-0`}
                >
                  Talk to us
                </button>
                <button className={`${classes["login-btn"]} w-100`}>
                  Login
                </button>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          xs={12}
          md={{ span: 4, offset: 1 }}
          className="d-flex justify-content-center mt-5 mt-md-0"
        >
          {isMobile && (
            <Image src={mobileHeroImg} alt="" className="img-fluid" />
          )}
          {!isMobile && <Image src={heroImg} alt="" className="img-fluid" />}
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
