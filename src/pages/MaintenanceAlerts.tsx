import React from 'react';
import { motion } from 'framer-motion';
import { Bell, PenTool as Tool, Calendar, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import NavBar from '../components/NavBar';

const MaintenanceAlerts: React.FC = () => {
  // Dummy maintenance alerts data
  const upcomingMaintenance = [
    {
      id: 1,
      title: 'Battery Check-up',
      description: 'Regular 6-month battery inspection',
      dueDate: 'In 2 weeks',
      priority: 'medium',
      icon: Battery
    },
    {
      id: 2,
      title: 'Brake Inspection',
      description: 'Check brake pads and adjust if needed',
      dueDate: 'In 3 weeks',
      priority: 'high',
      icon: AlertTriangle
    },
    {
      id: 3,
      title: 'Tire Replacement',
      description: 'Replace worn tires for optimal performance',
      dueDate: 'In 1 month',
      priority: 'medium',
      icon: Tool
    }
  ];
  
  const completedMaintenance = [
    {
      id: 4,
      title: 'Software Update',
      description: 'Updated to firmware version 2.4.1',
      completedDate: '1 week ago',
      icon: CheckCircle
    },
    {
      id: 5,
      title: 'Chain Lubrication',
      description: 'Applied lubricant to chain and gears',
      completedDate: '3 weeks ago',
      icon: CheckCircle
    }
  ];
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-blue-500';
    }
  };
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Maintenance Alerts</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Bell className="mr-2 text-secondary-300" size={20} />
              <h2 className="text-lg font-semibold">Upcoming Maintenance</h2>
            </div>
            <span className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
              {upcomingMaintenance.length} alerts
            </span>
          </div>
          
          <div className="space-y-4">
            {upcomingMaintenance.map(item => (
              <motion.div 
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-3 ${getPriorityColor(item.priority)}`}>
                    <item.icon size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{item.title}</h3>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                        {item.dueDate}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Completed Maintenance</h2>
          </div>
          
          <div className="space-y-4">
            {completedMaintenance.map(item => (
              <div key={item.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-start">
                  <div className="bg-green-500 p-2 rounded-full mr-3">
                    <item.icon size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{item.title}</h3>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                        {item.completedDate}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Calendar className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Maintenance Schedule</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-white/70" />
                <span>Battery Check-up</span>
              </div>
              <span className="text-secondary-300">Every 6 months</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-white/70" />
                <span>Brake Inspection</span>
              </div>
              <span className="text-secondary-300">Every 3 months</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-white/70" />
                <span>Tire Inspection</span>
              </div>
              <span className="text-secondary-300">Every 2 months</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-white/70" />
                <span>Full Service</span>
              </div>
              <span className="text-secondary-300">Yearly</span>
            </div>
          </div>
        </div>
      </div>
      
      <NavBar mode="self" />
    </div>
  );
};

// Fix for the Battery icon
const Battery = ({ size, className }: { size: number, className: string }) => {
  return <Tool size={size} className={className} />;
};

export default MaintenanceAlerts;