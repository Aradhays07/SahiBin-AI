import { Scan, Recycle, TrendingUp, Leaf, Zap, Award, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { Progress } from './ui/progress';

interface DashboardProps {
  stats: {
    itemsDetected: number;
    recyclable: number;
    recyclingRate: number;
    co2Saved: number;
    energySaved: number;
  };
}

function CountUpNumber({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export function Dashboard({ stats }: DashboardProps) {
  const statCards = [
    {
      icon: Scan,
      number: stats.itemsDetected,
      label: 'Items Detected',
      subtext: 'Total scans performed',
      gradient: 'from-sky-500 to-cyan-500',
      bgGradient: 'from-sky-50 to-cyan-50',
      darkBgGradient: 'from-sky-950/50 to-cyan-950/50',
      iconBg: 'bg-gradient-to-br from-sky-500 to-cyan-500',
      suffix: ''
    },
    {
      icon: Recycle,
      number: stats.recyclable,
      label: 'Recyclable Items',
      subtext: 'Properly sorted',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      darkBgGradient: 'from-emerald-950/50 to-teal-950/50',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      suffix: ''
    },
    {
      icon: TrendingUp,
      number: stats.recyclingRate,
      label: 'Recycling Rate',
      subtext: 'Your accuracy score',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      darkBgGradient: 'from-purple-950/50 to-pink-950/50',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      suffix: '%'
    },
    {
      icon: Leaf,
      number: stats.co2Saved,
      label: 'CO₂ Saved',
      subtext: 'Environmental impact',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      darkBgGradient: 'from-green-950/50 to-emerald-950/50',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
      suffix: ' kg'
    },
    {
      icon: Zap,
      number: stats.energySaved,
      label: 'Energy Saved',
      subtext: 'Power equivalent',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      darkBgGradient: 'from-amber-950/50 to-orange-950/50',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
      suffix: ' kWh'
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300/10 dark:bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-50 to-cyan-50 dark:from-sky-950/50 dark:to-cyan-950/50 rounded-full border border-sky-200/50 dark:border-sky-500/20 mb-4">
            <Award className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="text-[14px] text-sky-700 dark:text-sky-400">Track Your Impact</span>
          </div>
          
          <h2 className="text-[40px] mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Your Environmental Impact
          </h2>
          
          <p className="text-[18px] text-slate-600 dark:text-slate-400 max-w-[600px] mx-auto">
            Every scan makes a difference. Track your contribution to a cleaner planet.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full bg-gradient-to-br ${stat.bgGradient} dark:${stat.darkBgGradient} backdrop-blur-sm rounded-[20px] p-8 border border-white/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${stat.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Number */}
                  <div className={`text-[40px] mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    <CountUpNumber target={stat.number} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-slate-900 dark:text-white mb-1">
                    {stat.label}
                  </p>

                  {/* Subtext */}
                  <p className="text-[13px] text-slate-600 dark:text-slate-400">
                    {stat.subtext}
                  </p>

                  {/* Progress Bar for Recycling Rate */}
                  {stat.label === 'Recycling Rate' && (
                    <div className="mt-4">
                      <Progress value={stat.number} className="h-2" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Comparison Card */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-[20px] p-6 border border-white/50 dark:border-slate-700/50 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-slate-900 dark:text-white">Trees Planted Equivalent</h4>
              <Leaf className="w-5 h-5 text-emerald-500" />
            </div>
            <p className="text-[32px] bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-1">
              {Math.floor(stats.co2Saved * 0.05)}
            </p>
            <p className="text-[14px] text-slate-600 dark:text-slate-400">
              Based on your CO₂ savings
            </p>
          </div>

          {/* Achievement Badge */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 backdrop-blur-xl rounded-[20px] p-6 border border-amber-500/30 dark:border-amber-500/30 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-slate-900 dark:text-white">Current Streak</h4>
              <Award className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-[32px] bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-1">
              {stats.itemsDetected > 0 ? '1 Day' : '0 Days'}
            </p>
            <p className="text-[14px] text-slate-600 dark:text-slate-400">
              Keep scanning daily!
            </p>
          </div>

          {/* Share Card */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 rounded-[20px] p-6 shadow-xl shadow-sky-500/30 text-white text-left transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h4>Share Your Impact</h4>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-[14px] text-sky-100">
              Show your friends how you're making a difference
            </p>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
