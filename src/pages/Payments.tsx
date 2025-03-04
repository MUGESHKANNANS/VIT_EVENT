import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Plus, Wallet, Receipt, Clock, ChevronRight, DollarSign } from 'lucide-react';
import NavBar from '../components/NavBar';
import PaymentCard from '../components/PaymentCard';
import TransactionItem from '../components/TransactionItem';
import { useLocation } from 'react-router-dom';

const Payments: React.FC = () => {
  const location = useLocation();
  const isParentMode = location.pathname.includes('parent');
  
  const [activeTab, setActiveTab] = useState<'payment' | 'subscription' | 'history'>('payment');
  const [showAddCard, setShowAddCard] = useState(false);
  
  // Dummy payment methods
  const paymentMethods = [
    { id: 1, type: 'visa' as const, last4: '4242', expiry: '04/25', isDefault: true },
    { id: 2, type: 'mastercard' as const, last4: '5555', expiry: '09/24', isDefault: false },
    { id: 3, type: 'paypal' as const, last4: 'user@example.com', expiry: '', isDefault: false }
  ];
  
  // Dummy transactions
  const transactions = [
    { 
      id: 1, 
      type: 'subscription' as const, 
      amount: '$9.99', 
      date: 'Today, 10:30 AM', 
      description: 'Monthly Premium Plan' 
    },
    { 
      id: 2, 
      type: 'charge' as const, 
      amount: '$25.00', 
      date: 'Yesterday, 3:45 PM', 
      description: 'Battery Replacement Service' 
    },
    { 
      id: 3, 
      type: 'refund' as const, 
      amount: '$5.00', 
      date: '3 days ago, 11:20 AM', 
      description: 'Partial Refund - Accessories' 
    },
    { 
      id: 4, 
      type: 'charge' as const, 
      amount: '$12.50', 
      date: 'Last week, 2:15 PM', 
      description: 'Bike Maintenance' 
    }
  ];
  
  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the card details
    alert('Card added successfully!');
    setShowAddCard(false);
  };
  
  return (
    <div className="min-h-screen pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-white">Payments</h1>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg text-center cursor-pointer ${
              activeTab === 'payment' 
                ? 'bg-secondary-600 text-white' 
                : 'bg-white/10 text-white/70'
            }`}
            onClick={() => setActiveTab('payment')}
          >
            <CreditCard size={20} className="mx-auto mb-1" />
            <span className="text-sm">Payment</span>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg text-center cursor-pointer ${
              activeTab === 'subscription' 
                ? 'bg-secondary-600 text-white' 
                : 'bg-white/10 text-white/70'
            }`}
            onClick={() => setActiveTab('subscription')}
          >
            <Wallet size={20} className="mx-auto mb-1" />
            <span className="text-sm">Subscription</span>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg text-center cursor-pointer ${
              activeTab === 'history' 
                ? 'bg-secondary-600 text-white' 
                : 'bg-white/10 text-white/70'
            }`}
            onClick={() => setActiveTab('history')}
          >
            <Receipt size={20} className="mx-auto mb-1" />
            <span className="text-sm">History</span>
          </motion.div>
        </div>
        
        {activeTab === 'payment' && (
          <>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <CreditCard className="mr-2 text-secondary-300" size={20} />
                  <h2 className="text-lg font-semibold">Payment Methods</h2>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary-600 text-white p-2 rounded-full"
                  onClick={() => setShowAddCard(!showAddCard)}
                >
                  <Plus size={20} />
                </motion.button>
              </div>
              
              {showAddCard && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 rounded-lg p-4 mb-4"
                >
                  <form onSubmit={handleAddCard}>
                    <div className="mb-3">
                      <label className="block text-sm mb-1">Card Number</label>
                      <input
                        type="text"
                        className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-sm mb-1">Expiry Date</label>
                        <input
                          type="text"
                          className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">CVC</label>
                        <input
                          type="text"
                          className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="block text-sm mb-1">Cardholder Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/10 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="flex-1 bg-secondary-600 text-white py-2 rounded-lg"
                      >
                        Add Card
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="bg-white/10 text-white py-2 px-4 rounded-lg"
                        onClick={() => setShowAddCard(false)}
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
              
              <div className="space-y-3">
                {paymentMethods.map(method => (
                  <PaymentCard
                    key={method.id}
                    type={method.type}
                    last4={method.last4}
                    expiry={method.expiry}
                    isDefault={method.isDefault}
                    onClick={() => {}}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <DollarSign className="mr-2 text-secondary-300" size={20} />
                  <h2 className="text-lg font-semibold">Billing Address</h2>
                </div>
                <ChevronRight size={20} className="text-white/50" />
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-white/70">123 Electric Avenue</p>
                <p className="text-sm text-white/70">San Francisco, CA 94107</p>
                <p className="text-sm text-white/70">United States</p>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'subscription' && (
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
            <div className="flex items-center mb-4">
              <Wallet className="mr-2 text-secondary-300" size={20} />
              <h2 className="text-lg font-semibold">Current Plan</h2>
            </div>
            
            <div className="bg-secondary-600/30 rounded-lg p-4 mb-6 border border-secondary-500/50">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-xl">Premium Plan</h3>
                  <p className="text-white/70">Billed monthly</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">$9.99</p>
                  <p className="text-xs text-white/70">Next billing: June 15, 2025</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <h4 className="font-medium mb-2">Features included:</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-secondary-300 mr-2">•</span>
                    <span>Real-time tracking and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-300 mr-2">•</span>
                    <span>Advanced battery analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-300 mr-2">•</span>
                    <span>Family sharing (up to 5 members)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-300 mr-2">•</span>
                    <span>Priority customer support</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex space-x-2 mt-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-white/10 text-white py-2 rounded-lg"
                >
                  Change Plan
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white py-2 px-4 rounded-lg"
                >
                  Cancel
                </motion.button>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Clock className="mr-2 text-secondary-300" size={20} />
              <h2 className="text-lg font-semibold">Billing History</h2>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span>May 15, 2025</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span>April 15, 2025</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>March 15, 2025</span>
                <span>$9.99</span>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'history' && (
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
            <div className="flex items-center mb-4">
              <Receipt className="mr-2 text-secondary-300" size={20} />
              <h2 className="text-lg font-semibold">Transaction History</h2>
            </div>
            
            <div className="space-y-1">
              {transactions.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  type={transaction.type}
                  amount={transaction.amount}
                  date={transaction.date}
                  description={transaction.description}
                />
              ))}
            </div>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-white/10 text-white py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              View All Transactions
            </motion.button>
          </div>
        )}
      </div>
      
      <NavBar mode={isParentMode ? 'parent' : 'self'} />
    </div>
  );
};

export default Payments;