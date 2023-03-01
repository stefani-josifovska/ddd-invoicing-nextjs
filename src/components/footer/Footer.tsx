import { Container, Row, Col } from "react-bootstrap";
import imgSrc from "@/assets/images/codeDocument.png";
import Logo from "../navbar/Logo";
import Image from "next/image";
import classes from "@/styles/Footer.module.scss";
import Link from "next/link";

const Footer: React.FC<{}> = () => {
  return (
    <section className={`${classes.container} text-white`}>
      <Container className="p-5 mt-5">
        <Row className="my-5 mx-4 align-items-center">
          <Col xs={12} md={8}>
            <div>
              <span className={classes.description}>Compliance made easy</span>
              <h2 className={classes.title}>Ready to get started?</h2>
            </div>
            <div>
              <p className={classes.text}>
                Feel free to test and develop for free. Pay when you are ready
                to deploy.
              </p>
            </div>
            <Col className="p-0">
              <button
                className={`${classes["contact-btn"]} w-100 me-0 me-md-4 mb-3 mb-md-0`}
              >
                Talk to us
              </button>
              <button className={`${classes["login-btn"]} w-100`}>Login</button>
            </Col>
          </Col>
          <Col xs={12} md={4}>
            <Container className="mt-5 mt-md-0 d-none d-sm-block">
              <Row className="align-items-center">
                <Col xs={4} md={5}>
                  <Image src={imgSrc} alt="" className="img-fluid" />
                </Col>
                <Col xs={8} md={7}>
                  <div>
                    <p className={classes.text}>
                      Get up and running with DDDi in as little as 3 minutes.
                    </p>
                    <Link href={"/documentation"} className={classes.link}>
                      API documentation
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="my-5 mx-4">
          <Col xs={12} md={2} className="mb-5">
            <Logo />
          </Col>
          <Col xs={12} md={10} className="p-0">
            <Container>
              <Row>
                <Col xs={12} sm={6} md={3}>
                  <span>Solutions</span>
                  <ul className={classes["ul-no-bullets"]}>
                    <li>
                      <Link href="/e-invoicing-api-global-compliance">
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link href="/build-custom-invoicing-solution-api">
                        Build
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <span>DDDInvoices</span>
                  <ul className={classes["ul-no-bullets"]}>
                    <li className="d-flex align-items-center">
                      <Link href={"/documentation"}>
                        API documentation
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ms-1"
                        >
                          <path
                            d="M4.56934 2.2002H2.16934C1.28568 2.2002 0.569336 2.91655 0.569336 3.8002V10.2002C0.569336 11.0838 1.28568 11.8002 2.16934 11.8002H8.5693C9.453 11.8002 10.1693 11.0838 10.1693 10.2002V7.80019"
                            stroke="white"
                            strokeOpacity="0.5"
                            strokeWidth="1.1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.8241 1.95059L4.98828 6.60423L5.75102 7.39684L10.4194 2.90435L10.4195 6.20059L11.5195 6.20058L11.5194 1.40058V0.850586H10.9694H6.16946V1.95059H9.8241Z"
                            fill="white"
                            fillOpacity="0.5"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>Company</li>
                    <li>Blog</li>
                  </ul>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <span>Legal</span>
                  <ul className={classes["ul-no-bullets"]}>
                    <li>Terms</li>
                    <li>Privacy policy</li>
                  </ul>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <span>Get in touch</span>
                  <ul className={classes["ul-no-bullets"]}>
                    <li>Contact</li>
                  </ul>
                  {/* <div>
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="8"
                    fill="white"
                    fill-opacity="0.05"
                  />
                  <path
                    d="M26.802 15.7213C26.2722 15.9745 25.7028 16.1451 25.1052 16.222C25.7154 15.8285 26.184 15.2051 26.4042 14.4622C25.8336 14.8266 25.2012 15.0914 24.528 15.2342C23.9898 14.616 23.2212 14.2296 22.3716 14.2296C20.4642 14.2296 19.0626 16.1457 19.4934 18.1348C17.0388 18.0024 14.862 16.7362 13.4046 14.8117C12.6306 16.2413 13.0032 18.1116 14.3184 19.0586C13.8348 19.0418 13.3788 18.8991 12.981 18.6607C12.9486 20.1343 13.9296 21.5129 15.3504 21.8197C14.9346 21.9412 14.4792 21.9696 14.016 21.874C14.3916 23.1377 15.4824 24.0569 16.776 24.0827C15.534 25.1312 13.9692 25.5996 12.402 25.4006C13.7094 26.3031 15.2628 26.8296 16.9308 26.8296C22.416 26.8296 25.515 21.8417 25.3278 17.368C25.905 16.919 26.406 16.3589 26.802 15.7213Z"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="7.5"
                    stroke="white"
                    stroke-opacity="0.1"
                  />
                </svg>
              </div>
              <div></div>
            </div> */}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <span>© 2023 DDD, Inc.</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
