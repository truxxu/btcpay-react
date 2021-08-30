import axios from "axios";

const btcPay = axios.create({
  baseURL: process.env.REACT_APP_BTCPAY_URL,
  timeout: 20000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${process.env.REACT_APP_BTCPAY_AUTH}`,
  },
});

export default btcPay;
