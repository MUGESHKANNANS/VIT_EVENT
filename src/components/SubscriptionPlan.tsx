import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

interface SubscriptionPlanProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({
  title,
  price,
  period,
  features,
  isPopular = false,
  onSelect
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`rounded-xl p-6 cursor-pointer ${
        isPopular 
          ? 'bg-secondary-600 text-white border-2 border-secondary-300' 
          : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
      }`}
      onClick={onSelect}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary-300 text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      
      <div className="relative">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-end mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm ml-1 text-white/70">/{period}</span>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={16} className={`mr-2 mt-1 ${isPopular ? 'text-secondary-300' : 'text-secondary-500'}`} />
              <span className={isPopular ? 'text-white' : 'text-white/80'}>{feature}</span>
            </li>
          ))}
        </ul>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 rounded-lg flex items-center justify-center ${
            isPopular 
              ? 'bg-white text-secondary-600' 
              : 'bg-secondary-600 text-white'
          }`}
        >
          <Zap size={18} className="mr-2" />
          Select Plan
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SubscriptionPlan;