import React from "react";
import styles from "../assets/styles/home.module.scss";

import profile from "../assets/images/Oyinloluwa.jpg";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.lhs}>
          <h2>
            Oyinloluwa
            <br /> <span>Balogun</span>
          </h2>
          <p>
            FRONTEND DEVELOPER<span>.</span>
          </p>
        </div>
        <div className={styles.rhs}>
          <div>
            <img src={profile} alt="Oyinloluwa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
