import { TreePine, Zap, TrendingDown, Droplet, Lightbulb, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export function EnvironmentalImpactPage() {
  const projectionData = [
    { period: 'Daily', water: 15, energy: 1.9, co2: 2.8 },
    { period: 'Weekly', water: 105, energy: 13.3, co2: 19.6 },
    { period: 'Monthly', water: 450, energy: 57, co2: 84 },
    { period: 'Yearly', water: 5475, energy: 694, co2: 1022 }
  ];

  const impactBreakdown = [
    { category: 'CO₂ Reduction', value: 0.85 },
    { category: 'Energy Savings', value: 0.65 },
    { category: 'Direct Savings', value: 0.45 }
  ];

  const sustainabilityTips = [
    {
      icon: '♻️',
      title: 'Reduce at Source',
      priority: 'High',
      priorityColor: 'bg-red-500',
      description: 'Choose products with minimal packaging to reduce waste before it starts',
      iconColor: 'from-emerald-500 to-teal-500'
    },
    {
      icon: '♻️',
      title: 'Proper Recycling',
      priority: 'High',
      priorityColor: 'bg-red-500',
      description: 'Clean containers thoroughly before recycling to ensure material quality',
      iconColor: 'from-sky-500 to-cyan-500'
    },
    {
      icon: '🏡',
      title: 'Home Composting',
      priority: 'Medium',
      priorityColor: 'bg-amber-500',
      description: 'Start composting organic waste at home to create nutrient-rich soil',
      iconColor: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      priority: 'Education',
      priorityColor: 'bg-blue-500',
      description: 'Remember: Every recycled aluminum can saves enough energy to run a TV for 3 hours',
      iconColor: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📚',
      title: 'Share Knowledge',
      priority: 'Medium',
      priorityColor: 'bg-amber-500',
      description: 'Educate friends and family about proper waste sorting to multiply your impact',
      iconColor: 'from-orange-500 to-red-500'
    },
    {
      icon: '🔄',
      title: 'Circular Economy',
      priority: 'High',
      priorityColor: 'bg-red-500',
      description: 'Support businesses that embrace circular economy principles and sustainable practices',
      iconColor: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="py-8 px-6">
      <div className="max-w-[1400px] mx-auto space-y-6">
        {/* Top Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Trees Saved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-[16px] shadow-lg p-6 border border-emerald-200/50 dark:border-emerald-500/20 relative overflow-hidden"
          >
            <TreePine className="absolute top-6 right-6 w-8 h-8 text-emerald-400 opacity-50" />
            <p className="text-[40px] text-emerald-900 dark:text-emerald-300 mb-1">
              0.140
            </p>
            <p className="text-[12px] uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
              Trees Saved
            </p>
          </motion.div>

          {/* Energy Saved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 rounded-[16px] shadow-lg p-6 border border-amber-200/50 dark:border-amber-500/20 relative overflow-hidden"
          >
            <Zap className="absolute top-6 right-6 w-8 h-8 text-amber-400 opacity-50" />
            <p className="text-[40px] text-amber-900 dark:text-amber-300 mb-1">
              1.9
            </p>
            <p className="text-[12px] uppercase tracking-wide text-amber-700 dark:text-amber-400 mb-1">
              Energy Saved
            </p>
            <p className="text-[14px] text-amber-600 dark:text-amber-400">
              kWh
            </p>
          </motion.div>

          {/* CO₂ Reduced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-950/30 dark:to-cyan-950/30 rounded-[16px] shadow-lg p-6 border border-sky-200/50 dark:border-sky-500/20 relative overflow-hidden"
          >
            <TrendingDown className="absolute top-6 right-6 w-8 h-8 text-sky-400 opacity-50" />
            <p className="text-[40px] text-sky-900 dark:text-sky-300 mb-1">
              2.8
            </p>
            <p className="text-[12px] uppercase tracking-wide text-sky-700 dark:text-sky-400 mb-1">
              CO₂ Reduced
            </p>
            <p className="text-[14px] text-sky-600 dark:text-sky-400">
              kg
            </p>
          </motion.div>

          {/* Water Saved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-[16px] shadow-lg p-6 border border-cyan-200/50 dark:border-cyan-500/20 relative overflow-hidden"
          >
            <Droplet className="absolute top-6 right-6 w-8 h-8 text-cyan-400 opacity-50" />
            <p className="text-[40px] text-cyan-900 dark:text-cyan-300 mb-1">
              15
            </p>
            <p className="text-[12px] uppercase tracking-wide text-cyan-700 dark:text-cyan-400 mb-1">
              Water Saved
            </p>
            <p className="text-[14px] text-cyan-600 dark:text-cyan-400">
              L
            </p>
          </motion.div>
        </div>

        {/* Impact Projections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-slate-800 rounded-[20px] shadow-lg p-8"
        >
          <h3 className="text-[24px] text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span>🌱</span> Impact Projections
          </h3>

          {/* Top Banner */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-[16px] p-6 mb-8 border border-orange-200/50 dark:border-orange-500/20">
            <p className="text-[16px] text-orange-900 dark:text-orange-300 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              If You Process Similar Items Daily:
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-[24px] text-orange-900 dark:text-orange-300">
                  51.1
                </p>
                <p className="text-[13px] text-orange-700 dark:text-orange-400">
                  trees saved yearly
                </p>
              </div>
              <div>
                <p className="text-[24px] text-orange-900 dark:text-orange-300">
                  694
                </p>
                <p className="text-[13px] text-orange-700 dark:text-orange-400">
                  kWh energy saved yearly
                </p>
              </div>
              <div>
                <p className="text-[24px] text-orange-900 dark:text-orange-300">
                  1022
                </p>
                <p className="text-[13px] text-orange-700 dark:text-orange-400">
                  kg CO₂ reduced yearly
                </p>
              </div>
              <div>
                <p className="text-[24px] text-orange-900 dark:text-orange-300">
                  5475
                </p>
                <p className="text-[13px] text-orange-700 dark:text-orange-400">
                  L water saved yearly
                </p>
              </div>
            </div>
          </div>

          {/* Projection Chart */}
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={projectionData}>
                <defs>
                  <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#14B8A6" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="period" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="water"
                  stroke="#06B6D4"
                  fillOpacity={1}
                  fill="url(#colorWater)"
                  name="Water (L)"
                />
                <Area
                  type="monotone"
                  dataKey="energy"
                  stroke="#14B8A6"
                  fillOpacity={1}
                  fill="url(#colorEnergy)"
                  name="Energy (kWh)"
                />
                <Area
                  type="monotone"
                  dataKey="co2"
                  stroke="#0EA5E9"
                  fillOpacity={1}
                  fill="url(#colorCO2)"
                  name="CO₂ (kg)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Environmental Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-900 dark:bg-slate-950 rounded-[20px] shadow-lg p-8"
        >
          <h3 className="text-[20px] text-white mb-6">
            Environmental Impact Breakdown
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={impactBreakdown} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" domain={[0, 1]} stroke="#94a3b8" />
                <YAxis dataKey="category" type="category" stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="value" fill="url(#barGradient)" radius={[0, 8, 8, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Advanced Sustainability Tips */}
        <div className="space-y-6">
          <h3 className="text-[28px] text-slate-900 dark:text-white flex items-center gap-2">
            📚 Advanced Sustainability Tips
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {sustainabilityTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-[16px] shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tip.iconColor} flex items-center justify-center text-[24px] shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {tip.icon}
                  </div>
                  <span className={`px-3 py-1 ${tip.priorityColor} text-white text-[12px] rounded-full`}>
                    {tip.priority}
                  </span>
                </div>
                <h4 className="text-[18px] text-slate-900 dark:text-white mb-2">
                  {tip.title}
                </h4>
                <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Impact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-[20px] shadow-2xl p-12 text-center"
        >
          <div className="max-w-[800px] mx-auto">
            <div className="text-[64px] mb-4">🌍</div>
            <h3 className="text-[32px] text-white mb-4">
              Global Impact
            </h3>
            <p className="text-[18px] text-white/90 leading-relaxed">
              Remember: Every recycled aluminum can saves enough energy to run a TV for 3 hours and stays in circulation indefinitely!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
