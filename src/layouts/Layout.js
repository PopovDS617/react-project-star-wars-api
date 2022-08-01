import React from "react";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation className={styles.header} />
      <main className={styles.main}>{props.children} </main>
      <Footer className={styles.footer} />
    </React.Fragment>
  );
};

export default Layout;
