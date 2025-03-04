import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Clock, MessageSquare } from 'lucide-react';
import NavBar from '../components/NavBar';
import MapComponent from '../components/MapComponent';

const TrackBike: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message) {
      // In a real app, this would send the message to the child's device
      alert(`Message sent: ${message}`);
      setMessage('');
      setShowMessage(false);
    }
  };
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Track My Bike</h1>
        
        <MapComponent type="tracking" />
        
        <div className="mt-6 grid grid-cols-1 gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center"
            onClick={() => window.open('https://maps.google.com/?q=37.7749,-122.4194', '_blank')}
          >
            <Navigation size={20} className="mb-2 text-secondary-300" />
            <span className="text-sm">Navigate</span>
          </motion.button>
          
{/*           <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center"
            onClick={() => window.open('tel:+1234567890', '_blank')}
          >
            <Phone size={20} className="mb-2 text-secondary-300" />
            <span className="text-sm">Call</span>
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center"
            onClick={() => setShowMessage(!showMessage)}
          >
            <MessageSquare size={20} className="mb-2 text-secondary-300" />
            <span className="text-sm">Message</span>
          </motion.button> */}
        </div>
        
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 bg-white/10 backdrop-blur-md rounded-lg p-4"
          >
            <form onSubmit={handleSendMessage}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/20 rounded-lg p-3 mb-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary-400"
                placeholder="Type your message..."
                required
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-secondary-600 text-white py-2 rounded-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        )}
        
        <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Current Status</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-secondary-300" />
                <span className="text-white/70">Current Location</span>
              </div>
              <span>School</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-secondary-300" />
                <span className="text-white/70">Last Updated</span>
              </div>
              <span>5 minutes ago</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Today's Journey</h2>
          
          <div className="space-y-3">
            <div className="flex items-start border-b border-white/10 pb-2">
              <div className="bg-primary-600 p-2 rounded-full mr-3 mt-1">
                <MapPin size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium">School</p>
                  <p className="text-sm text-white/70">3:45 PM</p>
                </div>
                <p className="text-sm text-white/70">Current location</p>
              </div>
            </div>
            
            <div className="flex items-start border-b border-white/10 pb-2">
              <div className="bg-primary-600 p-2 rounded-full mr-3 mt-1">
                <MapPin size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium">Library</p>
                  <p className="text-sm text-white/70">1:30 PM</p>
                </div>
                <p className="text-sm text-white/70">Spent 2 hours</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-600 p-2 rounded-full mr-3 mt-1">
                <MapPin size={16} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium">Home</p>
                  <p className="text-sm text-white/70">8:15 AM</p>
                </div>
                <p className="text-sm text-white/70">Started journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <NavBar mode="parent" />
    </div>
  );
};

export default TrackBike;
