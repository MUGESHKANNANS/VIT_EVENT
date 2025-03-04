import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SubscriptionPlan from '../components/SubscriptionPlan';

const SubscriptionPlans: React.FC = () => {
  const navigate = useNavigate();
  
  const plans = [
    {
      id: 1,
      title: 'Basic',
      price: 'Free',
      period: 'month',
      features: [
        'Real-time location tracking',
        'Basic battery monitoring',
        'Trip planning',
        'Find my vehicle feature'
      ],
      isPopular: false
    },
    {
      id: 2,
      title: 'Premium',
      price: '$9.99',
      period: 'month',
      features: [
        'All Basic features',
        'Advanced battery analytics',
        'Family sharing (up to 5 members)',
        'Priority customer support',
        'Maintenance reminders',
        'Unlimited trip history'
      ],
      isPopular: true
    },
    {
      id: 3,
      title: 'Family',
      price: '$14.99',
      period: 'month',
      features: [
        'All Premium features',
        'Family sharing (up to 10 members)',
        'Advanced parental controls',
        'Multiple vehicle support',
        'Premium roadside assistance',
        'Extended warranty coverage'
      ],
      isPopular: false
    }
  ];
  
  return (
    <div className="min-h-screen p-6">
      <div className="flex items-center mb-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-white/10 mr-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} />
        </motion.button>
        <h1 className="text-2xl font-bold text-white">Choose a Plan</h1>
      </div>
      
      <div className="mb-6">
        <p className="text-white/80">
          Select the plan that best fits your needs. All plans include our core features to keep your EV bike connected and secure.
        </p>
      </div>
      
      <div className="space-y-6 relative">
        {plans.map((plan) => (
          <SubscriptionPlan
            key={plan.id}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            features={plan.features}
            isPopular={plan.isPopular}
            onSelect={() => navigate('/payments')}
          />
        ))}
      </div>
      
      <div className="mt-8 bg-white/10 backdrop-blur-md rounded-lg p-4">
        <h3 className="font-semibold mb-2">All plans include:</h3>
        <ul className="space-y-2 text-sm text-white/80">
          <li className="flex items-start">
            <span className="text-secondary-300 mr-2">•</span>
            <span>No long-term contracts, cancel anytime</span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary-300 mr-2">•</span>
            <span>7-day free trial for Premium and Family plans</span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary-300 mr-2">•</span>
            <span>Secure payment processing</span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary-300 mr-2">•</span>
            <span>Regular app updates and new features</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionPlans;