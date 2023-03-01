import React from "react";
import classes from "@/styles/WhyCard.module.scss";

const WhyCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className={`${classes.container} text-center h-100 py-4 px-3`}>
      <h3 className={classes.title}>{title}</h3>
      <p className={`${classes.text} mt-4`}>{children}</p>
    </div>
  );
};

export default WhyCard;
