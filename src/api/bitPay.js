import axios from "axios";

const bitPay = axios.create({
  baseURL: "https://bitpay.com",
  headers: {
    "Content-Type": "application/json",
    "X-Accept-Version": "2.0.0",
  },
});

export default bitPay;
