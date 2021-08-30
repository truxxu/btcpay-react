import React from "react";

import styles from "./Button.module.scss";

const Button = ({ text, action }) => {
  return (
    <div className={styles.container} onClick={action}>
      <p>{text}</p>
    </div>
  );
};

export { Button };
