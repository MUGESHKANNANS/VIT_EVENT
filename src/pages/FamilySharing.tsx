import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Mail, Trash2, CheckCircle, X, User } from 'lucide-react';
import NavBar from '../components/NavBar';

const FamilySharing: React.FC = () => {
  const [familyMembers, setFamilyMembers] = useState([
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Parent', status: 'active' },
    { id: 2, name: 'Michael Johnson', email: 'michael@example.com', role: 'Parent', status: 'active' },
    { id: 3, name: 'Grandma Johnson', email: 'grandma@example.com', role: 'Viewer', status: 'pending' }
  ]);
  
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('Viewer');
  
  const handleInviteMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMemberName && newMemberEmail) {
      const newMember = {
        id: Date.now(),
        name: newMemberName,
        email: newMemberEmail,
        role: newMemberRole,
        status: 'pending'
      };
      setFamilyMembers([...familyMembers, newMember]);
      setNewMemberName('');
      setNewMemberEmail('');
      setNewMemberRole('Viewer');
      setShowInviteForm(false);
    }
  };
  
  const removeMember = (id: number) => {
    setFamilyMembers(familyMembers.filter(member => member.id !== id));
  };
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Family Sharing</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Users className="mr-2 text-secondary-300" size={20} />
              <h2 className="text-lg font-semibold">Family Members</h2>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-600 text-white p-2 rounded-full"
              onClick={() => setShowInviteForm(!showInviteForm)}
            >
              <UserPlus size={20} />
            </motion.button>
          </div>
          
          {showInviteForm && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 rounded-lg p-4 mb-4"
            >
              <form onSubmit={handleInviteMember}>
                <div className="mb-3">
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                    className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                    placeholder="Family member's name"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    value={newMemberEmail}
                    onChange={(e) => setNewMemberEmail(e.target.value)}
                    className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm mb-1">Role</label>
                  <select
                    value={newMemberRole}
                    onChange={(e) => setNewMemberRole(e.target.value)}
                    className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  >
                    <option value="Parent">Parent (Full Access)</option>
                    <option value="Guardian">Guardian (Limited Control)</option>
                    <option value="Viewer">Viewer (View Only)</option>
                  </select>
                </div>
                
                <div className="flex space-x-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="flex-1 bg-secondary-600 text-white py-2 rounded-lg"
                  >
                    Send Invite
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="bg-white/10 text-white py-2 px-4 rounded-lg"
                    onClick={() => setShowInviteForm(false)}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
          
          <div className="space-y-3">
            {familyMembers.map(member => (
              <div key={member.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-primary-600 p-2 rounded-full mr-3">
                      <User size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <div className="flex items-center text-xs text-white/70">
                        <Mail size={12} className="mr-1" />
                        <span>{member.email}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className={`text-xs px-2 py-1 rounded-full mr-2 ${
                      member.status === 'active' 
                        ? 'bg-green-500/30 text-green-200' 
                        : 'bg-yellow-500/30 text-yellow-200'
                    }`}>
                      {member.status === 'active' ? 'Active' : 'Pending'}
                    </span>
                    <span className="text-xs bg-primary-600/50 px-2 py-1 rounded-full mr-2">
                      {member.role}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-red-500/30 hover:bg-red-500/50"
                      onClick={() => removeMember(member.id)}
                    >
                      <Trash2 size={16} className="text-white" />
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Pending Invitations</h2>
          </div>
          
          {familyMembers.filter(member => member.status === 'pending').length > 0 ? (
            <div className="space-y-3">
              {familyMembers
                .filter(member => member.status === 'pending')
                .map(member => (
                  <div key={member.id} className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                    <div>
                      <p>{member.name}</p>
                      <p className="text-xs text-white/70">{member.email}</p>
                    </div>
                    <div className="flex space-x-2">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="p-1 rounded-full bg-white/10"
                      >
                        <Mail size={16} className="text-white" />
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="p-1 rounded-full bg-red-500/30"
                        onClick={() => removeMember(member.id)}
                      >
                        <X size={16} className="text-white" />
                      </motion.button>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-center text-white/70 py-2">No pending invitations</p>
          )}
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Users className="mr-2 text-secondary-300" size={20} />
            <h2 className="text-lg font-semibold">Sharing Permissions</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Location Tracking</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                All Members
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Battery Status</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                All Members
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Ride History</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                Parents Only
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Settings Modification</span>
              <div className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                Parents Only
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <NavBar mode="parent" />
    </div>
  );
};

export default FamilySharing;