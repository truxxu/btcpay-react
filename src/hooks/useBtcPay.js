import { useState } from "react";

import btcPay from "../api/btcPay";

const useBtcPay = () => {
  const [invoiceId, setInvoiceId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const generateInvoice = async (invoiceData) => {
    try {
      const response = await btcPay.post("/invoices", invoiceData);
      setIsLoading(false);
      setInvoiceId(response.data.data.id);
    } catch (error) {
      console.log(error);
      // setErrorMessage('Couldn\'t load resource');
      window.alert("Something happened, try again later");
      // setIsLoading(false);
    }
  };

  return [generateInvoice, invoiceId, isLoading];
};

export { useBtcPay };
