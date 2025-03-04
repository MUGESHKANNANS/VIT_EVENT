import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, MapPin, Star, Battery, Clock, CreditCard, Search } from 'lucide-react';
import NavBar from '../components/NavBar';
import MapComponent from '../components/MapComponent';

interface BatteryStation {
  id: number;
  name: string;
  distance: string;
  rating: number;
  availability: number;
  price: string;
  address: string;
  openHours: string;
}

const Marketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStation, setSelectedStation] = useState<BatteryStation | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingDuration, setBookingDuration] = useState('1');
  
  // Dummy data for battery stations
  const batteryStations: BatteryStation[] = [
    {
      id: 1,
      name: 'EV Power Hub',
      distance: '0.8 km',
      rating: 4.8,
      availability: 5,
      price: '$5.99/hour',
      address: '123 Electric Avenue, Downtown',
      openHours: '8:00 AM - 8:00 PM'
    },
    {
      id: 2,
      name: 'GreenCharge Station',
      distance: '1.2 km',
      rating: 4.5,
      availability: 2,
      price: '$4.99/hour',
      address: '456 Battery Road, Midtown',
      openHours: '24 hours'
    },
    {
      id: 3,
      name: 'PowerSwap Center',
      distance: '2.5 km',
      rating: 4.7,
      availability: 8,
      price: '$6.50/hour',
      address: '789 Energy Street, Uptown',
      openHours: '7:00 AM - 10:00 PM'
    },
    {
      id: 4,
      name: 'QuickCharge Depot',
      distance: '3.1 km',
      rating: 4.2,
      availability: 3,
      price: '$5.50/hour',
      address: '321 Volt Lane, Westside',
      openHours: '9:00 AM - 9:00 PM'
    }
  ];
  
  const filteredStations = batteryStations.filter(station => 
    station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    station.address.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleStationSelect = (station: BatteryStation) => {
    setSelectedStation(station);
    setShowBookingForm(false);
  };
  
  const handleBookNow = () => {
    setShowBookingForm(true);
  };
  
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the booking and redirect to payment
    navigate('/payments');
  };
  
  const navigate = (path: string) => {
    window.location.href = path;
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={14} 
          className={i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'} 
        />
      );
    }
    return stars;
  };
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Battery Marketplace</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <Search size={20} className="text-white/70 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent w-full text-white focus:outline-none"
              placeholder="Search for battery stations..."
            />
          </div>
        </div>
        
        <MapComponent type="charging" />
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Nearby Battery Stations</h2>
        
        <div className="space-y-4">
          {filteredStations.map(station => (
            <motion.div
              key={station.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-white/10 backdrop-blur-md rounded-lg p-4 cursor-pointer border ${
                selectedStation?.id === station.id ? 'border-secondary-400' : 'border-white/10'
              }`}
              onClick={() => handleStationSelect(station)}
            >
              <div className="flex items-start">
                <div className="bg-primary-600 p-2 rounded-full mr-3 mt-1">
                  <Store size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{station.name}</h3>
                    <span className="text-sm text-white/70">{station.distance}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="flex mr-2">
                      {renderStars(station.rating)}
                    </div>
                    <span className="text-sm text-white/70">{station.rating}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex items-center">
                      <Battery size={14} className="mr-1 text-secondary-300" />
                      <span className="text-sm">{station.availability} available</span>
                    </div>
                    <span className="text-sm font-medium text-secondary-300">{station.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {selectedStation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-4"
          >
            <h2 className="text-lg font-semibold mb-3">{selectedStation.name}</h2>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 text-secondary-300 mt-1" />
                <span>{selectedStation.address}</span>
              </div>
              <div className="flex items-start">
                <Clock size={16} className="mr-2 text-secondary-300 mt-1" />
                <span>{selectedStation.openHours}</span>
              </div>
              <div className="flex items-start">
                <Battery size={16} className="mr-2 text-secondary-300 mt-1" />
                <span>{selectedStation.availability} battery stations available</span>
              </div>
              <div className="flex items-start">
                <CreditCard size={16} className="mr-2 text-secondary-300 mt-1" />
                <span>{selectedStation.price}</span>
              </div>
            </div>
            
            {!showBookingForm ? (
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-secondary-600 text-white py-3 rounded-lg"
                onClick={handleBookNow}
              >
                Book Now
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4"
              >
                <h3 className="font-medium mb-3">Booking Details</h3>
                <form onSubmit={handleBookingSubmit}>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm mb-1">Date</label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Time</label>
                      <input
                        type="time"
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Duration (hours)</label>
                      <select
                        value={bookingDuration}
                        onChange={(e) => setBookingDuration(e.target.value)}
                        className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                        required
                      >
                        <option value="1">1 hour</option>
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                        <option value="4">4 hours</option>
                        <option value="8">8 hours</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-white/5 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Rental fee</span>
                      <span>${parseFloat(selectedStation.price.replace('$', '').split('/')[0]) * parseInt(bookingDuration)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Service fee</span>
                      <span>$1.99</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t border-white/10 pt-2 mt-2">
                      <span>Total</span>
                      <span className="text-secondary-300">
                        ${(parseFloat(selectedStation.price.replace('$', '').split('/')[0]) * parseInt(bookingDuration) + 1.99).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="flex-1 bg-secondary-600 text-white py-2 rounded-lg"
                    >
                      Proceed to Payment
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="bg-white/10 text-white py-2 px-4 rounded-lg"
                      onClick={() => setShowBookingForm(false)}
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
      
      <NavBar mode="self" />
    </div>
  );
};

export default Marketplace;