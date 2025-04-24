import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartDataPoint {
  time: string;
  price: number;
}

interface Props {
  data: ChartDataPoint[];
  color?: string;
}

const CryptoLineChart: React.FC<Props> = ({ data, color = '#00b894' }) => {
  return (
    <div className="w-40 h-20">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis domain={['auto', 'auto']} hide />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e1e1e', border: 'none' }}
            labelStyle={{ color: '#fff' }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={color}
            strokeWidth={2}
            dot={false}
            animationDuration={200}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoLineChart;
