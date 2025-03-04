import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BatteryData {
  name: string;
  charge: number;
  health: number;
}

interface BatteryGraphProps {
  data: BatteryData[];
}

const BatteryGraph: React.FC<BatteryGraphProps> = ({ data }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">Battery Statistics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#6d28d9" opacity={0.2} />
          <XAxis dataKey="name" stroke="#f5f3ff" />
          <YAxis stroke="#f5f3ff" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(91, 33, 182, 0.8)', 
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="charge" 
            stroke="#a78bfa" 
            activeDot={{ r: 8 }} 
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="health" 
            stroke="#f0abfc" 
            strokeWidth={2} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BatteryGraph;