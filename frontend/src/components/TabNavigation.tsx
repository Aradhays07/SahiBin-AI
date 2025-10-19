import { Search, AlertTriangle, BarChart3, MapPin, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: 'detection', label: 'Detection Details', icon: Search },
    { id: 'disposal', label: 'Disposal Guide', icon: AlertTriangle },
    { id: 'analytics', label: 'Analytics & Insights', icon: BarChart3 },
    { id: 'centers', label: 'Collection Centers', icon: MapPin },
    { id: 'impact', label: 'Environmental Impact', icon: Leaf }
  ];

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 sticky top-0 z-40">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  relative flex items-center gap-2 px-6 py-4 whitespace-nowrap transition-all duration-300
                  ${isActive 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className={isActive ? 'font-semibold' : 'font-medium'}>
                  {tab.label}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-blue-600"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
