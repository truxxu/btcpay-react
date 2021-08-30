import { useState } from "react";

import bitPay from "../api/bitPay";

const useBitPay = () => {
  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getRate = async () => {
    try {
      const response = await bitPay.get("/rates/BTC/COP");
      setIsLoading(false);
      setResults(response.data.data.rate);
    } catch (error) {
      // setErrorMessage('Couldn\'t load resource');
      window.alert("Something happened, try again later");
      // setIsLoading(false);
    }
  };

  return [getRate, results, isLoading];
};

export { useBitPay };
