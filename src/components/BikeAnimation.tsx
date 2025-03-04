import React from 'react';
import { motion } from 'framer-motion';
import { Bike } from 'lucide-react';

interface BikeAnimationProps {
  size?: number;
  color?: string;
}

const BikeAnimation: React.FC<BikeAnimationProps> = ({ 
  size = 100, 
  color = "#ffffff" 
}) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          rotate: [0, 0, 10, -10, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Bike size={size} color={color} strokeWidth={1.5} />
      </motion.div>
      
      {/* Electric sparks animation */}
      <motion.div 
        className="absolute top-1/4 right-1/4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatDelay: 0.5
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#f0abfc" stroke="#f0abfc" />
        </svg>
      </motion.div>
    </div>
  );
};

export default BikeAnimation;