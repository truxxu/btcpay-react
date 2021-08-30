import { useState, useEffect } from "react";

import styles from "./Welcome.module.scss";
import head from "../images/head.jpg";
import useBitPay from "../hooks/useBitPay";
import { Button, Marquee, Price } from "../atoms";

const marqueeText = "no gods, no countries, no masters";

const Welcome = () => {
  const [sats, setSats] = useState(100);
  const [getRate, rate, isLoading] = useBitPay();

  const increaseSats = () => setSats(sats + 100);

  useEffect(() => {
    getRate();
  });

  return (
    <>
      <img src={head} alt="head" />
      <h1 className={styles.title}>Crypto Payments</h1>
      <Marquee text={marqueeText} />
      <Button text="+" action={increaseSats} />
      <Price sats={sats} rate={rate} isLoading={isLoading} />
      <Button text="Pay now" />
    </>
  );
};

export { Welcome };
