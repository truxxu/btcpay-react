import { useState } from "react";

import styles from "./Welcome.module.scss";
import head from "../images/head.jpg";
import { Button, Marquee, Price } from "../atoms";

const marqueeText = "no gods, no countries, no masters";

const Welcome = () => {
  const [sats, setSats] = useState(100);

  const increaseSats = () => setSats(sats + 100);

  return (
    <>
      <img src={head} alt="head" />
      <h1 className={styles.title}>Crypto Payments</h1>
      <Marquee text={marqueeText} />
      <Button text="+" action={increaseSats} />
      <Price sats={sats} rate={191000000} />
      <Button text="Pay now" />
    </>
  );
};

export { Welcome };
