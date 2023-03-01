import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import classes from "@/styles/ComingSoon.module.scss";

const Documentation: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>DDDinvoices | Global e-invoicing API documentation</title>
        <meta
          name="description"
          content="Read through the API documentation for global & local e-invoicing, invoicing, fiscalization ability. Due to jncredibly simple integration you can comply to most of global standards in just a few days."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="e-invoicing, invoicing, API, global e-invoicing, compliance, fiscalization, real-time reporting, saas, fintech, finance"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <Navbar />
        <section className={classes.container}>
          <h2>Coming soon...</h2>
        </section>
      </main>
    </>
  );
};

export default Documentation;
