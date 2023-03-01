import { useRef } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import classes from "@/styles/Home.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/homepage/IndexHero";
import Features from "@/components/homepage/Features";
import Countries from "@/components/homepage/Countries";
import Solution from "@/components/homepage/Solution";
import Integration from "@/components/homepage/Integration";
import Whyddd from "@/components/footer/Whyddd";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const heightRef = useRef(null);

  return (
    <>
      <Head>
        <title>DDDinvoices | Global e-invoicing compliance with 1 API</title>
        <meta
          name="description"
          content="Comply with local & global tax requirements with 1 API integration. Intergrate our e-invoicing API into ERP, SaaS or any software and get complete invoicing in just days! Send e-invoice to tax authorities and e-invoicing networks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="e-invoicing, invoicing, API, global e-invoicing, compliance, fiscalization, real-time reporting, saas, fintech, finance"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={classes.main}>
        <Navbar />
        <Hero />
        <Features />
        <Countries />
        <Solution />
        <Integration />
        <Whyddd />
        <Footer />
      </main>
    </>
  );
}
