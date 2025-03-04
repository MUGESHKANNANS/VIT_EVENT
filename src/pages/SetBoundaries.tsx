import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Plus, Home, School, Building, Trash2 } from 'lucide-react';
import NavBar from '../components/NavBar';
import MapComponent from '../components/MapComponent';

const SetBoundaries: React.FC = () => {
  const [boundaries, setBoundaries] = useState([
    { id: 1, name: 'Home', radius: 500, active: true, icon: Home },
    { id: 2, name: 'School', radius: 300, active: true, icon: School },
    { id: 3, name: 'Grandparents', radius: 400, active: false, icon: Building }
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBoundaryName, setNewBoundaryName] = useState('');
  const [newBoundaryRadius, setNewBoundaryRadius] = useState(300);
  
  const toggleBoundary = (id: number) => {
    setBoundaries(boundaries.map(boundary => 
      boundary.id === id ? { ...boundary, active: !boundary.active } : boundary
    ));
  };
  
  const deleteBoundary = (id: number) => {
    setBoundaries(boundaries.filter(boundary => boundary.id !== id));
  };
  
  const handleAddBoundary = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBoundaryName) {
      const newBoundary = {
        id: Date.now(),
        name: newBoundaryName,
        radius: newBoundaryRadius,
        active: true,
        icon: Building
      };
      setBoundaries([...boundaries, newBoundary]);
      setNewBoundaryName('');
      setNewBoundaryRadius(300);
      setShowAddForm(false);
    }
  };
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Set Boundaries</h1>
        
        <MapComponent type="tracking" />
        
        <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Shield className="mr-2 text-secondary-300" size={20} />
              <h2 className="text-lg font-semibold">Safe Zones</h2>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-600 text-white p-2 rounded-full"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              <Plus size={20} />
            </motion.button>
          </div>
          
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 rounded-lg p-4 mb-4"
            >
              <form onSubmit={handleAddBoundary}>
                <div className="mb-3">
                  <label className="block text-sm mb-1">Zone Name</label>
                  <input
                    type="text"
                    value={newBoundaryName}
                    onChange={(e) => setNewBoundaryName(e.target.value)}
                    className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                    placeholder="e.g. Park, Friend's House"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm mb-1">Radius (meters)</label>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={newBoundaryRadius}
                    onChange={(e) => setNewBoundaryRadius(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-white/70">
                    <span>100m</span>
                    <span>{newBoundaryRadius}m</span>
                    <span>1000m</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="flex-1 bg-secondary-600 text-white py-2 rounded-lg"
                  >
                    Add Zone
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="bg-white/10 text-white py-2 px-4 rounded-lg"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
          
          <div className="space-y-3">
            {boundaries.map(boundary => (
              <div key={boundary.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full mr-3 ${boundary.active ? 'bg-secondary-600' : 'bg-white/20'}`}>
                      <boundary.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{boundary.name}</p>
                      <p className="text-xs text-white/70">Radius: {boundary.radius}m</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-full ${boundary.active ? 'bg-secondary-600' : 'bg-white/20'}`}
                      onClick={() => toggleBoundary(boundary.id)}
                    >
                      <Shield size={16} className="text-white" />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-red-500/30 hover:bg-red-500/50"
                      onClick={() => deleteBoundary(boundary.id)}
                    >
                      <Trash2 size={16} className="text-white" />
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <MapPin className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Boundary Alerts</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Alert when leaving safe zone</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                Enabled
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Alert when entering safe zone</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                Enabled
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Alert when entering unknown area</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                Enabled
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <NavBar mode="parent" />
    </div>
  );
};

export default SetBoundaries;