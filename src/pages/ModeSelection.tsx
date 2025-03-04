import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';
import ModeCard from '../components/ModeCard';

const ModeSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-2 text-center text-white">Welcome to VoltX</h1>
        <p className="text-center mb-8 text-white/80">Please select your mode</p>
        
        <div className="grid grid-cols-1 gap-6">
          <ModeCard
            title="Self Mode"
            description="Monitor your bike's battery, plan trips, and find your vehicle"
            icon={User}
            onClick={() => navigate('/self-mode')}
          />
          
          <ModeCard
            title="Parent Mode"
            description="Track your child's bike, monitor battery health, and ensure safety"
            icon={Users}
            onClick={() => navigate('/parent-mode')}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ModeSelection;
