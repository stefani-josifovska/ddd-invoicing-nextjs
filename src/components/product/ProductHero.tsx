import classes from "@/styles/Hero.module.scss";
import Hero from "../UI/Hero";

const ProductHero: React.FC<{}> = () => {
  return (
    <section className={`${classes["hero-container"]} text-white`}>
      <Hero
        title="1 API for all invoicing requirements"
        text="Integrate our API to send us invoice data. We create a compliant e-invoice, deliver it globally and store it on our secured cloud."
        picture={true}
      />
    </section>
  );
};

export default ProductHero;
