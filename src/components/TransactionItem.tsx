import React from 'react';
import { Calendar, CreditCard, ArrowDown, ArrowUp } from 'lucide-react';

interface TransactionItemProps {
  type: 'charge' | 'refund' | 'subscription';
  amount: string;
  date: string;
  description: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  type,
  amount,
  date,
  description
}) => {
  const getIcon = () => {
    switch (type) {
      case 'charge':
        return <ArrowUp size={16} className="text-red-400" />;
      case 'refund':
        return <ArrowDown size={16} className="text-green-400" />;
      case 'subscription':
        return <CreditCard size={16} className="text-secondary-300" />;
      default:
        return <Calendar size={16} className="text-white" />;
    }
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-white/10">
      <div className="flex items-center">
        <div className="bg-primary-600/50 p-2 rounded-full mr-3">
          {getIcon()}
        </div>
        <div>
          <p className="font-medium">{description}</p>
          <p className="text-xs text-white/70">{date}</p>
        </div>
      </div>
      <div className={`font-semibold ${type === 'refund' ? 'text-green-400' : 'text-white'}`}>
        {type === 'refund' ? '+' : '-'}{amount}
      </div>
    </div>
  );
};

export default TransactionItem;