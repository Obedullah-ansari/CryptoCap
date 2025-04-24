import { useAppSelector } from "../hook";
import CryptoLineChart from "../components/CryptoLineChart";

const sampleChartData = [
  { time: "Day 1", price: 29750 },
  { time: "Day 2", price: 30100 },
  { time: "Day 3", price: 29800 },
  { time: "Day 4", price: 30350 },
  { time: "Day 5", price: 31000 },
  { time: "Day 6", price: 30700 },
  { time: "Day 7", price: 31200 },
];

const CryptoTable = () => {
  const crypto = useAppSelector((state) => state.crypto);

  return (
    <div className="w-full overflow-x-auto rounded-xl bg-white/5 backdrop-blur-lg border border-gray-200/10 shadow-2xl">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 text-gray-100">
            <th className="px-4 py-4 font-medium">#</th>
            <th className="px-4 py-4 font-medium">Logo</th>
            <th className="px-4 py-4 font-medium text-left">Name</th>
            <th className="px-4 py-4 font-medium">Symbol</th>
            <th className="px-4 py-4 font-medium text-right">Price</th>
            <th className="px-4 py-4 font-medium text-right">1h %</th>
            <th className="px-4 py-4 font-medium text-right">24h %</th>
            <th className="px-4 py-4 font-medium text-right">7d %</th>
            <th className="px-4 py-4 font-medium text-right">Market Cap</th>
            <th className="px-4 py-4 font-medium text-right">24h Volume</th>
            <th className="px-4 py-4 font-medium text-right">
              Circulating Supply
            </th>
            <th className="px-4 py-4 font-medium text-right">Max Supply</th>
            <th className="px-4 py-4 font-medium text-center">7D Chart</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700/30">
          {crypto.map((coin, i) => (
            <tr
              key={coin.id}
              className="transition-colors hover:bg-white/5 backdrop-blur-lg"
            >
              <td className="px-4 py-4 text-gray-300">{i + 1}</td>
              <td className="px-4 py-4">
                <div className="w-12 h-12 rounded-full bg-white/10 p-1 backdrop-blur-sm">
                  <img
                    src={coin.logo}
                    className="w-full h-full rounded-full object-contain"
                    alt={coin.symbol}
                  />
                </div>
              </td>
              <td className="px-4 py-4">
                <div>
                  <div className="font-medium text-gray-100">{coin.name}</div>
                  <div className="text-xs text-gray-400">{coin.symbol}</div>
                </div>
              </td>
              <td className="px-4 py-4 text-gray-300">{coin.symbol}</td>
              <td className="px-4 py-4 text-right font-medium text-gray-100">
                ${coin.price.toLocaleString()}
              </td>
              <td
                className={`px-4 py-4 text-right font-medium ${
                  coin.percent_1h >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {coin.percent_1h}%
              </td>
              <td
                className={`px-4 py-4 text-right font-medium ${
                  coin.percent_24h >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {coin.percent_24h}%
              </td>
              <td
                className={`px-4 py-4 text-right font-medium ${
                  coin.percent_7d >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {coin.percent_7d}%
              </td>
              <td className="px-4 py-4 text-right text-gray-300">
                ${coin.market_cap.toLocaleString()}
              </td>
              <td className="px-4 py-4 text-right text-gray-300">
                ${coin.volume_24h.toLocaleString()}
              </td>
              <td className="px-4 py-4 text-right text-gray-300">
                {coin.circulating_supply.toLocaleString()}
              </td>
              <td className="px-4 py-4 text-right text-gray-300">
                {coin.max_supply ? coin.max_supply.toLocaleString() : "∞"}
              </td>
              <td className="px-4 py-4">
                <div className="flex justify-center overflow-hidden object-cover">
                  <CryptoLineChart
                    data={sampleChartData}
                    color={coin.percent_7d >= 0 ? "#00b894" : "#d63031"}
                  ></CryptoLineChart>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
