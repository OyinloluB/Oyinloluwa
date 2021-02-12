import React from "react";
import styles from "../assets/styles/home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.lhs}>
          <h2>
            Oyinloluwa <span>Balogun</span>
          </h2>
          <p>
            FRONTEND DEVELOPER<span>.</span>
          </p>
          <ul>
            <li className={styles.social}>Github</li>
            <li className={styles.social}>LinkedIn</li>
          </ul>
        </div>
        <div className={styles.rhs}>
          <div className={styles.me}></div>
          <div className={styles.outline}></div>
        </div>
      </section>
      <section className={styles.projects}>
        <h5>My Projects</h5>
      </section>
    </div>
  );
};

export default Home;
