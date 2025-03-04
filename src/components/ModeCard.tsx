import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ModeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const ModeCard: React.FC<ModeCardProps> = ({ title, description, icon: Icon, onClick }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-colors shadow-lg border border-white/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-primary-600 p-4 rounded-full mb-4">
          <Icon size={32} className="text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </motion.div>
  );
};

export default ModeCard;