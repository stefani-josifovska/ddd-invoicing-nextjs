import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import ProductHero from "@/components/product/ProductHero";
import GetStarted from "@/components/product/GetStarted";
import Ability from "@/components/product/Ability";
import Hidden from "@/components/product/Hidden";
import Adjustable from "@/components/product/Adjustable";
import Whyddd from "@/components/footer/Whyddd";
import Footer from "@/components/footer/Footer";

const Transformers: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>DDDinvoices | 1 API for all invoicing requirements</title>
        <meta
          name="description"
          content="Our invoicing API integration will enable your software to create and send e-invoices according to local and global tax requirements. Securely store & manage e-invoices in a cloud. Embed our white-label UI to shorten your time-to-market."
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
        <ProductHero />
        <GetStarted />
        <Ability />
        <Hidden />
        <Adjustable />
        <Whyddd />
        <Footer />
      </main>
    </>
  );
};

export default Transformers;
