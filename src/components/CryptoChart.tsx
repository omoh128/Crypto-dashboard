import React from "react";
import { Line} from "react-chartjs-2";
import { ChartOptions } from 'chart.js';


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

const CryptoChart: React.FC<Props> = ({ cryptoData, }: Props) => {
  const chartData = {
    labels: cryptoData.map((crypto) => crypto.name),
    datasets: [
      {
        label: "Price (USD)",
        data: cryptoData.map((crypto) => crypto.price),
        backgroundColor: "#3f51b5",
        borderColor: "#3f51b5",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Market Cap (USD)",
        data: cryptoData.map((crypto) => crypto.marketCap),
        backgroundColor: "#f50057",
        borderColor: "#f50057",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Price Change (24h)",
        data: cryptoData.map((crypto) => crypto.priceChange24h),
        backgroundColor: "#ff9800",
        borderColor: "#ff9800",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const chartOptions: ChartOptions<'line'> ={
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Crypto Chart",
        font: { size: 20 },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#bdbdbd",
        },
        ticks: {
            callback: (value: string | number) => `${value}$`,
          },
      },
    },
  };

  return (
    <div className="crypto-chart">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default CryptoChart;
