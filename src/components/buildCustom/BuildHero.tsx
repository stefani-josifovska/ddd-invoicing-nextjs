import classes from "@/styles/Hero.module.scss";
import Hero from "../UI/Hero";

const BuildHero: React.FC<{}> = () => {
  return (
    <section className={`${classes["hero-container"]} text-white`}>
      <Hero
        title="Building your own invoicing solution?"
        text="We offer more than 20 APIs with which we help you build an invoicing solution with incredibly short time-to-market."
        picture={false}
      />
    </section>
  );
};

export default BuildHero;
