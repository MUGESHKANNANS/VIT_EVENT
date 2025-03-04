import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Clock, MapPin, Bell, Gauge, AlertTriangle } from 'lucide-react';
import NavBar from '../components/NavBar';

const ParentalControls: React.FC = () => {
  const [remoteLockEnabled, setRemoteLockEnabled] = useState(true);
  const [speedLimitEnabled, setSpeedLimitEnabled] = useState(true);
  const [maxSpeed, setMaxSpeed] = useState(20);
  const [geofencingEnabled, setGeofencingEnabled] = useState(true);
  const [curfewEnabled, setCurfewEnabled] = useState(true);
  const [curfewStart, setCurfewStart] = useState('21:00');
  const [curfewEnd, setCurfewEnd] = useState('07:00');
  
  // Alert settings
  const [alertSettings, setAlertSettings] = useState({
    speedExceeded: true,
    boundaryViolation: true,
    curfewViolation: true,
    lowBattery: true,
    unauthorized: true
  });
  
  const toggleAlertSetting = (setting: keyof typeof alertSettings) => {
    setAlertSettings({
      ...alertSettings,
      [setting]: !alertSettings[setting]
    });
  };
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Parental Controls</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <Lock className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Remote Lock & Disable</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Remote Lock</p>
                <p className="text-xs text-white/70">Lock the bike remotely to prevent unauthorized use</p>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${remoteLockEnabled ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setRemoteLockEnabled(!remoteLockEnabled)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: remoteLockEnabled ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-lg flex items-center justify-center ${
                remoteLockEnabled ? 'bg-secondary-600 text-white' : 'bg-white/10 text-white/50'
              }`}
              disabled={!remoteLockEnabled}
            >
              <Lock size={18} className="mr-2" />
              Lock Bike Now
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-lg flex items-center justify-center ${
                remoteLockEnabled ? 'bg-red-500/80 text-white' : 'bg-white/10 text-white/50'
              }`}
              disabled={!remoteLockEnabled}
            >
              <AlertTriangle size={18} className="mr-2" />
              Emergency Disable
            </motion.button>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <Gauge className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Speed Limiting</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Speed Limit</p>
                <p className="text-xs text-white/70">Restrict maximum speed of the bike</p>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${speedLimitEnabled ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setSpeedLimitEnabled(!speedLimitEnabled)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: speedLimitEnabled ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span>Maximum Speed</span>
                <span className="text-secondary-300 font-bold">{maxSpeed} km/h</span>
              </div>
              <input
                type="range"
                min="10"
                max="30"
                step="1"
                value={maxSpeed}
                onChange={(e) => setMaxSpeed(parseInt(e.target.value))}
                className="w-full"
                disabled={!speedLimitEnabled}
              />
              <div className="flex justify-between text-xs text-white/70">
                <span>10 km/h</span>
                <span>20 km/h</span>
                <span>30 km/h</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <MapPin className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Geofencing</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Geofencing Controls</p>
                <p className="text-xs text-white/70">Restrict bike usage to defined areas</p>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${geofencingEnabled ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setGeofencingEnabled(!geofencingEnabled)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: geofencingEnabled ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-lg flex items-center justify-center ${
                geofencingEnabled ? 'bg-secondary-600 text-white' : 'bg-white/10 text-white/50'
              }`}
              disabled={!geofencingEnabled}
              onClick={() => window.location.href = '/set-boundaries'}
            >
              <MapPin size={18} className="mr-2" />
              Configure Safe Zones
            </motion.button>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <Clock className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Curfew Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Curfew Restrictions</p>
                <p className="text-xs text-white/70">Prevent bike usage during specific hours</p>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${curfewEnabled ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setCurfewEnabled(!curfewEnabled)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: curfewEnabled ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Curfew Start</label>
                <input
                  type="time"
                  value={curfewStart}
                  onChange={(e) => setCurfewStart(e.target.value)}
                  className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  disabled={!curfewEnabled}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Curfew End</label>
                <input
                  type="time"
                  value={curfewEnd}
                  onChange={(e) => setCurfewEnd(e.target.value)}
                  className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  disabled={!curfewEnabled}
                />
              </div>
            </div>
            
            <p className="text-sm text-white/70 bg-white/5 p-3 rounded-lg">
              {curfewEnabled 
                ? `Bike will be locked from ${curfewStart} to ${curfewEnd} daily.`
                : 'Curfew restrictions are currently disabled.'}
            </p>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Bell className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Alert Configuration</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Speed limit exceeded</span>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${alertSettings.speedExceeded ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => toggleAlertSetting('speedExceeded')}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: alertSettings.speedExceeded ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="flex justify-between items-center">
              <span>Boundary violation</span>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${alertSettings.boundaryViolation ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => toggleAlertSetting('boundaryViolation')}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: alertSettings.boundaryViolation ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="flex justify-between items-center">
              <span>Curfew violation</span>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${alertSettings.curfewViolation ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => toggleAlertSetting('curfewViolation')}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: alertSettings.curfewViolation ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="flex justify-between items-center">
              <span>Low battery warning</span>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${alertSettings.lowBattery ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => toggleAlertSetting('lowBattery')}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: alertSettings.lowBattery ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="flex justify-between items-center">
              <span>Unauthorized movement</span>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${alertSettings.unauthorized ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => toggleAlertSetting('unauthorized')}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: alertSettings.unauthorized ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <NavBar mode="parent" />
    </div>
  );
};

export default ParentalControls;