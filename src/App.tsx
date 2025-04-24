import { useEffect } from "react";
import { useAppDispatch } from "./hook";
import { updateCryptoPrices } from "./features/cryptoSlice";
import { sampleCryptoData } from "./utils/sampleData";
import CryptoTable from "./components/CryptoTable";

function randomizeData() {
  return sampleCryptoData.map((coin) => ({
    ...coin,
    price: +(coin.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2),
    percent_1h: +(coin.percent_1h + (Math.random() - 0.5)).toFixed(2),
    percent_24h: +(coin.percent_24h + (Math.random() - 0.5)).toFixed(2),
    volume_24h: coin.volume_24h + Math.floor((Math.random() - 0.5) * 1e8),
  }));
}

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCryptoPrices(randomizeData()));
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-4">
      <h1 className="text-[3rem] font-medium mb-4 text-center bg-gradient-to-r from-pink-400 via-neutral-200 to-indigo-500 bg-clip-text text-transparent">
        Crypto Tracker
      </h1>
      <CryptoTable />
    </div>
  );
};

export default App;
