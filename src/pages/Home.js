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
            <li className={styles.social}>
              <a href="https://github.com/OyinloluB">Github</a>
            </li>
            <li className={styles.social}>
              <a href="https://www.linkedin.com/in/oyinlolu/">LinkedIn</a>
            </li>
            <li className={styles.social}>
              <a href="https://docs.google.com/document/d/1gYl59EVwXHylCZmlyoTQm3oztqe4Fb2_hbxmYX-pX3I/edit?usp=sharing">Resume</a>
            </li>
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
                <span>
                  <a href="https://myteamfm.netlify.app/">Visit Site</a>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img src={photosnap} alt="Photosnap" />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <p>Photosnap</p>
                <hr className={styles.line} />
                <span>
                  <a href="https://photosnapped.netlify.app/">Visit Site</a>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img src={portfolio} alt="Portfolio" />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <p>Minimalist Portfolio</p>
                <hr className={styles.line} />
                <span>
                  <a href="https://minimalistportfolio.netlify.app/">
                    Visit Site
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <img src={dine} alt="Dine" />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <p>
                  Dine : <b>Work In Progress - View on Desktop</b>
                </p>
                <hr className={styles.line} />
                <span>
                  <a href="https://dine-website.netlify.app/">Visit Site</a>
                </span>
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
