// Rechart
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TBarChartComponentProps = {
  data: {
    _id: {
      month: number;
      year: number;
    };
    count: number;
    month: string;
    monthYear: string;
  }[];
};

const BarChartComponent = ({ data }: TBarChartComponentProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 30,
        }}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="monthYear" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
