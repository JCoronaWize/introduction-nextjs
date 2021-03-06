import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Introduction to Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome User</h1>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>Go To Home &rarr;</h2>
            <p>Home Page</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
