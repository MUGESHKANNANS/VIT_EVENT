import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Gauge, Activity, Calendar } from 'lucide-react';
import NavBar from '../components/NavBar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformanceStats: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month'>('week');
  
  // Dummy data for performance statistics
  const dailyData = [
    { name: '12 AM', speed: 0, distance: 0 },
    { name: '4 AM', speed: 0, distance: 0 },
    { name: '8 AM', speed: 25, distance: 5 },
    { name: '12 PM', speed: 18, distance: 8 },
    { name: '4 PM', speed: 22, distance: 12 },
    { name: '8 PM', speed: 15, distance: 15 },
    { name: 'Now', speed: 0, distance: 18 },
  ];
  
  const weeklyData = [
    { name: 'Mon', speed: 20, distance: 12 },
    { name: 'Tue', speed: 18, distance: 10 },
    { name: 'Wed', speed: 22, distance: 15 },
    { name: 'Thu', speed: 19, distance: 11 },
    { name: 'Fri', speed: 23, distance: 16 },
    { name: 'Sat', speed: 25, distance: 20 },
    { name: 'Sun', speed: 21, distance: 14 },
  ];
  
  const monthlyData = [
    { name: 'Week 1', speed: 21, distance: 75 },
    { name: 'Week 2', speed: 19, distance: 68 },
    { name: 'Week 3', speed: 22, distance: 82 },
    { name: 'Week 4', speed: 20, distance: 70 },
  ];
  
  const getDataByTimeRange = () => {
    switch (timeRange) {
      case 'day':
        return dailyData;
      case 'week':
        return weeklyData;
      case 'month':
        return monthlyData;
      default:
        return weeklyData;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Performance Stats</h1>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg text-center cursor-pointer ${
              timeRange === 'day' 
                ? 'bg-secondary-600 text-white' 
                : 'bg-white/10 text-white/70'
            }`}
            onClick={() => setTimeRange('day')}
          >
            Day
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg text-center cursor-pointer ${
              timeRange === 'week' 
                ? 'bg-secondary-600 text-white' 
                : 'bg-white/10 text-white/70'
            }`}
            onClick={() => setTimeRange('week')}
          >
            Week
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg text-center cursor-pointer ${
              timeRange === 'month' 
                ? 'bg-secondary-600 text-white' 
                : 'bg-white/10 text-white/70'
            }`}
            onClick={() => setTimeRange('month')}
          >
            Month
          </motion.div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={getDataByTimeRange()}
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
                dataKey="speed" 
                stroke="#a78bfa" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
                name="Avg. Speed (km/h)"
              />
              <Line 
                type="monotone" 
                dataKey="distance" 
                stroke="#f0abfc" 
                strokeWidth={2}
                name="Distance (km)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Gauge className="mr-2 text-secondary-300" size={20} />
              <h3 className="font-semibold">Top Speed</h3>
            </div>
            <p className="text-3xl font-bold text-secondary-300">32 km/h</p>
            <p className="text-sm text-white/70">Achieved yesterday</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Activity className="mr-2 text-secondary-300" size={20} />
              <h3 className="font-semibold">Avg. Speed</h3>
            </div>
            <p className="text-3xl font-bold text-secondary-300">21 km/h</p>
            <p className="text-sm text-white/70">This week</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Zap className="mr-2 text-secondary-300" size={20} />
              <h3 className="font-semibold">Total Distance</h3>
            </div>
            <p className="text-3xl font-bold text-secondary-300">1,245 km</p>
            <p className="text-sm text-white/70">Lifetime</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Clock className="mr-2 text-secondary-300" size={20} />
              <h3 className="font-semibold">Riding Time</h3>
            </div>
            <p className="text-3xl font-bold text-secondary-300">68 hrs</p>
            <p className="text-sm text-white/70">Lifetime</p>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Calendar className="mr-2 text-secondary-300" size={20} />
            <h3 className="font-semibold">Recent Rides</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span>Today</span>
              <div className="text-right">
                <span className="block text-secondary-300">18 km</span>
                <span className="text-sm text-white/70">Avg: 19 km/h</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span>Yesterday</span>
              <div className="text-right">
                <span className="block text-secondary-300">20 km</span>
                <span className="text-sm text-white/70">Avg: 25 km/h</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>2 days ago</span>
              <div className="text-right">
                <span className="block text-secondary-300">15 km</span>
                <span className="text-sm text-white/70">Avg: 22 km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <NavBar mode="self" />
    </div>
  );
};

export default PerformanceStats;