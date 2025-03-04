import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Zap, Navigation } from 'lucide-react';
import NavBar from '../components/NavBar';
import MapComponent from '../components/MapComponent';

const TripPlanner: React.FC = () => {
  const [fromLocation, setFromLocation] = useState('Current Location');
  const [toLocation, setToLocation] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (toLocation) {
      setShowResults(true);
    }
  };
  
  // Dummy charging stations data
  const chargingStations = [
    {
      id: 1,
      name: 'EV Power Station',
      distance: '1.2 km',
      availability: 'Available (3/5)',
      rating: 4.5
    },
    {
      id: 2,
      name: 'GreenCharge Hub',
      distance: '2.8 km',
      availability: 'Available (1/3)',
      rating: 4.2
    },
    {
      id: 3,
      name: 'ElectroFill Station',
      distance: '3.5 km',
      availability: 'Busy (0/2)',
      rating: 4.7
    }
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Trip Planner</h1>
        
        <form onSubmit={handleSearch} className="mb-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-4">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 p-2 rounded-full mr-3">
                <MapPin size={16} className="text-white" />
              </div>
              <input
                type="text"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="bg-transparent border-b border-white/30 w-full py-2 text-white focus:outline-none focus:border-secondary-400"
                placeholder="From"
              />
            </div>
            
            <div className="flex items-center">
              <div className="bg-secondary-600 p-2 rounded-full mr-3">
                <Navigation size={16} className="text-white" />
              </div>
              <input
                type="text"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                className="bg-transparent border-b border-white/30 w-full py-2 text-white focus:outline-none focus:border-secondary-400"
                placeholder="To"
                required
              />
            </div>
          </div>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-secondary-600 text-white py-3 rounded-lg flex items-center justify-center"
          >
            <Search size={18} className="mr-2" />
            Plan Trip
          </motion.button>
        </form>
        
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MapComponent type="trip" />
            
            <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-2">Trip Details</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Distance:</span>
                  <span className="font-medium">12.5 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Estimated Time:</span>
                  <span className="font-medium">35 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Battery Usage:</span>
                  <span className="font-medium">~25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Arrival Battery:</span>
                  <span className="font-medium text-secondary-300">~53%</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-lg font-semibold mt-6 mb-3">Charging Stations on Route</h2>
            
            <div className="space-y-4">
              {chargingStations.map(station => (
                <div key={station.id} className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-primary-600 p-2 rounded-full mr-3 mt-1">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{station.name}</h3>
                        <span className="text-sm text-white/70">{station.distance}</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm text-white/70">{station.availability}</span>
                        <span className="text-sm text-secondary-300">★ {station.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      
      <NavBar mode="self" />
    </div>
  );
};

export default TripPlanner;