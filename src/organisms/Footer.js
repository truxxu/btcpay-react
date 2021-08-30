import React from "react";

import styles from "./Footer.module.scss";
import btc from "../images/btc.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>Powered by Bitcoin and Bitcoin over Lightning Network</p>
      <br />
      <img src={btc} alt="bitcoin lightning logo" />
    </div>
  );
};

export { Footer };
