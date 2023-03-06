import React from "react";

type Crypto = {
  name: string;
  symbol: string;
  marketCap: number;
  price: number;
  priceChange24h: number;
};

type Props = {
  cryptoData: Crypto[];
};

const CryptoTable: React.FC<Props> = ({ cryptoData }) => {
  return (
    <div className="crypto-table">
      <h2>Crypto Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>Price Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.symbol}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.marketCap.toLocaleString()}</td>
              <td>${crypto.price.toFixed(2)}</td>
              <td>{crypto.priceChange24h.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
