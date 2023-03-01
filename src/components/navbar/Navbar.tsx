import { useState, useEffect } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import styles from "@/styles/Navbar.module.scss";
import Logo from "./Logo";
import Menu from "./Menu";
import Buttons from "./Buttons";
import MobileMenu from "./MobileMenu";
import { Container, Row, Col } from "react-bootstrap";

const Navbar: React.FC<{}> = ({}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : undefined;

  const changeNavbarColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 43) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  return (
    <nav
      className={`${
        isScrolled ? styles.gradient : styles.container
      } d-flex justify-content-between align-items-center px-2 py-2`}
    >
      <Container>
        <Row>
          <Col className="mt-3 mt-md-0">
            <Logo />
          </Col>
          {!isMobile && (
            <>
              <Col className="d-flex align-items-center">
                <Menu />
              </Col>
              <Col className="d-flex align-items-center justify-content-end">
                <Buttons />
              </Col>
            </>
          )}
          {isMobile && <MobileMenu />}
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
