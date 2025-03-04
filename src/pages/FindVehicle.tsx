import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Bell, Clock } from 'lucide-react';
import NavBar from '../components/NavBar';
import MapComponent from '../components/MapComponent';

const FindVehicle: React.FC = () => {
  const [isAlarmActive, setIsAlarmActive] = useState(false);
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Find My Vehicle</h1>
        
        <MapComponent type="tracking" />
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center"
            onClick={() => window.open('https://maps.google.com/?q=37.7749,-122.4194', '_blank')}
          >
            <Navigation size={24} className="mb-2 text-secondary-300" />
            <span>Navigate</span>
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`rounded-lg p-4 flex flex-col items-center ${
              isAlarmActive 
                ? 'bg-secondary-600 text-white' 
                : 'bg-white/10 backdrop-blur-md'
            }`}
            onClick={() => setIsAlarmActive(!isAlarmActive)}
          >
            <Bell size={24} className="mb-2 text-secondary-300" />
            <span>{isAlarmActive ? 'Stop Alarm' : 'Sound Alarm'}</span>
          </motion.button>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Vehicle Information</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-secondary-300" />
                <span className="text-white/70">Current Location</span>
              </div>
              <span>Downtown Plaza</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-secondary-300" />
                <span className="text-white/70">Last Updated</span>
              </div>
              <span>2 minutes ago</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Recent Locations</h2>
          
          <div className="space-y-3">
            <div className="flex items-start border-b border-white/10 pb-2">
              <div className="bg-primary-600 p-2 rounded-full mr-3 mt-1">
                <MapPin size={16} className="text-white" />
              </div>
              <div>
                <p className="font-medium">Downtown Plaza</p>
                <p className="text-sm text-white/70">Today, 3:45 PM</p>
              </div>
            </div>
            
            <div className="flex items-start border-b border-white/10 pb-2">
              <div className="bg-primary-600 p-2 rounded-full mr-3 mt-1">
                <MapPin size={16} className="text-white" />
              </div>
              <div>
                <p className="font-medium">Central Park</p>
                <p className="text-sm text-white/70">Today, 1:30 PM</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-600 p-2 rounded-full mr-3 mt-1">
                <MapPin size={16} className="text-white" />
              </div>
              <div>
                <p className="font-medium">Home</p>
                <p className="text-sm text-white/70">Today, 9:15 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <NavBar mode="self" />
    </div>
  );
};

export default FindVehicle;