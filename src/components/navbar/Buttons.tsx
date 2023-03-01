import styles from "@/styles/Buttons.module.scss";
import { InlineWidget } from "react-calendly";

const Buttons: React.FC<{}> = () => {
  return (
    <div className="d-flex d-md-block flex-column gap-4 mt-4 mt-md-0">
      <button className={styles["contact-btn"]}>
        Talk to us
      </button>
      <button className={styles["login-btn"]}>Login</button>
    </div>
  );
};

export default Buttons;
