import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import { StateContextProvider } from "@/context";
import NonSSRWrapper from "@/components/NoSSR";
import { Analytics } from "@vercel/analytics/react";

export function Home() {
  return (
    <div>
      <Head>
        <title>Pantheon 2023 | BIT MESRA</title>
      </Head>
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <NonSSRWrapper>
      <StateContextProvider>
        <Navbar />
        <Home />
        <Component {...pageProps} />
        <Analytics />
      </StateContextProvider>
    </NonSSRWrapper>
  );
}
