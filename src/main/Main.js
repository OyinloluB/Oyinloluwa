import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/layout/Navbar";
import styles from "./main.module.scss";

const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default Main;
