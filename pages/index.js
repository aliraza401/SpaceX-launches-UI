import { Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";

import Head from "next/head";
import useSpaceXLaunches from "@/hooks/useSpaceXLaunches";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import LaunchList from "@/components/LaunchList";
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400"] });

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <Head>
        <title>Space X Launch Tracker</title>
        <meta name="description" content="Space X mission launch tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <QueryClientProvider client={queryClient}>
        <main className={`${styles.main} ${roboto.className}`}>
          <LaunchList />
        </main>
      </QueryClientProvider>
    </>
  );
}
