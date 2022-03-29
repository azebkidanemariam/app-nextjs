import React from "react";
import NextImage from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.container_one}>
          <text className={styles.text_one}>Skaffa 24gossip</text>

          <text className={styles.text_two}>
            Gå med nu och få 30 dagara grattis och efter det för en kostnad på
            99 kr / Månaden
          </text>
          <button className={styles.button} type="button">
            SKAFFA 24GOSSIP
          </button>
        </div>
        <div className={styles.container_two}>
          <NextImage src="/iphone.png" width={400} height={300} />
        </div>
      </main>
    </div>
  );
};
export default Home;
