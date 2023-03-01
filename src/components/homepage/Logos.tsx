import Image from "next/image";

const Logos: React.FC<{}> = () => {
  const imageNames = Array.from(
    { length: 10 },
    (_, i) => `clientLogo${i + 1}.png`
  );

  return (
    <section className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap w-100">
      {imageNames.map((imageName, index) => (
        <Image
          key={index}
          src={require(`@/assets/images/logos/${imageName}`).default}
          alt={`Client Logo ${index + 1}`}
        />
      ))}
    </section>
  );
};

export default Logos;
