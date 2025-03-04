import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Moon, Sun, Bell, Smartphone, Zap, Sliders } from 'lucide-react';
import NavBar from '../components/NavBar';
import { useLocation } from 'react-router-dom';

const Preferences: React.FC = () => {
  const location = useLocation();
  const isParentMode = location.pathname.includes('parent');
  
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [dataSync, setDataSync] = useState(true);
  const [powerMode, setPowerMode] = useState<'eco' | 'balanced' | 'performance'>('balanced');
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Preferences</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <Settings className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">App Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Moon size={18} className="mr-2 text-white/70" />
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-xs text-white/70">Use dark theme for the app</p>
                </div>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${darkMode ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setDarkMode(!darkMode)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: darkMode ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell size={18} className="mr-2 text-white/70" />
                <div>
                  <p className="font-medium">Notifications</p>
                  <p className="text-xs text-white/70">Enable push notifications</p>
                </div>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${notifications ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setNotifications(!notifications)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: notifications ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Smartphone size={18} className="mr-2 text-white/70" />
                <div>
                  <p className="font-medium">Sound Effects</p>
                  <p className="text-xs text-white/70">Enable app sound effects</p>
                </div>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${soundEffects ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setSoundEffects(!soundEffects)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: soundEffects ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Smartphone size={18} className="mr-2 text-white/70" />
                <div>
                  <p className="font-medium">Background Data Sync</p>
                  <p className="text-xs text-white/70">Sync data when app is in background</p>
                </div>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${dataSync ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setDataSync(!dataSync)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: dataSync ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <Zap className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Bike Power Mode</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg text-center cursor-pointer ${
                powerMode === 'eco' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white/10 text-white/70'
              }`}
              onClick={() => setPowerMode('eco')}
            >
              <p className="font-medium">Eco</p>
              <p className="text-xs mt-1">Max Range</p>
            </motion.div>
            
            <motion.div
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg text-center cursor-pointer ${
                powerMode === 'balanced' 
                  ? 'bg-secondary-600 text-white' 
                  : 'bg-white/10 text-white/70'
              }`}
              onClick={() => setPowerMode('balanced')}
            >
              <p className="font-medium">Balanced</p>
              <p className="text-xs mt-1">Default</p>
            </motion.div>
            
            <motion.div
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg text-center cursor-pointer ${
                powerMode === 'performance' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white/10 text-white/70'
              }`}
              onClick={() => setPowerMode('performance')}
            >
              <p className="font-medium">Sport</p>
              <p className="text-xs mt-1">Max Power</p>
            </motion.div>
          </div>
          
          <div className="bg-white/5 p-3 rounded-lg">
            <p className="text-sm">
              {powerMode === 'eco' && 'Eco mode maximizes battery life but reduces power. Best for long trips.'}
              {powerMode === 'balanced' && 'Balanced mode provides a good mix of power and range for everyday use.'}
              {powerMode === 'performance' && 'Sport mode delivers maximum power and speed but drains battery faster.'}
            </p>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Sliders className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Display Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Distance Unit</label>
              <select className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400">
                <option value="km">Kilometers (km)</option>
                <option value="mi">Miles (mi)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-1">Temperature Unit</label>
              <select className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400">
                <option value="c">Celsius (°C)</option>
                <option value="f">Fahrenheit (°F)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-1">Time Format</label>
              <select className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400">
                <option value="24h">24-hour</option>
                <option value="12h">12-hour (AM/PM)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <NavBar mode={isParentMode ? 'parent' : 'self'} />
    </div>
  );
};

export default Preferences;