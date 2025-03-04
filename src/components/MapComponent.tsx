import React from 'react';

interface MapComponentProps {
  type: 'trip' | 'charging' | 'tracking';
}

const MapComponent: React.FC<MapComponentProps> = ({ type }) => {
  // In a real implementation, this would integrate with Google Maps API
  // For now, we'll create a placeholder with styling that matches our theme
  
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div className="text-primary-800 text-center p-4">
          <p className="text-lg font-semibold mb-2">
            {type === 'trip' && 'Trip Planning Map'}
            {type === 'charging' && 'Nearby Charging Stations'}
            {type === 'tracking' && 'Vehicle Tracking Map'}
          </p>
          <p className="text-sm text-primary-600">
            Google Maps integration would appear here.
            {type === 'trip' && ' Enter your destination to plan your route.'}
            {type === 'charging' && ' Showing nearby charging stations.'}
            {type === 'tracking' && ' Tracking your vehicle in real-time.'}
          </p>
        </div>
      </div>
      
      {/* Map overlay with purple styling */}
      <div className="absolute inset-0 bg-primary-900/20 pointer-events-none"></div>
      
      {/* Fake map elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-500 rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-primary-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary-500 rounded-full"></div>
        <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-primary-500 rounded-full"></div>
        
        {/* Roads */}
        <div className="absolute top-1/4 left-1/4 w-[200px] h-1 bg-primary-300 rotate-45"></div>
        <div className="absolute top-1/3 left-1/2 w-[150px] h-1 bg-primary-300 -rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-[100px] h-1 bg-primary-300 rotate-90"></div>
      </div>
    </div>
  );
};

export default MapComponent;