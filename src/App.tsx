import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import ModeSelection from './pages/ModeSelection';
import SelfMode from './pages/SelfMode';
import ParentMode from './pages/ParentMode';
import BatteryHealth from './pages/BatteryHealth';
import TripPlanner from './pages/TripPlanner';
import FindVehicle from './pages/FindVehicle';
import TrackBike from './pages/TrackBike';
import PerformanceStats from './pages/PerformanceStats';
import MaintenanceAlerts from './pages/MaintenanceAlerts';
import SecuritySettings from './pages/SecuritySettings';
import Preferences from './pages/Preferences';
import SetBoundaries from './pages/SetBoundaries';
import SpeedAlerts from './pages/SpeedAlerts';
import ScheduleRides from './pages/ScheduleRides';
import FamilySharing from './pages/FamilySharing';
import ParentalControls from './pages/ParentalControls';
import Payments from './pages/Payments';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/mode-selection" element={<ModeSelection />} />
          <Route path="/self-mode" element={<SelfMode />} />
          <Route path="/parent-mode" element={<ParentMode />} />
          <Route path="/battery-health" element={<BatteryHealth />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route path="/find-vehicle" element={<FindVehicle />} />
          <Route path="/track-bike" element={<TrackBike />} />
          <Route path="/performance-stats" element={<PerformanceStats />} />
          <Route path="/maintenance-alerts" element={<MaintenanceAlerts />} />
          <Route path="/security-settings" element={<SecuritySettings />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/set-boundaries" element={<SetBoundaries />} />
          <Route path="/speed-alerts" element={<SpeedAlerts />} />
          <Route path="/schedule-rides" element={<ScheduleRides />} />
          <Route path="/family-sharing" element={<FamilySharing />} />
          <Route path="/parental-controls" element={<ParentalControls />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
