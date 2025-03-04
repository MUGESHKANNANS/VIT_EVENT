import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Battery, BatteryCharging, BatteryWarning, Calendar } from 'lucide-react';
import NavBar from '../components/NavBar';
import BatteryGraph from '../components/BatteryGraph';
import { useLocation } from 'react-router-dom';

const BatteryHealth: React.FC = () => {
  const location = useLocation();
  const isParentMode = location.pathname.includes('parent');
  
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month'>('week');
  
  // Dummy data for battery statistics
  const dailyData = [
    { name: '12 AM', charge: 85, health: 92 },
    { name: '4 AM', charge: 82, health: 92 },
    { name: '8 AM', charge: 75, health: 91 },
    { name: '12 PM', charge: 65, health: 91 },
    { name: '4 PM', charge: 55, health: 90 },
    { name: '8 PM', charge: 70, health: 90 },
    { name: 'Now', charge: 78, health: 90 },
  ];
  
  const weeklyData = [
    { name: 'Mon', charge: 90, health: 93 },
    { name: 'Tue', charge: 75, health: 92 },
    { name: 'Wed', charge: 85, health: 92 },
    { name: 'Thu', charge: 70, health: 91 },
    { name: 'Fri', charge: 60, health: 91 },
    { name: 'Sat', charge: 80, health: 90 },
    { name: 'Sun', charge: 78, health: 90 },
  ];
  
  const monthlyData = [
    { name: 'Week 1', charge: 95, health: 95 },
    { name: 'Week 2', charge: 90, health: 94 },
    { name: 'Week 3', charge: 85, health: 92 },
    { name: 'Week 4', charge: 80, health: 90 },
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
        <h1 className="text-2xl font-bold mb-6 text-white">Battery Health</h1>
        
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
        
        <BatteryGraph data={getDataByTimeRange()} />
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Battery className="mr-2 text-secondary-300" size={20} />
              <h3 className="font-semibold">Current Charge</h3>
            </div>
            <p className="text-3xl font-bold text-secondary-300">78%</p>
            <p className="text-sm text-white/70">Estimated 42 km range</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <div className="flex items-center mb-2">
              <BatteryWarning className="mr-2 text-secondary-300" size={20} />
              <h3 className="font-semibold">Battery Health</h3>
            </div>
            <p className="text-3xl font-bold text-secondary-300">90%</p>
            <p className="text-sm text-white/70">Good condition</p>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center mb-2">
            <BatteryCharging className="mr-2 text-secondary-300" size={20} />
            <h3 className="font-semibold">Charging History</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-white/70" />
                <span>Today, 9:30 PM</span>
              </div>
              <span className="text-secondary-300">78%</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-white/70" />
                <span>Yesterday, 10:15 PM</span>
              </div>
              <span className="text-secondary-300">100%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-white/70" />
                <span>2 days ago, 8:45 PM</span>
              </div>
              <span className="text-secondary-300">95%</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4">
          <h3 className="font-semibold mb-2">Battery Tips</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start">
              <span className="text-secondary-300 mr-2">•</span>
              <span>Charge your battery when it reaches 20% for optimal battery life</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-300 mr-2">•</span>
              <span>Avoid exposing your bike to extreme temperatures</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-300 mr-2">•</span>
              <span>Schedule a battery check-up every 6 months</span>
            </li>
          </ul>
        </div>
      </div>
      
      <NavBar mode={isParentMode ? 'parent' : 'self'} />
    </div>
  );
};

export default BatteryHealth;