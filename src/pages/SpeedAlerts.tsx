import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Gauge, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import NavBar from '../components/NavBar';

const SpeedAlerts: React.FC = () => {
  const [maxSpeed, setMaxSpeed] = useState(25);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  
  // Dummy speed alert history
  const alertHistory = [
    {
      id: 1,
      date: 'Today, 2:45 PM',
      speed: 32,
      location: 'Main Street',
      duration: '2 minutes'
    },
    {
      id: 2,
      date: 'Yesterday, 3:30 PM',
      speed: 28,
      location: 'Park Avenue',
      duration: '5 minutes'
    },
    {
      id: 3,
      date: '3 days ago, 5:15 PM',
      speed: 30,
      location: 'School Zone',
      duration: '3 minutes'
    }
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Speed Alerts</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Gauge className="mr-2 text-secondary-300" size={20} />
              <h2 className="text-lg font-semibold">Speed Limit Settings</h2>
            </div>
            <motion.div
              className={`w-12 h-6 rounded-full p-1 cursor-pointer ${alertsEnabled ? 'bg-secondary-500' : 'bg-white/20'}`}
              onClick={() => setAlertsEnabled(!alertsEnabled)}
            >
              <motion.div
                className="bg-white w-4 h-4 rounded-full"
                animate={{ x: alertsEnabled ? 24 : 0 }}
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
              max="40"
              step="1"
              value={maxSpeed}
              onChange={(e) => setMaxSpeed(parseInt(e.target.value))}
              className="w-full"
              disabled={!alertsEnabled}
            />
            <div className="flex justify-between text-xs text-white/70">
              <span>10 km/h</span>
              <span>25 km/h</span>
              <span>40 km/h</span>
            </div>
          </div>
          
          <p className="text-sm text-white/70 bg-white/5 p-3 rounded-lg">
            You will receive notifications when your child exceeds the set speed limit for more than 30 seconds.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <Bell className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Alert Preferences</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Push Notifications</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                Enabled
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>SMS Alerts</span>
              <div className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                Disabled
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Email Notifications</span>
              <div className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                Disabled
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Clock className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Speed Alert History</h2>
          </div>
          
          {alertHistory.length > 0 ? (
            <div className="space-y-4">
              {alertHistory.map(alert => (
                <div key={alert.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-start">
                    <div className="bg-red-500/50 p-2 rounded-full mr-3">
                      <AlertTriangle size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="font-medium">Speed Limit Exceeded</p>
                        <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                          {alert.date}
                        </span>
                      </div>
                      <div className="mt-2 space-y-1 text-sm">
                        <p><span className="text-white/70">Speed:</span> <span className="text-red-300">{alert.speed} km/h</span></p>
                        <p><span className="text-white/70">Location:</span> {alert.location}</p>
                        <p><span className="text-white/70">Duration:</span> {alert.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <CheckCircle size={48} className="text-secondary-300 mb-3" />
              <p className="text-center text-white/70">No speed alerts recorded</p>
            </div>
          )}
        </div>
      </div>
      
      <NavBar mode="parent" />
    </div>
  );
};

export default SpeedAlerts;