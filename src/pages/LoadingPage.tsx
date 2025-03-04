import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BikeAnimation from '../components/BikeAnimation';

const LoadingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      navigate('/mode-selection');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-900 to-primary-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-white">EV Bike Companion</h1>
        
        <div className="mb-8">
          <BikeAnimation size={120} />
        </div>
        
        <div className="relative w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-secondary-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
        
        <p className="mt-4 text-white/80">Powering up your ride...</p>
      </motion.div>
    </div>
  );
};

export default LoadingPage;