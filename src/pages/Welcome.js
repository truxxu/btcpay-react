import { useState, useEffect } from "react";

import styles from "./Welcome.module.scss";
import head from "../images/head.jpg";
import { useBitPay, useBtcPay } from "../hooks";
import { Button, Marquee, Price } from "../atoms";

const marqueeText = "no gods, no countries, no masters";

const Welcome = () => {
  const [sats, setSats] = useState(100);
  const [getRate, rate, isLoading] = useBitPay();
  const [generateInvoice, invoiceId, isGeneratingInvoice] = useBtcPay();

  useEffect(() => {
    getRate();
  });

  const increaseSats = () => setSats(sats + 100);

  const handlePayButton = () => {
    generateInvoice(invoiceData);
    window.btcpay.showInvoice(invoiceId);
  };

  const invoiceData = {
    price: sats,
    currency: "COP",
    orderId: "420",
    itemDesc: "item description",
    notificationUrl: "http://localhost:3000/success",
    redirectURL: "http://localhost:3000/success",
  };

  return (
    <>
      <img src={head} alt="head" />
      <h1 className={styles.title}>Crypto Payments</h1>
      <Marquee text={marqueeText} />
      <Button text="+" action={increaseSats} />
      <Price sats={sats} rate={rate} isLoading={isLoading} />
      <Button
        text={isGeneratingInvoice ? "Pay now" : "Processing..."}
        action={handlePayButton}
      />
    </>
  );
};

export { Welcome };
