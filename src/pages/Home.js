import React from "react";
import styles from "../assets/styles/home.module.scss";
import myteam from "../assets/images/myteam.jpg";
import photosnap from "../assets/images/photosnap.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import dine from "../assets/images/dine.jpg";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.lhs}>
          <h2>
            Oyinloluwa <span>Balogun</span>
          </h2>
          <p>FRONTEND DEVELOPER.</p>
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
      <section className={styles.projects} id="projects">
        <h5>My Projects</h5>
        <div className={styles.projectsWrapper}>
          <div className={styles.project}>
            <img src={myteam} alt="My-Team" />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <p>My Team</p>
                <hr className={styles.line} />
                <span>Visit Site</span>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img src={photosnap} alt="Photosnap" />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <p>Photosnap</p>
                <hr className={styles.line} />
                <span>Visit Site</span>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img src={portfolio} alt="Portfolio" />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <p>Minimalist Portfolio</p>
                <hr className={styles.line} />
                <span>Visit Site</span>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img src={dine} alt="Dine" />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <p>Dine</p>
                <hr className={styles.line} />
                <span>Visit Site</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
