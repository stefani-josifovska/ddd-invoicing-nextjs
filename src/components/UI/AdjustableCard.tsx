import classes from "@/styles/AdjustableCard.module.scss";

const AdjustableCard: React.FC<{
  key: string;
  icon: string;
  title: string;
  text: string;
}> = ({ icon, title, text }) => {
  return (
    <div className="text-center text-md-start mt-4">
      {icon}
      {/* <Image src={icon} alt="icon" /> */}
      <h3 className={`${classes.feature}`}>{title}</h3>
      <p className={classes.description}>{text}</p>
    </div>
  );
};

export default AdjustableCard;
