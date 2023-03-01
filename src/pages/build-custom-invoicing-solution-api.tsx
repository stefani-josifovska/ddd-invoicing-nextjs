import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import BuildHero from "@/components/buildCustom/BuildHero";
import SectionOne from "@/components/buildCustom/SectionOne";
import SectionTwo from "@/components/buildCustom/SectionTwo";
import Whyddd from "@/components/footer/Whyddd";
import Footer from "@/components/footer/Footer";

const Build: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>DDDinvoices | APIs for building invoicing solutions</title>
        <meta
          name="description"
          content="Do you want to build your own invoicing? With our 20 pre-build APIs you can drastically shorten your time-to-market when creating your invoicing solution. Simply implement them into your software and you are good to go! From data to e-invoice to embedded UI options. "
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
        <BuildHero />
        <SectionOne />
        <SectionTwo />
        <Whyddd />
        <Footer />
      </main>
    </>
  );
};

export default Build;
