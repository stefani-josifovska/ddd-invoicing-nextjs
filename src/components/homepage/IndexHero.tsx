import classes from "@/styles/Hero.module.scss";
import Hero from "../UI/Hero";

const IndexHero: React.FC<{}> = () => {
  return (
    <section className={`${classes["hero-container"]} text-white`}>
      <Hero
        title="Global e-invoicing for your business"
        text="Integrate 1 API into your SaaS, ERP or invoicing softwares and instantly comply with local & global e-invoicing regulations."
        picture={true}
      />
    </section>
  );
};

export default IndexHero;
