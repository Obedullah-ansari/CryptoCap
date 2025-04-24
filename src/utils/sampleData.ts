

export interface CryptoData {
  id: number;
  logo: string;
  name: string;
  symbol: string;
  price: number;
  percent_1h: number;
  percent_24h: number;
  percent_7d: number;
  market_cap: number;
  volume_24h: number;
  circulating_supply: number;
  max_supply: number | null;
  dummyData: { time: string; price: number }[];
}

const dummyData1 = [
  { time: "Day 1", price: 29750 },
  { time: "Day 2", price: 30100 },
  { time: "Day 3", price: 29800 },
  { time: "Day 4", price: 30350 },
  { time: "Day 5", price: 31000 },
  { time: "Day 6", price: 30700 },
  { time: "Day 7", price: 31200 },
];
const dummyData2 = [
  { time: "Day 1", price: 29750 },
  { time: "Day 2", price: 30100 },
  { time: "Day 3", price: 29000 },
  { time: "Day 4", price: 30350 },
  { time: "Day 5", price: 41000 },
  { time: "Day 6", price: 80700 },
  { time: "Day 7", price: 91200 },
];
const dummyData3 = [
  { time: "Day 1", price: 29750 },
  { time: "Day 2", price: 30100 },
  { time: "Day 3", price: 29800 },
  { time: "Day 4", price: 50350 },
  { time: "Day 5", price: 11000 },
  { time: "Day 6", price: 90700 },
  { time: "Day 7", price: 21200 },
];
const dummyData4 = [
  { time: "Day 1", price: 29750 },
  { time: "Day 2", price: 30100 },
  { time: "Day 3", price: 59800 },
  { time: "Day 4", price: 30350 },
  { time: "Day 5", price: 11000 },
  { time: "Day 6", price: 60700 },
  { time: "Day 7", price: 71200 },
];
const dummyData5 = [
  { time: "Day 1", price: 29750 },
  { time: "Day 2", price: 30100 },
  { time: "Day 3", price: 49800 },
  { time: "Day 4", price: 30350 },
  { time: "Day 5", price: 71000 },
  { time: "Day 6", price: 30700 },
  { time: "Day 7", price: 11200 },
];


export const sampleCryptoData: CryptoData[] = [
  {
    id: 1,
    logo: 'https://pngimg.com/d/bitcoin_PNG7.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 30000,
    percent_1h: 0.5,
    percent_24h: 1.2,
    percent_7d: 5.6,
    market_cap: 500000000000,
    volume_24h: 30000000000,
    circulating_supply: 19000000,
    max_supply: 21000000,
    dummyData: dummyData1,
  },
  {
    id: 2,
    logo: 'https://img.freepik.com/premium-vector/crypto-currency-metal-icon-ethereum-design_88343-10210.jpg?semt=ais_hybrid&w=740',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2000,
    percent_1h: -0.2,
    percent_24h: 0.8,
    percent_7d: 3.1,
    market_cap: 250000000000,
    volume_24h: 20000000000,
    circulating_supply: 120000000,
    max_supply:700000000,
    dummyData: dummyData2,
  },
  {
    id: 3,
    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/tether-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bitcoin-logo-crypto-coin-pack-logos-icons-8263860.png',
    name: 'Tether',
    symbol: 'USDT',
    price: 1,
    percent_1h: 0.01,
    percent_24h: -0.02,
    percent_7d: 0.1,
    market_cap: 83000000000,
    volume_24h: 50000000000,
    circulating_supply: 83000000000,
    max_supply: 500000000,
    dummyData: dummyData3,
  },
  {
    id: 4,
    logo: 'https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png',
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 250,
    percent_1h: 0.3,
    percent_24h: -0.5,
    percent_7d: 2.3,
    market_cap: 40000000000,
    volume_24h: 1200000000,
    circulating_supply: 160000000,
    max_supply: 200000000,
    dummyData: dummyData4,
  },
  {
    id: 5,
    logo: "https://img.freepik.com/premium-photo/3d-front-view-rendering-cryptocurrency-ripple-xrp-black-coin-with-cartoon-style_477250-74.jpg",
    name: 'XRP',
    symbol: 'XRP',
    price: 0.5,
    percent_1h: -0.1,
    percent_24h: 0.7,
    percent_7d: 1.9,
    market_cap: 27000000000,
    volume_24h: 1200000000,
    circulating_supply: 54000000000,
    max_supply: 100000000000,
    dummyData: dummyData5,
  },
];
