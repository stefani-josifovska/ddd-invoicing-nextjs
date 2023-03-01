import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import classes from "@/styles/Navbar.module.scss";
import Link from "next/link";
import Buttons from "./Buttons";

const MobileMenu: React.FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuBtnClickHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div onClick={onMenuBtnClickHandler} style={{ width: "fit-content" }} className="d-flex align-items-center mt-2">
        {!isMenuOpen && <FiMenu className={classes["burger-icon"]} />}
      </div>
      {isMenuOpen && (
        <div className={classes["mobile-menu-container"]}>
          <FiX
            className={classes["mobile-menu-close-icon"]}
            onClick={onMenuBtnClickHandler}
          />
          <ul>
            <li>
              <Link href={"/e-invoicing-api-global-compliance"}>Product</Link>
            </li>
            <li>
              <Link href={"/e-invoicing-api-global-compliance"}>Build</Link>
            </li>
            <div className="d-flex align-items-center">
              <li>
                <Link href={"/e-invoicing-api-global-compliance"}>
                  API documentation
                </Link>
              </li>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ms-1"
              >
                <path
                  d="M4.56934 2.19971H2.16934C1.28568 2.19971 0.569336 2.91606 0.569336 3.79971V10.1998C0.569336 11.0834 1.28568 11.7998 2.16934 11.7998H8.5693C9.453 11.7998 10.1693 11.0834 10.1693 10.1998V7.79971"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="1.1"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.8241 1.9501L4.98828 6.60374L5.75102 7.39635L10.4194 2.90386L10.4195 6.2001L11.5195 6.20009L11.5194 1.40009V0.850098H10.9694H6.16946V1.9501H9.8241Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
            <Buttons />
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
