import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Battery, MapPin, Bell, Shield, Clock, Settings, Users, CreditCard } from 'lucide-react';
import NavBar from '../components/NavBar';
import BikeAnimation from '../components/BikeAnimation';

const ParentMode: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Track My Bike',
      description: 'See where your child is in real-time',
      icon: MapPin,
      path: '/track-bike'
    },
    {
      title: 'Battery Health',
      description: 'Monitor battery status and health',
      icon: Battery,
      path: '/battery-health'
    },
    {
      title: 'Set Boundaries',
      description: 'Create safe zones and get alerts when boundaries are crossed',
      icon: Shield,
      path: '/set-boundaries'
    },
    {
      title: 'Speed Alerts',
      description: 'Get notified when speed limits are exceeded',
      icon: Bell,
      path: '/speed-alerts'
    },
    {
      title: 'Schedule Rides',
      description: 'Set allowed riding times and receive notifications',
      icon: Clock,
      path: '/schedule-rides'
    },
    {
      title: 'Family Sharing',
      description: 'Share bike tracking with other family members',
      icon: Users,
      path: '/family-sharing'
    },
    {
      title: 'Payments & Subscription',
      description: 'Manage payment methods and subscription plans',
      icon: CreditCard,
      path: '/payments'
    },
    {
      title: 'Parental Controls',
      description: 'Configure restrictions and safety settings',
      icon: Settings,
      path: '/parental-controls'
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
      <div className="fixed top-0 left-0 right-0 bg-primary-800/80 backdrop-blur-md p-4 z-10 border-b border-primary-600">
        <h1 className="text-xl font-bold text-white text-center">VoltX</h1>
      </div>
      
      <div className="p-6 pt-20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Parent Mode</h1>
            <p className="text-white/70">Monitor your child's bike</p>
          </div>
          <div className="w-16 h-16">
            <BikeAnimation size={64} />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Last Seen</h2>
              <p className="text-white/70">15 minutes ago</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/70">Battery Status</p>
              <p className="text-xl font-semibold text-secondary-300">65%</p>
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
        
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
          <div className="space-y-3">
            <div className="border-b border-white/10 pb-2">
              <p className="font-medium">Trip to School</p>
              <p className="text-sm text-white/70">Today, 8:15 AM - 8:45 AM</p>
            </div>
            <div className="border-b border-white/10 pb-2">
              <p className="font-medium">Trip to Library</p>
              <p className="text-sm text-white/70">Yesterday, 4:30 PM - 5:10 PM</p>
            </div>
            <div>
              <p className="font-medium">Trip to Friend's House</p>
              <p className="text-sm text-white/70">Yesterday, 2:00 PM - 2:25 PM</p>
            </div>
          </div>
        </div>
      </div>
      
      <NavBar mode="parent" />
    </div>
  );
};

export default ParentMode;
