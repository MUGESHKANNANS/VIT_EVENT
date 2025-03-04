import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Plus, Edit2, Trash2, CheckCircle } from 'lucide-react';
import NavBar from '../components/NavBar';

const ScheduleRides: React.FC = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      name: 'School Days',
      days: [true, true, true, true, true, false, false],
      timeRanges: [
        { id: 101, start: '07:30', end: '08:30' },
        { id: 102, start: '15:00', end: '16:00' }
      ],
      active: true
    },
    {
      id: 2,
      name: 'Weekend Activities',
      days: [false, false, false, false, false, true, true],
      timeRanges: [
        { id: 201, start: '10:00', end: '18:00' }
      ],
      active: true
    }
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newScheduleName, setNewScheduleName] = useState('');
  const [newScheduleDays, setNewScheduleDays] = useState([false, false, false, false, false, false, false]);
  const [newScheduleTimeRanges, setNewScheduleTimeRanges] = useState([
    { id: Date.now(), start: '08:00', end: '17:00' }
  ]);
  
  const toggleDay = (index: number) => {
    const updatedDays = [...newScheduleDays];
    updatedDays[index] = !updatedDays[index];
    setNewScheduleDays(updatedDays);
  };
  
  const addTimeRange = () => {
    setNewScheduleTimeRanges([
      ...newScheduleTimeRanges,
      { id: Date.now(), start: '08:00', end: '17:00' }
    ]);
  };
  
  const updateTimeRange = (id: number, field: 'start' | 'end', value: string) => {
    setNewScheduleTimeRanges(
      newScheduleTimeRanges.map(range => 
        range.id === id ? { ...range, [field]: value } : range
      )
    );
  };
  
  const removeTimeRange = (id: number) => {
    if (newScheduleTimeRanges.length > 1) {
      setNewScheduleTimeRanges(
        newScheduleTimeRanges.filter(range => range.id !== id)
      );
    }
  };
  
  const handleAddSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (newScheduleName && newScheduleDays.some(day => day) && newScheduleTimeRanges.length > 0) {
      const newSchedule = {
        id: Date.now(),
        name: newScheduleName,
        days: newScheduleDays,
        timeRanges: newScheduleTimeRanges,
        active: true
      };
      setSchedules([...schedules, newSchedule]);
      setNewScheduleName('');
      setNewScheduleDays([false, false, false, false, false, false, false]);
      setNewScheduleTimeRanges([{ id: Date.now(), start: '08:00', end: '17:00' }]);
      setShowAddForm(false);
    }
  };
  
  const toggleSchedule = (id: number) => {
    setSchedules(schedules.map(schedule => 
      schedule.id === id ? { ...schedule, active: !schedule.active } : schedule
    ));
  };
  
  const deleteSchedule = (id: number) => {
    setSchedules(schedules.filter(schedule => schedule.id !== id));
  };
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Schedule Rides</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Calendar className="mr-2 text-secondary-300" size={20} />
              <h2 className="text-lg font-semibold">Ride Schedules</h2>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-600 text-white p-2 rounded-full"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              <Plus size={20} />
            </motion.button>
          </div>
          
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 rounded-lg p-4 mb-4"
            >
              <form onSubmit={handleAddSchedule}>
                <div className="mb-3">
                  <label className="block text-sm mb-1">Schedule Name</label>
                  <input
                    type="text"
                    value={newScheduleName}
                    onChange={(e) => setNewScheduleName(e.target.value)}
                    className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                    placeholder="e.g. School Days, Weekend Activities"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm mb-1">Days of Week</label>
                  <div className="flex justify-between">
                    {daysOfWeek.map((day, index) => (
                      <motion.div
                        key={day}
                        whileTap={{ scale: 0.95 }}
                        className={`w-9 h-9 flex items-center justify-center rounded-full cursor-pointer ${
                          newScheduleDays[index] ? 'bg-secondary-600' : 'bg-white/10'
                        }`}
                        onClick={() => toggleDay(index)}
                      >
                        {day}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm">Time Ranges</label>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      className="text-xs bg-white/10 px-2 py-1 rounded-full"
                      onClick={addTimeRange}
                    >
                      Add Time
                    </motion.button>
                  </div>
                  
                  {newScheduleTimeRanges.map((range, index) => (
                    <div key={range.id} className="flex items-center space-x-2 mb-2">
                      <input
                        type="time"
                        value={range.start}
                        onChange={(e) => updateTimeRange(range.id, 'start', e.target.value)}
                        className="bg-white/10 rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                      />
                      <span>to</span>
                      <input
                        type="time"
                        value={range.end}
                        onChange={(e) => updateTimeRange(range.id, 'end', e.target.value)}
                        className="bg-white/10 rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                      />
                      {newScheduleTimeRanges.length > 1 && (
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full bg-red-500/30 hover:bg-red-500/50"
                          onClick={() => removeTimeRange(range.id)}
                        >
                          <Trash2 size={16} className="text-white" />
                        </motion.button>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="flex-1 bg-secondary-600 text-white py-2 rounded-lg"
                  >
                    Add Schedule
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="bg-white/10 text-white py-2 px-4 rounded-lg"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
          
          {schedules.length > 0 ? (
            <div className="space-y-4">
              {schedules.map(schedule => (
                <div key={schedule.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-semibold">{schedule.name}</h3>
                        <div className={`ml-2 w-2 h-2 rounded-full ${schedule.active ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      </div>
                      
                      <div className="flex mt-2 mb-3">
                        {daysOfWeek.map((day, index) => (
                          <div
                            key={day}
                            className={`w-7 h-7 flex items-center justify-center text-xs rounded-full mr-1 ${
                              schedule.days[index] ? 'bg-secondary-600' : 'bg-white/10 text-white/50'
                            }`}
                          >
                            {day[0]}
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-1">
                        {schedule.timeRanges.map((range, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <Clock size={14} className="mr-1 text-white/70" />
                            <span>{range.start} - {range.end}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className={`p-2 rounded-full ${schedule.active ? 'bg-secondary-600' : 'bg-white/20'}`}
                        onClick={() => toggleSchedule(schedule.id)}
                      >
                        <CheckCircle size={16} className="text-white" />
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-full bg-white/20"
                      >
                        <Edit2 size={16} className="text-white" />
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-full bg-red-500/30 hover:bg-red-500/50"
                        onClick={() => deleteSchedule(schedule.id)}
                      >
                        <Trash2 size={16} className="text-white" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <Calendar size={48} className="text-white/30 mb-3" />
              <p className="text-center text-white/70">No schedules created yet</p>
            </div>
          )}
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Bell className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Schedule Notifications</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Notify when ride starts</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                Enabled
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Notify when ride ends</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                Enabled
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Notify for unscheduled rides</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                Enabled
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <NavBar mode="parent" />
    </div>
  );
};

// Fix for the Bell icon
const Bell = ({ size, className }: { size: number, className: string }) => {
  return <Clock size={size} className={className} />;
};

export default ScheduleRides;