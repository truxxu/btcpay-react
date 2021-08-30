import React from "react";

import styles from "./Marquee.module.scss";

const Marquee = ({ text }) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
    </div>
  );
};

export { Marquee };
