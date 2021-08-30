import React from "react";

import styles from "./Price.module.scss";

const Price = ({ sats, rate }) => {
  const convertToFiat = (rate, sats) => {
    const val = rate * 0.00000001 * sats;
    return val.toFixed();
  };

  return (
    <div className={styles.container}>
      <h1>
        {sats} sats ≈ ${convertToFiat(rate, sats)} COP
      </h1>
    </div>
  );
};

export { Price };
