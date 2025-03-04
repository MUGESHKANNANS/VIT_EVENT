import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle } from 'lucide-react';

interface PaymentCardProps {
  type: 'visa' | 'mastercard' | 'amex' | 'paypal';
  last4: string;
  expiry: string;
  isDefault?: boolean;
  onClick: () => void;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ 
  type, 
  last4, 
  expiry, 
  isDefault = false,
  onClick 
}) => {
  const getCardIcon = () => {
    switch (type) {
      case 'visa':
        return '💳 Visa';
      case 'mastercard':
        return '💳 Mastercard';
      case 'amex':
        return '💳 Amex';
      case 'paypal':
        return '💸 PayPal';
      default:
        return '💳';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/10 backdrop-blur-md rounded-lg p-4 cursor-pointer border border-white/20"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-primary-600 p-2 rounded-full mr-3">
            <CreditCard size={20} className="text-white" />
          </div>
          <div>
            <div className="flex items-center">
              <p className="font-medium">{getCardIcon()}</p>
              {isDefault && (
                <span className="ml-2 text-xs bg-secondary-600 text-white px-2 py-0.5 rounded-full">
                  Default
                </span>
              )}
            </div>
            <p className="text-sm text-white/70">
              {type !== 'paypal' ? `**** **** **** ${last4}` : `${last4}`}
            </p>
            {type !== 'paypal' && (
              <p className="text-xs text-white/50">Expires: {expiry}</p>
            )}
          </div>
        </div>
        {isDefault && <CheckCircle size={18} className="text-secondary-300" />}
      </div>
    </motion.div>
  );
};

export default PaymentCard;