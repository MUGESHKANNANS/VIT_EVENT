import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Bell, MapPin, Eye, EyeOff, Smartphone } from 'lucide-react';
import NavBar from '../components/NavBar';

const SecuritySettings: React.FC = () => {
  const [alarmEnabled, setAlarmEnabled] = useState(true);
  const [locationTracking, setLocationTracking] = useState(true);
  const [motionDetection, setMotionDetection] = useState(true);
  const [remoteDisable, setRemoteDisable] = useState(false);
  const [pinLock, setPinLock] = useState('1234');
  const [showPin, setShowPin] = useState(false);
  const [mobileNotifications, setMobileNotifications] = useState(true);
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Security Settings</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <Shield className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Anti-Theft Protection</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell size={18} className="mr-2 text-white/70" />
                <div>
                  <p className="font-medium">Alarm System</p>
                  <p className="text-xs text-white/70">Trigger alarm when unauthorized movement is detected</p>
                </div>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${alarmEnabled ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setAlarmEnabled(!alarmEnabled)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: alarmEnabled ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-white/70" />
                <div>
                  <p className="font-medium">Location Tracking</p>
                  <p className="text-xs text-white/70">Track your bike's location in real-time</p>
                </div>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${locationTracking ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setLocationTracking(!locationTracking)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: locationTracking ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Smartphone size={18} className="mr-2 text-white/70" />
                <div>
                  <p className="font-medium">Mobile Notifications</p>
                  <p className="text-xs text-white/70">Receive alerts on your phone</p>
                </div>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${mobileNotifications ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setMobileNotifications(!mobileNotifications)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: mobileNotifications ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <Lock className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Access Control</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">PIN Lock</p>
              <div className="flex">
                <input
                  type={showPin ? "text" : "password"}
                  value={pinLock}
                  onChange={(e) => setPinLock(e.target.value)}
                  className="bg-white/10 rounded-l-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  maxLength={4}
                />
                <button
                  className="bg-primary-600 rounded-r-lg p-2"
                  onClick={() => setShowPin(!showPin)}
                >
                  {showPin ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-white/70 mt-1">4-digit PIN required to unlock your bike</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield size={18} className="mr-2 text-white/70" />
                <div>
                  <p className="font-medium">Motion Detection</p>
                  <p className="text-xs text-white/70">Alert when bike is moved while locked</p>
                </div>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${motionDetection ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setMotionDetection(!motionDetection)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: motionDetection ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Lock size={18} className="mr-2 text-white/70" />
                <div>
                  <p className="font-medium">Remote Disable</p>
                  <p className="text-xs text-white/70">Disable bike remotely if stolen</p>
                </div>
              </div>
              <motion.div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${remoteDisable ? 'bg-secondary-500' : 'bg-white/20'}`}
                onClick={() => setRemoteDisable(!remoteDisable)}
              >
                <motion.div
                  className="bg-white w-4 h-4 rounded-full"
                  animate={{ x: remoteDisable ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Shield className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Emergency Contacts</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span>Emergency Contact 1</span>
              <span className="text-secondary-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Emergency Contact 2</span>
              <span className="text-secondary-300">+1 (555) 987-6543</span>
            </div>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full mt-3 bg-white/10 text-white py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              Add Emergency Contact
            </motion.button>
          </div>
        </div>
      </div>
      
      <NavBar mode="self" />
    </div>
  );
};

export default SecuritySettings;