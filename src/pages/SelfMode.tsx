import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Battery, Map, MapPin, Settings, Bell, Shield, Zap, CreditCard, Store } from 'lucide-react';
import NavBar from '../components/NavBar';
import BikeAnimation from '../components/BikeAnimation';

const SelfMode: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Battery Health',
      description: 'Monitor your battery status and health',
      icon: Battery,
      path: '/battery-health'
    },
    {
      title: 'Trip Planner',
      description: 'Plan your route and find charging stations',
      icon: Map,
      path: '/trip-planner'
    },
    {
      title: 'Find My Vehicle',
      description: 'Locate your bike on the map',
      icon: MapPin,
      path: '/find-vehicle'
    },
    {
      title: 'Marketplace',
      description: 'Find and book battery stations for rental',
      icon: Store,
      path: '/marketplace'
    },
    {
      title: 'Performance Stats',
      description: 'View speed, distance, and riding statistics',
      icon: Zap,
      path: '/performance-stats'
    },
    {
      title: 'Maintenance Alerts',
      description: 'Get reminders for service and maintenance',
      icon: Bell,
      path: '/maintenance-alerts'
    },
    {
      title: 'Security Settings',
      description: 'Configure anti-theft and security features',
      icon: Shield,
      path: '/security-settings'
    },
    {
      title: 'Payments',
      description: 'Manage payment methods and transaction history',
      icon: CreditCard,
      path: '/payments'
    },
    {
      title: 'Preferences',
      description: 'Customize your EV bike settings and app preferences',
      icon: Settings,
      path: '/preferences'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Self Mode</h1>
            <p className="text-white/70">Welcome back, Rider</p>
          </div>
          <div className="w-16 h-16">
            <BikeAnimation size={64} />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Battery Status</h2>
              <p className="text-3xl font-bold text-secondary-300">78%</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/70">Estimated Range</p>
              <p className="text-xl font-semibold">42 km</p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-colors"
              onClick={() => navigate(feature.path)}
            >
              <div className="flex items-center">
                <div className="bg-primary-600 p-3 rounded-full mr-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <NavBar mode="self" />
    </div>
  );
};

export default SelfMode;
