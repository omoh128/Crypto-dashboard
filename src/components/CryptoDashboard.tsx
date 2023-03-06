import React, { useState, useEffect } from "react";
import CryptoChart from "./CryptoChart";
import CryptoTable from "./ CryptoTable";
import "./CryptoDashboard.css";

type Crypto = {
  name: string;
  symbol: string;
  marketCap: number;
  price: number;
  priceChange24h: number;
};

const CryptoDashboard: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coincap.io/v2/assets?limit=10"
        );
        const { data } = await response.json();
        const formattedData = data.map((crypto: any) => ({
          name: crypto.name,
          symbol: crypto.symbol,
          marketCap: parseFloat(crypto.marketCapUsd),
          price: parseFloat(crypto.priceUsd),
          priceChange24h: parseFloat(crypto.changePercent24Hr),
        }));
        setCryptoData(formattedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="crypto-dashboard">
      <h1>Crypto Dashboard</h1>
      <CryptoChart cryptoData={cryptoData} />
      <CryptoTable cryptoData={cryptoData} />
    </div>
  );
};

export default CryptoDashboard;
