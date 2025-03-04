import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Battery, Map, MapPin, ArrowLeft, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavBarProps {
  mode: 'self' | 'parent';
}

const NavBar: React.FC<NavBarProps> = ({ mode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-800/80 backdrop-blur-md p-4 border-t border-primary-600">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-around items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center ${isActive('/mode-selection') ? 'text-secondary-300' : 'text-white/70'}`}
            onClick={() => navigate('/mode-selection')}
          >
            <ArrowLeft size={24} />
            <span className="text-xs mt-1">Back</span>
          </motion.button>
          
          {mode === 'self' && (
            <>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${isActive('/self-mode') ? 'text-secondary-300' : 'text-white/70'}`}
                onClick={() => navigate('/self-mode')}
              >
                <Home size={24} />
                <span className="text-xs mt-1">Home</span>
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${isActive('/battery-health') ? 'text-secondary-300' : 'text-white/70'}`}
                onClick={() => navigate('/battery-health')}
              >
                <Battery size={24} />
                <span className="text-xs mt-1">Battery</span>
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${isActive('/trip-planner') ? 'text-secondary-300' : 'text-white/70'}`}
                onClick={() => navigate('/trip-planner')}
              >
                <Map size={24} />
                <span className="text-xs mt-1">Trip</span>
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${isActive('/find-vehicle') ? 'text-secondary-300' : 'text-white/70'}`}
                onClick={() => navigate('/find-vehicle')}
              >
                <MapPin size={24} />
                <span className="text-xs mt-1">Find</span>
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${isActive('/payments') ? 'text-secondary-300' : 'text-white/70'}`}
                onClick={() => navigate('/payments')}
              >
                <CreditCard size={24} />
                <span className="text-xs mt-1">Pay</span>
              </motion.button>
            </>
          )}
          
          {mode === 'parent' && (
            <>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${isActive('/parent-mode') ? 'text-secondary-300' : 'text-white/70'}`}
                onClick={() => navigate('/parent-mode')}
              >
                <Home size={24} />
                <span className="text-xs mt-1">Home</span>
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${isActive('/battery-health') ? 'text-secondary-300' : 'text-white/70'}`}
                onClick={() => navigate('/battery-health')}
              >
                <Battery size={24} />
                <span className="text-xs mt-1">Battery</span>
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${isActive('/track-bike') ? 'text-secondary-300' : 'text-white/70'}`}
                onClick={() => navigate('/track-bike')}
              >
                <MapPin size={24} />
                <span className="text-xs mt-1">Track</span>
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${isActive('/payments') ? 'text-secondary-300' : 'text-white/70'}`}
                onClick={() => navigate('/payments')}
              >
                <CreditCard size={24} />
                <span className="text-xs mt-1">Pay</span>
              </motion.button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;